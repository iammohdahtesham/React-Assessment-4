/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';

const Data1 = () => {
  const [dataApi, setDataApi] = useState([]);
  const getAPI = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setDataApi(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={getAPI}
        style={{backgroundColor: 'red', padding: 20, margin: 40}}>
        <Text>pressme</Text>
      </TouchableOpacity>
      <FlatList
        data={dataApi}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              backgroundColor: '#f9c2ff',
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
            }}>
            <Text style={{fontSize: 22, color: 'black', marginBottom: 20}}>
              id:{item.id}
            </Text>
            <Text style={{fontSize: 22, color: 'black', marginBottom: 20}}>
              title: {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default Data1;
