import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from './noticeAction'

import RaisedButton from 'material-ui/RaisedButton';


const styles = {};

class Notice extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props
        console.log('componentDidMount')
        //console.log(this.props.indexReducer.userNumber)
        dispatch(actions.noticeInit(
            this.props.indexReducer.userNumber,
            this.props.themeReducer.selectedTheme,
            this.props.themeReducer.selectedAnswer
        ))
    }

    switchUserRoleView() {
        console.log('switchUserRoleView')
        const {dispatch} = this.props
        dispatch(actions.switchUserRoleView())
    }

    nextUser(number, maxNumber) {
        console.log('nextUser')
        const {dispatch} = this.props
        dispatch(actions.nextUser())
        if (number === maxNumber - 1) {
            this.props.history.push('/finish')
        }
    }


    render() {
        console.log(this.props)
        //const {userNumber} = this.props.indexReducer;
        const {maxNumber, number, fakeArtistNumber, theme, answer, opened} = this.props.noticeReducer;

        return (
            <div style={styles.root}>
                {/*<div className={"debug"}>*/}
                    {/*<ul>*/}
                        {/*<li>最大人数: {maxNumber}</li>*/}
                        {/*<li>現在の番号: {number}</li>*/}
                        {/*<li>エセ芸術家: {fakeArtistNumber}</li>*/}
                        {/*<li>テーマ: {theme}</li>*/}
                        {/*<li>答え: {answer}</li>*/}
                        {/*<li>答えを開いているか: {opened}</li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
                <div className={opened ? 'hidden' : ''}>
                    {number + 1}人目の方
                    <RaisedButton onClick={() => this.switchUserRoleView()} primary={true} label={"お題を見る"}/>
                </div>
                <div className={!opened ? 'hidden' : ''}>
                    <div className={number === fakeArtistNumber ? 'hidden' : ''}>お題は「{answer}」です！</div>
                    <div className={number !== fakeArtistNumber ? 'hidden' : ''}>あなたはエセ画家です！</div>
                    <RaisedButton onClick={() => this.nextUser(number, maxNumber)} primary={true} label={"確認しました"}/>
                </div>
            </div>
        );
    }
}


export default connect(state => state)(Notice);
