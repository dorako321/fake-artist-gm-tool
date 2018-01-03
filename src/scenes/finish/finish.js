import React, {Component} from 'react';
import {connect} from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton';
import * as actions from "../finish/finishAction"



// 人数調整ボタン
// import FontIcon from 'material-ui/FontIcon';

// import * as actions from './indexAction'


const styles = {
};

class Index extends Component {
    constructor(props) {
        super(props);
    }

    restartGame() {
        const {dispatch} = this.props
        dispatch(actions.hideAnswer())
        this.props.history.push('/')
    }

    showAnswer() {
        const {dispatch} = this.props
        dispatch(actions.showAnswer())
    }

    render() {

        const {isShowAnswer} = this.props.finishReducer;
        const {answer} = this.props.noticeReducer;

        return (
            <div style={styles.root}>

                <RaisedButton onClick={() => this.showAnswer()}>答えを表示する</RaisedButton>

                <div className={isShowAnswer ? 'answer' : 'hidden'}>
                    {answer}
                </div>


                <RaisedButton onClick={() => this.restartGame()}>次のゲームへ</RaisedButton>
            </div>
        );
    }
}


export default connect(state => state)(Index);
