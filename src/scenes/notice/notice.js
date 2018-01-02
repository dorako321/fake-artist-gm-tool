import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from './noticeAction'


const styles = {};

class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox: true,
        };
    }

    clickPlus() {
        const {dispatch} = this.props
        dispatch(actions.addUser())
        console.log(`clicked plus button end.`)
    }

    clickMinus() {
        const {dispatch} = this.props
        dispatch(actions.delUser())
    }

    gameStart() {
        const {dispatch} = this.props
        dispatch(actions.delUser())
    }


    render() {
        console.log(this.props)
        const {userNumber} = this.props.indexReducer;
        // const {number, opened, theme, answer} = this.props.noticeReducer;

        return (
            <div style={styles.root}>
                {userNumber}
                    <div>
                        人目の方
                        <div>Push</div>
                    </div>
                    <div>
                        {/*{number}人目の方*/}
                        <div>お題は</div>
                        <div>{""}</div>
                    </div>
            </div>
        );
    }
}


export default connect(state => state)(Notice);
