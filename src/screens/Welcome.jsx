import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.textTitle}>VoiceGPT</Text>
      <Text style={styles.subText}>Let's Dive In.Here is The Future</Text>  
      </View>
      <Image source={require('../assets/advanced.png')} style={styles.robotImage} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems:'center'
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 30,
    color:'#232946'
  },
  subText: {
    fontWeight: '400',
    fontSize: 10,
    color:'#121629'
  },
  robotImage: {
    height: 200,
    width: 200,
    marginTop:'30%'
  },
  btn: {
    padding: 15,
    backgroundColor: '#232946',
    width: '90%',
    borderRadius: 10,
    marginTop:'50%'
  },
  btnText: {
    color: '#fffffe',
    alignSelf: 'center',
    fontSize: 20,
    
  }
})