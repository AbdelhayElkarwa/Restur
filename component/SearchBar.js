import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ search, setSearch, onSearchSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder='Search'
                autoCapitalize='none'
                style={styles.search}
                value={search}
                onChangeText={(val) => { setSearch(val) }}
                onSubmitEditing={onSearchSubmit}
            />

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background: {
        height: 50,
        backgroundColor: '#d9d0d0',
        marginVertical: 20,
        borderRadius: 5,
        marginHorizontal: 20,
        padding: 10,
        flexDirection: 'row'
    }, search: {
        marginLeft: 15,
        color: 'black',

        flex: 1,
        fontSize: 18,



    }
})
