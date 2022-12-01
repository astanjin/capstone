import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'

//formik
import { Formik, validateYupSchema } from 'formik'

import {
    InnerContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
    LogoutImage
} from '../components/styles'


const Logout = ({ navigation }) => {


    return (
        <>
            <StatusBar style='dark'/>
            <InnerContainer>
                <LogoutImage resizeMode="cover" source={require('./../assets/img/logout.png')} />
                <WelcomeContainer></WelcomeContainer>
                <WelcomeContainer>
                <PageTitle welcome={true}>Logged out</PageTitle>
                <Avatar resizeMode="cover" source={require('./../assets/img/Homer_Simpson_2006.png')} />
                <Subtitle welcome={true}>Homer Jay</Subtitle>
                    <StyledFormArea>
                    
                        <StyledButton onPress={() => navigation.navigate('Login')}>
                            <ButtonText>Log back in</ButtonText>
                        </StyledButton>                        
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}



export default Logout;

