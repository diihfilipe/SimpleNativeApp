import { Dimensions } from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet'

const imageWitdh = Dimensions.get('window').width

export default EStyleSheet.create({
    container: {
        alignItems: `center`,
    },
    containerImage: {
        alignItems: `center`,
        justifyContent: `center`,
        width: imageWitdh,
        height: imageWitdh,
    }
})