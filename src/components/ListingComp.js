import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function ListingComp({title, subTitle, quantity, textColor, smallText, price}) {
  return (
    <View style={{marginTop: 10}}>
    {title ? <Text style={{color: textColor, fontWeight: 'bold', fontSize: 15}}>{title}</Text> : null}
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{marginTop: 5}}>
            {subTitle ? <Text>{subTitle}</Text> : null}
            {smallText ? <Text style={{color: '#9B9B9B'}}>{smallText}</Text> : null}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 10, color: '#9B9B9B'}}>{price}</Text>
            <Text style={{}}>{quantity}</Text>
        </View>
    </View>
    <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#CCCCCC',
        marginTop: 15
    },
    imageRound: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 3
    },
    containerbuy: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    smallText: {
        color: '#95A5A6',
        textAlign: 'center',
        color: '#2874A6',
        fontSize: 18
    },
    welcomeText: {
        color: '#273746',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
    }
});

export default ListingComp;