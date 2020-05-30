import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { getPlaneDetection, getProvidesAudioData } from 'expo/build/AR';
// import MovieDetails from '../../movie-rater-web/src/components/movie-details';

export default function Auth(props) {

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ regView, setRegView ]   = useState(false);

  useEffect(() => {
        getData();
  },[]) // will keep it persistent

  const auth = () => {
    if (regView) {
        fetch(`http://10.0.2.2:8000/api/users/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        }).then( res => res.json())
        .then( res => {
            setRegView(false);
        })
        .catch( error => console.log(error));    
    } else {
        fetch(`http://10.0.2.2:8000/auth/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        }).then( res => res.json())
        .then( res => {
            saveData(res.token);      
            props.navigation.navigate("MovieList");
        })
        .catch( error => console.log(error));  
    }
};

  const saveData = async (token) => {
      await AsyncStorage.setItem('MR_Token', token)
  } 
  const getData = async () => {
    const token = await AsyncStorage.getItem('MR_Token')
    if(token) props.navigation.navigate("MovieList");
  } 
  const toggleView = () => {
        setRegView(!regView);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
             <Text style={styles.label}>username</Text> 
             <TextInput 
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
                autoCapitalize={'none'}          
             />
             <Text style={styles.label}>password</Text> 
             <TextInput 
                style={styles.input}
                placeholder="password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
             />  
             <Button tyle={styles.viewText} onPress={() => auth()} title={regView ? "Register": "Login"} />  
             <TouchableOpacity onPress={() => toggleView()}>
                 { regView ? 
                    <Text style={styles.viewText}>
                        Already have an account ?  Go back to login
                    </Text> :
                    <Text style={styles.viewText}>
                        Don't have an account? Register here
                    </Text>
                 }
             </TouchableOpacity>  
        </View>
    </SafeAreaView>
  );
};

Auth.navigationOptions = screenProps => ({
  title: 'Login',
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center'
    // textAlign: 'center'
  }  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c35',
    padding: 10,
  },
  
  description:{
    padding: 10,
    fontSize: 20,
    color: 'white'
  },

  label:{
    fontSize: 24,
    color: '#fff',
    padding: 10
  },

  input:{
    fontSize: 24,
    backgroundColor: '#fff',
    padding: 10
  },
  viewText:{
      fontSize: 20,
      paddingTop: 30,
      paddingLeft: 10,
      paddingRight: 10,
      color: 'white'

  }

});
