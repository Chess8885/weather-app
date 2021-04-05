import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors} from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function WeatherInfo({currentWeather}) {
    const { main : { temp },
            weather: [details],
            name} = currentWeather
    const { icon, main, description } = details
    const iconUrl = `https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg`
    return (
        <View style = {styles.WeatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri : iconUrl }} />
            <Text style={styles.textPrimary}> {temp} </Text>
            <Text style={styles.weatherDescription}>{description} </Text>
            <Text style={styles.textSecondary}> {main} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
WeatherInfo: {
    alignItems: 'center',
},
weatherDescription: {
textTransform: 'capitalize',
},
weatherIcon : {
    width: 100,
    height: 100,
},
textPrimary : {
    fontSize : 40,
    color: PRIMARY_COLOR
},
textSecondary: {
    fontStyle: 20,
    color: SECONDARY_COLOR,
    fontWeight: '500',
    marginTop: 10
}
})