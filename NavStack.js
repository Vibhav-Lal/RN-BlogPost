import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home';
import Blog from './src/screens/blog';

const Stack = createStackNavigator();

export default function NavStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#FFC300',
                },
                headerTintColor: '#282922',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    fontFamily: 'cursive',
                },
            }}
        >
            <Stack.Screen
                name="My Blogpost"
                component={Home}
                options={{ title: 'My Blogpost' }}
            />
            <Stack.Screen
                name="Blog"
                component={Blog}
                options={{ title: 'Blog' }}
            />
        </Stack.Navigator>
    );
}
