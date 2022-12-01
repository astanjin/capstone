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
    Avatar
} from '../components/styles'

import { BlurView } from "expo-blur";

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const Cart = ({ navigation }) => {

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
            price: "$9.99",
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
            name: "Introduction to Machine Learning with Python",
            img: images.machineLearningwithPython,
            bgColor: "#414045",
            type: "M-Learning",
            price: "$71.70",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 1,
            name: "Coding All-In-One",
            img: images.codingAllinOneForDummies,
            bgColor: "#4EABA6",
            type: "Coding",
            price: "$41.06",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 2,
            name: "Mastering Regular Expressions",
            img: images.masteringRegularExpressions,
            bgColor: "#2B4660",
            type: "Coding",
            price: "$52.39",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 3,
            name: "The Linux Command Line",
            img: images.linuxCommandLine,
            bgColor: "#A69285",
            type: "Networking",
            price: "$45.11",
            sizes: ["ePub", "Kindle", "Mobi", "PDF"],
            paymethod: ["Visa", "MC", "PayPal", "Debit"]
        },
        {
            id: 4,
            name: "Grokking Algorithms",
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
                            width: 130,
                            height: 100,
                        }}
                    />
                </View>
                <View style={{ flex: 2, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.gray1, ...FONTS.body3 }}>{item.name}</Text>
                    <Text style={{ ...FONTS.h3 }}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderShoeSizes() {
        return (
            selectedItem.sizes.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            width: 42,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 5,
                            marginBottom: 10,
                            backgroundColor: selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
                            borderWidth: 1,
                            borderColor: COLORS.white,
                            borderRadius: 5,
                        }}
                        onPress={() => {
                            setSelectedSize(item)
                        }}
                    >
                        <Text style={{ color: selectedItem.sizes[index] == selectedSize ? COLORS.black : COLORS.white, ...FONTS.body4 }}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    function renderPaymentMethods() {
        return (
            selectedItem.paymethod.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            width: 42,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 5,
                            marginBottom: 10,
                            backgroundColor: selectedItem.paymethod[index] == selectedPayMethod ? COLORS.white : null,
                            borderWidth: 1,
                            borderColor: COLORS.white,
                            borderRadius: 5,
                        }}
                        onPress={() => {
                            setSelectedPayMethod(item)
                        }}
                    >
                        <Text style={{ color: selectedItem.paymethod[index] == selectedPayMethod ? COLORS.black : COLORS.white, ...FONTS.body5 }}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 58, marginHorizontal: SIZES.padding, ...FONTS.h2, color: 'white' }}>Wishlist</Text>

            <View style={{ height: 170, marginTop: 0 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderTrendingShoes(item, index)}
                />
            </View>

            <View
                style={[{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 25,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: COLORS.lightGray4
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
                <Text style={{ marginTop: 12, marginHorizontal: 105, ...FONTS.h2, color: 'white' }}>Cart</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
                    />
                    
                </View>
                
            </View>
            <StyledButton onPress={() => navigation.navigate('Home')}>
                            <ButtonText>Store</ButtonText>
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
                            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.largeTitle }}>{selectedItem.price}</Text>


                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                                <View>
                                    <Text style={{ color: COLORS.orange, ...FONTS.body3 }}>Book type</Text>
                                </View>
                                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>
                                    {renderShoeSizes()}
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                                <View>
                                    <Text style={{ color: COLORS.orange, ...FONTS.body3 }}>Pay with</Text>
                                </View>
                                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>
                                    {renderPaymentMethods()}
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={() => [navigation.navigate('Checkout'), setShowAddToBagModal(false)]}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Checkout</Text>
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

export default Cart;