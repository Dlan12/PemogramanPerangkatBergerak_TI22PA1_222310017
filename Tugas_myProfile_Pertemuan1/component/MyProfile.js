import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyProfile extends Component {
  render() {
    return (
      <View>
        <Text>Nama      : M. Fadlan Syakur P</Text>
        <Text>NPM       : 222310017</Text>
        <Text>Kelas     : TI-22-PA</Text>
        <Text>Jurusan   : Teknologi Informasi S1</Text>
        <Text>Hobi      : Watching Movies</Text>
        <Text>Peminatan : Desain Grafis / UI & UX </Text>
      </View>
    )
  }
}