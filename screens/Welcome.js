import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
//import Signup from './screens/Signup';
//import Signup from './Signup';


export default function Welcome({navigation}) {
    return ( 
        <View style = { styles.container } >
        <View style = { styles.header } >
        <Text style = { styles.welcome } >    E     S     H     O     P     </Text>  
        </View >
        <View>
            <Text style={styles.welcomeText}>Welcome to Eshop: <Text style={{color: 'blue',}}>an online market that sells various kinds of products like sneakers.</Text><Text style={{color: '#eb26ca',}}>Find what you like here!</Text></Text>           
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

        {/* Login and sign up buttons */}
        <View style={styles.welcomeButtonContainer}>
            {/* Login button */}
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Login")
            }}
            style={{
                margin: 10,
                border: 2,
                backgroundColor: 'blue',
                width: 200,
                height: 50,
                borderRadius: 5,
                marginLeft: 40,
                // align: 'center',
                
            }}
            >
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center',}}>LOGIN</Text>
            </TouchableOpacity>

            

            {/* Sign Up buttton */}
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <Text style={{fontStyle: 'italic',}}>Don't have an account yet?</Text><Text> Click on 
                    <TouchableOpacity
                    onPress = {
                        () => {
                            navigation.navigate("Signup")
                        }
                    }
                    ><Text style={{color: 'blue',}}> Sign Up</Text>
                    </TouchableOpacity> now!</Text>
            </View>
            <TouchableOpacity
             onPress = {
                () => {
                    navigation.navigate("Signup")
                }
            }
            style={{
                margin: 10,
                border: 2,
                backgroundColor: 'blue',
                width: 200,
                height: 50,
                borderRadius: 5,
                align: 'center',
                marginLeft: 40,
                
                
            }}
            >
                
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center',}}>SIGN UP</Text>
            
            </TouchableOpacity>

            <View style={{}}>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Home")
                }}
                style={{marginLeft: 30,}}
                >
                <Text style={{fontStyle:'italic',}}>Click to go straight to product page!</Text>
                </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Home")
            }}
            style={{
                marginLeft: 15,
                border: 2,
                backgroundColor: 'blue',
                width: 270,
                height: 40,
                borderRadius: 5,
                // align: 'center',
                
            }}
            >
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center',}}>PRODUCT PAGE</Text>
            </TouchableOpacity>
            </View>       


        </View>



        {/*<StatusBar style = "auto" / >*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0ed',//'#fff', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 45,
        color: 'orange',
        fontWeight: 'light',
    },
    header: {
        padding: 15,
        //backgroundColor: 'white',
    },
    welcomeText: {
        
        color: '#eb26ca',
        flexDirection: 'row',
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'italic',
        
    },
    welcomeImageContainer: {
        marginTop: 20,
        padding: 5,
        width: 980,
        height: 300,
        backgroundColor: 'blue',//'#f0d5e6',//'pink',//'#eff0e1',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        borderRadius: 20,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    welcomeButtonContainer: {
        padding: 10,
        margin: 5,
        
        
    },
});