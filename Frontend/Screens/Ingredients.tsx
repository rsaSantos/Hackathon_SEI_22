import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from '../stackParams';


var ingredientes = [{
    "id": 0,
    "ingrediente": "ola",
    "pressed": false
},
{
    "id": 1,
    "ingrediente": "t",
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
                    <Pressable
                        onPress={() => handleSelectItem(index)}
                        style={Styles.item}>- {item.ingrediente} (x gr) {showIcon(item.pressed)}</Pressable>} />
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



