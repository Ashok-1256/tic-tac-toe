import React from 'react';
import Game from './Game';

class App extends React.Component{
    render(){
        return (
            <div>
                Welcome to my first React Game!
                <Game />
            </div>
        )
    }
}

export default App;