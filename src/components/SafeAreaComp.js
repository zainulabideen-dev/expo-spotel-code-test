import { StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export default function SafeAreaComp({children}) {
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <StatusBar backgroundColor={'white'} />
        {children}
    </SafeAreaView>
  )
}