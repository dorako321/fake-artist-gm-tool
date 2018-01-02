import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './App.css';

import Paper from 'material-ui/Paper';

// scenes
import Index from './scenes/index/index'
import Theme from './scenes/theme/theme'
import Notice from './scenes/notice/notice'

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
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Index}/>
                        <Route exact path='/theme' component={Theme}/>
                        <Route exact path='/notice' component={Notice}/>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
