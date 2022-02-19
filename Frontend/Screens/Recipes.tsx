
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from '../stackParams';

export default function Recepies() {
    return (
        <View><FlatList data={receitas} renderItem={({ item }) =>
            <View style={Styles.recipeContainer}><img src={item.imgUrl} />
                <Text style={Styles.text}>{item.name}</Text></View>} /></View>
    )
}


const Styles = StyleSheet.create({
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
        bottom:-30,
        right: 0
    },
    
})


var receitas = [{
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "name": "Bacalhau a Bras"
},
{
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "name": "Bacalhau a Bras"
},
{
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "name": "Bacalhau a Bras"
},
{
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "name": "Bacalhau a Bras"
},
{
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "name": "Bacalhau a Bras"
},
{
    "imgUrl": "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpeg",
    "name": "Bacalhau a Bras"
},
]