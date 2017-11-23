class NewWord {
    constructor(en, vn, memorized) {
        this.en = en;
        this.vn = vn;
        this.memorized = memorized;
    }
}
const arrWords = [
    new NewWord('Hello', 'Xin chao', false),
    new NewWord('Good bye!', 'Tam biet', true),
    new NewWord('Moring', 'Buoi sang', false)
];

const arrWordsReducer = (state = arrWords, action) =>{
    if (action.type === 'ADD') {
        const { en, vn } = action;
        // const itemWord =  new NewWord(en, vn, false);
        // return {arrWords: [itemWord, ...state],  filterStatus: 'ADD' };
        const word = new NewWord(en, vn, false);
        return [word].concat(state);
    };
    if (action.type === 'REMOVE'){
        const { en } = action;
        return state.filter((e => e.en !== en));
    }
    if(action.type === 'TOGGLE_MEMORIZED'){
        return state.map(e => {
            if(e.en !== action.en) return e;
            return { ...e, memorized: !e.memorized };
        });
    }
    return state;
}
export default arrWordsReducer;
