// screens/Blog.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import blogData from '../../data/blogdata/blogData';

const Blog = ({ route, navigation }) => {
    const index = route.params.index;
    const data = blogData[index];
    return (
        <View style={styles.baseText}>
            <Text style={styles.titleText}>{data.title}</Text>
            <Text style={styles.bodyText}>{data.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    baseText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    bodyText: {
        fontFamily: 'Cochin',
        padding: 5,
        textAlign: 'justify',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});


export default Blog;
