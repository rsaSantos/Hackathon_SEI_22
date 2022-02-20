
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';



var ingredientes = [{

    "ingrediente": "Azeite (150 ml)",
    "pressed": false
},
{

    "ingrediente": "Cebola (4 un)",
    "pressed": false
},
{
    "ingrediente": "Alho (3 un)",
    "pressed": false
},
{
    "ingrediente": "Polpa de Tomate (40 g)",
    "pressed": false
},
{
    "ingrediente": "Água (1000 ml)",
    "pressed": false
},
{
    "ingrediente": "Salsicha (5 un)",
    "pressed": false
},
{
    "ingrediente": "Sal",
    "pressed": false
},
{
    "ingrediente": "Ovo (10 un)",
    "pressed": false
},
{
    "ingrediente": "Leite (500 ml)",
    "pressed": false
},
{
    "ingrediente": "Queijo Ralado (150 g)",
    "pressed": false
},
{
    "ingrediente": "Carne Picada (400 g)",
    "pressed": false
},
{
    "ingrediente": "Óleo (500 ml)",
    "pressed": false
},
{
    "ingrediente": "Massa (500 gr)",
    "pressed": false
},
{
    "ingrediente": "Arroz (500 gr)",
    "pressed": false
},
{
    "ingrediente": "Bacalhau (400 gr)",
    "pressed": false
},
{
    "ingrediente": "Farinha (300 gr)",
    "pressed": false
},
{
    "ingrediente": "Batata (200 gr)",
    "pressed": false
},
{
    "ingrediente": "Natas (200 ml)",
    "pressed": false
},
{
    "ingrediente": "Seitan (150 ml)",
    "pressed": false
},
{
    "ingrediente": "Cogumelos (200 ml)",
    "pressed": false
},
{
    "ingrediente": "Alho-Francês (4 dentes)",
    "pressed": false
}, 
{
    "ingrediente": "Batata Doce (200 gr)",
    "pressed": false
},
{
    "ingrediente": "Chouriço Vegetal (300 gr)",
    "pressed": false
},
{
    "ingrediente": "Cogumelos protobello (10 un)",
    "pressed": false
},
{
    "ingrediente": "Tomate (3 un)",
    "pressed" : false
},
{
    "ingrediente": "Folhas de espinafre (10 gr)",
    "pressed": false
},
{
    "ingrediente": "Folha de louro (3 un)",
    "pressed": false
}
]



export default function Ingredients() {



    const [items, setItems] = useState(ingredientes);

    const handleSelectItem = (selectedItemIndex: Number) =>
        setItems((old) => {
            return old.map((item, index) => {
                if (selectedItemIndex !== index) return item;
                const pressed = !item.pressed;

                return { ...item, pressed };
            })
        })


    function showIcon(pressed: boolean) {
        if (pressed) {
            return <Icon name="checkcircle" size={40} color="black" type="antdesign" />
        }
        else return <Icon name="checkcircleo" size={40} color="black" type="antdesign" />
    }


    return (
        <View style={Styles.container}>
            <FlatList data={items}
                renderItem={({ item, index }) => 
                    <View style={Styles.itemContainer}>
                        <Text style={Styles.item}>- {item.ingrediente} </Text>
                        <Pressable
                            onPress={() => handleSelectItem(index)}
                            style={Styles.checkButton}>{showIcon(item.pressed)}</Pressable> 
                    </View>}/>
            
        </View>

    )
}


const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'relative',
        flex: 1,


    },
    checkButton: {
        position: 'absolute',
        right: 0,
    },
    item: {
        fontSize: 30,
        left: 0,

    },
    itemContainer: {
        position: 'relative',
        marginBottom: 5,
    }


})



