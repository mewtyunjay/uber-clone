import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,   // null or {lat, lng}
    destination: null,  // null or {lat, lng}
    travelTimeInformation: null,    // null or {duration, distance}
}

//   createSlice() is a function that takes an object as an argument.
//   The object has 3 properties: name, initialState, reducers.
//   The name property is a string that is the name of the slice.
//   The reducers property has 3 properties: setOrigin, setDestination, setTravelTimeInformation.
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    },
});

//exporting the reducer and the actions from the slice so that they can be used in other files.
export const{setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

//selectors are functions that allow us to pull information from the data layer.
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

//exporting the reducer so that it can be used in other files.
export default navSlice.reducer;