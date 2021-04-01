import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SearchBar from './SearchBar'
import yelp from '../axios api/yelp'
import Rorlist from './Rorlist'

const SearchScreen = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [result, setresult] = useState([])
    const [errorMessage, seterrorMessage] = useState('')

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    //دول بجيبهم من الموقع الي هجيب منه الداتا 
                    limit: 50,
                    // تيرم  دي متعرفه انها الحاجه الي هبحث عن طريقها واديتها قيمه السيرش الي هي اليوزر بيكتبها في ال انبوت
                    term: search,
                    location: 'san jose'
                }
            }
            )
            setresult(response.data.businesses)
        } catch (error) {
            seterrorMessage('some thing went wrong')
        }
    }

    const resultFilter = (price) => {
        return result.filter((res) => {
            return res.price === price
        })
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])
    return (
        <View style={{ flex: 1, }} >
            <SearchBar search={search} setSearch={setSearch}
                onSearchSubmit={() => searchApi()}
            />
            {errorMessage ? <Text> {errorMessage}</Text> : null}
            <ScrollView>

                <Rorlist title='Cost Effective' resultFilter={resultFilter('$')} navigation={navigation} />
                <Rorlist title='Bit Price' resultFilter={resultFilter('$$')} navigation={navigation} />
                <Rorlist title='Big spender' resultFilter={resultFilter('$$$$')} navigation={navigation} />
            </ScrollView>

        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
