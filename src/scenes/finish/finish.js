import React, {Component} from 'react';
import {connect} from 'react-redux'

// 人数調整ボタン
import FontIcon from 'material-ui/FontIcon';

import * as actions from './indexAction'


const styles = {
};

class Index extends Component {
    constructor(props) {
        super(props);
    }

    restartGame() {
        this.props.history.push('/')
    }

    showAnswer() {

    }

    render() {
        const {userNumber} = this.props.indexReducer;

        return (
            <div style={styles.root}>
                こたえ
                <div className="floating">
                    {""}
                </div>

                <button onClick={e => this.restartGame()}>次の試合へ</button>


            </div>
        );
    }
}


export default connect(state => state)(Index);
