import React, { Component } from 'react';
import { View } from 'react-native';

const mock = {
    category: { id: "c1", title: "Category 1" }, description: "Product description 1", id: "p1", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 1"
  };

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        category: { id: "", title: "" },
        description: "",
        id: "",
        imageUrl: "",
        price: "",
        title: ""
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


  render() {
    return (
      <View />
    );
  }
}


export default ProductForm