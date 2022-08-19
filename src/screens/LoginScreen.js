import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import SafeAreaComp from '../components/SafeAreaComp'
import InputFieldsComp from '../components/InputFieldsComp'
import RoundButton from '../components/RoundButton'

function LoginScreen({navigation}) {
  return (
    <SafeAreaComp>
        <View style={{flex: 1}}>
            <Image style={{width: '100%', marginTop: 20}} source={require('../assets/logo_sign_in.png')} />
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.smallText}>Login to your existing account</Text>
            <View style={styles.fieldsContainer}>
                <InputFieldsComp pH={'email'} icon={require('../assets/ic_user.png')} />
                <InputFieldsComp pH={'password'} secure={true} icon={require('../assets/ic_pass.png')} mT={10} />
                <Text style={{textAlign: 'right', paddingRight: 20, marginTop: 3}}>Forgot Password?</Text>
                <RoundButton onPress={()=>navigation.navigate('itemList')} title={'LOG IN'} bR={20} mT={15} bG={'#0148A4'} />
                <Text style={[styles.smallText, {marginTop: 15}]}>Or connect using</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                    <RoundButton onPress={()=>navigation.navigate('itemList')} title={'Facebook'} bG={'#0148A4'} mL={10} bR={10}  icon={require('../assets/ic_facebook.png')} mT={10} />
                    <RoundButton onPress={()=>navigation.navigate('itemList')} title={'Google'} bG={'red'} mL={10} bR={10} icon={require('../assets/ic_google.png')} mT={10}  />
                </View>
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'flex-end'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('signUp')}>
                            <Text style={{marginLeft: 5, fontWeight: 'bold', color: '#3280FC'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaComp>
  )
}

const styles = StyleSheet.create({
    fieldsContainer: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 30,
        marginTop: 10,
        flex: 1
    },
    smallText: {
        color: '#95A5A6',
        textAlign: 'center'
    },
    welcomeText: {
        color: '#273746',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
    }
});


export default LoginScreen;