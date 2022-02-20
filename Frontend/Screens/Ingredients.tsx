
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from '../stackParams';
import API from '../API/api'
import { useEmenta } from '../contexts/Ementa';



let aux = []


export default function Ingredients() {
    const { ementa, setEmenta } = useEmenta();

    function joinIngrediente(ing) {
        return { "ingrediente": ing.nome + " " + ing.quantidade + " " + ing.sistemaNumerico, "pressed": false }
    }

    
    
    
  
    useEffect(() => {
    const request_test = async () => {
        const route = useRoute<RouteProp<RootStackParamList, 'Ingredients'>>();
        const dados = await API.get("/nEmentas?numEmentas=" + route.params.number);  
        return dados.data;  
    };
    const [items, setItems] = useState([]);
    //let dadosingredientes = []
        await request_test().then(async(dados: any) => {
            
            
        for(var i= 0; i < dados.todosIngredientes.length; i++) {
            aux.push({ "ingrediente": dados.todosIngredientes[i].nome + " " + dados.todosIngredientes[i].quantidade + " " + dados.todosIngredientes[i].sistemaNumerico, "pressed": false })
        }
        setEmenta(dados.ementasInfo)
        
        setItems(aux)
    });
})
    

    

   

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
        fontSize: 25,
        left: 0,

    },
    itemContainer: {
        position: 'relative',
        marginBottom: 5,
    }


})



