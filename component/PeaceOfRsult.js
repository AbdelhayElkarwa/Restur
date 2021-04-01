import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const PeaceOfRsult = ({ item }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Image style={styles.img} source={{ uri: item.image_url }} />
            <Text style={styles.name}> {item.name}</Text>
            <Text style={{ marginLeft: 15 }}> {item.rating} Stars , {item.review_count} Reviews</Text>
        </View>
    )
}

export default PeaceOfRsult

const styles = StyleSheet.create({
    img: {
        height: 125,
        width: 250,
        borderRadius: 5,
        marginBottom: 5,
        marginLeft: 15
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 15
    }
})
