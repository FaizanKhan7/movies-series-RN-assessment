import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function CustomButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#f08989',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
