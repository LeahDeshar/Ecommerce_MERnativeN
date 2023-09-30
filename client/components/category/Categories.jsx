import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { categoriesData } from '../../data/CategoriesData'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
const navigation = useNavigation()
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
            {categoriesData?.map((item)=>(
                <View key={item._id} >
                    <TouchableOpacity style={styles.categoryContainer}
                    onPress={()=>navigation.navigate(item.path)}>
                        <AntDesign name={item.icon} style={styles.categoryIcon}/>
                        <Text style={styles.catTitle}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            ))}
            </View>
        </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: "row"
    },
    categoryContainer: {
        backgroundColor: "#fff",
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryIcon: {
        fontSize: 25,
        verticalAlign: "top"
    },
    catTitle: {
        fontSize: 12
    }
})