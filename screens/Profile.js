import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native'

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
    MyTextInput
} from '../components/styles'

import { BlurView } from "expo-blur";

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { Formik } from 'formik';

const Profile = ({ navigation }) => {

    const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState("")
    const [selectedPayMethod, setSelectedPayMethod] = React.useState("")

    // Dummy Data
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Hacking with Python",
            img: images.hackingwithPython,
            bgColor: "#BF012C",
            type: "Networking",
            price: "$186",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 1,
            name: "Ace Computer Science",
            img: images.aceComputerScienceandCoding,
            bgColor: "#D39C67",
            type: "Coding",
            price: "$11.99",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 2,
            name: "Blood, Sweat, and Pixels",
            img: images.bloodSweatPixels,
            bgColor: "#7052A0",
            type: "Game Design",
            price: "$21.77",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
    ]);

    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Master Card",
            img: images.master_card,
            bgColor: "#414045",
            type: "Credit",
            price: "$71.70",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 1,
            name: "Visa",
            img: images.visa,
            bgColor: "#4EABA6",
            type: "Credit",
            price: "$41.06",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 2,
            name: "PayPal",
            img: images.paypal,
            bgColor: "#2B4660",
            type: "Online Portal",
            price: "$52.39",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 3,
            name: "American Express",
            img: images.amex,
            bgColor: "#A69285",
            type: "Credit",
            price: "$45.11",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 4,
            name: "Interac Debit",
            img: images.interac,
            bgColor: "#A02E41",
            type: "Credit",
            price: "$50.84",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
    ]);

    const [categories, setSetCategory] = React.useState([
        {
            id: 0,
            name: "COMP3133",
            img: images.machineLearningwithPython,
            bgColor: "#414045",
            type: "M-Learning",
            price: "$71.70",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 1,
            name: "COMP3134",
            img: images.security,
            bgColor: "#4EABA6",
            type: "Coding",
            price: "$41.06",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 2,
            name: "Data Science",
            img: images.masteringRegularExpressions,
            bgColor: "#2B4660",
            type: "Coding",
            price: "$52.39",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 3,
            name: "Full Stack",
            img: images.fullstack,
            bgColor: "#A69285",
            type: "Networking",
            price: "$45.11",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 4,
            name: "Networking",
            img: images.grokkingAlgorithms,
            bgColor: "#A02E41",
            type: "DevOps",
            price: "$50.84",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
    ]);


    // Render

    function renderTrendingShoes(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: SIZES.padding, }
        } else {
            trendingStyle = {}
        }

        return (
            <TouchableOpacity
                style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <Text style={{ color: COLORS.primary, ...FONTS.h5, marginTop: 8 }}>{item.type}</Text>

                
                    <View style={{ height: "1%", justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.orange, ...FONTS.body4 }}>{item.name}</Text>
                        <Text style={{ color: COLORS.lightGreen, ...FONTS.h3 }}>{item.price}</Text>
                    </View>

                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 0,
                        width: "100%",
                        height: 100
                    }}
                />
            </TouchableOpacity>
        )
    }

    function renderRecentlyViewed(item, index) {
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', marginTop: 25, marginRight: 25 }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            width: 80,
                            height: 50,
                        }}
                    />
                </View>
                <View style={{ flex: 2, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.lightGray4, ...FONTS.body3 }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderCategories(item, index) {
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', marginTop: 25, marginRight: 25 }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            width: 90,
                            height: 50,
                        }}
                    />
                </View>
                <View style={{ flex: 2, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.lightGray4, ...FONTS.body3 }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        
        <View style={styles.container}>
            
            <Text style={{ marginTop: 58, marginHorizontal: 167, ...FONTS.h2, color: 'white' }}>Profile</Text>

            

            <View
                style={[{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 25,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: COLORS.black
                }, styles.recentContainerShadow]}
            >
                <View style={{ width: 70, marginLeft: SIZES.base }}>
                    <Image
                        source={images.recentlyViewedLabel}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </View>
                <View style={{ flex: 1, paddingBottom: SIZES.padding, marginRight: 50 }}>
                <Text style={{ marginTop: 5, marginHorizontal: 25, ...FONTS.h2, color: 'white', padding: 5  }}>Payment Information</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
                    />
                <Text style={{ marginTop: 7, marginHorizontal: 75, ...FONTS.h2, color: 'white', padding: 5 }}>Categories</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderCategories(item, index)}
                    />
                    
                </View>
                
            </View>
            <StyledButton onPress={() => navigation.navigate('MyLibrary')}>
                            <ButtonText>Back</ButtonText>
                        </StyledButton> 
            <StyledButton onPress={() => navigation.navigate('Home')}>
                            <ButtonText>Save</ButtonText>
                        </StyledButton> 

            {selectedItem &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showAddToBagModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <BlurView
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        blurType="light"
                        blurAmount={20}
                        reducedTransparencyFallbackColor="white"
                    >
                        {/* Button to close modal */}
                        <TouchableOpacity
                            style={styles.absolute}
                            onPress={() => {
                                setSelectedItem(null)
                                setSelectedSize("")
                                setSelectedPayMethod("")
                                setShowAddToBagModal(false)
                            }}
                        >
                        </TouchableOpacity>

                        {/* Modal content */}
                        <View style={{ justifyContent: 'center', width: "85%", backgroundColor: selectedItem.bgColor }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -SIZES.padding * 2 }}>
                                <Image
                                    source={selectedItem.img}
                                    resizeMode="contain"
                                    style={{
                                        width: "90%",
                                        height: 170,
                                        transform: [
                                            { rotate: '-15deg' }
                                        ]
                                    }}
                                />
                            </View>
                            <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body2 }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectedItem.type}</Text>
                            

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={() => [navigation.navigate('Checkout'), setShowAddToBagModal(false)]}
                            >



                                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Modal>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray1
    },
    trendingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    recentContainerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})

export default Profile;