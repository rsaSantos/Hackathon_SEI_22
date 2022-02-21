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
        "nomeEmenta": "Bacalhau à bras",
        "fotografia": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg"
            },
    "listaIngredientes": [
        {
            "nome": "Azeite",
            "quantidade": 15,
            "sistemaNumerico": "ml"
          },
          {
            "nome": "Batata",
            "quantidade": 1000,
            "sistemaNumerico": "gr"
          }
    ],
    "receita": "1. Coza as postas de bacalhau em leite.\n2. Corte a cebola em rodelas finas e refogue em azeite até estar mole e transparente.\n3. Escorra o bacalhau e desfaça-o em lascas e junte à cebolada. Deixe refogar lentamente. Polvilhe com farinha, mexa e regue com leite coado, onde cozeu antes o bacalhau. Deixe engrossar, mexendo de vez em quando.\n4. Descasque e corte as batatas em cubos e frite em óleo não quente, de forma a deixá-las mais cozidas que fritas. Escorra as batatas e junte-as ao bacalhau. Tempere com sal, pimenta e noz-moscada.\n5. Deite tudo num tabuleiro untado de ir ao forno, espalhe por cima as natas e polvilhe com queijo ralado. Leve ao forno até estar gratinado.\nSirva com uma salada fresca de alface e tomate."

}
        

