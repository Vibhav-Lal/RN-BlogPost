// screens/Blog.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addBlog } from '../../redux/actions/index';
import { Input } from 'react-native-elements';

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
            date: new Date().toLocaleString(),
        });
        alert('Post has been uploaded');
        setTitle('');
        setBody('');
    };
    return (
        <View style={styles.bodyContainer}>
            <Input
                placeholder="Title"
                leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Input
                // style={{ textAlignVertical: 'top' }}
                leftIcon={{ type: 'font-awesome', name: 'file-text-o' }}
                multiline
                numberOfLines={8}
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
        paddingTop: 25,
        backgroundColor: 'white',
        flex: 1,
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
        backgroundColor: '#B5A95F',
        padding: 5,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },
    submitText: {
        color: '#FDFCF9',
        fontSize: 20,
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

