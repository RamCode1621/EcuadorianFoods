import React from 'react'
import {StyleSheet, View} from 'react-native'
import {FoodDetails} from '~/components/FoodDetails'
import {Footer} from '~/components/Footer'

export const FoodInformacion = () => {
	return (
		<View style={styles.containerView}>
			<FoodDetails />
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
