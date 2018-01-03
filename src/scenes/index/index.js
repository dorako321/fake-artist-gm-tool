import React, {Component} from 'react';
import {connect} from 'react-redux'

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/GridList';

import RaisedButton from 'material-ui/RaisedButton';

// 人数調整ボタン
import FontIcon from 'material-ui/FontIcon';

import * as actions from './indexAction'


const styles = {
    root: {},
    usernumber: {
        fontSize: '3em',
        textAlign: 'center'
    },
    controller: {
        textAlign: 'center'
    }
};

class Index extends Component {
    constructor(props) {
        super(props);
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

    selectTheme() {
        this.props.history.push('/theme')
    }


    render() {
        const {userNumber} = this.props.indexReducer;

        return (
            <div style={styles.root}>
                <Paper className={styles.paper}>
                    <div class="row">
                        <div class="col s4" style={styles.controller}>
                            <FontIcon className="fa fa-minus-circle" aria-hidden="true"
                                      onClick={() => this.clickMinus()}/></div>
                        <div class="col s4">
                            <div style={styles.usernumber}>{userNumber}</div>
                        </div>
                        <div class="col s4" style={styles.controller}>
                            <FontIcon className="fa fa-plus-circle" aria-hidden="true"
                                      onClick={() => this.clickPlus()}/></div>
                    </div>


                    <RaisedButton onClick={e => this.selectTheme()}>次へ</RaisedButton>
                </Paper>


            </div>
        );
    }
}


export default connect(state => state)(Index);
