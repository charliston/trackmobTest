import React from 'react';
import PropTypes from 'prop-types';
import { Switch, View, ScrollView, DropDownMenu, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';


export default function Inputs(props) {
  let switchOn = true;
  return (
    <ScrollView styleName="vertical collapsed">
      <Stage title="TextInput / Full width">
        <TextInput
          styleName="stretch"
          placeholder="Username or Email"
        />
      </Stage>
      <Stage title="TextInput  /  Full width secure entry">
        <TextInput
          styleName="stretch"
          placeholder="Password"
          secureTextEntry
        />
      </Stage>
      <Stage title="Input with label">
        <FormGroup styleName="stretch">
          <Caption>NAME</Caption>
          <TextInput
            placeholder="Username or Email"
          />
        </FormGroup>
      </Stage>
      <Stage title="Switch">
        <Switch
          onValueChange={value => {switchOn = value}}
          value={switchOn}
        />
      </Stage>
    </ScrollView>
  );
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
