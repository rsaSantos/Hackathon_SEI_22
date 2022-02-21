import {useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RootStackParamList } from '../stackParams';
import {useCount} from '../contexts/Count';
import API from '../API/api';
import { useEmenta } from '../contexts/Ementa';



type RequestScreenProp = NativeStackNavigationProp<RootStackParamList,'RequestScreen'>;


export default function RequestScreen () {
  const navigation = useNavigation<RequestScreenProp>()
  const {setEmenta} = useEmenta()
  const {count, setCount} = useCount()

  
  function subtractcount() {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  function addcount() {
    setCount(count + 1)
  }

  function allReceitas() {
    API.get(`/todasEmentas`).then((response) => {
      setEmenta(response.data)
    })}


  return (
    
    <View style={styles.container} >
      <Text style={styles.title}><Icon name="timer-sand" size={80} color="black" type= "material-community" /></Text>
      <View style={styles.countContainer}>
        <Pressable onPress={subtractcount}><Icon name="minuscircleo" size={80} color="black" type= "antdesign" /></Pressable>
        <Text style={styles.text}>{count}</Text>
        <Pressable onPress={addcount}><Icon name="pluscircleo" size={80} color="black" type= "antdesign" /></Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('Lista_de_Compras')} style={styles.calculateContainer}>Gerar Lista de Compras</Pressable>
      <Pressable onPress={() => {
                            allReceitas()
                            navigation.navigate('Receitas')}} style={styles.allContainer}>Ver todas as Receitas</Pressable>

      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 50,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    elevation: 3,
    textAlign: 'center',
    width:70,
    marginLeft: 50,
    marginRight: 50
    

  },
  countContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 250,
   
    
  },
  calculateContainer: {
    position: 'absolute',
    top: 400,
    fontSize: 30,
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    elevation: 3,
    justifyContent: 'space-between'
  },
  allContainer: {
    position: 'absolute',
    top: 600,
    fontSize: 30,
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    elevation: 3,
    justifyContent: 'space-between'
  },
  title: {
    position: 'absolute',
    fontSize: 50,
    fontWeight: 'bold',
    top: 100

  },
  
  
});
