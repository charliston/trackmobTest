import React, { Component } from 'react';
import { graphql, createFragmentContainer, QueryRenderer } from 'react-relay';
import environment from '../Enviroment';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import { ScrollView, Button, View, DropDownMenu, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';
import { withNavigation, NavigationActions } from "react-navigation";
import DeletePostMutation from '../mutations/DeleteProductMutation';
import CreatePostMutation from '../mutations/CreateProductMutation';
import UpdatePostMutation from '../mutations/UpdateProductMutation';

let optionsWithEmptyOption = [{ id: '', title: 'Select'}];

class ProductForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: optionsWithEmptyOption[0],
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
    const { query } = this.props;
    if(query.node) {
      // edit product
      this.setState({ product: query.node });
      this.props.navigation.setParams({ deleteProduct: this.deleteProduct });
    }
  }

  componentDidMount() {
    this.mapEdgesToArray(this.props.viewer.allCategories);
    this.selectedOption();
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
    optionsWithEmptyOption = [{ id: '', title: 'Select'}];
    categories.edges.map(edge => {
      optionsWithEmptyOption.push(edge.node);
    });
  };

  _handlePost = () => {
    // validate
    const msg = [];
    const { product } = this.state;
    if(product.title === '') {
      msg.push('Title');
    }

    if(product.category.id === '') {
      msg.push('Category');
    }

    product.price = this.validationPrice(product.price);
    if(isNaN(product.price)) {
      msg.push('Price');
    }

    if(msg.length > 0) {
      alert('Please, check this fields: '+ msg.join(', '));
      return;
    }

    // `no image` image
    product.imageUrl = product.imageUrl || 'https://www.hotelcubo.com/wp-content/plugins/wd-instagram-feed/images/missing.png';

    // nl2br
    product.description = product.description.split('\n').join('<br/>');

    if(product.id) {
      // update row
      UpdatePostMutation(product, this.props.viewer.id, () => this.props.navigation.goBack(null));
    } else {
      // new row
      CreatePostMutation(product, this.props.viewer.id, () => this.props.navigation.goBack(null));
    }
    //DeletePostMutation(id, this.props.viewer.id, () => this.props.navigation.dispatch(resetAction));
  };

  validationPrice(value) {
    value = value+"".match(/^\d+(\.\d{1,2})?$/);
    return parseFloat(value);
  }

  selectedOption(option) {
    option = option || this.state.product.category;
    const _selectedOptionIndex = this.deepIndex(optionsWithEmptyOption, option);

    let selectedOption = optionsWithEmptyOption[0];
    if(_selectedOptionIndex !== -1) {
      selectedOption = optionsWithEmptyOption[_selectedOptionIndex];
    }
    this.setState({selectedOption, product: { ...this.state.product, category:option, }});
  }

  render() {
    const { selectedOption } = this.state;


    return (
      <ScrollView styleName="vertical collapsed">
        <View style={styles.stage}>
          <FormGroup styleName="stretch">
            <Caption>TITLE <Text style={{color: 'red'}}>*</Text></Caption>
            <TextInput
              placeholder="Title"
              onChangeText={title => this.setState({ product: { ...this.state.product, title, }})}
              value={this.state.product.title}
            />
            <Caption>CATEGORY <Text style={{color: 'red'}}>*</Text></Caption>
            <DropDownMenu
              options={optionsWithEmptyOption}
              selectedOption={selectedOption}
              onOptionSelected={category => this.selectedOption(category)}
              titleProperty={"title"}
              valueProperty={"id"}
            />
            <Caption>DESCRIPTION</Caption>
            <TextInput
              placeholder="Description"
              onChangeText={description => this.setState({ product: { ...this.state.product, description, }})}
              value={this.state.product.description.split('<br/>').join('\n')}
              multiline={true}
              numberOfLines={4}
              style={{height: 78}}
            />
            <Caption>PRICE <Text style={{color: 'red'}}>*</Text></Caption>
            <TextInput
              placeholder="Price"
              onChangeText={price => this.setState({ product: { ...this.state.product, price, }})}
              value={this.state.product.price + ''}
              keyboardType={'numeric'}
            />
            <Caption>IMAGE URL</Caption>
            <TextInput
              placeholder="Image URL"
              onChangeText={imageUrl => this.setState({ product: { ...this.state.product, imageUrl, }})}
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
fragment ProductForm_query on Query {
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
  const id = navigation.state.params? navigation.state.params.id: 0;
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProductFormQuery($id: ID!) {
          ...ProductForm_query
          viewer {
            ...ProductForm_viewer
          }
        }
      `}
      variables={{id}}
      render={({error, props}) => {
        if(error) {
          console.error(error);
        }
        else if(props) {
          return <ProductFormFragmentContainer query={props} viewer={props.viewer} />;
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