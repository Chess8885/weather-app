import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WeatherInfo({currentWeather}) {
    const { main : { temp },
            weather: [details],
            name} = currentWeather
    const { icon } = details
    const iconUrl = `https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg`
    return (
        <View style = {styles.WeatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri : iconUrl }} />
            <Text> {temp} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
WeatherInfo: {
    alignItems: 'center',
},
weatherIcon : {
    width: 100,
    height: 100,
},
})