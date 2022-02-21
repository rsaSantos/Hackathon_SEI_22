import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useReceita } from '../contexts/Receita';
import API from '../API/api';


export default function RecipeScreen() {
    const {receita} = useReceita();
    const [rec,setrec] = useState(recipe)
    
    

    useEffect(() => {
         API.get(`/receita?nomeEmenta=${receita}`).then((response) => {
            setrec(response.data)
            
            })
        },[receita])

    
    return (
        
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{rec.ementaInfo.nomeEmenta}</Text>
                <img src={rec.ementaInfo.fotografia} />
                <Text style={styles.subtitle}>Ingredientes</Text>
                <FlatList data={rec.listaIngredientes} renderItem={({ item }) => <Text style={styles.item}>-{item.nome} ({item.quantidade} {item.sistemaNumerico})</Text>}></FlatList>
                <br></br>
                <Text style={styles.subtitle}>Modo de Preparação</Text>
                <Text style={styles.description}>{rec.receita}</Text>
                <br></br>
            </ScrollView>

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
        flex: 1,
        fontSize: 20,
        fontWeight: 'normal'
    },
    description: {
        fontSize: 20,
        fontWeight: 'normal'
    },
    container: {
        flex: 1,
    }
})

var recipe = {
    "ementaInfo": {
        "nomeEmenta": "Error",
        "fotografia": "https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=20&m=1222806141&s=612x612&w=0&h=GoODCHnR0mSefDBLWJpnqVnfRKH9ttdYPO0-KEYbb7w="
            },
    "listaIngredientes": [
       
    ],
    "receita": "Not defined"

}
        

