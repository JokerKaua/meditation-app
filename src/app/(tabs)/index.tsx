import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Card from '@/src/components/Card'
import Section from '@/src/components/Section'

export default function index() {

  return (
    <View style={styles.container}>

      <Section text='Practices' label='view all'/>
      
      <View style={styles.cardView}>
          <Card title='Teste' label='isisaias'/>
          <Card title='Teste' label='isisaias'/>
          <Card title='Teste' label='isisaias'/>
          <Card title='Teste' label='isisaias'/>
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
    backgroundColor: '#f1f1ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '80%',
    height: 'auto',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
  }
});