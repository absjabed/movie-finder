import {Platform} from 'react-native'

export const typography = {
    ubuntuRegular: Platform.select({ios:"Ubuntu-Regular", android: "Ubuntu-Regular"}),
    ubuntuBold: Platform.select({ios:"Ubuntu-Bold", android: "Ubuntu-Bold"}),
    ubuntuLight: Platform.select({ios:"Ubuntu-Light", android: "Ubuntu-Light"}),
    ubuntuMedium: Platform.select({ios:"Ubuntu-Medium", android: "Ubuntu-Medium"}),
    ubuntuMediumItalic: Platform.select({ios:"Ubuntu-MediumItalic", android: "Ubuntu-MediumItalic"})
}