import React from 'react'
import { useWindowDimensions } from 'react-native'

export function Numericals() {
    const { width, height } = useWindowDimensions();

    return {
        WIDTH: width,
        HEIGHT: height,
        INLINE_GAP: 30,
        FONT_ELARGE: 27,
        FONT_LARGE: 23,
        FONT_MID: 18,
        FONT_SMALL: 13,
        BUTTON_HEIGHT: 62,
        DEFAUTL_SPACE: 10,
        ICON_SIZE: 23,
        ANIM_WIDTH: 300,
        ANIM_HEIGHT: 250,
        BORDER_WIDTH: 1,
        BORDER_RADIUS: 10,

    }
}

