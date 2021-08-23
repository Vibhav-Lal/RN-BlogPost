
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

const BlogList = ({ navigation, blogData }) => {
    const data = blogData;
    const onPress = (index) => {
        navigation.navigate('Blog', { index });
    };

    const renderItem = (blog) => {
        // item index seperators
        return (
            <TouchableHighlight
                onPress={() => onPress(blog.index)}
            >
                <View style={styles.listItem}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{blog.item.title}</Text>
                    <Text>{blog.item.body.substring(0, 100)}</Text>
                </View>
            </TouchableHighlight>
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

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#F4F4D4',
        borderWidth: 0.5,
        borderColor: '#333',
        padding: 25,
    },
});

const mapStateToProps = () => state => {
    return {
        blogData: state.blogs,
    };
};


export default connect(mapStateToProps)(BlogList);

