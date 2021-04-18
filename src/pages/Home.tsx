import React from 'react'
import { View, Button } from 'react-native'

export default function Home(props: any) {
    return (
        <View>
            <Button title="Home" onPress={() => props.navigation.push("Login")} />
        </View>
    )
}
