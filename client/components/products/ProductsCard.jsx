import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const ProductsCard = ({p}) => {
    const navigation = useNavigation();

    // more detail button
    const handleMoreBtn = (id) =>
    {
        navigation.navigate('Product Details',{_id: id})
    }
    const handleAddToCart = ()=>
    {
        alert("Added to cart")
    }
  return (
    <View>
        <View style={styles.card}>
            <Image source={{uri: p?.imageUrl}} style={styles.cardImage}/>
            <Text style={styles.cardTitle}>{p?.name}</Text>
            <Text>{p?.description.substring(0,30)} ...more </Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={()=>handleMoreBtn(p._id)}>
                   <Text style={styles.btnText}>Details</Text> 
                </TouchableOpacity >
                <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
                <Text style={styles.btnText}>Add To Cart</Text> 

                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default ProductsCard
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'lightgray',
        marginVertical: 5,
        marginHorizontal: 8,
        width: "45%",
        padding: 10,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    cardImage: {
        height: 120,
        width: "100%",
        marginBottom: 10, 

    },
    cardTitle: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 5
    },
    cardDesc: {
        fontSize: 10,
        textAlign: 'left',
    },
    btnContainer: {
        flexDirection:'row',
        marginTop: 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn:{
        backgroundColor: "#000",
        height: 20,
        width: 75,
        borderRadius: 5,
        justifyContent: "center",

    },
    btnCart:{
        backgroundColor: "#e28718",
        height: 20,
        width: 75,
        borderRadius: 5,
        justifyContent: "center",

    },
    btnText : {
        color: "#fff",
        textAlign: "center",
        padding: 5,
        fontSize: 10,
        fontWeight: "bold",
    }

})