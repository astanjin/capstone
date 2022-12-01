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
    Avatar
} from '../components/styles'


const Welcome = ({ navigation, route }) => {
    const {name, email } = route.params


    return (
        <>
            <StatusBar backgroundColor="#4287f5" />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/books.png')} />
                
                <WelcomeContainer>
                <PageTitle welcome={true}>Hello there!</PageTitle>
                
                    <StyledFormArea>
                    <Subtitle welcome={true}>{name || 'Homer Simpson'}</Subtitle>
                    <Avatar resizeMode="cover" source={require('./../assets/img/Homer_Simpson_2006.png')} />
                    {/* <Line /> */}
                    
                    <Subtitle welcome={true}>{email || 'donut@isotopes.com'}</Subtitle>
                        <StyledButton onPress={() => navigation.navigate('Home')}>
                            <ButtonText>Go to the Store!</ButtonText>
                        </StyledButton>                        
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}



export default Welcome;

