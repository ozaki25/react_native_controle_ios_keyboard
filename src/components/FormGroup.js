import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  formGroup: {
    padding: 10,
  },
  formControl: {
    borderBottomWidth: 1,
  },
});


const FormGroup = ({ item }) => (
  <View style={styles.formGroup}>
    <Text>{item.key}</Text>
    <TextInput style={styles.formControl} keyboardType="numeric"  />
  </View>
);

export default FormGroup;
