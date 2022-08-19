import React from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'

function InputFieldsComp({mT, icon, pH, secure, keyboard}) {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
        <View style={{flex: 0.2, alignItems: 'center'}}>
            <Image style={{width: 20, height: 20}} source={icon} />
        </View>
        <View style={{flex: 0.8}}>
            <TextInput keyboardType={keyboard} secureTextEntry={secure} placeholder={pH} placeholderTextColor={'#74B4FF'} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#74B4FF',
        borderWidth: 2.3,
        borderRadius: 25,
        padding: 7,
        flexDirection: 'row'
    }
})

export default InputFieldsComp