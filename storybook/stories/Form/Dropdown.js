import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, ScrollView, DropDownMenu, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';

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

const emptyOption = { id: '', name: 'Select'};
const optionsWithEmptyOption = [emptyOption, ...options];

export default class DropDownMenus extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: options[0],
      selectedOptionForFormGroupDropdown: emptyOption,
    };
  }

  render() {
    const { selectedOption, selectedOptionForFormGroupDropdown } = this.state;

    return (
      <ScrollView styleName="vertical collapsed">
        <Stage title="Dropdown">
          <DropDownMenu
            options={options}
            selectedOption={selectedOption}
            onOptionSelected={option => this.setState({ selectedOption: option })}
            titleProperty={"name"}
            valueProperty={"id"}
          />
        </Stage>
        <Stage title="Dropdown (horizontal)">
          <DropDownMenu
            styleName="horizontal"
            options={options}
            selectedOption={selectedOption}
            onOptionSelected={option => this.setState({ selectedOption: option })}
            titleProperty={"name"}
            valueProperty={"id"}
          />
        </Stage>
        <Stage title="Dropdown (large)">
          <DropDownMenu
            styleName="large"
            options={options}
            selectedOption={selectedOption}
            onOptionSelected={option => this.setState({ selectedOption: option })}
            titleProperty={"name"}
            valueProperty={"id"}
          />
        </Stage>
        <Stage title="Dropdown (inside a form group)">
          <FormGroup styleName="stretch">
            <Caption>CATEGORY</Caption>
            <DropDownMenu
              styleName={selectedOptionForFormGroupDropdown.id ? '' : 'empty'}
              options={optionsWithEmptyOption}
              selectedOption={selectedOptionForFormGroupDropdown}
              onOptionSelected={option =>
                this.setState({ selectedOptionForFormGroupDropdown: option })}
              titleProperty={"name"}
              valueProperty={"id"}
            />
          </FormGroup>
        </Stage>
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
    paddingVertical: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f6f7',
  },
};
