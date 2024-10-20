import React from 'react'
import { COLORS } from '@constants/index';
import { ActivityIndicator } from 'react-native'

const Loader = (): React.JSX.Element => {
    return (
        <ActivityIndicator
            size={35}
            color={COLORS.BLACK}
            shouldRasterizeIOS={true}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        />
    )
}

export default Loader