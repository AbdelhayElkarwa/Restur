import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import yelp from '../axios api/yelp'

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    console.log(id);

    const showResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        showResult(id)
    }, [])

    if (!result) {
        return null
    } else
        return (
            <View style={styles.content}>
                <Text style={{ fontSize: 18, marginTop: 8, color: 'white' }}>{result.name}</Text>
                <FlatList
                    data={result.photos}
                    keyExtractor={(photo => photo)}
                    renderItem={({ item }) => {
                        return <Image style={styles.img} source={{ uri: item }} />
                    }}
                />
            </View>
        )
}

export default ResultShowScreen

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 300,
        marginTop: 20,
        borderRadius: 10

    },
    content: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#211c11',
        flex: 1
    }
})
