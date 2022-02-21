

import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import API from '../API/api';
import { useCount } from '../contexts/Count';
import { useEmenta } from '../contexts/Ementa';


export default function Ingredients() {
    const {setEmenta} = useEmenta()
    const [items, setItems] = useState([]);
    const {count} = useCount();

    useEffect(() => {
        API.get(`/nEmentas?numEmentas=${count}`).then((response) => {
            const ingredientes = response.data.todosIngredientes.map((igr) => ({...igr, pressed: false}))
            setEmenta(response.data.ementasInfo)
            
            setItems(ingredientes);
        })
        
    },[count])

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
                        <Text style={Styles.item}>- {item.nome} ({item.quantidade} {item.sistemaNumerico}) </Text>
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



