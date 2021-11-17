import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';




export default function Signup({navigation}) {
    return (
        <View style = { styles.container }>
            <View style = { styles.header }>
            <Text style = { styles.welcome } > E S H O P </Text> 
            </View>
            <Text style={{fontSize: 30, backgroundColor: '#f5f5f5', color: 'green', borderRadius: 20, fontWeight: 'bold',}}>PLEASE FILL THE FORM TO CREATE AN ACCOUNT</Text>
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
        height: 370,
             
              }}>
                  <View>                 
                 <TextInput 
                 keyboardType='ascii-capable'
                  style={styles.input}
                  placeholder='Enter Your Full Name (e.g. Gable Chef)'
                  />
                  <View>                 
                 <TextInput 
                 keyboardType='ascii-capable'
                  style={styles.input}
                  placeholder='Enter Your Email (e.g. eshop@gmail.com)'
                  />
                  </View>
                  <View>                 
                 <TextInput 
                 keyboardType='ascii-capable'
                  style={styles.input}
                  placeholder='Enter Phone Number (e.g. +23350261...)'
                  />
                <View>                 
                 <TextInput 
                 keyboardType='ascii-capable'
                  style={styles.input}
                  placeholder='Enter Password (at least 6 characters)'
                  />
                  </View>
                  <TouchableOpacity
            onPress={() => {
                alert('Account created!')
                navigation.navigate("Home")
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
                <Text style={{color: 'white', fontSize: 25, textAlign: 'center', fontWeight: 'bold',}}>SIGN UP</Text>
            </TouchableOpacity>            

                  </View>
                  </View>
                  
                  </View>

                  <View style={{flexDirection: 'row',}}>
                  <Text style={{color: 'green', marginTop: 50, fontStyle: 'italic', fontWeight: 'bold',}}>Already have an account?</Text>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Login")
            }}
            style={{
                marginTop: 40,
                marginLeft: 23,
                border: 2,
                backgroundColor: '#282829',
                width: 180,
                height: 40,
                borderRadius: 5,
                alignSelf: 'center',
                
            }}
            >
            <Text style={{color: 'white', fontSize: 25, textAlign: 'center',}}>LOGIN</Text>
            </TouchableOpacity>
            </View>
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