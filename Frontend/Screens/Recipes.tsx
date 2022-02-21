
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../stackParams';
import { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { useEmenta } from '../contexts/Ementa';
import { useReceita } from '../contexts/Receita';
import API from '../API/api';

type RequestScreenProp = NativeStackNavigationProp<RootStackParamList, 'Receitas'>;


export default function Recepies() {
    const { ementa } = useEmenta();
    const { setReceita } = useReceita();
    const [items, setItems] = useState(receitasPrompt);

    useEffect(() => {
        if (ementa != null) {
            const receitas = ementa.map((igr) => ({ ...igr, pressed: false }))
            setItems(receitas)
        }
    }, [ementa]
    )

    function exchange() {
            let sending_items = "";
            for(var i = 0; i < items.length; i++) {
                console.log(items[i].nomeEmenta)
                sending_items += items[i].nomeEmenta + "," + items[i].pressed + ";"
            }
            
        API.get(`/mudaPlano?nomeEmentas=${sending_items}`).then((response) => {
            
            if(response.data != {"ementasInfo":[],"todosIngredientes":[]}) {
                const receitas = response.data.ementasInfo.map((igr) => ({ ...igr, pressed: false }))
                setItems(receitas)
            }

        })
    }

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
                    <Pressable onPress={() => {
                        setReceita(item.nomeEmenta)


                        navigation.navigate('Receita')
                    }}
                        style={Styles.recipeContainer}><img src={item.fotografia} />
                        <Text style={Styles.text}> {item.nomeEmenta} </Text></Pressable >
                    <Pressable style={Styles.iconContainer} onPress={() => handleSelectItem(index)}>
                        {showIcon(item.pressed)}
                    </Pressable>
                </View>} />
            <Pressable style={Styles.changeButton} onPress={() => exchange()}><Icon name="exchange" size={40} color="black" type="font-awesome" /> </Pressable>
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


var receitasPrompt = [{
    "nomeEmenta": "no Ementas selected",
    "fotografia": "https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=20&m=1222806141&s=612x612&w=0&h=GoODCHnR0mSefDBLWJpnqVnfRKH9ttdYPO0-KEYbb7w=",
    "pressed": false
}]