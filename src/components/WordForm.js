import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addNewword } from  '../redux/action';
import * as actionCreators from '../redux/action';
class WordForm extends Component {
    add(){
        const { txtEn, txtVn } = this.refs;
        // const action = addNewword(txtEn.value, txtVn.value);
        // this.props.dispatch(action);
        this.props.addNewword(txtEn.value, txtVn.value);

        // this.props.dispatch({
        //     type:'ADD', 
        //     en: txtEn.value, 
        //     vn: txtVn.value, 
        //     memorized: false
        // })
        
    }
    render() {
        const { dispatch } = this.props;
        return (
            <div style={{ backgroundColor: 'gray', padding: 10, width: 150 }}>
                <input type="text" placeholder="Enter English word" ref="txtEn" />
                <br /><br />
                <input type="text" placeholder="Enter Vietnamese meaning" ref="txtVn" />
                <br /><br />
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        );
    }
}

export default connect(null, actionCreators)(WordForm);