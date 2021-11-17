import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image,} from 'react-native';



export default function Home(){
    return(
        <View style = { styles.container }>
            <View style = { styles.header }>
            <Text style = { styles.welcome } > E    S    H    O    P </Text>
            <Text style={{alignContent: 'center', fontStyle: 'italic', color: 'pink', fontSize: 30,}}>The     world     shops     here!</Text>
            </View>
            <View>                 
                 <TextInput 
                 keyboardType='ascii-capable'
                  style={styles.input}
                  placeholder='search product'
                  />
                  </View>

            <View style={styles.welcomeImageContainer}>

            <View>
            <Image
            style={
                {width: 300, 
                height: 250,
                alignItems: 'center',
                borderRadius: 15,
                
                borderColor: 'yellow',
                margin: 10,
                
            }
            }

            source={{uri: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"}} />
            </View>

            {/* //next image */}
            <View>
            <Image
            style={
                {
                width: 300, 
                height: 250,
                alignItems: 'center',
                borderRadius: 15,
                
                borderColor: 'yellow',
                margin: 10,
            }
            }

            source={{uri: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} />
            </View>

            {/*Next image 3*/}
            <View>
            <Image
            style={
                {width: 300, 
                height: 250,
                alignItems: 'center',
                borderRadius: 15,
                
                borderColor: 'yellow',
                margin: 10,
            }
            }

            source={{uri: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"}} />
            </View>
            

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
        
        alignItems: 'center',
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 400,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
    },
    welcomeImageContainer: {
        marginTop: 20,
        padding: 5,
        width: 980,
        height: 500,
        backgroundColor: 'gold',//'#f0d5e6',//'pink',//'#eff0e1',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        borderRadius: 20,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
});