import { Action } from 'redux'

const INITIAL_STATE  = {
    musics: [],
    parsedMusics: [],
    selectedMusic: null,
    musicRecomendations: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MUSICS_CHANGED':
            return { ...state, musics: action.payload }
        case 'PARSED_MUSICS_CHANGED':
            return { ...state, parsedMusics: action.payload }
        case 'SELECTED_MUSIC_CHANGED':
            return { ...state, selectedMusic: action.payload }
        case 'MUSIC_RECOMENDATIONS_CHANGED':
            return { ...state, musicRecomendations: action.payload }
        default: 
            return state
    }
}