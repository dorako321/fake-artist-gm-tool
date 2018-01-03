import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from './themeAction'
import Divider from 'material-ui/Divider';


const styles = {
    textArea : {
        textAlign: 'center',
        rounded: true,
        margin: 'auto',
    }
};

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
                <div style={styles.textArea}>
                    問題のテーマを選択してください
                </div>
                <ul onClick={this.onThemeClick}>
                    {themes.map((item) => (
                        <li key={item.theme} data-itemid={item.theme}>{item.theme}</li>
                    ))}
                </ul>
                <Divider />
                <div style={styles.textArea}>
                    または、自分で問題を設定

                </div>

            </div>
        );
    }
}


export default connect(state => state)(Theme);
