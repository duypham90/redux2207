import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action';

class Word extends Component {
    // constructor(props){
    //     super(props);
    //     this.remove = this.remove.bind(this);
    // }
    // remove(){
    //     const { key } = this.refs;
    //     const { en, vn, memorized, index } = this.props
    //     this.props.dispatch({
    //         type: 'REMOVE',
    //         en,
    //     })
    // }
    // updateMemorized(){
    //     const { dispatch, en } = this.props;
    //     dispatch({ type: 'TOGGLE_MEMORIZED', en });
    // }

    render() {
        const { en, vn, memorized, removeWordByEn, toggleMemorizedByEn } = this.props;
        const englistText = memorized ? '-------' : en;
        const buttonText = memorized ? 'Fotgot' : 'Memorized';
        return (
            <div>
                <h3 id={ englistText } ref="key">{ englistText }</h3>
                <p>{vn}</p>
                {/* <button onClick={this.updateMemorized.bind(this)}>{ buttonText }</button>
                <button onClick={this.remove}>DELETE</button> */}
                <button onClick={() => toggleMemorizedByEn(en)}>{ buttonText }</button>
                <button onClick={() => removeWordByEn(en)}>DELETE</button>
            </div>
        );
    }
}
export default connect(null, actionCreators)(Word);
