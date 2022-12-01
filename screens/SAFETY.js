import React from "react"
import { ScrollView, FlatList, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images } from '../constants'

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Search = ({ navigation }) => {

    const profileData = {
        name: 'John Doe',
        point: 2
    }

    const bloodSweatPixels = {
        id: 1,
        bookName: "Blood, Sweat, and Pixels",
        bookCover: images.bloodSweatPixels,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Jason Schreier",
        genre: [
            "Games", "Data Science"
        ],
        readed: "12M",
        description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
        backgroundColor: "rgba(200,240,232,0.9)",
        navTintColor: "#000"
    }

    const cleanCode = {
        id: 2,
        bookName: "Superman Vol I",
        bookCover: images.cleanCode,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Jerry Siegel",
        genre: [
            "Adventure", "Comics"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }

    const crackingCodingInterview = {
        id: 3,
        bookName: "The Tiny Dragon",
        bookCover: images.crackingCodingInterview,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const designingDataIntensive = {
        id: 4,
        bookName: "The Prophet",
        bookCover: images.designingDataIntensive,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "Khalil Gibran",
        genre: [
            "Fantasy", "Adventure"
        ],
        readed: "133k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.4)",
        navTintColor: "#FFF"
    }    

    const machineLearning = {
        id: 5,
        bookName: "The Art of War",
        bookCover: images.machineLearning,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "Sun Tzu",
        genre: [
            "Drama", "War"
        ],
        readed: "433k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.6)",
        navTintColor: "#FFF"
    }   

    const pythonCrashCourse = {
        id: 6,
        bookName: "The Silmarillion",
        bookCover: images.pythonCrashCourse,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "J.R.R. Tolkien",
        genre: [
            "Fantasy", "Adventure"
        ],
        readed: "133k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }   

    const spiesLiesAlgo = {
        id: 7,
        bookName: "The Alchemist",
        bookCover: images.spiesLiesAlgo,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Paulo Coelho",
        genre: [
            "Romance", "Adventure", "Fantasy", "Sci-Fi"
        ],
        readed: "12M",
        description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
        backgroundColor: "rgba(200,240,232,0.9)",
        navTintColor: "#000"
    }

    const sqlStartGuide = {
        id: 8,
        bookName: "Superman Vol I",
        bookCover: images.sqlStartGuide,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Jerry Siegel",
        genre: [
            "Adventure", "Comics"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }

    const survivalGuide = {
        id: 9,
        bookName: "The Tiny Dragon",
        bookCover: images.survivalGuide,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const tacticalLinkedIn = {
        id: 10,
        bookName: "The Prophet",
        bookCover: images.tacticalLinkedIn,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "Khalil Gibran",
        genre: [
            "Fantasy", "Adventure"
        ],
        readed: "133k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.4)",
        navTintColor: "#FFF"
    }    

    const theLoop = {
        id: 11,
        bookName: "The Art of War",
        bookCover: images.theLoop,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "Sun Tzu",
        genre: [
            "Drama", "War"
        ],
        readed: "433k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.6)",
        navTintColor: "#FFF"
    }   

    const wtfPassword = {
        id: 12,
        bookName: "The Silmarillion",
        bookCover: images.wtfPassword,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "J.R.R. Tolkien",
        genre: [
            "Fantasy", "Adventure"
        ],
        readed: "133k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }   
    const htmlCss = {
        id: 13,
        bookName: "The Tiny Dragon",
        bookCover: images.htmlCss,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const pragmaticProgrammer = {
        id: 14,
        bookName: "The Prophet",
        bookCover: images.pragmaticProgrammer,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "Khalil Gibran",
        genre: [
            "Fantasy", "Adventure"
        ],
        readed: "133k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.4)",
        navTintColor: "#FFF"
    }    

    const trafficSecrets = {
        id: 15,
        bookName: "The Art of War",
        bookCover: images.trafficSecrets,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "Sun Tzu",
        genre: [
            "Drama", "War"
        ],
        readed: "433k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.6)",
        navTintColor: "#FFF"
    }   

    const cryptoCurrency = {
        id: 16,
        bookName: "The Silmarillion",
        bookCover: images.cryptoCurrency,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "J.R.R. Tolkien",
        genre: [
            "Fantasy", "Adventure"
        ],
        readed: "133k",
        description: "In a distant, timeless place, a mysterious prophet walks the sands. At the moment of his departure, he wishes to offer the people gifts but possesses nothing. The people gather round, each asks a question of the heart, and the man's wisdom is his gift. It is Gibran's gift to us, as well, for Gibran's prophet is rivaled in his wisdom only by the founders of the world's great religions. On the most basic topics--marriage, children, friendship, work, pleasure--his words have a power and lucidity that in another era would surely have provoked the description. Free of dogma, free of power structures and metaphysics, consider these poetic, moving aphorisms a 20th-century supplement to all sacred traditions--as millions of other readers already have. --Brian Bruya",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }   

    const myBooksData = [
        {
            ...bloodSweatPixels,
            completion: "75%",
            lastRead: "3d 5h",
            value: "$100"
        },
        {
            ...cleanCode,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...crackingCodingInterview,
            completion: "10%",
            lastRead: "1d 2h",

        },
        {
            ...designingDataIntensive,
            completion: "10%",
            lastRead: "1d 2h",

        },
        {
            ...machineLearning,
            completion: "0%",
            lastRead: "N/A",

        },
        {
            ...pythonCrashCourse,
            completion: "0%",
            lastRead: "N/A",

        },
        {
            ...spiesLiesAlgo,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...sqlStartGuide,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...survivalGuide,
            completion: "10%",
            lastRead: "1d 2h",

        },
        {
            ...tacticalLinkedIn,
            completion: "10%",
            lastRead: "1d 2h",

        },
        {
            ...theLoop,
            completion: "0%",
            lastRead: "N/A",

        },
        {
            ...wtfPassword,
            completion: "0%",
            lastRead: "N/A",

        },
        {
            ...htmlCss,
            completion: "10%",
            lastRead: "1d 2h",

        },
        {
            ...pragmaticProgrammer,
            completion: "10%",
            lastRead: "1d 2h",

        },
        {
            ...trafficSecrets,
            completion: "0%",
            lastRead: "N/A",

        },
        {
            ...cryptoCurrency,
            completion: "0%",
            lastRead: "N/A",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "All",
            books: [
                bloodSweatPixels, cleanCode, crackingCodingInterview, designingDataIntensive, machineLearning, pythonCrashCourse, spiesLiesAlgo,
                sqlStartGuide, survivalGuide, tacticalLinkedIn, theLoop, wtfPassword, htmlCss, pragmaticProgrammer, trafficSecrets, cryptoCurrency
            ]
        },
        {
            id: 2,
            categoryName: "Best Seller",
            books: [
                bloodSweatPixels, cleanCode, crackingCodingInterview
            ]
        },
        {
            id: 3,
            categoryName: "The Latest",
            books: [
                cleanCode, designingDataIntensive
            ]
        },
        {
            id: 4,
            categoryName: "Coming Soon",
            books: [
                crackingCodingInterview,
            ]
        },
        {
            id: 5,
            categoryName: "Community Favorites",
            books: [
                designingDataIntensive, machineLearning
            ]
        },
        {
            id: 6,
            categoryName: "Wishlist",
            books: [
                machineLearning, pythonCrashCourse
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader(profile) {
        return (
            <View style={{ flex: 3, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>

                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }, {marginTop: 25}}>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>IT Book Store</Text>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{profile.name} <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>logged in</Text></Text>
                        
                    </View>
                </View>

                {/* Go to CART */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        marginTop: 20,
                        paddingLeft: 7,
                        paddingRight: SIZES.radius,
                        borderRadius: 20
                    }}
                    onPress={() => { console.log("Go to CART") }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Image
                                source={icons.back_arrow_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>

                        <Text style={{ marginLeft: SIZES.base, color: COLORS.black, ...FONTS.body3 }}>{profile.point} items on CART</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonSection() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
                <View style={{ flexDirection: 'row', height: 38, backgroundColor: "rgba(200,240,232,0.1)", borderRadius: SIZES.radius }}>
                    {/* Profile */}
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => console.log("Profile")}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.page_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Settings */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Settings")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.page_filled_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Settings</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Wishlist */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Wishlist")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.more_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Wishlist</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderMyBookSection(myBooks) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 160,
                            height: 220,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 4, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 4, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                        {/* <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        /> */}
                        <Text style={{ marginLeft: 4, ...FONTS.body3, color: COLORS.lightGray }}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Books</Text>

                    <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
                    </TouchableOpacity>
                </View>

                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("BookDetail", {
                            book: item
                        })}
                    >
                        {/* Book Cover */}
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                            {/* Book Info */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                            </View>

                            {/* Genre */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Games") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Games</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Python") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Python</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Data Science") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.lightBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.white }}>Data Science</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Cryptography") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.white }}>Fantasy</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Web") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.lightGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Sci-Fi</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Full Stack") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>War</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("DevOps") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Comics</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Cloud") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Comics</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("SQL") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Comics</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Database") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Comics</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Non-SQL") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Comics</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Javascript") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Comics</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Front-End") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Comics</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Bookmark Button */}
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 5, right: 15 }}
                        onPress={() => navigation.navigate("BookDetail", {
                            book: item
                        })}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header Section */}
            <View style={{ height: 150, backgroundColor: COLORS.gray }}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: 5 }}>
                
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Search