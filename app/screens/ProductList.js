import React, { Component } from 'react';
import { Text, Screen } from '@shoutem/ui';

const mockList = [
  {
    category: { id: "c1", title: "Category 1" }, description: "Product description 1", id: "p1", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 1"
  },
  {
    category: { id: "c1", title: "Category 1" }, description: "Product description 2", id: "p2", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 2"
  },
  {
    category: { id: "c1", title: "Category 1" }, description: "Product description 3", id: "p3", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 3"
  },
  {
    category: { id: "c1", title: "Category 1" }, description: "Product description 4", id: "p4", imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg", price: "999.99", title: "Product title 4"
  },
];

class ProductList extends Component{
  render() {
    return (
      <Screen>
        <Text>
          ProductList
        </Text>
      </Screen>
    )
  }
}

export default ProductList;