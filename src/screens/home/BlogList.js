
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BlogList = ({ navigation, blogData }) => {
    const data = blogData;
    const onPress = (index) => {
        navigation.navigate('Blog', { index });
    };

    const renderItem = (blog) => {
        // item index seperators
        return (
            <View style={styles.cardContainer}>
                <BlogItem blog={blog} onPress={onPress} />
            </View>
        );
    };

    return (
        <View>
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
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    title: {
        fontSize: 18,
        color: 'black',
    },
    paragraph: {
        marginTop: 0,
        margin: 8,
        fontSize: 16,
        textAlign: 'justify',
        color: 'black',
    },
});

const mapStateToProps = () => state => {
    return {
        blogData: state.blogs,
    };
};


export default connect(mapStateToProps)(BlogList);

