
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../stackParams';

type RequestScreenProp = NativeStackNavigationProp<RootStackParamList,'Recipes'>;

  
export default function Recepies() {

    const navigation = useNavigation<RequestScreenProp>()
    return (
        <View style={Styles.Container}><FlatList data={receitas} renderItem={({ item }) =>
            <Pressable onPress={() => navigation.navigate('RecipeScreen')} style={Styles.recipeContainer}><img src={item.imgUrl} />
                <Text style={Styles.text}>{item.name}</Text></Pressable>} /></View>
    )
}


const Styles = StyleSheet.create({
    Container: {
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