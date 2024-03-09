import { View, Text, FlatList, Image  } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {

  
  const getdata = async()=>{
    let result = await fetch('https://fakestoreapi.com/products');
    result = await result.json();
    setList(result);
    
  }
  
  useEffect(()=>{
    getdata();
  },[])
  
  const [List , setList] = useState([]);
  const [numColumns, setnumcolumns] = useState(2)
  

  return (
    <View>
      <View>
        {
          List.length ?
          <FlatList
          data={List}
          keyExtractor={item =>item.id}
          renderItem={({item})=>(
            <View key={item.id} style={{borderWidth:1}}>
          <View>
            <Image source={{uri:item.image}}/>
            <Text>{item.description}</Text>
            <Text>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>my nmae is Prem</Text>

          </View>
        </View>
      )}
      numColumns={numColumns}
      /> :
      null
    }
      {/* {
        List ? <View>
          <Image source={{uri:(List.image)}}/>
          <Text>{List.id}</Text>
          <Text>{List.description}</Text>
          <Text>{List.category}</Text>
          <Text>{List.price}</Text>
        </View>: null
      } */}
      </View>
    </View>
  )
}