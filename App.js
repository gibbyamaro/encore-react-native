import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { React, useEffect, useState } from "react";

export default function App() {

  const [ artistName , setArtistName ] = useState('');
  const [ artistImg , setArtistImg ] = useState('');
  const [ searchArtist, setSearchArtist ] = useState('')
  // const [ venueDate , setVenueDate ] = useState('');
  // const [ venueLocal , setVenueLocal ] = useState('');
  // const [ venueName , setVenueName ] = useState('');

  const returnArtist = async() => {
    const url = `https://rest.bandsintown.com/artists/{${search}}/?app_id=6ed0dff6cbb88185433d8075f85b23d9`;
    const response = await fetch( url );
    const data = await response.json();
    if( data.Search ) {
      setArtistName( data.Search );
    }
  }

  return (
    <View style = { styles.container }>
      <View style = {styles.header}>
        <Image source = { require( './assets/encore.png' ) } />
      </View>
      <View style = { styles.search }>
        <TextInput placeholder = "Search Artist" name = "search" value = { Text } onChangeText = { searchArtist => setSearchArtist( searchArtist ) }/>
      </View>
      <View>
        
      </View>
      {/* <View style = { styles.near }>
        <Text>Near You</Text>
        <Text style = { styles.nearPRect }></Text>
      </View>
      <View style = { styles.pop }>
        <Text>Popular</Text>
        <Text style = { styles.popBRect }></Text>
      </View>
      <View style = { styles.followed }>
        <Text>Following</Text>
        <Text style = { styles.followPurpRect }></Text>
      </View> */}
      <StatusBar style = "auto"/>
    </View>
  );
}

const styles = StyleSheet.create( {
  
  container: {
    flex: 1,
    backgroundColor: '#373737',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    position: 'absolute',
    width: 390,
    height: 100,
    left: 0,
    top: 0,
    backgroundColor: '#4E4F4E',
    justifyContent: 'center',
    alignItems: 'center'
  },

  search: {
    backgroundColor: '#4E4F4E',
    position: 'absolute',
    width: 335,
    height: 25,
    left: 20,
    top: 110,
    justifyContent: 'center',
  }, 

  near: {
    color: "#FFFFFF",
    position: 'absolute',
    width: 191,
    height: 45,
    left: 20,
    top: 110,
  },

  nearPRect: {
    position: 'absolute',
    width: 60,
    height: 4,
    left: 0,
    top: 20,
    backgroundColor: '#FF48D6',
    borderRadius: 20,
  },

  pop: {
    position: 'absolute',
    width: 151,
    height: 40,
    left: 20,
    top: 325,
  },

  popBRect: {
    position: 'absolute',
    width: 50,
    height: 4,
    left: 0,
    top: 20,  
    backgroundColor: '#7148FF',
    borderRadius: 2,
  },

  followed: {
    position: 'absolute',
    width: 193,
    height: 32,
    left: 20,
    top: 537,
  },

  followPurpRect: {
    position: 'absolute',
    width: 60,
    height: 4,
    left: 0,
    top: 20,
    backgroundColor: '#CD48FF',
    borderRadius: 2,
  },

  nav: {
    position: 'absolute',
    width: 390,
    height: 100,
    left: 0,
    top: 773,
    backgroundColor: '#4E4F4E',
    alignItems: 'center',
    justifyContent: 'center',
  },  

} );
