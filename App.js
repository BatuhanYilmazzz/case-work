/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './src/Screens';
import Navigator from './src/Navigator';
import theme from './src/Theme';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HeaderRight from './src/Components/HeaderRight';
import {Text} from 'react-native';
const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const hasAccess = true;
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {hasAccess ? (
            <>
              <Stack.Screen
                name="Home"
                component={Navigator}
                options={{
                  headerTitle: props => <Text>{props.children}</Text>,
                  headerRight: () => <HeaderRight />,
                }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={Navigator}
                options={{
                  headerTitle: props => <Text>{props.children}</Text>,
                  headerRight: () => <HeaderRight />,
                }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
