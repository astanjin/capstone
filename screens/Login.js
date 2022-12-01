import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'

//formik
import { Formik, validateYupSchema } from 'formik'

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../components/styles'

//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

//colors
const { brand, darkLight, primary, green, orange } = Colors

import { View, ActivityIndicator } from 'react-native'

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper'

//Google Auth
import  * as Google from 'expo-auth-session'


//API client
import axios from 'axios'

const Login = ( { navigation }) => {

    const [ hidePassword, setHidePassword ] = useState(true)
    const [ message, setMessage ] = useState()
    const [ messageType, setMessageType ] = useState()
    const [ googleSubmitting, setGoogleSubmitt] = useState(false)

    const handleLogin = (credentials, setSubmitting) => {

        handleMessage(null)
        
        const url = 'https://tranquil-inlet-31984.herokuapp.com/user/signin'

        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data
                const {message, status, data} = result

                if(status !== 'SUCCESS'){
                    handleMessage(message, status)
                } else {
                    navigation.navigate('Welcome', {...data[0]})
                }
                setSubmitting(false)
            })
            .catch(error => {
            console.log(error.JSON())
            setSubmitting(false)
            handleMessage("An error occurred. Check the network...")
        })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message)
        setMessageType(type)
    }

    const handleGoogleSignin = () => {
        setGoogleSubmitt(true)
        const config = { 
            iosClientId: `871398099029-ufbsvm6slqdme5rg7ooglcc3hsafflot.apps.googleusercontent.com`, 
            androidClientId: `871398099029-8n8vfk41uqct1ljun4uk9rm2te2uj337.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        }

        Google.logInAsync(config)
        .then((result) => {
            const {type, user} = result 

            if(type == 'success') {
                const {email, name, photoUrl} = user
                handleMessage('Google sigin successful', 'SUCCESS')
                setTimeout(() => navigation.navigate('Welcome', {email, name, photoUrl}), 1000)
            } else {
                handleMessage('Google signin was cancelled')
            }
            setGoogleSubmitt(false)
        })
        .catch(error => {
            console.log(error)
            handleMessage('An error occurred. Check the Network...')
            setGoogleSubmitt(false)
        })
    }

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer>
                <PageLogo source={require('./../assets/img/books1.png')} />
                <PageTitle>IT Book Store</PageTitle>
                <Subtitle></Subtitle>

                <Formik
                    initialValues={{email:'', password: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        if(values.email == '' || values.password == ''){
                            handleMessage('Please fill all the fields')
                            setSubmitting(false)
                        } else {
                            handleLogin(values, setSubmitting)
                        }
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MyTextInput  label="Email Address"
                        icon="mail"
                        placeHolder="test@test.com"
                        placeHolderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                        />

                        <MyTextInput  label="Password"
                        icon="lock"
                        placeHolder="********"
                        placeHolderTextColor={green}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        />
                        <MsgBox type={messageType}>{message}</MsgBox>

                        {!isSubmitting && 
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>}

                        {isSubmitting && 
                        <StyledButton disabled={true}>
                            <ActivityIndicator size="large" color="primary" />
                        </StyledButton>}

                        {/* <Line /> */}
                        <StyledContainer></StyledContainer>
                        {!googleSubmitting && (
                        <StyledButton google={true} onPress={handleGoogleSignin}>
                            <Fontisto name="google" color={orange} size={25} />
                            <ButtonText google={true}>Sign in with Google</ButtonText>
                        </StyledButton>
                        )}

                        {googleSubmitting && (
                        <StyledButton google={true} disabled={true}>
                            <ActivityIndicator size="large" color="primary" />
                        </StyledButton>
                        )}

                        <ExtraView>
                            <ExtraText>Don't Have an account?</ExtraText>
                            <TextLink onPress={() => navigation.navigate('Signup')}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </StyledFormArea>)
                }

                </Formik>

            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;

