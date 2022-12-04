import * as React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

//Screen names
const homeName = "Home";
const aboutName = "About";

const Tab = createBottomTabNavigator();


function MainContainer() {
    return (

        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === aboutName) {
                            iconName = focused ? 'list' : 'list-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'cyan',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70}
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={aboutName} component={AboutScreen} />

            </Tab.Navigator>

        </NavigationContainer>

    );
}

export default MainContainer;