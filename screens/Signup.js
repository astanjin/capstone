import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'

//formik
import { Formik, validateYupSchema } from 'formik'

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper'

//API client
import axios from 'axios'

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
const { brand, darkLight, primary } = Colors

import { View, TouchableOpacity, ActivityIndicator } from 'react-native'

const Signup = ({ navigation }) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date(2000,0,1))

    const [ message, setMessage ] = useState()
    const [ messageType, setMessageType ] = useState()

    //Actual date of birth to be sent
    const [dob, setDob] = useState()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(false)
        setDate(currentDate)
        setDob(currentDate)
    }

    const showDatePicker = () => {
        setShow(true)
    }

    

    const handleSignup = (credentials, setSubmitting) => {

        handleMessage(null)
        
        const url = 'https://tranquil-inlet-31984.herokuapp.com/user/signup'

        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data
                const {message, status, data} = result

                if(status !== 'SUCCESS'){
                    handleMessage(message, status)
                } else {
                    navigation.navigate('Welcome', {...data})
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

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer>
            <PageLogo source={require('./../assets/img/signup.png')} />
                <PageTitle>IT Book Store</PageTitle>
                <Subtitle>Signup</Subtitle>

            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display='default'
                onChange={onChange}
                />
            )}

                <Formik
                    initialValues={{ name: '', email:'', password: '', confirmPassword: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        values = {...values}
                        if(values.name == '' || values.email == '' || values.password == '' || values.confirmPassword == ''){
                            handleMessage('Please fill all the fields')
                            setSubmitting(false)
                        } else if(values.password !== values.confirmPassword){
                            handleMessage('Passwords do not match!')
                            setSubmitting(false)
                        } else {
                            handleSignup(values, setSubmitting)
                        }
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    <StyledFormArea>
                        <MyTextInput  label="Full Name"
                        icon="person"
                        placeHolder="Gus Beltran"
                        placeHolderTextColor={darkLight}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        />

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
                        placeHolderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        />

                        <MyTextInput  label="Confirm Password"
                        icon="lock"
                        placeHolder="********"
                        placeHolderTextColor={darkLight}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        />


                        <MsgBox type={messageType}>{message}</MsgBox>                      

                        {!isSubmitting && 
                        <StyledButton onPress={handleSubmit}>
                        <ButtonText>Signup</ButtonText>
                        </StyledButton>}

                        {isSubmitting && 
                        <StyledButton disabled={true}>
                            <ActivityIndicator size="large" color="primary" />
                        </StyledButton>}



                        {/* <Line /> */}
                        

                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink onPress={() => navigation.navigate('Login')}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props} />
                </TouchableOpacity>}
            
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;

