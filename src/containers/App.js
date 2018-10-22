import React, { Component } from 'react';
import '../assets/styles/fonts.scss';
import '../assets/styles/styles.scss';
import img from '../assets/images/avatar-1.png';
import logProps from '../hoc/wrap';

@logProps
class App extends Component {
    render() {
        return (
            <div>
                <img src={img} alt="" />
                <h1>React boilerplate1</h1>
            </div>
        )
    }
}

export default App;
