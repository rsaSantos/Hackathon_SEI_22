import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from '../stackParams';





export default function Ingredients() {
   

    return (
        <View style={Styles.container}>
            <FlatList data={ingredientes}
                renderItem={({ item }) => <Text style={Styles.item}>- {item.ingrediente} (x gr)</Text>} />
                </View>

    )
}


const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'relative',
        flex: 1,
        
        
    },
    

    item: {
        fontSize: 35,
        left: 0,
        
    },
    

})


var ingredientes = [{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "ola"
},
{
    "ingrediente": "banana"
},

]