import React, { Component } from 'react';
import { Dimensions, ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import environment from '../Enviroment';
import Loading from '../components/Loading';
import { createPaginationContainer, graphql, QueryRenderer } from 'react-relay';
import { type ProductList_viewer } from './__generated__/ProductList_viewer.graphql';
import ItemCard from '../components/ItemCard';
import ItemFeatured from '../components/ItemFeatured';

import { GridRow, Screen } from '@shoutem/ui';

type Props = {
  viewer: ProductDetail_viewer,
};

type State = {
  isFetchingTop: boolean,
};

class ProductList extends Component<any, Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingTop: false,
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: (Dimensions.get('screen').height >= Dimensions.get('screen').width) ? 'portrait' : 'landscape',
      });
    });
    console.log(this.props)
  }


  onRefresh = () => {
    console.log(this.props);
    const { allProducts } = this.props.viewer;

    if (this.props.relay.isLoading()) {
      return;
    }

    this.setState({
      isFetchingTop: true,
    });

    this.props.relay.refetchConnection(allProducts.edges.length, (err) => {
      this.setState({
        isFetchingTop: false,
      });
    });
  };

  onEndReached = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    // fetch more 2
    this.props.relay.loadMore(2, (err) => {
      console.log('loadMore: ', err);
    });
  };

  renderItem = ({ item, index }) => {
    if (index === 0) {
      const { node } = item[0];
      return (
        <ItemFeatured onPress={() => this.goToProductDetail(node)} product={node} key={node.id} />
      );
    }

    const cellViews = item.map((product) => {
      const { node } = product;
      return (
        <ItemCard onPress={() => this.goToProductDetail(node)} product={node} key={node.id} />
      );
    });
    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  };

  goToProductDetail = product => {
    this.props.navigation.navigate('ProductDetail', { ...product });
  };

  render() {
    const { allProducts } = this.props.viewer;

    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(allProducts.edges, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 2;
      }
      return 1;
    });

    return (
      <Screen>
        <FlatList
          data={groupedData}
          renderItem={this.renderItem}
          keyExtractor={(item, i) => i.toString()}
          onEndReached={this.onEndReached}
          onRefresh={this.onRefresh}
          refreshing={this.state.isFetchingTop}
          ListFooterComponent={this.renderFooter}
        />
      </Screen>
    );
  }
}

const ProductListPaginationContainer = createPaginationContainer(withNavigation(ProductList),
  {
    viewer: graphql`
      fragment ProductList_viewer on Viewer {
        allProducts(
          first: $count
          after: $cursor
        ) @connection(key: "ProductList_allProducts") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              title
              price
              category {
                title
              }
              imageUrl
            }
          }
        }
      } 
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allProducts;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    variables: { cursor: null },
    query: graphql`
      query ProductListPaginationQuery (
        $count: Int!,
        $cursor: String
      ) {
        viewer {
          ...ProductList_viewer
        }
      }
    `,
  },
);

const ProductListQueryRenderer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      query ProductListQuery(
        $count: Int!,
        $cursor: String
      ) {
        viewer {
          ...ProductList_viewer
        }
      }
    `}
      variables={{cursor: null, count: 1}}
      render={({error, props}) => {
        if (props) {
          return <ProductListPaginationContainer viewer={props.viewer} />;
        } else {
          return (
            <Loading />
          )
        }
      }}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default ProductListQueryRenderer;