import React, {Component} from 'react';
import logo from './logo.svg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './App.css';

import Paper from 'material-ui/Paper';

// scenes
import Index from './scenes/index/index'
import Theme from './scenes/theme/theme'
import Notice from './scenes/notice/notice'
import Finish from './scenes/finish/finish'

const style = {
    marginTop: 'auto',
    textAlign: 'center',
    display: 'inline-block',
};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title=""
                    showMenuIconButton={false}
                />
                <Card>
                    <CardText>
                        <BrowserRouter>
                            <div>
                                <Route exact path='/' component={Index}/>
                                <Route exact path='/theme' component={Theme}/>
                                <Route exact path='/notice' component={Notice}/>
                                <Route exact path='/finish' component={Finish}/>
                            </div>
                        </BrowserRouter>
                    </CardText>
                </Card>


                <a href="https://www.amazon.co.jp/%E3%82%AA%E3%82%A4%E3%83%B3%E3%82%AF%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BA-%E3%82%A8%E3%82%BB%E8%8A%B8%E8%A1%93%E5%AE%B6%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E3%81%B8%E8%A1%8C%E3%81%8F/dp/B00KKBJZ5K?SubscriptionId=AKIAJI7VLMTXYV7KBF3Q&amp;tag=dj07c-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=B00KKBJZ5K">
                    <Card>
                        <CardMedia
                            overlay={<CardTitle title="エセ芸術家ニューヨークへ行く" subtitle="Amazon で詳細を見る"/>}
                        >
                            <img src="https://images-fe.ssl-images-amazon.com/images/I/51yR0KA12PL.jpg"
                                 alt="エセ芸術家ニューヨークへ行く"/>
                        </CardMedia>
                    </Card>
                </a>
            </MuiThemeProvider>
        );
    }
}

export default App;
