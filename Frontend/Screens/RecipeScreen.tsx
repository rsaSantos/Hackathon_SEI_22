import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

export default function RecipeScreen() {
    return (
        <View><Text style={styles.title}>{recipe.nome}</Text>
        <img src={recipe.imgUrl}/>
        <Text style={styles.subtitle}>Ingredientes</Text>
        <FlatList data={recipe.ingredients} renderItem={({item}) => <Text style={styles.item}>-{item}</Text>}></FlatList>
        <br></br>
        <Text style={styles.subtitle}>Modo de Preparação</Text>
        <br></br>
        <Text style={styles.description}>{recipe.descricao}</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    item: {
        fontSize: 20,
        fontWeight: 'normal'
    },
    description: {
        fontSize: 20,
        fontWeight: 'normal'
        
    }
})

var recipe = {
    "nome": "Bacalhau a bras",
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis sapiente rem officiis optio possimus voluptas, velit reiciendis consectetur porro nesciunt magnam et mollitia hic ipsa iure veniam temporibus deserunt!",
    "ingredients": [
        "bacalhau 500g",
        "batata 50g",
        "azeite q/b",

    ]
}