import React from 'react'
import { View, Image } from 'react-native'

import styles from './styles'

const Logo = ({ children }) => (
    <View style={styles.container}>
        <Image
            style={styles.containerImage}
            source={require('./images/logo.png')}
            resizeMode='contain'
        />
    </View>
)

export default Logo