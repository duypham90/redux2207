import { combineReducers } from 'redux';
import arrWordsReducer from './arrWords';
import filterStatusReducer from './filterStatus';

export default combineReducers({
        arrWords: arrWordsReducer,
        filterStatus: filterStatusReducer
});
