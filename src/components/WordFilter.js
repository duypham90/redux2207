import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action';
class WordFilter extends Component {
    // changeFilterStatus(newStatus){
    //     this.props.dispatch({ type:'CHANGE_FILTER_STATUS', newStatus });
    // }
    render() {
        const getStyle = (status) => {
            const condition = this.props.filterStatus === status;
            return condition ? { color: 'green' } : { color: 'black' };
        }
        const {changeFilterStatus} = this.props;
        return (
            <div>
                {/* <button onClick={()=> this.changeFilterStatus('SHOW_ALL')} style={getStyle('SHOW_ALL')}>SHOW_ALL</button>            
                <button onClick={()=> this.changeFilterStatus('SHOW_MEMORIZED')} style={getStyle('SHOW_MEMORIZED')}>SHOW_MEMORIZED</button>            
                <button onClick={()=> this.changeFilterStatus('SHOW_FORGOT')} style={getStyle('SHOW_FORGOT')}>SHOW_FORGOT</button>   */}

                <button onClick={()=> changeFilterStatus('SHOW_ALL')} style={getStyle('SHOW_ALL')}>SHOW_ALL</button>            
                <button onClick={()=> changeFilterStatus('SHOW_MEMORIZED')} style={getStyle('SHOW_MEMORIZED')}>SHOW_MEMORIZED</button>            
                <button onClick={()=> changeFilterStatus('SHOW_FORGOT')} style={getStyle('SHOW_FORGOT')}>SHOW_FORGOT</button> 
            </div>          
        );
    }
}
const mapStateToProps = (state) => ({
    filterStatus: state.filterStatus
});
export default connect(mapStateToProps, actionCreators)(WordFilter);