import React, { Component } from 'react'
import { ScrollView, View, Dimensions, Modal, Image, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import { Tile, List, ListItem, Button, Input, Icon} from 'react-native-elements'
import { RkModalImg, RkTextInput, RkButton, RkText,} from 'react-native-ui-kitten'

import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0_wb7_JYClagbvl0s1g64B2N_Bqwe6fk",
    authDomain: "expensify-react-udemy.firebaseapp.com",
    databaseURL: "https://expensify-react-udemy.firebaseio.com",
    projectId: "expensify-react-udemy",
    storageBucket: "expensify-react-udemy.appspot.com",
    messagingSenderId: "832957239508"
}

firebase.initializeApp(firebaseConfig)

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    loginUser = (email, password) => {

        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
                console.log(user)
                // this.props.navigation.navigate("Me")

                //this.props.navigation.navigate('Me')
                // Alert.alert(
                //     'Sucessfull Login',
                //     'Click OK to be redirected to Profile',
                //     [
                //         {  text: 'Cancel', 
                //            //onPress: () => console.log('Cancel Pressed'),
                //            style: 'cancel'
                //         },

                //       { text: 'OK', onPress: () => this.handleSettingsPress },
                //     ],
                //     { cancelable: false }
                //   )
            })
        }
        catch (error) {
            console.log(error.toString())

            Alert.alert(
                'Error Login',
                'Bad credentials',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }
    }

    handleSettingsPress = () => {
        this.props.navigation.navigate('Me')
    }

    render() {
        const { goBack } = this.props.navigation
        return (
        <View>
            <View>
                <Tile
                imageSrc={{ uri: "https://camo.githubusercontent.com/333dc37d963d20417963605ee110988c4d3ce622/68747470733a2f2f63646e2e7261776769742e636f6d2f616b76656f2f72656163742d6e61746976652d75692d6b697474656e2f30383561666235322f646f63732f6173736574732f62616e6e65722e706e67"}}
                featured
                style={styles.contentWrap}
                />
            </View>

            <View>
                <RkTextInput 
                    rkType='rounded' 
                    placeholder='Username' 
                    onChangeText={(email) => this.setState({ email })}
                />

                <RkTextInput 
                    rkType='rounded' 
                    onChangeText={(password) => this.setState({ password })}
                    placeholder='Password' 
                    secureTextEntry={true}
                />
            </View>
            
            <View>
                <Button
                    raised
                    backgroundColor="#517fa4"
                    rounded = "true"
                    icon={
                        <Icon
                            name='ios-american-football'
                            type='ionicon'
                            color='#517fa4'
                        />
                    }
                    title="Login"
                    buttonStyle={{ marginTop: 20 }}
                    onPress={() => this.loginUser(this.state.email, this.state.password)}
                />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  mainWrap: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
  },

  contentWrap: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
  }
})

export default Login
