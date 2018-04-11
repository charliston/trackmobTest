import React, { Component } from 'react';
import { graphql, createFragmentContainer, QueryRenderer } from 'react-relay';
import environment from '../Enviroment';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import { ScrollView, Button, View, DropDownMenu, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';
import { withNavigation, NavigationActions } from "react-navigation";
import DeletePostMutation from '../mutations/DeleteProductMutation';

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
    if(this.props.navigation.state.params) {
      const product = this.props.navigation.state.params;
      this.setState({ product });
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

  _handlePost = () => {};

  changePrice(value) {
    value = value.match(/^\d+(\.\d{1,2})?$/);
    let price = '';
    if(value) {
      price = value.input;
    }
    this.setState({product: {price, ...this.state.product}})
  }

  selectedOption(option) {
    option = option || this.state.product.category;
    const _selectedOptionIndex = this.deepIndex(optionsWithEmptyOption, option);

    let selectedOption = optionsWithEmptyOption[0];
    if(_selectedOptionIndex !== -1) {
      selectedOption = optionsWithEmptyOption[_selectedOptionIndex];
    }
    this.setState({selectedOption});
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
              onChangeText={title => this.setState({product: {title, ...this.state.product}})}
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
              onChangeText={description => this.setState({product: {description, ...this.state.product}})}
              value={this.state.product.description.split('<br/>').join('\n')}
              multiline={true}
              numberOfLines={4}
              style={{height: 78}}
            />
            <Caption>PRICE <Text style={{color: 'red'}}>*</Text></Caption>
            <TextInput
              placeholder="Price"
              onChangeText={value => this.changePrice(value)}
              value={this.state.product.price + ''}
              keyboardType={'numeric'}
            />
            <Caption>IMAGE URL</Caption>
            <TextInput
              placeholder="Image URL"
              onChangeText={imageUrl => this.setState({product: {imageUrl, ...this.state.product}})}
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