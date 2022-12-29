import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
	name: 'food',
	initialState: {
		name: '',
		group: '',
		description: '',
		imageCard: '',
		ingredients: [],
		preparation: [],
	},

	reducers: {
		addFood: (state, action) => {
			return action.payload
		},
	},
})

export const {addFood} = slice.actions
export default slice.reducer
