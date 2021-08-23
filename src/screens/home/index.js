// screens/Home.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewPost from './NewPost';
import BlogList from './BlogList';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerTitleAlign: 'center',

            }}
        >
            <Tab.Screen
                name="Posts"
                component={BlogList}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ size }) => (
                        <Ionicons name="home" color="#50542C" size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="New Post"
                component={NewPost}
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ size }) => (
                        <Ionicons name="add-circle-outline" color="#50542C" size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};



export default connect()(Home);


