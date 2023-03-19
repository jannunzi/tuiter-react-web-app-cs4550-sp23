import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tuits: [
        {
            id: 1,
            text: 'Tuit 1',
            editing: false
        },
        {
            id: 2,
            text: 'Tuit 2',
            editing: true
        },
        {
            id: 3,
            text: 'Tuit 3',
            editing: false
        },
    ],
    loading: false,
    error: null
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    reducers: {
        updateTuit: (state, action) => {
            state.tuits = state.tuits.map(
                tuit => tuit.id === action.payload.id ? action.payload : tuit)
        },
        addTuit: (state, action) => {
            state.tuits.push({...action.payload, id: (new Date()).getTime()})
        },
        deleteTuit: (state, action) => {
            state.tuits = state.tuits.filter(
                tuit => tuit.id !== action.payload)
        }
    }
})

export const {updateTuit, deleteTuit, addTuit} = tuitsSlice.actions
export default tuitsSlice.reducer