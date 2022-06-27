
import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(){
  const[Lista_pokemons,altera_lista] = useState()
  useEffect(() =>  {
    getPokemonsAPI()
  },[])

const getPokemonsAPI = async () => {
  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon')
  const json = await resposta.json()
  
  altera_lista(json.results)
}

  return (
    <View>
      <FlatList
      data={Lista_pokemons}
      renderItem={(info) => {
        const {item,index} = info

        return (
          <View style = {{ flex: 1, justifyContent: 'center',alignItems:'center'} }> 
            <Text style = {{fontSize: 34,color: 'purple'}} >
              {index} - {} 
              { item.name} 
              </Text>
          </View>
        )
      }} 
      > 
          
      </FlatList>
    </View>
  )
}
export default App;
