import React, { Component } from 'react';
import { graphql, createFragmentContainer, QueryRenderer } from 'react-relay';
import environment from '../Enviroment';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import { ScrollView, Button, View, DropDownMenu, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';
import { withNavigation, NavigationActions } from "react-navigation";
import DeletePostMutation from '../mutations/DeleteProductMutation';

const options = [
  { id: '7', title: 'Lifestyle', },
  { id: '8', title: 'Food', },
  { id: 'c1', title: 'Nature', },
];

const mock = {
  category: { id: "c1", title: "Nature" }, description: "Product description 1", id: "p1", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 1"
};

const optionsWithEmptyOption = [{ id: '', title: 'Select'}];

class ProductForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: {
        id: 'c1',
        title: 'Nature',
      },
      product: {
        category: { id: '', title: '' },
        description: '',
        id: '',
        imageUrl: '',
        price: '',
        title: ''
      }
    };
  }

  deleteProduct = (id) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "Products"
        })
      ]
    });
    DeletePostMutation(id, this.props.viewer.id, () => this.props.navigation.dispatch(resetAction));
  };

  componentWillMount() {
    if(this.props.navigation.state.params) {
      const product = this.props.navigation.state.params;
      this.setState({ product });
      this.props.navigation.setParams({ deleteProduct: this.deleteProduct });
    }
  }

  updateProductField(field, value) {
    const { product } = this.state;
    product[field] = value;
    this.setState({ product });
  }

  deepIndex = (array, item) => {
    let result = -1;
    _.some(array, function (value, index) {
      if (_.isEqual(value, item)) {
        result = index;
        return true;
      }
    });
    return result;
  };

  mapEdgesToArray = (categories) => {
    categories.edges.map(edge => {
      optionsWithEmptyOption.push(edge.node);
    });
  };

  _handlePost = () => {};

  render() {
    console.log(this.props);
    this.mapEdgesToArray(this.props.viewer.allCategories);

    const _selectedOptionIndex = this.deepIndex(optionsWithEmptyOption, this.state.product.category);
    let selectedOption = optionsWithEmptyOption[0];
    if(_selectedOptionIndex !== -1) {
      selectedOption = optionsWithEmptyOption[_selectedOptionIndex];
    }

    return (
      <ScrollView styleName="vertical collapsed">
        <View style={styles.stage}>
          <FormGroup styleName="stretch">
            <Caption>TITLE</Caption>
            <TextInput
              placeholder="Title"
              onChangeText={value => this.updateProductField('title', value)}
              value={this.state.product.title}
            />
            <Caption>CATEGORY</Caption>
            <DropDownMenu
              options={optionsWithEmptyOption}
              selectedOption={selectedOption}
              onOptionSelected={option => this.updateProductField('categoryId', option)}
              titleProperty={"title"}
              valueProperty={"id"}
            />
            <Caption>DESCRIPTION</Caption>
            <TextInput
              placeholder="Description"
              onChangeText={value => this.updateProductField('description', value)}
              value={this.state.product.description}
            />
            <Caption>PRICE</Caption>
            <TextInput
              placeholder="Price"
              onChangeText={value => this.updateProductField('price', value)}
              value={(this.state.product.price !== '')? this.state.product.price.toFixed(2): ''}
            />
            <Caption>IMAGE URL</Caption>
            <TextInput
              placeholder="Image URL"
              onChangeText={value => this.updateProductField('imageUrl', value)}
              value={this.state.product.imageUrl}
            />
          </FormGroup>
          <Button styleName="secondary full-width" onPress={this._handlePost}>
            <Icon size={15} color={'#FFF'} name="save" style={{marginRight:5}} />
            <Text>SAVE</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const ProductFormFragmentContainer = createFragmentContainer(withNavigation(ProductForm), graphql`
fragment ProductForm_viewer on Viewer {
  id
  allCategories {
    edges {
      node {
        id
        title
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
        query ProductFormQuery {
          viewer {
            ...ProductForm_viewer
          }
        }
      `}
      render={({error, props}) => {
        if(error) {
          console.error(error);
        }
        else if(props) {
          console.log(props.viewer);
          return <ProductFormFragmentContainer viewer={props.viewer} />;
        }
        return (
          <Loading />
        )
      }}
    />
  )
};

const styles =  {
  stage: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f6f7',
  },
};

export default ProductDetailQueryRenderer;