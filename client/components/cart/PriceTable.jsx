import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PriceTable = ({price,title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{price}</Text>

    </View>
  )
}

export default PriceTable

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        alignItems: "center"
    }
})