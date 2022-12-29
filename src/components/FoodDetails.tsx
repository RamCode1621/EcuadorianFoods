import React from 'react'
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'

export const FoodDetails = () => {
	const food = useSelector((state: any) => state.food)

	return (
		<ScrollView>
			<View style={styles.containerView}>
				<Image source={{uri: food.imageCard}} style={styles.image} />
				<Text style={styles.title}>{food.name}</Text>
				<Text style={styles.group}>{food.group}</Text>
				<Text style={styles.description}>{food.description}</Text>
				<View style={styles.steps}>
					<Text style={styles.subTitle}>Preparation:</Text>
					{food.preparation.map((step: {step: number; image: string; description: string}) => {
						return (
							<View style={styles.contentSteps}>
								<View style={styles.contentSubtitle}>
									<Text style={styles.numberStep}>Step: {step.step}</Text>
								</View>
								<Image source={{uri: step.image}} style={styles.imageStep} />
								<View style={styles.contentStepDescription}>
									<Text style={styles.descriptionStep}>
										<Text style={styles.boldText}>Description:</Text> {step.description}
									</Text>
								</View>
							</View>
						)
					})}
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	containerView: {
		flex: 1,
		backgroundColor: '#FFB80FFF',
		alignItems: 'center',
		paddingTop: 20,
	},
	image: {
		width: 300,
		height: 200,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'white',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	group: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 18,
		textAlign: 'justify',
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 10,
	},
	steps: {
		marginTop: 20,
	},
	subTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 20,
	},
	contentSteps: {
		marginTop: 20,
		alignItems: 'center',
	},
	contentSubtitle: {
		width: '100%',
		paddingTop: 5,
		paddingBottom: 5,
	},
	numberStep: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 20,
		textAlign: 'left',
		marginBottom: 10,
	},
	imageStep: {
		width: 250,
		height: 150,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'white',
	},
	contentStepDescription: {
		width: '90%',
		margin: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 10,
	},
	descriptionStep: {
		fontSize: 18,
		textAlign: 'justify',
	},
	boldText: {
		fontWeight: 'bold',
	},
})
