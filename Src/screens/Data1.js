import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';
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
      <ImageBackground source={require('./background.png')} style={{flex: 1}}>
        <TouchableOpacity
          onPress={getAPI}
          style={{backgroundColor: '#E3E4FA', padding: 20, margin: 40}}>
          <Text>press me to get Id and Title</Text>
        </TouchableOpacity>
        <FlatList
          data={dataApi}
          renderItem={({item}) => (
            <View style={styles.dataContainer}>
              <Text style={styles.dataText}>id:{item.id}</Text>
              <Text style={styles.dataText}>title: {item.title}</Text>
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  dataText: {fontSize: 22, color: 'black', marginBottom: 20},
});
export default Data1;
