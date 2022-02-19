import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from '../stackParams';


type IngredientsScreenProp = NativeStackNavigationProp<RootStackParamList,'Ingredients'>;


export default function Ingredients() {
    const navigation = useNavigation<IngredientsScreenProp>()

    return (
        <View style={Styles.container}>
            <Pressable onPress={() => navigation.navigate('Recipes')} style={Styles.recepieButton}>recipes</Pressable>
            <FlatList data={ingredientes}
                renderItem={({ item }) => <Text style={Styles.item}>- {item.ingrediente} (x gr)</Text>} />
                </View>

    )
}


const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'relative',
    },
    item: {
        fontSize: 35,
        left: 30,
        flex: 1
    },
    recepieButton: {
        flex:1,
        fontSize: 50,
        zIndex:1,
        left:200,
        justifyContent: 'flex-end',
        marginBottom: 36
      }

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
    "ingrediente": "ola"
},

]