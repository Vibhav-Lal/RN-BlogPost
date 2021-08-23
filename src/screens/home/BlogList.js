
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BlogList = ({ navigation, blogData }) => {
    const [data, setData] = useState(blogData);
    const [isLatest, setIsLatest] = useState(true);

    const onPress = (index) => {
        navigation.navigate('Blog', { index });
    };

    const renderItem = (blog) => {
        // item index seperators
        return (
            <View style={styles.cardContainer}>
                <ImageBackground
                    source={require('../../utils/pattern-bloglist.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <BlogItem blog={blog} onPress={onPress} />
                </ImageBackground>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

const BlogItem = ({ blog, onPress }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(blog.index)}
        >
            <Card>
                <Card.Title style={styles.title}>{blog.item.title}</Card.Title>
                <Card.Divider />
                <View>
                    <Text style={styles.paragraph}>{blog.item.body.substring(0, 150)}</Text>
                </View>
                <Text style={styles.date}>{blog.item.date}</Text>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        width: '100%',
    },
    title: {
        fontSize: 18,
        color: '#49410E',
    },
    paragraph: {
        marginTop: 0,
        margin: 8,
        fontSize: 16,
        textAlign: 'justify',
        color: 'black',
    },
    date: {
        color: '#847A36',
    },
});

const mapStateToProps = () => state => {
    return {
        blogData: state.blogs,
    };
};


export default connect(mapStateToProps)(BlogList);

