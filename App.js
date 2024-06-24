import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/app/pages/homeScreen';
import RegisterUser from './src/app/pages/RegistrarUser';
import UpdateUser from './src/app/pages/UpdateUser';
import DeleteUser from './src/app/pages/DeleteUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">

      <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Registro de Usuários',
            headerStyle: {
              backgroundColor: '#00AD98',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Cadastrar Usuário',
            headerStyle: {
              backgroundColor: '#2992C4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

<Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Atualizar Usuário',
            headerStyle: {
              backgroundColor: '#A45BB9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Excluir Usuário',
            headerStyle: {
              backgroundColor: '#D1503A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;