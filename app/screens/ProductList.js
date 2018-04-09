import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Screen, ListView, GridRow } from '@shoutem/ui';

import ItemCard from '../components/ItemCard';
import ItemFeatured from '../components/ItemFeatured';

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
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: (Dimensions.get('screen').height >= Dimensions.get('screen').width) ? 'portrait' : 'landscape',
      });
    });
  }
  goToDetail = product => {
    this.props.navigation.navigate('ProductDetail', { ...product });
  };
  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    if (index === '0') {
      return (
        <ItemFeatured onPress={() => this.goToDetail(rowData[0])} product={rowData[0]} key={rowData[0].id} />
      );
    }

    const cellViews = rowData.map((item, id) => {
      return (
        <ItemCard onPress={() => this.goToDetail(item)} product={item} key={item.id}/>
      );
    });

    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }

  render() {
    const AllProducts = mockList;

    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(AllProducts, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 2;
      }
      return 1;
    });

    return (
      <Screen>
        <ListView
          data={groupedData}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}

export default ProductList;