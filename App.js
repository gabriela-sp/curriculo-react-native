import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bem-vindo ao app!!</Text>
      <Pressable
        onPress={() => navigation.navigate('Cardapio')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Cardápio</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Sugestoes')}
        style={{ backgroundColor: 'grey', padding: 10 }}>
        <Text>Sugestões</Text>
      </Pressable>
    </View>
  );
}

function Cardapio() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Confira o Cardápio!</Text>
    </View>
  );
}

function Sugestoes() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Deixe Sua Sugestão!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Sugestoes" component={Sugestoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
