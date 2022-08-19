import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

function RoundButton({mT, bR, mL, icon, bG, title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{marginLeft: mL}}>
        <View style={[styles.button, {marginTop: mT, borderRadius: bR, backgroundColor: bG}]}>
            {icon ? <Image style={{width: 20, height: 20}} source={icon} /> : null}
            <Text style={[styles.text, {marginLeft: mL}]}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
});

export default RoundButton;