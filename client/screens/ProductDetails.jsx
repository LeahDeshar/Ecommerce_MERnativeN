import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductsData } from '../data/ProductsData'
import Layout from '../components/layout/Layout'

const ProductDetails = ({route}) => {
  const [proDetails, setProdetails] = useState({})
  const [qty,setQty] = useState(1)
  useEffect(() => {
    const getProduct = ProductsData.find((p)=> {
      return p?._id === params?._id
    })
    setProdetails(getProduct)
  }, [params?._id])

  const handleAddQty = () =>{
    if (qty === 10) return alert("You can't add more than 10 quantity");
    setQty((prev)=>prev +1)
  }

  const handleRemoveQty = () =>{
    if (qty <= 1) return;
    setQty((prev)=>prev - 1)
  }

  const {params} =route;
  console.log(route)
  return (
    <Layout>
    <View>
      <Image source={{uri: proDetails?.imageUrl}} style={styles.image}/>
      <View>
      <Text style={styles.title}>{proDetails?.name}</Text>
      <Text style={styles.title}>Price: {proDetails?.price} $</Text>
      <Text style={styles.desc}>Description: {proDetails?.description}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnCart} 
        disabled={proDetails?.quantity < 0 }
        >
          <Text style={styles.btnCartText}>{proDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}</Text>
        </TouchableOpacity>
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
      {/* <Text>{JSON.stringify(proDetails,null,4)}</Text> */}
    </View> 
    </Layout>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%"
  },
  title: {
    fontSize: 18,
    textAlign: "left"
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10
  },
  desc: 
  {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10

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