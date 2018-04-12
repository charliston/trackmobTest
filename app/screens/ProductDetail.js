import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { graphql, createFragmentContainer, QueryRenderer } from 'react-relay';
import environment from '../Enviroment';
import Loading from '../components/Loading';
import { type ProductDetail_query } from './__generated__/ProductDetail_query.graphql';
import { Screen, ImageBackground, Tile, Title, Overlay, Subtitle, ScrollView, View, Text } from '@shoutem/ui';
import ItemFeatured from '../components/ItemFeatured';

type Props = {
  query: ProductDetail_query,
};

export class ProductDetail extends Component<void, Props, any> {
  constructor(props) {
    super(props);
    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: (Dimensions.get('screen').height >= Dimensions.get('screen').width) ? 'portrait' : 'landscape',
      });
    });
  }
  render() {
    const { node } = this.props.query;

    return (
      <Screen>
        <ScrollView>
          <ItemFeatured onPress={() => {}} product={node}/>
          <View style={{margin:10}}>
            <Text>
              {node.description.split('<br/>').join('\n')}
            </Text>
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const ProductDetailFragmentContainer = createFragmentContainer(ProductDetail, graphql`
fragment ProductDetail_query on Query {
  node(id: $id) {
    ... on Product {
      id
      title
      price
      description
      imageUrl
      category {
        title
        id
      }
    }
  }
}
`,
);

const ProductDetailQueryRenderer = ({ navigation }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
      query ProductDetailQuery($id: ID!) {
          ...ProductDetail_query
      }
    `}
      variables={{id: navigation.state.params.id}}
      render={({error, props}) => {
        if(error) {
          console.error(error);
        }
        else if(props) {
          return <ProductDetailFragmentContainer query={props} />;
        }
        return (
          <Loading />
        )
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

export default ProductDetailQueryRenderer;
