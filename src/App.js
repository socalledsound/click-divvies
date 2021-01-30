import React, { Component} from 'react';
import DivThing from './DivThing';


const getRandomColor =  () =>`#${Math.floor(Math.random() * 16777215).toString(16)}`;

const numDivs = 10;



class App extends Component {
    state = { 
        mainColors : Array.from({length: numDivs}, () => getRandomColor()),
        altColors : Array.from({length: numDivs}, () => getRandomColor()),
        toggledStates : Array.from({length: numDivs}, () => false ),
     }


     toggleColor = (idx) => {
         const { toggledStates } = this.state;
         toggledStates[idx] = !toggledStates[idx];
         this.setState({ toggledStates });
     }

    render() { 
        const { mainColors, altColors, toggledStates } = this.state;

        return ( 
            <React.Fragment>

                {mainColors.map( (color, i, array) => 
                    
                    <DivThing 
                    key={`divvy${i}`}
                    idx={i}
                    partner={ i === array.length - 1 ? 0 : i + 1}
                    numDivs={array.length}
                    text={i} 
                    mainColor={mainColors[i]} 
                    altColor={altColors[i]} 
                    toggled={toggledStates[i]}
                    updateParent={this.toggleColor}
                />
                    
                    )}

            </React.Fragment>
            
         );
    }
}
 
export default App;