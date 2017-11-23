// reducer state store action
import reducer  from './reducer/reducer';
import { createStore, combineReducers } from 'redux';
// class NewWord {
//     constructor(en, vn, memorized) {
//         this.en = en;
//         this.vn = vn;
//         this.memorized = memorized;
//     }
// }
// const arrWords = [
//     new NewWord('Hello', 'Xin chao', false),
//     new NewWord('Good bye!', 'Tam biet', true),
//     new NewWord('Moring', 'Buoi sang', false)
// ];

// const defaultState = { 
//     arrWords,
//     filterStatus: 'SHOW_ALL'
// };

// const arrWordsReducer = (state = arrWords, action) =>{
//     if (action.type === 'ADD') {
//         const { en, vn } = action;
//         const word = new NewWord(en, vn, false);
//         return [word].concat(state);
//     };
//     if (action.type === 'REMOVE'){
//         const { en } = action;
//         return state.filter(e => e.en !== en);
//     }
//     if(action.type === 'TOGGLE_MEMORIZED'){
//         return state.map(e => {
//             if (e.en !== action.en) return e;
//             return { ...e, memorized: !e.memorized };
//        });
//     }
//     return state;
// }
// const filterStatusReducer = (state ='SHOW_ALL', action) => {
//     if (action.type === 'CHANGE_FILTER_STATUS'){
//         return action.newStatus;
//     }
//     return state;
// }
// const reducer = combineReducers({
//         arrWords: arrWordsReducer,
//         filterStatus: filterStatusReducer
// });

//*   *//
// const reducer = (state = defaultState, action) => {
//     if (action.type === 'ADD') {
//         const itemWord =  new NewWord(action.en, action.vn, action.memorized);
//         return { ...state, arrWords: [itemWord, ...state.arrWords],  filterStatus: 'ADD' };
//     };
//     if (action.type === 'REMOVE'){
//         const { en } = action;
//         return { ...state, arrWords: [...state.arrWords.filter((e => e.en !== en))], filterStatus: action.type};
//     }
//     if (action.type === 'CHANGE_FILTER_STATUS'){
//         return {
//             ...state,
//             filterStatus: action.newStatus
//         }
//     }
//     if(action.type === 'TOGGLE_MEMORIZED'){
//         return { 
//             ...state, 
//             arrWords: state.arrWords.map(e => {
//                 if(e.en !== action.en) return e;
//                 return { ...e, memorized: !e.memorized };
//             })
//         }
//     }
//     return state;
// }

const store = createStore(reducer);

export default store;
