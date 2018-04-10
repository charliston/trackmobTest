import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ScrollView, Button, View, DropDownMenu, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';
const options = [
  {
    name: 'Lifestyle',
    id: '7',
  },
  {
    name: 'Food',
    id: '8',
  },
  {
    name: 'Nature',
    id: '9',
  },

];

const mock = {
  category: { id: "c1", title: "Category 1" }, description: "Product description 1", id: "p1", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 1"
};

const emptyOption = { id: '', name: 'Select'};
const optionsWithEmptyOption = [emptyOption, ...options];

export default class ProductForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: options[0],
      selectedOptionForFormGroupDropdown: emptyOption,
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

  render() {
    const { selectedOption, selectedOptionForFormGroupDropdown } = this.state;

    return (
      <ScrollView styleName="vertical collapsed">
        <View style={styles.stage}>
          <FormGroup styleName="stretch">
            <Caption>title</Caption>
            <TextInput
              placeholder="Username or Email"
              // onChangeText={}
            />
          </FormGroup>
          <FormGroup styleName="stretch">
            <Caption>CATEGORY</Caption>
            <DropDownMenu
              options={options}
              selectedOption={selectedOption}
              onOptionSelected={option => this.setState({ selectedOption: option })}
              titleProperty={"name"}
              valueProperty={"id"}
            />
          </FormGroup>
          <FormGroup styleName="stretch">
            <Caption>description</Caption>
            <TextInput
              placeholder="Username or Email"
              // onChangeText={}
            />
          </FormGroup>
          <FormGroup styleName="stretch">
            <Caption>price</Caption>
            <TextInput
              placeholder="Username or Email"
              // onChangeText={}
            />
          </FormGroup>
          <FormGroup styleName="stretch">
            <Caption>imageUrl</Caption>
            <TextInput
              placeholder="Username or Email"
              // onChangeText={}
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