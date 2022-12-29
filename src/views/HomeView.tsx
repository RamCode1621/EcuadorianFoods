import React from 'react'
import {StyleSheet, View} from 'react-native'
import {FoodsList} from '../components/FoodsList'
import {HeaderApp} from '../components/HeaderApp'
import {Footer} from '../components/Footer'
import {useSelector} from 'react-redux'

export const HomeView = ({navigation}: {navigation: any}) => {
	return (
		<View style={styles.containerView}>
			<HeaderApp />
			<FoodsList navigation={navigation} />
			<Footer />
		</View>
	)
}

const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		backgroundColor: '#FFB80FFF',
	},
})
