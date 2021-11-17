import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';



export default function Login({navigation}) {
    return ( 
        <View style = { styles.container } >
        <View style = { styles.header } >
        <Text style = { styles.welcome } > E S H O P </Text> 
         </View>
         <Text style={{fontSize: 30, backgroundColor: '#f5f5f5', color: 'green', borderRadius: 20, fontWeight: 'bold',}}>PLEASE LOGIN IN TO YOUR ACCOUNT</Text>
         <View 
         style={{
             backgroundColor: '#f5f5f5',
             borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        borderRadius: 20,
        marginTop: 20,
        padding: 5,
        width: 500,
        height: 270,
             
              }}>
                  <View>                 
                 <TextInput 
                 keyboardType='ascii-capable'
                  style={styles.input}
                  placeholder='Enter Your Full Name/Email'
                  />
                  </View>
                  <View>                 
                 <TextInput
                 keyboardType='default'
                  style={styles.input}
                  placeholder='Enter Password'
                  />
                  </View>
                  <View>
                      <TouchableOpacity>
                        <Text style={{color: 'red', paddingLeft: 330,
                        fontStyle: 'italic',
                        }}>Forgot Password?</Text>
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity
            onPress={() => {
                navigation.navigate("Home")
                alert('Login succcessful!')
            }}
            style={{
                margin: 30,
                border: 2,
                backgroundColor: '#6dafe8',
                width: 180,
                height: 40,
                borderRadius: 5,
                alignSelf: 'center',
                
            }}
            >
                <Text style={{color: 'white', fontSize: 25, textAlign: 'center', fontWeight: 'bold',}}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row',}}>
            <Text style={{color: 'green', margin: 20, fontStyle: 'italic', fontWeight: 'bold',}}>Don't have an account?</Text>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Signup")
            }}
            style={{
                margin: 5,
                border: 2,
                backgroundColor: '#282829',
                width: 180,
                height: 40,
                borderRadius: 5,
                alignSelf: 'center',
                
            }}
            >
                <Text style={{color: 'white', fontSize: 25, textAlign: 'center',}}>SIGN UP</Text>
            </TouchableOpacity>
            
            </View>        
             
             </View> 
        <StatusBar style = "auto" / >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    welcome: {
        fontSize: 45,
        color: 'orange',
        fontWeight: 'light',
    },
    header: {
        padding: 15,
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 20,
        width: 400,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
    }
});
