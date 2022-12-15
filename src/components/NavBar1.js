/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import IndexScreen from '../screens/IndexScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import BarcodeScreen from '../screens/BarcodeScreen';
import BodyPartList from '../screens/BodyPartList';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'Index') {
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Excercise') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Barcode') {
                iconName = focused ? 'ios-barcode' : 'ios-barcode';
            }
    
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: {padding: 10, height: 70}
        }}
        >

        <Tab.Screen name="Logger" component={IndexScreen} />
        <Tab.Screen name="Excercise" component={BodyPartList} />
        <Tab.Screen name="Barcode" component={BarcodeScreen} />

        </Tab.Navigator>
    );
    }

export default function App() {
    return (
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
}

*/