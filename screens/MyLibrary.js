import React from "react"
import { ScrollView, FlatList, SafeAreaView, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images } from '../constants'

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const MyLibrary = ({ navigation }) => {

    const profileData = {
        name: 'Homer Jay',
        point: 5
    }

    const bloodSweatPixels = {
        id: 1,
        bookName: "Blood, Sweat, and Pixels",
        bookCover: images.bloodSweatPixels,
        bookName2: "The Triumphant, Turbulent Stories\nBehind How Video Games Are Made",
        value: 21.77,
        rating: 4.7,
        language: "Eng",
        pageNo: 304,
        author: "Jason Schreier",
        genre: [
            "Games", "Data Science"
        ],
        readed: "9M",
        description: "Developing video games—hero's journey or fool's errand? The creative and technical logistics that go into building today's hottest games can be more harrowing and complex than the games themselves, often seeming like an endless maze or a bottomless abyss. In Blood, Sweat, and Pixels, Jason Schreier takes readers on a fascinating odyssey behind the scenes of video game development, where the creator may be a team of 600 overworked underdogs or a solitary geek genius. Exploring the artistic challenges, technical impossibilities, marketplace demands, and Donkey Kong-sized monkey wrenches thrown into the works by corporate, Blood, Sweat, and Pixels reveals how bringing any game to completion is more than Sisyphean—it's nothing short of miraculous.",
        backgroundColor: "rgba(200,240,232,0.8)",
        navTintColor: "#000"
    }

    const cleanCode = {
        id: 2,
        bookName: "Clean Code",
        bookCover: images.cleanCode,
        bookName2: "A Handbook of Agile Software Craftsmanship",
        value: 39.50,
        rating: 4.7,
        language: "Eng",
        pageNo: 464,
        author: "Robert C. Martin",
        genre: [
            "DevOps", "Coding"
        ],
        readed: "31k",
        description: "Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code–of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.",
        backgroundColor: "rgba(247,139,209,0.8)",
        navTintColor: "#fff"
    }

    const crackingCodingInterview = {
        id: 3,
        bookName: "Cracking the Coding Interview",
        bookCover: images.crackingCodingInterview,
        bookName2: "189 Programming Questions and Solutions",
        value: 41.36,
        rating: 3.5,
        language: "Eng",
        pageNo: 687,
        author: "Gayle Laakmann McDowell",
        genre: [
            "Cyberspace", "Coding", "DevOps"
        ],
        readed: "13k",
        description: `I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer.

        Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.
        `,
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }

    const designingDataIntensive = {
        id: 4,
        bookName: "Designing Data-Intensive Applications",
        bookCover: images.designingDataIntensive,
        bookName2: "Big Ideas Behind Reliable,\nScalable, and Maintainable Systems ",
        value: 68.27,
        rating: 4.5,
        language: "Eng",
        pageNo: 1051,
        author: "Martin Kleppmann",
        genre: [
            "Big Data", "Data Science"
        ],
        readed: "55k",
        description: "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers. What are the right choices for your application? How do you make sense of all these buzzwords?",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }    

    const machineLearning = {
        id: 5,
        bookName: "Hands-On Machine Learning",
        bookCover: images.machineLearning,
        bookName2: "Scikit-Learn, Keras, and TensorFlow",
        value: 32.94,
        rating: 4.5,
        language: "Eng",
        pageNo: 858,
        author: "Aurélien Géron",
        genre: [
            "Data Science", "M-Learning"
        ],
        readed: "433k",
        description: `Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how.

        By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each chapter to help you apply what you’ve learned, all you need is programming experience to get started.`,
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }   

    const pythonCrashCourse = {
        id: 6,
        bookName: "Python Crash Course",
        bookCover: images.pythonCrashCourse,
        bookName2: "2nd Edition",
        value: 36.96,
        rating: 4.7,
        language: "Eng",
        pageNo: 544,
        author: "Eric Matthes",
        genre: [
            "Python", "Coding", "Data Science"
        ],
        readed: "10k",
        description: `Python Crash Course is the world's best-selling guide to the Python programming language. This fast-paced, thorough introduction to programming with Python will have you writing programs, solving problems, and making things that work in no time.

        In the first half of the book, you'll learn basic programming concepts, such as variables, lists, classes, and loops, and practice writing clean code with exercises for each topic. You'll also learn how to make your programs interactive and test your code safely before adding it to a project. In the second half, you'll put your new knowledge into practice with three substantial projects: a Space Invaders-inspired arcade game, a set of data visualizations with Python's handy libraries, and a simple web app you can deploy online.`,
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }   

    const spiesLiesAlgo = {
        id: 7,
        bookName: "Spies, Lies, and Algorithms",
        bookCover: images.spiesLiesAlgo,
        bookName2: "The History and Future of American Intelligence",
        value: 48.20,
        rating: 4.3,
        language: "Eng",
        pageNo: 424,
        author: "Amy Zegart",
        genre: [
            "Data Science", "Cyberspace", "Crypto"
        ],
        readed: "12M",
        description: "In his debut book, Tactical LinkedIn Secrets, David Cobb teaches business professionals to stand out and gain competitive dominance. The advice and knowledge provided through read-worthy mixed metaphors, humor, and rants prepares readers with, what Cobb coins as, arrows for digital quiver. Tactical LinkedIn Secrets educates, creates awareness, advances businesses, assists career seekers, and simply makes an impact on the industry—affecting empathic voices, futures, and financials. Cobb illustrates strategic tactics to maximize the use of LinkedIn for any motivated individual. This text is a digitally immersive experience for business professionals, and tantamount to developing one’s Digital Quiver—an ever-evolving skillset.",
        backgroundColor: "rgba(200,240,232,0.8)",
        navTintColor: "#000"
    }

    const sqlStartGuide = {
        id: 8,
        bookName: "SQL QuickStart Guide",
        bookCover: images.sqlStartGuide,
        bookName2: "The Simplified Beginner's Guide",
        value: 30.99,
        rating: 4.5,
        language: "Eng",
        pageNo: 249,
        author: "Walter Shields",
        genre: [
            "SQL", "Database"
        ],
        readed: "13k",
        description: "SQL QuickStart Guide is ideal for those seeking to increase their job prospects and enhance their careers, for developers looking to expand their programming capabilities, or for anyone who wants to take advantage of our inevitably data-driven future—even with no prior coding experience!",
        backgroundColor: "rgba(247,139,209,0.8)",
        navTintColor: "#000"
    }

    const survivalGuide = {
        id: 9,
        bookName: "A Survival Guide to the Misinformation Age",
        bookCover: images.survivalGuide,
        bookName2: "Scientific Habits of Mind",
        value: 29.70,
        rating: 3.5,
        language: "Eng",
        pageNo: 346,
        author: "David J. Helfand",
        genre: [
            "Coding", "Networking", "DevOps"
        ],
        readed: "44k",
        description: "We have billions of bytes of data at our fingertips. But how much of it is misinformation—or even disinformation? A lot of it is, and your search engine can’t tell the difference.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const tacticalLinkedIn = {
        id: 10,
        bookName: "Tactical LinkedIn Secrets",
        bookCover: images.tacticalLinkedIn,
        bookName2: "Dominate in an Age of Noise",
        value: 24.17,
        rating: 5,
        language: "Eng",
        pageNo: 253,
        author: "David Cobb",
        genre: [
            "Cyberspace", "DevOps"
        ],
        readed: "133k",
        description: "In his debut book, Tactical LinkedIn Secrets, David Cobb teaches business professionals to stand out and gain competitive dominance. The advice and knowledge provided through read-worthy mixed metaphors, humor, and rants prepares readers with, what Cobb coins as, arrows for digital quiver. Tactical LinkedIn Secrets educates, creates awareness, advances businesses, assists career seekers, and simply makes an impact on the industry—affecting empathic voices, futures, and financials. Cobb illustrates strategic tactics to maximize the use of LinkedIn for any motivated individual. This text is a digitally immersive experience for business professionals, and tantamount to developing one’s Digital Quiver—an ever-evolving skillset.",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }    

    const theLoop = {
        id: 11,
        bookName: "The Loop",
        bookCover: images.theLoop,
        bookName2: "How Technology Is Creating a World Without Choices",
        value: 36.63,
        rating: 30,
        language: "Eng",
        pageNo: 315,
        author: "Jacob Ward",
        genre: [
            "Coding", "Back-End"
        ],
        readed: "911k",
        description: "Artificial intelligence is going to change the world as we know it. But the real danger isn't some robot that's going to enslave us: It's our own brain. Our brains are constantly making decisions using shortcuts, biases, and hidden processes—and we're using those same techniques to create technology that makes choices for us. In The Loop, award-winning science journalist Jacob Ward reveals how we are poised to build all of our worst instincts into our AIs, creating a narrow loop where each generation has fewer, predetermined, and even dangerous choices.",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }   

    const wtfPassword = {
        id: 12,
        bookName: "WTF Is My Password",
        bookCover: images.wtfPassword,
        bookName2: "Password Book Log Book ",
        value: 17.05,
        rating: 4.5,
        language: "Eng",
        pageNo: 105,
        author: "Paper Kate Publishing",
        genre: [
            "Networking", "Cryptography"
        ],
        readed: "133k",
        description: `This Password book black frame is designed to keep all your important website addresses, usernames, and passwords in one secure and convenient place.
        The Pages are arranged in alphabetical order, so you can easily and quickly find what you are looking!!`,
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }   
    const htmlCss = {
        id: 13,
        bookName: "HTML and CSS",
        bookCover: images.htmlCss,
        bookName2: "Design and Build Websites",
        value: 65.50,
        rating: 4.7,
        language: "Eng",
        pageNo: 490,
        author: "John Wiley & Sons",
        genre: [
            "Web", "Coding", "Cyberspace"
        ],
        readed: "13k",
        description: `A full-color introduction to the basics of HTML and CSS from the publishers of Wrox!
        Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.
        `,
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const pragmaticProgrammer = {
        id: 14,
        bookName: "The Pragmatic Programmer",
        bookCover: images.pragmaticProgrammer,
        bookName2: "Your Journey to Mastery",
        value: 79.99,
        rating: 4.1,
        language: "Eng",
        pageNo: 354,
        author: "David Thomas",
        genre: [
            "Coding", "Full Stack"
        ],
        readed: "33k",
        description: "Whether you’re a new coder, an experienced programmer, or a manager responsible for software projects, use these lessons daily, and you’ll quickly see improvements in personal productivity, accuracy, and job satisfaction. You’ll learn skills and develop habits and attitudes that form the foundation for long-term success in your career. You’ll become a pragmatic programmer.",
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }    

    const trafficSecrets = {
        id: 15,
        bookName: "Traffic Secrets",
        bookCover: images.trafficSecrets,
        bookName2: "The Underground Playbook",
        value: 35.50,
        rating: 4.5,
        language: "Eng",
        pageNo: 110,
        author: "Russell Brunson",
        genre: [
            "Networking", "Cyberspace"
        ],
        readed: "433k",
        description: `Traffic Secrets was recorded to help you get your message out to the world about your products and services. I strongly believe that entrepreneurs are the only people on earth who can actually change the world. It won't happen in government, and I don't think it will happen in schools.  
        It'll happen because of entrepreneurs like you, who are crazy enough to build products and services that will actually change the world. It'll happen because we are crazy enough to risk everything to try to make that dream become a reality
        `,
        backgroundColor: "rgba(119,77,143,0.8)",
        navTintColor: "#FFF"
    }   

    const cryptoCurrency = {
        id: 16,
        bookName: "Cryptocurrency Investing",
        bookCover: images.cryptoCurrency,
        bookName2: "The Only Cryptocurrency Investing Book You'll Ever Need",
        value: 16.95,
        rating: 4.7,
        language: "Eng",
        pageNo: 184,
        author: "Freeman Publications",
        genre: [
            "Cryto", "Data Science"
        ],
        readed: "13k",
        description: `If you feel like you’ve “missed the boat” on Crypto. Think again…
        Because while the crypto market increased 10x in the past year alone, this book will show you it’s not too late to invest in the #1 asset of the 2020s
        What was once a fringe currency only used by a dark corner of the web… is now the fastest growing financial asset on Earth.
        `,
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }   

    const dataStructuresandAlgorithms = {
        id: 17,
        bookName: "Data Structures and Algorithms",
        bookCover: images.dataStructuresandAlgorithms,
        bookName2: "A Common-Sense Guide",
        value: 51.17,
        rating: 4.7,
        language: "Eng",
        pageNo: 508,
        author: "Jay Wengrow",
        genre: [
            "Networking", "DevOps", "Big Data", "Data Science"
        ],
        readed: "13k",
        description: "Algorithms and data structures are much more than abstract concepts. Mastering them enables you to write code that runs faster and more efficiently, which is particularly important for todayâ€™s web and mobile apps. Take a practical approach to data structures and algorithms, with techniques and real-world scenarios that you can use in your daily production code, with examples in JavaScript, Python, and Ruby. This new and revised second edition features new chapters on recursion, dynamic programming, and using Big O in your daily work.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const StepbyStepCodingCourse = {
        id: 18,
        bookName: "Step-by-Step Coding Course",
        bookCover: images.StepbyStepCodingCourse,
        bookName2: "Learn Computer Programming\nthe Easy Way",
        value: 31.37,
        rating: 4.6,
        language: "Eng",
        pageNo: 272,
        author: "Craig Steele",
        genre: [
            "Coding", "Web", "Full Stack"
        ],
        readed: "13k",
        description: "Coding skills are in high demand and the need for programmers is still growing. Covering three of the most popular languages for new coders, this book uses a graphic method to break complex subjects into user-friendly chunks, bringing essential skills within easy reach. Each chapter contains tutorials on practical projects designed to teach you the main applications of each language, such as building websites, creating games, and designing apps. The book also looks at many of the main coding languages that are out there, outlining the key applications of each language, so you can choose the right language for you.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const ccnaOfficialCertGuide = {
        id: 19,
        bookName: "CCNA 200-301 Official Cert Guide",
        bookCover: images.ccnaOfficialCertGuide,
        bookName2: "Volume I",
        value: 55.59,
        rating: 4.8,
        language: "Fr",
        pageNo: 272,
        author: "Wendell Odom",
        genre: [
            "Networking", "DevOps", "Cloud", "Web"
        ],
        readed: "13k",
        description: "Faites confiance à la série de guides officiels certifiés les plus vendus de Cisco Press pour vous aider à apprendre, à vous préparer et à vous entraîner à réussir vos examens. Il est construit dans le but de fournir une évaluation, une révision et une pratique pour vous aider à vous assurer que vous êtes pleinement préparé pour votre examen de certification. Ce livre, combiné avec le CCNA 200-301 Official Cert Guide Volume 1, couvre tous les sujets d'examen de l'examen CCNA 200-301.CCNA 200-301 Official Cert Guide, Volume 2 vous présente une routine organisée de préparation aux tests utilisant des éléments et des techniques de série éprouvés. «Est-ce que je le sais déjà?» les quiz ouvrent chaque chapitre et vous permettent de décider du temps que vous devez consacrer à chaque section. Les listes de sujets d'examen facilitent le référencement. Les tâches de préparation aux examens de fin de chapitre vous aident à approfondir les concepts clés que vous devez connaître à fond.· Maîtriser les sujets d'examen Cisco CCNA 200-301· Évaluez vos connaissances avec des quiz d'ouverture de chapitre· Revoir les concepts clés avec les tâches de préparation aux examens· Pratiquez avec des questions d'examen réalistes dans le logiciel de test pratiqueCCNA 200-301 Official Cert Guide, Volume 2 de Cisco Press vous permet de réussir l'examen la première fois et est la seule ressource d'auto-apprentissage approuvée par Cisco. L'auteur à succès Wendell Odom partage des conseils de préparation et des conseils pour passer des tests, vous aidant à identifier les points faibles et à améliorer à la fois vos connaissances conceptuelles et vos compétences pratiques.Ce package d'étude complet comprend· Une routine de préparation aux tests éprouvée pour vous aider à réussir les examens· Est-ce que je le sais déjà? des quiz, qui vous permettent de décider du temps que vous devez consacrer à chaque section· Tableaux des sujets clés de fin de chapitre, qui vous aident à explorer les concepts clés que vous devez connaître à fond",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const informationSystemsSecurity = {
        id: 20,
        bookName: "Information Systems Security",
        bookCover: images.informationSystemsSecurity,
        bookName2: "Certified Study Guide",
        value: 101.21,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Mike Chapple and David Seidl",
        genre: [
            "Networking", "DevOps", "Big Data", "Cloud"
        ],
        readed: "13k",
        description: "(ISC)² CISSP Study Guide, 9th Edition has been completely updated for the latest 2021 CISSP Body of Knowledge. This bestselling Sybex study guide covers 100% of all exam objectives. You'll prepare for the exam smarter and faster with Sybex thanks to expert content, real-world examples, advice on passing each section of the exam, access to the Sybex online interactive learning environment, and much more. Reinforce what you've learned with key topic exam essentials and chapter review questions. Along with the book, you also get access to Sybex's superior online interactive learning environment that includes four practice exams each with 125 unique questions to help you identify where you need to study more, more than 1000 Electronic Flashcards to reinforce your learning and give you last-minute test prep before the exam, a searchable glossary in PDF to give you instant access to the key terms you need to know for the exam.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const codingAllinOneForDummies = {
        id: 21,
        bookName: "Coding All-in-One",
        bookCover: images.codingAllinOneForDummies,
        bookName2: "For Dummies",
        value: 41.06,
        rating: 4.6,
        language: "Eng",
        pageNo: 272,
        author: "Nikhil Abraham",
        genre: [
            "Coding", "Full Stack"
        ],
        readed: "25k",
        description: "The demand for people with coding know-how exceeds the number of people who understand the languages that power technology. Coding All-in-One For Dummies gives you an ideal place to start when you're ready to add this valuable asset to your professional repertoire. Whether you need to learn how coding works to build a web page or an application or see how coding drives the data revolution, this resource introduces the languages and processes you'll need to know. Peek inside to quickly learn the basics of simple web languages, then move on to start thinking like a professional coder and using languages that power big applications. Take a look inside for the steps to get started with updating a website, creating the next great mobile app, or exploring the world of data science. Whether you're looking for a complete beginner's guide or a trusted resource for when you encounter problems with coding, there's something for you!",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const domainDrivenDesign = {
        id: 22,
        bookName: "Domain-Driven Design",
        bookCover: images.domainDrivenDesign,
        bookName2: "Tackling Complexity\nin the Heart of Software",
        value: 78.16,
        rating: 4.6,
        language: "Eng",
        pageNo: 272,
        author: "Eric Evans",
        genre: [
            "Networking", "DevOps"
        ],
        readed: "73k",
        description: "Text offers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques, and fundamental principles that facilitate the development of software projects facing complex domains. DLC: Computer software--Development.[…]",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const aceComputerScienceandCoding = {
        id: 23,
        bookName: "Ace Computer Science and Coding",
        bookCover: images.aceComputerScienceandCoding,
        bookName2: "Everything You Need\nin One Big Fat Notebook",
        value: 11.99,
        rating: 4.7,
        language: "Eng",
        pageNo: 576,
        author: "Grant Smith",
        genre: [
            "Networking", "DevOps", "Coding", "Data Science"
        ],
        readed: "65k",
        description: "The Big Fat Notebook series is built on a simple and irresistible conceit―borrowing the notes from the smartest kid in class. Each book in the series meets Common Core State Standards, Next Generation Science Standards, and state history standards, and are vetted by National and State Teacher of the Year Award–winning teachers. They make learning fun and are the perfect next step for every kid who grew up on Brain Quest.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const excelBible = {
        id: 24,
        bookName: "Excel 2019",
        bookCover: images.excelBible,
        bookName2: "The complete guide",
        value: 49.55,
        rating: 4.6,
        language: "Eng",
        pageNo: 1120,
        author: "Michael Alexander",
        genre: [
            "Coding", "Web"
        ],
        readed: "5k",
        description: "The complete guide to Excel 2019. Whether you are just starting out or an Excel novice, the Excel 2019 Bible is your comprehensive, go-to guide for all your Excel 2019 needs. Whether you use Excel at work or at home, you will be guided through the powerful new features and capabilities to take full advantage of what the updated version offers. Learn to incorporate templates, implement formulas, create pivot tables, analyze data, and much more. Navigate this powerful tool for business, home management, technical work, and much more with the only resource you need, Excel 2019 Bible.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const hackingwithPython = {
        id: 25,
        bookName: "Hacking with Python",
        bookCover: images.hackingwithPython,
        bookName2: "White Hat",
        value: 9.99,
        rating: 4.1,
        language: "Eng",
        pageNo: 45,
        author: "Dolores Calloway",
        genre: [
            "Networking", "DevOps", "Linux", "Coding"
        ],
        readed: "13k",
        description: "Preparation for hacking Each hopeful programmer ought to figure out how to involve a programming language to find and take advantage of shortcomings in a PC. While nothing bad can really be said about utilizing assets that are now made accessible, you will need to foster better instruments that can permit you to utilize your own PC. Since you are the best adjudicator with regards to understanding your own necessities, you know that large numbers of the current devices accessible on the web or in the market come up short on of the highlights that you might have to cause your PC to perform only the manner in which you need it. The registering scene changes consistently - new hacks are created continuously and you can likewise expect that different security specialists find them.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const machineLearningwithPython = {
        id: 26,
        bookName: "Introduction to Machine Learning with Python",
        bookCover: images.machineLearningwithPython,
        bookName2: "A Guide for Data Scientists",
        value: 71.70,
        rating: 4.5,
        language: "Eng",
        pageNo: 400,
        author: "Sarah Guido",
        genre: [
            "M-Learning", "Big Data", "Data Science"
        ],
        readed: "53k",
        description: "Machine learning has become an integral part of many commercial applications and research projects, but this field is not exclusive to large companies with extensive research teams. If you use Python, even as a beginner, this book will teach you practical ways to build your own machine learning solutions. With all the data available today, machine learning applications are limited only by your imagination. You’ll learn the steps necessary to create a successful machine-learning application with Python and the scikit-learn library. Authors Andreas Müller and Sarah Guido focus on the practical aspects of using machine learning algorithms, rather than the math behind them. Familiarity with the NumPy and matplotlib libraries will help you get even more from this book.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const malwareAnalysis = {
        id: 27,
        bookName: "Learning Malware Analysis",
        bookCover: images.malwareAnalysis,
        bookName2: "Concepts, tools, and techniques\nto analyze and investigate Windows malware",
        value: 64.34,
        rating: 4.8,
        language: "Eng",
        pageNo: 510,
        author: "Monnappa K A",
        genre: [
            "Networking", "DevOps"
        ],
        readed: "30k",
        description: "Malware analysis and memory forensics are powerful analysis and investigation techniques used in reverse engineering, digital forensics, and incident response. With adversaries becoming sophisticated and carrying out advanced malware attacks on critical infrastructures, data centers, and private and public organizations, detecting, responding to, and investigating such intrusions is critical to information security professionals. Malware analysis and memory forensics have become must-have skills to fight advanced malware, targeted attacks, and security breaches. This book teaches you the concepts, techniques, and tools to understand the behavior and characteristics of malware through malware analysis. It also teaches you techniques to investigate and hunt malware using memory forensics.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const masteringRegularExpressions = {
        id: 28,
        bookName: "Mastering Regular Expressions",
        bookCover: images.masteringRegularExpressions,
        bookName2: "Understand Your Data",
        value: 52.39,
        rating: 4.1,
        language: "Eng",
        pageNo: 544,
        author: "Jeffrey E. F. Friedl",
        genre: [
            "Networking", "DevOps"
        ],
        readed: "13k",
        description: "Regular expressions are an extremely powerful tool for manipulating text and data. They are now standard features in a wide range of languages and popular tools, including Perl, Python, Ruby, Java, VB.NET and C# (and any language using the .NET Framework), PHP, and MySQL. If you don't use regular expressions yet, you will discover in this book a whole new world of mastery over your data. If you already use them, you'll appreciate this book's unprecedented detail and breadth of coverage. If you think you know all you need to know about regularexpressions, this book is a stunning eye-opener.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const masteringtheLightningNetwork = {
        id: 29,
        bookName: "Mastering the Lightning Network",
        bookCover: images.masteringtheLightningNetwork,
        bookName2: "Blockchain Protocol for Instant Bitcoin Payments",
        value: 73.06,
        rating: 4.9,
        language: "Eng",
        pageNo: 272,
        author: "Olaoluwa Osuntokun",
        genre: [
            "Networking", "DevOps"
        ],
        readed: "23k",
        description: "The Lightning Network (LN) is a rapidly growing second-layer payment protocol that works on top of Bitcoin to provide near-instantaneous transactions between two parties. With this practical guide, authors Andreas M. Antonopoulos, Olaoluwa Osuntokun, and Rene Pickhardt explain how this advancement will enable the next level of scale for Bitcoin, increasing speed and privacy while reducing fees.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const systemDesignInterview = {
        id: 30,
        bookName: "System Design Interview",
        bookCover: images.systemDesignInterview,
        bookName2: "An insider's guide",
        value: 50.12,
        rating: 4.1,
        language: "Eng",
        pageNo: 322,
        author: "Alex Xu",
        genre: [
            "Coding", "DevOps", "Cyberspace"
        ],
        readed: "13k",
        description: "The system design interview is considered to be the most complex and most difficult technical job interview by many. This book provides a step-by-step framework on how to tackle a system design question. It includes many real-world examples to illustrate the systematic approach with detailed steps that you can follow.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const linuxCommandLine = {
        id: 31,
        bookName: "The Linux Command Line",
        bookCover: images.linuxCommandLine,
        bookName2: "A Complete Introduction",
        value: 45.11,
        rating: 4.1,
        language: "Eng",
        pageNo: 504,
        author: "William Shotts",
        genre: [
            "Networking", "DevOps", "Linux"
        ],
        readed: "13k",
        description: "The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell (or command line). Along the way you'll learn the timeless skills handed down by generations of experienced, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "blue"
    }  

    const wiFiHackingForBeginners = {
        id: 32,
        bookName: "WiFi Hacking For Beginners",
        bookCover: images.wiFiHackingForBeginners,
        bookName2: "Volume I",
        value: 7.51,
        rating: 5,
        language: "Eng",
        pageNo: 9,
        author: "Anik Biswas",
        genre: [
            "Networking", "DevOps", "Linux"
        ],
        readed: "10k",
        description: "Thus, you might have activity framework like Windows, Linux or Mac OS X however for hacking you want indicated activity framework like Kali or Backtrack. These activity frameworks are made for hacking and infiltration testing. They have support practically all of hacking programs. Uplifting news, these activity frameworks are free. In this book, we will introduce and utilize Kali. These the two activity frameworks are Linux however there are not many contrasts. At the point when we introduce Kali, there will be preinstalled programs that can be utilized for hacking. Possibly you think there is an issue that you should put in new activity framework on your PC, however there are a few projects that help you visualize activity frameworks.",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const grokkingAlgorithms = {
        id: 33,
        bookName: "Grokking Algorithms",
        bookCover: images.grokkingAlgorithms,
        bookName2: "An illustrated guide for programmers",
        value: 50.84,
        rating: 4.1,
        language: "Eng",
        pageNo: 256,
        author: "Aditya Bhargava",
        genre: [
            "Networking", "DevOps"
        ],
        readed: "13k",
        description: "Faites confiance à la série de guides officiels certifiés les plus vendus de Cisco Press pour vous aider à apprendre, à vous préparer et à vous entraîner à réussir vos examens. Il est construit dans le but de fournir une évaluation, une révision et une pratique pour vous aider à vous assurer que vous êtes pleinement préparé pour votre examen de certification. Ce livre, combiné avec le CCNA 200-301 Official Cert Guide Volume 1, couvre tous les sujets d'examen de l'examen CCNA 200-301.CCNA 200-301 Official Cert Guide, Volume 2 vous présente une routine organisée de préparation aux tests utilisant des éléments et des techniques de série éprouvés. «Est-ce que je le sais déjà?» les quiz ouvrent chaque chapitre et vous permettent de décider du temps que vous devez consacrer à chaque section. Les listes de sujets d'examen facilitent le référencement. Les tâches de préparation aux examens de fin de chapitre vous aident à approfondir les concepts clés que vous devez connaître à fond.· Maîtriser les sujets d'examen Cisco CCNA 200-301· Évaluez vos connaissances avec des quiz d'ouverture de chapitre· Revoir les concepts clés avec les tâches de préparation aux examens· Pratiquez avec des questions d'examen réalistes dans le logiciel de test pratiqueCCNA 200-301 Official Cert Guide, Volume 2 de Cisco Press vous permet de réussir l'examen la première fois et est la seule ressource d'auto-apprentissage approuvée par Cisco. L'auteur à succès Wendell Odom partage des conseils de préparation et des conseils pour passer des tests, vous aidant à identifier les points faibles et à améliorer à la fois vos connaissances conceptuelles et vos compétences pratiques.Ce package d'étude complet comprend· Une routine de préparation aux tests éprouvée pour vous aider à réussir les examens· Est-ce que je le sais déjà? des quiz, qui vous permettent de décider du temps que vous devez consacrer à chaque section· Tableaux des sujets clés de fin de chapitre, qui vous aident à explorer les concepts clés que vous devez connaître à fond",
        backgroundColor: "rgba(247,139,209,0.6)",
        navTintColor: "#000"
    }  

    const myBooksData = [
        {
            ...bloodSweatPixels,
            completion: "75%",
            lastRead: "3d 5h",
            value: "$100"
        },
        {
            ...ccnaOfficialCertGuide,
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
            categoryName: "All courses",
            books: [
                bloodSweatPixels, crackingCodingInterview, designingDataIntensive, machineLearning, pythonCrashCourse, spiesLiesAlgo,
                sqlStartGuide, survivalGuide, tacticalLinkedIn, theLoop, wtfPassword, htmlCss, pragmaticProgrammer, trafficSecrets, cryptoCurrency,
                dataStructuresandAlgorithms,
                StepbyStepCodingCourse,
                informationSystemsSecurity,
                codingAllinOneForDummies,
                domainDrivenDesign,
                aceComputerScienceandCoding,
                excelBible,
                grokkingAlgorithms,
                hackingwithPython,
                machineLearningwithPython,
                malwareAnalysis,
                masteringRegularExpressions,
                masteringtheLightningNetwork,
                systemDesignInterview,
                linuxCommandLine,
                wiFiHackingForBeginners
            ]
        },
        {
            id: 2,
            categoryName: "COMP3133",
            books: [
                bloodSweatPixels, grokkingAlgorithms, crackingCodingInterview
            ]
        },
        {
            id: 3,
            categoryName: "COMP3134",
            books: [
                ccnaOfficialCertGuide, linuxCommandLine, wiFiHackingForBeginners, hackingwithPython
            ]
        },
        {
            id: 4,
            categoryName: "Machine Learning",
            books: [
                machineLearningwithPython, informationSystemsSecurity, systemDesignInterview
            ]
        },
        {
            id: 5,
            categoryName: "AI",
            books: [
                designingDataIntensive, machineLearning
            ]
        },
        {
            id: 6,
            categoryName: "Intro to Python",
            books: [
                machineLearning, pythonCrashCourse, machineLearningwithPython
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader(profile) {
        return (
            <View style={{ flex: 3, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center', marginTop: 16, }}>

                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding, marginTop: 0}}>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}'s</Text>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}> <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Library</Text>                        
                        </Text>                        
                    </View>
                </View>

                {/* Go to CART */}
                <TouchableOpacity style={{ backgroundColor: COLORS.primary, height: 30, marginTop: 0, paddingLeft: 7, paddingRight: SIZES.radius, borderRadius: 20}}
                    onPress={() => { navigation.navigate('Cart') }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={icons.shoppingCart_icon} resizeMode="contain" style={{ width: 20, height: 20 }}/>
                        </View>
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.black, ...FONTS.body3 }}>{profile.point} items</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonSection() {
        return (
            <View style={{ flex: 3, justifyContent: 'center', padding: SIZES.padding }}>
                <View style={{ flexDirection: 'row', height: 45, backgroundColor: "rgba(0,0,0,0.9)", borderRadius: SIZES.radius }}>
                    {/* Profile */}
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Profile')}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.user_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
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
                        onPress={() => navigation.navigate('Settings')}
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
                                source={icons.settings_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
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
                        onPress={() => navigation.navigate('Logout')}
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
                                source={icons.logout_icon}
                                resizeMode="contain"
                                style={{
                                    width: 23,
                                    height: 23
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Logout</Text>
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
                        <Text style={{ ...FONTS.h2, color: COLORS.red }}>{item.categoryName}</Text>
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
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.white, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.black }}>Games</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Python") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Python</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Data Science") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.lightRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Data Science</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Cryptography") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Cryptography</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Web") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.lightBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Web</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Full Stack") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Full Stack</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("DevOps") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.lightGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>DevOps</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Cloud") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.blue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Cloud</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("SQL") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.red, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>SQL</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Database") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.orange, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Database</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Non-SQL") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue2, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Non-SQL</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Javascript") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.darkOrange, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Javascript</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Front-End") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.mustard, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Front-End</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Coding") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.yellow, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.black }}>Coding</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Networking") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.purple, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Networking</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Cyberspace") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.lightpurple, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.black }}>Cyberspace</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("M-Learning") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>M-Learning</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Big Data") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.darkpurple, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Big Data</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Linux") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginRight: SIZES.base, backgroundColor: COLORS.babyblue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body5, color: COLORS.white }}>Linux</Text>
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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black, marginTop: 48  }}>
            {/* Header Section */}
            <View style={{ height: 125, backgroundColor: COLORS.gray }}>
            <StatusBar backgroundColor="#4287f5" />
                {renderHeader(profileData)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: 0 }}>
                
                {/* Books Section */}
                {/* <View>
                    {renderMyBookSection(myBooks)}
                </View> */}

                {/* Categories Section */}
                <View style={{ marginTop: 15 }}>
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
export default MyLibrary