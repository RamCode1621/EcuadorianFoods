import React from 'react'
import {Text, View, StyleSheet, ImageBackground} from 'react-native'

export const HeaderApp = () => {
	return (
		<View style={styles.headerContainer}>
			<ImageBackground source={require('../../assets/images/headerBackground.jpg')} style={styles.headerBackground}>
				<View style={styles.headerContent}>
					<Text style={styles.titleHeader}>Ecuadorian foods</Text>
				</View>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		width: '100%',
		height: 150,
		backgroundColor: '#63c1db',
	},
	headerBackground: {
		flex: 1,
		resizeMode: 'cover',
	},
	headerContent: {
		flex: 1,
		backgroundColor: '#F1A02496',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleHeader: {
		color: 'white',
		fontSize: 30,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10,
		fontWeight: 'bold',
	},
})
