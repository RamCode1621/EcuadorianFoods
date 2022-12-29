import {configureStore} from '@reduxjs/toolkit'
import foodReducer from './slice'

export default configureStore({
	reducer: {
		food: foodReducer,
	},
})
