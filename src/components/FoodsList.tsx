import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {FoodCard} from './FoodCard'
import {DataFoods} from '../data'

export const FoodsList = ({navigation}: {navigation: any}) => {
	return (
		<ScrollView style={styles.foodsListContainer}>
			{DataFoods.map((food, index) => {
				return (
					<FoodCard
						key={index}
						data={{
							name: food.name,
							group: food.group,
							ingredients: food.ingredients,
							description: food.description,
							imageCard: food.imageCard,
							preparation: food.preparation,
						}}
						navigation={navigation}
					/>
				)
			})}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	foodsListContainer: {
		flex: 1,
		padding: 20,
	},
})
