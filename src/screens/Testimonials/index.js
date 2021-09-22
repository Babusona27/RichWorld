import React, { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity, BackHandler, Alert, ActivityIndicator } from 'react-native';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles";
import HTMLView from 'react-native-htmlview';
import { Rating } from 'react-native-ratings';
function Testimonials({ navigation }) {



  useEffect(() => {
  }, [navigation]);

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.filterBar}>
        <Text style={styles.CategoryText2}>Testimonials</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>

        <View style={styles.card}>
          <View style={styles.imageouter}>
            <Image style={styles.userImage} source={require('../../assets/Image/profile.jpg')} />
            <View style={{ flex: 1 }}>
              <Text style={styles.userName}>John Snow</Text>
              <Text style={styles.date}>March 14,2021</Text>
              <Rating
                startingValue={4}
                ratingCount={5}
                showRating={false}
                imageSize={20}
                style={{ alignSelf: 'flex-start' }}
              />
            </View>
          </View>
          <HTMLView
            value={'Vivamus a lectus feugiat, feugiat ex ac, mollis massa. Duis malesuada efficitur sapien, eu blandit risus pharetra eget. Nunc elementum tellus ligula, at vestibulum lorem auctor vel. Pellentesque volutpat tempus imperdiet. Aenean ut malesuada augue. In commodo vitae felis eu ornare.'}
            stylesheet={styles}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.imageouter}>
            <Image style={styles.userImage} source={require('../../assets/Image/profile.jpg')} />
            <View style={{ flex: 1 }}>
              <Text style={styles.userName}>John Snow</Text>
              <Text style={styles.date}>March 14,2021</Text>
              <Rating
                startingValue={4}
                ratingCount={5}
                showRating={false}
                imageSize={20}
                style={{ alignSelf: 'flex-start' }}
              />
            </View>
          </View>
          <HTMLView
            value={'Vivamus a lectus feugiat, feugiat ex ac, mollis massa. Duis malesuada efficitur sapien, eu blandit risus pharetra eget. Nunc elementum tellus ligula, at vestibulum lorem auctor vel. Pellentesque volutpat tempus imperdiet. Aenean ut malesuada augue. In commodo vitae felis eu ornare.'}
            stylesheet={styles}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.imageouter}>
            <Image style={styles.userImage} source={require('../../assets/Image/profile.jpg')} />
            <View style={{ flex: 1 }}>
              <Text style={styles.userName}>John Snow</Text>
              <Text style={styles.date}>March 14,2021</Text>
              <Rating
                startingValue={4}
                ratingCount={5}
                showRating={false}
                imageSize={20}
                style={{ alignSelf: 'flex-start' }}
              />
            </View>
          </View>
          <HTMLView
            value={'Vivamus a lectus feugiat, feugiat ex ac, mollis massa. Duis malesuada efficitur sapien, eu blandit risus pharetra eget. Nunc elementum tellus ligula, at vestibulum lorem auctor vel. Pellentesque volutpat tempus imperdiet. Aenean ut malesuada augue. In commodo vitae felis eu ornare.'}
            stylesheet={styles}
          />
        </View>

      </ScrollView>
      <Footer navigation={navigation} />
    </>
  )

}


export default Testimonials;