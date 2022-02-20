
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../stackParams';
import { useState } from 'react';
import { Icon } from 'react-native-elements';

type RequestScreenProp = NativeStackNavigationProp<RootStackParamList, 'Receitas'>;


export default function Recepies() {
    const [items, setItems] = useState(receitas);

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
            return <Icon name="trash" size={40} color="black" type="font-awesome" />
        }
        else return <Icon name="trash-o" size={40} color="black" type="font-awesome" />
    }


    const navigation = useNavigation<RequestScreenProp>()
    return (
        <View style={Styles.container}>
            <FlatList data={items} renderItem={({ item, index }) =>
                <View>
                    <Pressable onPress={() => navigation.navigate('Receita',{nome: item.name})}
                        style={Styles.recipeContainer}><img src={item.imgUrl} />
                        <Text style={Styles.text}> {item.name} </Text></Pressable >
                    <Pressable style={Styles.iconContainer} onPress={() => handleSelectItem(index)}>
                        {showIcon(item.pressed)}
                    </Pressable>
                </View>} />
            <Pressable style={Styles.changeButton}><Icon name="exchange" size={40} color="black" type="font-awesome" /> </Pressable>
        </View >
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    recipeContainer: {
        position: 'relative',
        height: '40',
        width: '30',
        marginBottom: 40,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,


    },
    text: {
        position: 'absolute',
        fontSize: 30,
        bottom: -40,
        right: 2
    },
    iconContainer: {
        position: 'absolute',
        left: 2,
        bottom: 0
    },
    changeButton: {
        borderRadius: 40,
        width: 80,
        height: 80,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

})


var receitas = [{
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "name": "Bacalhau à Bras",
    "pressed": false
},
{
    "imgUrl": "https://cdn.vidaativa.pt/uploads/2019/11/765_360_125734-vegetarian-shepherd-s-pie-potatoes-lentils-and-seasonal-garden-vegetables-casserole-a.jpg",
    "name": "Empadão de seitan",
    "pressed": false
},
{
    "imgUrl": "https://tecnonoticias.com.br/wp-content/uploads/2021/10/receita-tradicional-de-massa-a-bolonhesa-.jpg",
    "name": "Massa à bolonhesa",
    "pressed": false
},
]