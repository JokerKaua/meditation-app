import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Card from '@/src/components/Card'
import Section from '@/src/components/Section'
import Header from '@/src/components/Header'

export default function index() {

  return (
    <View style={styles.container}>

    <View style={styles.headerView}>
      <Header />
      <Text style={styles.text}>What's your mood today?</Text>
    </View>

      <Section text='Practices' label='view all'/>
      
      <View style={styles.cardView}>
          <Card title='Mind' label={'let\'s train it'}/>
          <Card title='Sleep' label={'Restful sleep'}/>
          <Card title='Relax' label='Reframe stress'/>
          <Card title='Focus' label='Focus on work'/>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9ff'
  },
  cardView: {
    backgroundColor: '#eeefff2d',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '80%',
    height: 'auto',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
  },
  headerView: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 200,
  },
  text : {
    fontSize: 20,
    color: '#888',
  }
});