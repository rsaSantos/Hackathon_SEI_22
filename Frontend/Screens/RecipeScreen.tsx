import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useReceita } from '../contexts/Receita';
import API from '../API/api';


export default function RecipeScreen() {
    const {receita, setReceita} = useReceita();
    const [rec,setrec] = useState({})
    
    

    useEffect(() => {
        let r = receita
        API.get(`/receita?nomeEmenta=${r}`).then((response) => {
            setrec(response.data)
            console.log(receita)
            })
        },[receita])

        
    return (
        
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{rec.ementaInfo.nomeEmenta}</Text>
                <img src={rec.ementaInfo.fotografia} />
                <Text style={styles.subtitle}>Ingredientes</Text>
                <FlatList data={rec.listaIngredientes} renderItem={({ item }) => <Text style={styles.item}>-{item}</Text>}></FlatList>
                <br></br>
                <Text style={styles.subtitle}>Modo de Preparação</Text>
                <br></br>
                <Text style={styles.description}>{rec.receita}</Text>
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
    "Bacalhau à brasa" :{
    "nome": "Bacalhau à bras",
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "descricao": "1. Coza as postas de bacalhau em leite.\n" +
        "2. Corte a cebola em rodelas finas e refogue em azeite até estar mole e transparente.\n" +
        "3. Escorra o bacalhau e desfaça-o em lascas e junte à cebolada. Deixe refogar lentamente. Polvilhe com farinha, mexa e regue com leite coado, onde cozeu antes o bacalhau. Deixe engrossar, mexendo de vez em quando.\n" +
        "4. Descasque e corte as batatas em cubos e frite em óleo não quente, de forma a deixá-las mais cozidas que fritas. Escorra as batatas e junte-as ao bacalhau. Tempere com sal, pimenta e noz-moscada.\n" +
        "5. Deite tudo num tabuleiro untado de ir ao forno, espalhe por cima as natas e polvilhe com queijo ralado. Leve ao forno até estar gratinado.\n" +
        "Sirva com uma salada fresca de alface e tomate.",
    "ingredients": [
        "Azeite 15ml",
        "Cebola 1un",
        "Bacalhau 500gr",
        "Leite 600ml",
        "Farinha 50gr",
        "Batata 1000gr",
        "Natas 200ml",
        "Queijo Ralado 150gr",
        "Sal 10gr"

    ]
},
    "Empadão de seitan" : {
        "nome" : "Empadão de seitan",
        "imgUrl": "https://cdn.vidaativa.pt/uploads/2019/11/765_360_125734-vegetarian-shepherd-s-pie-potatoes-lentils-and-seasonal-garden-vegetables-casserole-a.jpg",
        "descricao": "1. Em primeiro lugar, em uma panela grande, aqueça o azeite de oliva em fogo médio. Logo, adicione a cebola, refogue até amolecer. Posteriormente, acrescente o alho, cozinhe mais 1 minuto.\n" +
        "2. Posteriormente, acrescente a pasta de tomate, cozinhe durante 5 minutos. Após, acrescente também água, molho de tomate, manjericão, orégano, 2 colheres de chá de sal, assim como pimenta do reino. Em seguida, reduza o calor, cozinhe coberto a fogo baixo por 50 minutos.\n" +
        "3. Assim, combine os ingredientes de almôndegas que são: ovos, farinha de rosca, leite, queijo parmesão, 3 dentes de alho, sal e pimenta, assim como carne moída e óleo de canola. Finalmente, adicione a carne. Misture levemente, mas com cuidado. Molde em bolas do tamanho que desejar.\n" +
        "4. Finalmente, em uma frigideira grande, aqueça o óleo de canola em fogo médio. Logo, adicione as almôndegas e doure em lotes. Ao mesmo tempo, deverá escorrer e logo, acrescente ao molho. Deixe ferver. Sirva com massa quente.\n",
        "ingredients": [
            "bacalhau 500g",
            "batata 50g",
            "azeite q/b",
    
        ]
    },
    "Massa à bolonhesa" : {
        "nome" : "Massa à bolonhesa",
        "imgUrl" : "https://tecnonoticias.com.br/wp-content/uploads/2021/10/receita-tradicional-de-massa-a-bolonhesa-.jpg",
        "descricao": "1. Em primeiro lugar, em uma panela grande, aqueça o azeite de oliva em fogo médio. Logo, adicione a cebola, refogue até amolecer. Posteriormente, acrescente o alho, cozinhe mais 1 minuto.\n" +
        "2. Posteriormente, acrescente a pasta de tomate, cozinhe durante 5 minutos. Após, acrescente também água, molho de tomate, manjericão, orégano, 2 colheres de chá de sal, assim como pimenta do reino. Em seguida, reduza o calor, cozinhe coberto a fogo baixo por 50 minutos.\n" +
        "3. Assim, combine os ingredientes de almôndegas que são: ovos, farinha de rosca, leite, queijo parmesão, 3 dentes de alho, sal e pimenta, assim como carne moída e óleo de canola. Finalmente, adicione a carne. Misture levemente, mas com cuidado. Molde em bolas do tamanho que desejar.\n" +
        "4. Finalmente, em uma frigideira grande, aqueça o óleo de canola em fogo médio. Logo, adicione as almôndegas e doure em lotes. Ao mesmo tempo, deverá escorrer e logo, acrescente ao molho. Deixe ferver. Sirva com massa quente.",
        "ingredients": [
            "Carne de vaca picada 650g",
            "Esparguete 250g",
            "Cebola 1un",
            "Alho 2 dentes",
            "Polpa de tomate 40gr",
            "Azeite 15ml",
            "Queijo Ralado 150ml",
            "Sal 10gr"
        ]
        
}
    }
        

