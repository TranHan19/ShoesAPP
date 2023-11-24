import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from 'react';
import { firebase } from './config';

import Login from "./src/Login";
import Registration from "./src/Registration";
import Header from "./components/Header";
import HomeScreen from "./src/HomeScreen"
import EditProfile from "./src/EditProfile";



const Stack = createStackNavigator();
function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subcriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subcriber;
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{
           headerShown:false
          }}
        />
        <Stack.Screen
          name={"Registration"}
          component={Registration}
          options={{
            headerTitle: () => <Header name="Registration" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25

            }
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{headerShown:false}}        
      />
      <Stack.Screen      
      name={'EditProfile'}
      component={EditProfile}
      options={{headerShown:false}}      
    />
    </Stack.Navigator>
    
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}


