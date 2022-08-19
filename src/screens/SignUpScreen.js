import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import SafeAreaComp from '../components/SafeAreaComp'
import InputFieldsComp from '../components/InputFieldsComp'
import RoundButton from '../components/RoundButton'

function SignUpScreen({navigation}) {
  return (
    <SafeAreaComp>
        <View style={{flex: 1, padding: 20}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image style={{width: 30, height: 30}} source={require('../assets/ic_back.png')} />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Let's Get Started!</Text>
            <Text style={styles.smallText}>Create an account to get all features</Text>
            <InputFieldsComp mT={20} pH={'user name'} icon={require('../assets/ic_user.png')} />
            <InputFieldsComp mT={20} keyboard={'email-address'} pH={'email'} icon={require('../assets/ic_user.png')} />
            <InputFieldsComp mT={20} keyboard={'phone-pad'} pH={'phone'} icon={require('../assets/ic_phone.png')} />
            <InputFieldsComp mT={20} secure={true} pH={'password'} icon={require('../assets/ic_pass.png')} />
            <InputFieldsComp mT={20} secure={true} pH={'confirm password'} icon={require('../assets/ic_pass.png')} />
            <RoundButton title={'Create'} bR={20} mT={15} bG={'#0148A4'} />
            <View style={{alignItems: 'center', flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text style={{marginLeft: 5, fontWeight: 'bold', color: '#3280FC'}}>Login here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaComp>
  )
}

const styles = StyleSheet.create({
    smallText: {
        color: '#95A5A6',
        textAlign: 'center'
    },
    welcomeText: {
        color: '#273746',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
        marginTop: 20
    }
});

export default SignUpScreen;