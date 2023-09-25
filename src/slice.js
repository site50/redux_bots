import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: "skillset",
    initialState: {
        arrU: [
            { id: 1, e: 'Hi, Mary!', f: 'Salut, Mary!' },
            { id: 2, e: 'How are you?', f: 'Comment ca va?' },
            { id: 3, e: 'I`am fine!', f: 'Ca va bien!' },
            { id: 4, e: 'Good evening, Renee!', f: 'Bonsoir, Renee!' },
            { id: 5, e: 'My name is Edmont!', f: 'Je suis Edmont!' },
            { id: 6, e: 'I am a teacher', f: 'Je suis professeur' },
            { id: 7, e: 'Are you French?', f: 'Vous etes francais?' },
            { id: 8, e: 'Do you live in Paris?', f: 'Vous habitez a Paris?' },
            { id: 9, e: 'You speak French well!', f: 'Vous parlez bien francais!' }
        ],
        pron_arr:[ { id:0 , e: '', f: '' }],
        pronouns:[
            { id: 1, e: 'I', f: 'Je' },
            { id: 2, e: 'You', f: 'Tu' },
            { id: 3, e: 'He/She/It', f: 'il/elle' },
            { id: 4, e: 'We', f: 'nous' },
            { id: 5, e: 'You', f: 'vous' },
            { id: 6, e: 'They', f: 'ils/elles' }
        ],
        arr: [""],
        arr1: ["React", "Redux", "JS", "OOP", "ANGULAR", "PHP", "SAGA"],

    },
    reducers: {
        skills: (state) => { [...state.arr] = [...state.arr1] },
        add: (state, action) => { state.arr.push(action.payload); console.log(action.payload, '!!!action.payload ADD') },
        pronoun: (state) => {[...state.pron_arr] = [...state.pronouns]},
    },
})
export const { skills, add,  pronoun } = slice.actions
export const showArray = (state) => state.skillset.arr
export const showArrU = (state) => state.skillset.arrU
export const showPronouns = (state) => state.skillset.pronouns
export default slice.reducer
