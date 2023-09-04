import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('./background.png')}
        style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>you are inside screen 1</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text>lets get started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 4,
    padding: 20,
  },
});
export default Login;
