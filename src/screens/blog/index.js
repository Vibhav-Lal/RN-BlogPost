// screens/Blog.js

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import blogData from '../../data/blogdata/blogData';
import { Card } from 'react-native-elements';

const Blog = ({ route, navigation }) => {
    const index = route.params.index;
    const data = blogData[index];
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../utils/pattern.jpg')}
                resizeMode="cover"
                style={styles.image}
            >
                <Card >
                    <View style={styles.baseText}>
                        <Card.Title style={styles.titleText}>{data.title}</Card.Title>
                        <Card.Divider />
                        <Text style={styles.bodyText}>{data.body}</Text>
                    </View>
                </Card>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    baseText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },
    image: {
        flex: 1,
        // justifyContent: 'center',
    },
    bodyText: {
        fontFamily: 'Cochin',
        padding: 5,
        textAlign: 'justify',
        fontSize: 15,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});


export default Blog;
