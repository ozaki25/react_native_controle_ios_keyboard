import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const FormGroup = ({ item }) => (
  <View style={styles.formGroup}>
    <Text>{item.key}</Text>
    <TextInput style={styles.formControl} keyboardType="numeric"  />
  </View>
);

class SpecialView extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.formContainer}>
            <FormGroup item={{key: 1}} />
            <FormGroup item={{key: 2}} />
            <FormGroup item={{key: 3}} />
            <FormGroup item={{key: 4}} />
            <FormGroup item={{key: 5}} />
            <FormGroup item={{key: 6}} />
            <FormGroup item={{key: 7}} />
            <FormGroup item={{key: 8}} />
            <FormGroup item={{key: 9}} />
            <FormGroup item={{key: 10}} />
            <FormGroup item={{key: 11}} />
            <FormGroup item={{key: 12}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  formGroup: {
    padding: 10,
  },
  formControl: {
    borderBottomWidth: 1,
  },
});

export default SpecialView;
