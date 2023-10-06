import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CartItem = ({ item }) => {
  const [qty,setQty] = useState(1)
    const handleAddQty = () =>{
        if (qty === 10) return alert("You can't add more than 10 quantity");
        setQty((prev)=>prev +1)
      }
    
      const handleRemoveQty = () =>{
        if (qty <= 1) return;
        setQty((prev)=>prev - 1)
      }
  return (
    <View style={styles.container}>
        <Image source={{uri: item?.imageUrl}} style={styles.image}/>
        <View>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.name}>Price: {item?.price}$</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
            <Text style={styles.btnQtyTxt}>-</Text>
          </TouchableOpacity>
          <Text>{qty}</Text>
          <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
            <Text style={styles.btnQtyTxt}>+</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center"

    },
    image: {
        height: 50,
        width: 50,
        resizeMode: "contain"
    },
    name: {
        fontSize: 10
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 10
      },
      btnCart: {
        width: 180,
        backgroundColor: "#000",
        marginVertical: 10,
        borderRadius: 5,
        height: 40,
        justifyContent: "center"
      },
      btnCartText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
      },
      btnQty:
      {
        backgroundColor: 'lightgray',
        width: 30,
        alignItems: "center",
        marginHorizontal: 10
      },
      btnQtyTxt: {
        fontSize: 20,
        fontWeight: "bold"
      }
    
})