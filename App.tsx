/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {HomeView} from './src/views/HomeView'
import {FoodInformacion} from './src/views/FoodInformacion'
import store from './src/redux/store'
import {Provider} from 'react-redux'

const Stack = createStackNavigator()

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeView}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name="FoodInformation" component={FoodInformacion} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App
