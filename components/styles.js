import styled from 'styled-components'
import { View, Text, Image } from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight

export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#0046b5',
    green: '#00b5b2',
    red: '#EF4444',
    orange: '#FFA500',
    black: '#000',
    white: '#fff'
}

const { primary, secondary, tertiary, darkLight, brand, green, red, black, white, orange } = Colors;

export const TitleText = styled.Text`
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: bold;
    margin-top: 10px;
    color: ${orange}
`

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 5}px;
    background-color: ${tertiary};
`

export const Container = styled.View`
    flex: 1;
    padding: 0px;
    padding-top: 24px;
    background-color: ${tertiary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${tertiary};
`

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`

export const PageLogo = styled.Image`
    width: 150px;
    height: 150px;
`

export const SettingsAvatar = styled.Image`
    width: 100px;
    height: 100px;
`

export const Avatar = styled.Image`
    width: 75px;
    height: 75px;
    margin: auto;
    border-radius: 50px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`

export const WelcomeImage = styled.Image`
    margin-top: 220px;
    margin-left: 20px;
    width: 130px;
    height: 130px;
    margin-bottom: 75px;
`

export const CheckoutImage = styled.Image`
    height: 40%;
    min-width: 100%;
    margin-bottom: 210px;
    margin-top: 48px;
`

export const LogoutImage = styled.Image`
    margin-top: 220px;
    margin-left: 20px;
    width: 130px;
    height: 130px;
`

export const PageTitle = styled.Text`
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
    font-size: 35px;
    `}
`

export const Subtitle = styled.Text`
    font-size: 22px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${green}

    ${(props) => props.welcome && `
    margin-bottom: 5px;
    font-weight: normal;
    `}
`

export const StyledFormArea = styled.View`
    width: 90%;
    height: 474px;    
    align-items: center;
`

export const StyledTextInput = styled.TextInput`
    background-color: rgba(50,50,100,.4);
    width: 275px;
    padding: 10px;
    padding-right: 55px;
    padding-left: 55px;
    border-radius: 5px;
    font-size: 14px;
    height: 45px;
    margin-vertical: 10px;
    margin-bottom: 10px;
    color: ${white}
`

export const StyledInputLabel = styled.Text`
    color: ${white};
    font-size: 15px;
    text-align: left;
`

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 42px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 17px;

    ${(props) => props.google == true && `
        padding-left: 15px;
    `}

`

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${(props) => (props.type == 'SUCCESS' ? green : red)}
`

export const Line = styled.View`
    height: 2.5px;
    width: 100%;
    background-color: ${white};
    margin-vertical: 10px;
`

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${white};
    font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
    padding-left: 6px;
`

