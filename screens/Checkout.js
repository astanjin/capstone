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
    CheckoutImage
} from '../components/styles'




const Checkout = ({ navigation }) => {


    return (
        <>
            <StatusBar style='dark'/>
            <InnerContainer>
                <CheckoutImage resizeMode="cover" source={require('./../assets/img/payment_success.png')} />
                
                <WelcomeContainer>
                    
                <PageTitle welcome={true}>Payment Successful</PageTitle>
                <Subtitle welcome={true}>Confirmation</Subtitle>
                <Subtitle welcome={true}>54654234-1</Subtitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/img/Homer_Simpson_2006.png')} />
                    <Line />
                        <StyledButton onPress={() => navigation.navigate('Cart')}>
                            <ButtonText>Go Back</ButtonText>
                        </StyledButton>    
                        <StyledButton onPress={() => navigation.navigate('Home')}>
                            <ButtonText>Go to Store</ButtonText>
                        </StyledButton>                        
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}



export default Checkout;

