import React from 'react'

export const initialState = {
    city:'Toronto',
    location:'',
    temperature: 0,
    layer:1,
    extras: false
}

export const appReducer = (state, action) => {
    switch(action.type){
        case "UPDATE_CITY":
            return {...state, city: action.city}
        case "UPDATE_LOCATION":
            return {...state, location: action.location}
        case "UPDATE_TEMPERATURE":
            return {...state, temperature: action.temperature}
        case "UPDATE_LAYER":
            return {...state, layer: action.layer}
        case "UPDATE_EXTRAS":
            return {...state, extras: action.extras}

        default:
            throw new Error()
    }
}

export const Context = React.createContext()
