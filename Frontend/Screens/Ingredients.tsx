
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from '../stackParams';

const ingredientes = [{

    "ingrediente": "ola",
    "pressed": false
  },
  {
  
    "ingrediente": "t",
    "pressed": false
  }
  ]
  






export default function Ingredients() {
    
    const route = useRoute<RouteProp<RootStackParamList,'Ingredients'>>();
    const number = route.params.number
    

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
                        <Text style={Styles.item}>- {item.ingrediente} (x gr)</Text>
                        <Pressable
                            onPress={() => handleSelectItem(index)}
                            style={Styles.checkButton}>{showIcon(item.pressed)}</Pressable> 
                       
                    </View>}/>
                <Text>{number}</Text>
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
        fontSize: 35,
        left: 0,

    },
    itemContainer: {
        position: 'relative',
        marginBottom: 5,
    }


})



