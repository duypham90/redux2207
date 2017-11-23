import React, { Component } from 'react';
import Word from './Word';
import WordForm from './WordForm';
import WordFilter from './WordFilter';
import { connect } from 'react-redux';

class ListWord extends Component {
    showData(arrWords, filter){
        if(filter === 'SHOW_MEMORIZED'){
            return arrWords.filter(e => e.memorized);
        }
        if( filter === 'SHOW_FORGOT'){
            return arrWords.filter( e => !e.memorized);
        }
        return arrWords;
    }
    render() {
        const { arrWords } =  this.props;
        const { filter } = this.props;
        const newArr = this.showData(arrWords, filter);
        return (
            <div>
                <WordFilter />
                <WordForm />
                { newArr.map((e, i) => (
                    <Word 
                        en={e.en} 
                        vn={e.vn} 
                        memorized={e.memorized}
                        key={e.en} 
                        index={i}
                        onRemoveWord={this.removeWord}
                        onToggleMemorized={this.toggleMemorized}
                    />
                ))}
            </div>            
        );
    }
}
const mapStateToProps = (state) => ({
    arrWords: state.arrWords,
    filter: state.filterStatus
});
export default connect(mapStateToProps)(ListWord);