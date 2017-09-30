import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import FormGroup from '../components/FormGroup';
import formItems from '../constants/FormItems';

class NomalView extends Component {
  renderItem = (item) => (
    <FormGroup {...item} />
  );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <FlatList data={formItems} renderItem={this.renderItem} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 25,
  },
  formContainer: {
    backgroundColor: 'white',
  },
});

export default NomalView;
