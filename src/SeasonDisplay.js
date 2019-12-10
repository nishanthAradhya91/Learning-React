import React from 'react';
import './SeasonDisplay.css';


const seasonConfig={
    summer:{
        text:"let's hit the beach!",
        iconName:'sun'
    },
    winter:{
        text:"Butt it is cold!",
        iconName:'snowflake'
    }
}
const getSeason=(lat,month)=>{
    if(month >2 && month <9){
       return lat >0 ?'summer':'winter';
    }else{
        return  lat >0 ?'winter':'summer';

    }
}

const SeasonDisplay=(props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const text = season === 'winter' ? 'Burr,It is Chilly':'Lets hit the Beeach!'
    const icon=season === 'winter'?'snowflake':'sun';
    return (
    <div className= {`season-display ${season}`}>
        <i className={`icon-left ${icon} icon massive`}/>
        <h1>{text}</h1>
        <i className={`icon-right  ${icon} icon massive`}/>
    </div>
    );
}

export default SeasonDisplay;