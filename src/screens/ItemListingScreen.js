import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import SafeAreaComp from '../components/SafeAreaComp';
import ListingComp from '../components/ListingComp';

function ItemListingScreen({navigation}) {
  return (
    <SafeAreaComp>
        <View style={{padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={require('../assets/ic_go_back.png')} />
                        <Text style={{fontSize: 15, color: '#2874A6'}}>Back</Text>
                    </View>
                </TouchableOpacity>
                <Image style={{width: 20, height: 20}} source={require('../assets/ic_more.png')} />
            </View>
            <View style={styles.containerbuy}>
                <Text style={styles.welcomeText}>To Buy later</Text>
                <Text style={styles.smallText}>Add product</Text>
            </View>
            <View>
                <View style={styles.containerbuy}>
                    <Text style={{color: '#95A5A6', fontSize: 15}}>Share with</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.imageRound} source={require('../assets/ic_plus.png')} />
                        <Image style={styles.imageRound} source={require('../assets/ic_pic_one.png')} />
                        <Image style={styles.imageRound} source={require('../assets/ic_pic_two.png')} />
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
            <ListingComp title={'Coffe, Tea & Cocoa'} subTitle={'Matcha Tea'} textColor={'#D14B9F'} />
            <ListingComp title={'Dairy'} subTitle={'Yougurt'} textColor={'#F4B660'} smallText={'active'} quantity={'2'} />
            <ListingComp title={'Fruits'} subTitle={'Apple'} quantity={'5'} textColor={'#73E7A4'} />
            <ListingComp subTitle={'Avocado'} smallText={'Hass'} price={'$4.20'} quantity={'5'} textColor={'#73E7A4'} />
            <ListingComp title={'Personal care & Beauty'} subTitle={'Facial tissues'} textColor={'#D14B9F'} />
            <ListingComp subTitle={'Foundation'} smallText={'Lancome Teint idole Ultra Wear, Shade 140'} quantity={'5'} textColor={'#73E7A4'} />
            <ListingComp title={'Pharmacy'} smallText={'Aspirin'} textColor={'#D14B9F'} />

        </View>
        
    </SafeAreaComp>
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

export default ItemListingScreen;