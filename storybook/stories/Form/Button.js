import React from 'react';
import PropTypes from 'prop-types';
import { Switch, View, ScrollView, Button, Caption, FormGroup, Text, TextInput, Screen } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Buttons() {
  return (
    <ScrollView styleName="vertical collapsed">
      <Stage title="Button / Text only / Light">
        <Button>
          <Text>CHECK IN HERE</Text>
        </Button>
      </Stage>

      <Stage title="Button / Text only / Dark">
        <Button styleName="secondary">
          <Text>CHECK IN HERE</Text>
        </Button>
      </Stage>

      <Stage title="Button / Icon + Text / Light">
        <Button>
          <Icon name="lock" />
          <Text>LOCKED</Text>
        </Button>
      </Stage>

      <Stage title="Button / Icon + Text / Dark">
        <Button styleName="secondary">
          <Icon name="print" color={'#fff'} />
          <Text>PRINT</Text>
        </Button>
      </Stage>

      <Stage title="Button / Fixed size">
        <View styleName="horizontal flexible">
          <Button styleName="confirmation">
            <Text>REMOVE</Text>
          </Button>

          <Button styleName="confirmation secondary">
            <Text>UPDATE</Text>
          </Button>
        </View>
      </Stage>

      <Stage title="Button / Full width">
        <Button styleName="full-width">
          <Text>SEE ALL COMMENTS</Text>
        </Button>
      </Stage>

      <Stage title="Button / Navbar">
        <Button styleName="textual">
          <Icon name="star" size={30} />
        </Button>
      </Stage>

      <Stage title="Button / Vertical / Icon + Text">
        <Button styleName="stacked textual">
          <Icon name="zoom-in" />
          <Text>Text description</Text>
        </Button>
      </Stage>

      <Stage title="Button / Full width - Normal">
        <View styleName="horizontal flexible">
          <Button styleName="full-width muted">
            <Icon name="favorite" color={'#c7c7c7'} />
            <Text>LIKE</Text>
          </Button>
          <Button styleName="full-width muted">
            <Icon name="comment" color={'#c7c7c7'} />
            <Text>COMMENT</Text>
          </Button>
        </View>
      </Stage>

      <Stage title="Button / Full width - Active (Feed)">
        <View styleName="horizontal flexible">
          <Button styleName="full-width">
            <Icon name="favorite" />
            <Text>LIKE</Text>
          </Button>
          <Button styleName="full-width">
            <Icon name="comment" />
            <Text>COMMENT</Text>
          </Button>
        </View>
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
