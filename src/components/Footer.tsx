import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export const Footer = () => {
	return (
		<View style={styles.containerFooter}>
			<Text style={styles.textFooter}>Richard Aguiar © 2023</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	containerFooter: {
		backgroundColor: '#FFB80FFF',
	},
	textFooter: {
		color: '#000000',
		fontSize: 14,
		textAlign: 'center',
		padding: 5,
	},
})
