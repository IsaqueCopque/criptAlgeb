import React from 'react';
import './style.css'

import Main from './components/Main/Main';
import Help from './components/Help/Help';
import Info from './components/Help/Info';

const App = () => {

    const [op,setOp] = React.useState(0);

    const Content = () =>{
        if(op === 0)
            return <Main op={op} setOp={setOp} />
        else if(op === 1)
            return <Help op={op} setOp={setOp} />
        else
            return <Info op={op} setOp={setOp} />
    }

    return(
        <div className='terminal-window'>    
        <div className='title'>
            <p>Criptalgeb Terminal</p>
        </div>
        
        <div className='container'>
        { Content() } 
        </div>

        </div>
    );
}
export default App;