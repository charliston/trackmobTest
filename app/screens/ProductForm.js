import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';

import { ScrollView, Button, View, DropDownMenu, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';
const options = [
  { id: '7', title: 'Lifestyle', },
  { id: '8', title: 'Food', },
  { id: 'c1', title: 'Nature', },
];

const mock = {
  category: { id: "c1", title: "Nature" }, description: "Product description 1", id: "p1", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 1"
};

const optionsWithEmptyOption = [{ id: '', title: 'Select'}, ...options];

export default class ProductForm extends Component {
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
    alert(`This item ${id} will be deleted!`);
  };

  componentWillMount() {
    if(this.props.navigation.state.params) {
      this.state.product = this.props.navigation.state.params;
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


  render() {
    // const { selectedOption } = this.state;

    const _selectedOptionIndex = this.deepIndex(optionsWithEmptyOption, this.state.product.category);
    let selectedOption = optionsWithEmptyOption[0];
    if(_selectedOptionIndex !== -1) {
      selectedOption = optionsWithEmptyOption[_selectedOptionIndex];
    }



    return (
      <ScrollView styleName="vertical collapsed">
        <View style={styles.stage}>
          <FormGroup styleName="stretch">
            <TextInput
              placeholder="Title"
              onChangeText={value => this.updateProductField('title', value)}
            />
            <DropDownMenu
              options={optionsWithEmptyOption}
              selectedOption={selectedOption}
              onOptionSelected={option => this.updateProductField('categoryId', option)}
              titleProperty={"title"}
              valueProperty={"id"}
            />
            <TextInput
              placeholder="Description"
              onChangeText={value => this.updateProductField('title', value)}
            />
            <TextInput
              placeholder="Price"
              onChangeText={value => this.updateProductField('price', value)}
            />
            <TextInput
              placeholder="Image URL"
              onChangeText={value => this.updateProductField('imageUrl', value)}
            />
          </FormGroup>
          <Button styleName="secondary full-width">
            <Icon size={15} color={'#FFF'} name="save" style={{marginRight:5}} />
            <Text>SAVE</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}


function Stage({ title, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.stage}>
        {children}
      </View>
    </View>
  );
}

Stage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const styles =  {
  container: {
    marginVertical: 24,
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    color: '#444f6c',
    margin: 8,
  },
  stage: {

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f6f7',
  },
};