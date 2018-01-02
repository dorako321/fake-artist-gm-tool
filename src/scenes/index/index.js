import React, {Component} from 'react';
import {connect} from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Avatar from 'material-ui/Avatar';

// ゲーム開始ボタン
import FloatingActionButton from 'material-ui/FloatingActionButton';

// 人数調整ボタン
import FontIcon from 'material-ui/FontIcon';

import * as actions from './indexAction'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
    },
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
                <div className="floating">
                    <FontIcon className="fa fa-minus-circle" aria-hidden="true" onClick={e => this.clickMinus()}></FontIcon>
                    <div id={""}>{userNumber}</div>
                    <FontIcon className="fa fa-plus-circle" aria-hidden="true" onClick={e => this.clickPlus()}></FontIcon>
                </div>
                <button onClick={e => this.selectTheme()}>次へ</button>


            </div>
        );
    }
}


export default connect(state => state)(Index);
