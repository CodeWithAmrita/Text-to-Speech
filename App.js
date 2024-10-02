import * as React from 'react';
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import * as Speech from 'expo-speech';
import {Header} from 'react-native-elements'

export default class App extends React.Component{
  constructor(){
    super();
    this.state ={
      text: '',
    }
  }

  speak =() =>{
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  };


  render(){
    return(
      
      <View style={styles.container}>
      <Header
      backgroundColor ={'#172D00'}
      centerComponent= {{ text: 'Text to Speech Converter', style: {color: '#FFE8E8', fontFamily: 'times', fontWeight: 'bold',fontSize:16.7} }}/>  

      <Image
       style={styles.img}
        source={require('./text.png')}
          />
   

      <Text style={styles.text}>Enter Your Word </Text>

      <TextInput
      style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({text: text});
    }}
   />

    <TouchableOpacity style={styles.button} onPress={this.speak}>
          <Text style={styles.buttonText}>Click me to hear the word</Text>
        </TouchableOpacity>

    </View>
  );
  }  
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#e7e8c0',
    padding: 5,
  },
  img: {
    justifyContent: 'center',
    marginTop: 30,
    width: 325,
    height: 180,
     alignSelf: 'center'
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 35,
    marginTop: 30,
    width: 300,
    height: 50,
    backgroundColor: '#3A4700'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'bold',
    fontSize: 20
  },
  text: {
    padding: 1,
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'times'
  },
  inputBox: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height:40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  }

});
