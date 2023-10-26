import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const SearchFilter = ({data, input, setInput}) => {
    return (
        <View style={{marginTop: 10}}>

        <FlatList data={data} renderItem={({item}) => {
            if (input === '') {
                return (
                    <View style={{marginVertical:12}}>
                        <Text style={{fontSize:14}}>{item.name}</Text>
                        <Text style={{borderColor: '#ccc', borderWidth: 1, height: 1, marginTop: 5 }} /> 
                    </View>
                )
            }

            if(item.name.toLowerCase().includes(input.toLowerCase())) {
                return (
                <View style={{marginVertical:12}}>
                <Text style={{fontSize:14}}>{item.name}</Text>
                <Text style={{borderColor: '#ccc', borderWidth: 1, height: 1, marginTop: 5 }} />
            </View>
                )
            }

        }}/>






        </View>

    )
}

    export default SearchFilter