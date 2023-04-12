import React from "react"
import { StyleSheet, View, Text } from "react-native"

function Greeting() {
  return (
    <View>
      <Text style={styles.textStyle1}>Greeting srarted with react native!</Text>
      <Text style={styles.textStyle2}>My name is Santhosh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
});

export default Greeting