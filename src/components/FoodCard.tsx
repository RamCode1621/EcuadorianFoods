import React from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {PreparationSteps} from '~/interfaces'
import {useDispatch} from 'react-redux'
import {addFood} from '~/redux/slice'

export const FoodCard = ({
	data,
	navigation,
}: {
	data: {
		name: string
		group: string
		ingredients: string[]
		description: string
		imageCard: string
		preparation: PreparationSteps[]
	}
	navigation: any
}) => {
	const dispatch = useDispatch()

	return (
		<TouchableOpacity
			onPress={() => {
				dispatch(addFood(data))
				navigation.navigate('FoodInformation')
			}}>
			<View style={styles.foodCard}>
				<View style={styles.contentTitle}>
					<Text style={styles.foodTitle}>{data.name}</Text>
					<Text style={styles.foodSubtitle}>{data.group}</Text>
				</View>
				<View style={styles.contentImageFood}>
					<Image source={{uri: data.imageCard}} style={styles.imageFood} />
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	foodCard: {
		display: 'flex',
		flexDirection: 'row',
		height: 90,
		width: '100%',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
		marginBottom: 20,
		borderBottomWidth: 3,
		borderBottomColor: '#000000AD',
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 25,
		borderRightWidth: 1,
		borderRightColor: '#000000AD',
		borderLeftColor: '#000000AD',
		borderLeftWidth: 1,
		borderTopRightRadius: 25,
	},
	contentTitle: {
		flex: 3,
		paddingLeft: 10,
	},
	foodTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#2abb19',
	},
	foodSubtitle: {
		color: '#6a6b6a',
	},
	contentImageFood: {
		flex: 2,
	},
	imageFood: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 25,
		borderBottomRightRadius: 10,
	},
})
