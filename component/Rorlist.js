import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PeaceOfRsult from './PeaceOfRsult'

const Rorlist = ({ title, resultFilter, navigation }) => {

    if (!resultFilter.length) {
        return null
    }
    return (
        <View  >
            <Text style={styles.titel}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={resultFilter}
                keyExtractor={(result) => {
                    return result.id
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('result', { id: item.id })}>
                            <PeaceOfRsult item={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Rorlist

const styles = StyleSheet.create({
    titel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
})
