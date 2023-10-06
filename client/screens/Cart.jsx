import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { CartData } from '../data/CartData'
import PriceTable from '../components/cart/PriceTable'
import CartItem from '../components/cart/CartItem'
import { ScrollView } from 'react-native'
 
const Cart = ({navigation}) => {
    const [cartItems,setCartItem] =useState(CartData)
  return (
    <Layout>
    <View>
      <Text style={styles.heading}>{
        cartItems?.length > 0 ? `You have ${cartItems?.length} items in the cart`: 
       "Your cart is empty!" 
        }
        </Text>
        {
            cartItems?.length && (
                <>
                <ScrollView>
                    {cartItems?.map(item =>(
                        <CartItem item={item} key={item._id}/>
                    ) )}
                </ScrollView>
               
                <View>
                    <PriceTable price={999} title={"Price"}/>
                    <PriceTable price={999} title={"Tax"}/>
                    <PriceTable price={999} title={"Shipping"}/>
                    <View style={styles.grandTotal}>
                        <PriceTable title={"Grand Total"} price={2000}/>
                    </View>
                    <TouchableOpacity style={styles.btnCheckout} onPress={()=> navigation.navigate("checkout")}>
                        <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View>
                </>
            )
        }
    </View>
    </Layout>
  )
}

export default Cart

const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        color: "green",
        marginTop: 10, 
    },
    grandTotal: {
        borderWidth: 1,
        borderColor: "lightgray",
        backgroundColor: "#fff",
        padding: 5,
        margin: 5,
        marginHorizontal: 20

    },
    btnCheckout: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        backgroundColor: "#000",
        width: "90%",
        marginHorizontal: 20,
        borderRadius: 20
    },
    btnCheckoutText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
})