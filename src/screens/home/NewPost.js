// screens/Blog.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addBlog } from '../../redux/actions/index';

const NewPost = ({ blogData, addBlog }) => {
    const id = blogData.length + 1;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onPress = () => {
        if (title === '' || body === '') {
            alert('Fill all values');
            return;
        }
        addBlog({
            id: id,
            title: title,
            body: body,
        });
        alert('Post has been uploaded');
        setTitle('');
        setBody('');
    };
    return (
        <View style={styles.bodyContainer}>
            <TextInput
                style={styles.input}
                label="Title"
                placeholder="Title"
                name="title"
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                multiline
                numberOfLines={6}
                name="body"
                value={body}
                placeholder="Write your post..."
                onChangeText={text => setBody(text)}
            />
            <TouchableOpacity style={styles.submitBtn}
                onPress={onPress}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bodyContainer: {
        marginTop: 25,
    },
    input: {
        margin: 10,
        textAlignVertical: 'top',
        backgroundColor: '#F8FAF2',
    },
    bodyText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
    },
    submitBtn: {
        backgroundColor: '#BDE551',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },
    submitText: {
        color: '#121211',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const mapStateToProps = state => {
    return {
        blogData: state.blogs,
    };
};

const mapDispatchToProps = dispatch => ({
    addBlog: payload => dispatch(addBlog(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
