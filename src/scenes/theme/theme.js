import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from './themeAction'


const styles = {};

class Theme extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(actions.fetchThemeList())
    }

    onThemeClick = (e) => {
        const selectedTheme = e.target.getAttribute('data-itemid');
        console.log();
        // ランダムにお題を選択
        const {dispatch} = this.props
        dispatch(actions.selectAnswer(selectedTheme, this.props.themeReducer.themes))

        // 次のシーンへ移動
        this.props.history.push('/notice')
    }

    render() {
        const {themes} = this.props.themeReducer;
        console.log(this.props)

        return (
            <div style={styles.root}>
                <div>
                    問題のテーマを選択してください
                </div>
                <ul onClick={this.onThemeClick}>
                    {themes.map((item) => (
                        <li key={item.theme} data-itemid={item.theme}>{item.theme}</li>
                    ))}
                </ul>

            </div>
        );
    }
}


export default connect(state => state)(Theme);
