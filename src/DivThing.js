import React from 'react';


const DivThing = ({idx, partner, text, numDivs, mainColor, altColor, toggled, updateParent }) => {
    return ( 

        <div 
            style={{ height: `${100/numDivs}vh`, backgroundColor: `${toggled ? altColor : mainColor }`}}
            onClick={() => updateParent(partner)}    
        >
            {text}
        </div>
     );
}
 
export default DivThing;