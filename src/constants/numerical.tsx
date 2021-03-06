import React from 'react'
import { useWindowDimensions } from 'react-native'

export function Numericals() {
    const { width, height } = useWindowDimensions();

    return {
        WIDTH: width,
        HEIGHT: height,
        INLINE_GAP: 20,
        FONT_ELARGE: 27,
        FONT_FLARGE: 30,
        FONT_GLARGE: 35,
        FONT_LARGE: 23,
        FONT_MID: 18,
        FONT_SMALL: 13,
        FONT_XSMALL: 12,
        BUTTON_HEIGHT: 50,
        DEFAUTL_SPACE: 10,
        ICON_SIZE: 23,
        ANIM_WIDTH: 300,
        ANIM_HEIGHT: 250,
        BORDER_WIDTH: 1,
        BORDER_WIDTH_SMALL: 0.7,
        BORDER_RADIUS: 10,
        BUTTON_PADDING: 15,
        BORDER_RADIUS_CIRCULAR: 200
    }
}

