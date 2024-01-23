import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Input() {
  return (
    <View style={styles.container}>
      <Text>Input</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
