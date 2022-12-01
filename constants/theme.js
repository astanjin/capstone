import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export const COLORS = {
    // base colors
    primary: "#fff",
    secondary: "#000",

    // colors
    black: "#000",
    white: "#fff",
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    darkLight: "#EFEFF0",
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',

    gray: "#2D3038",
    gray1: "#282C35",
    darkRed: "#31262F",
    lightRed: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#424BAF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",
    blue: "#0d00ff",
    red: "#ff0000",
    orange: "#FFA500",

    darkBlue2: '#031829',
    darkOrange: "#CC5500",
    mustard: "#FFDB58",
    yellow: "#FFFF00",
    purple: "#800080",
    lightpurple: "#CBC3E3",
    darkpurple: "#DA70D6",
    babyblue: "#0073ff"

};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 40,
    h1: 10,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 12,
    body5: 10,

    // app dimensions
    width,
    height
}

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 20 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 12 },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme