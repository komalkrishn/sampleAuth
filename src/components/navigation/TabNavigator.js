import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../tabs/HomeTab';
import ProfileTab from '../tabs/ProfileTab';
import SettingsTab from '../tabs/SettingsTab';
import TabBar from '../tabs/TabBar';

const Tab = createBottomTabNavigator();
 const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen 
            name= 'home' 
            component={HomeTab} 
            initialParams={{icon: 'home'}} 
            />
            <Tab.Screen 
            name= 'profile' 
            component={ProfileTab} 
            initialParams={{icon: 'user'}}
            />
            <Tab.Screen 
            name= 'settings' 
            component={SettingsTab} 
            initialParams={{icon: 'setting'}}
            />

        </Tab.Navigator>
    )
}
export default TabNavigator;
 
