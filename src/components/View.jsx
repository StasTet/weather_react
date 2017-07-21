import React from 'react';

export const View = (item) => {
    
    const data = item.data;
    const name = data.name;
    const wind = data.wind.speed;
    const temp = data.main.temp;

    return (
        <div>
            <p>Weather in {name}</p>
            <p>Wind {wind}</p>
            <p>Temperature is {temp}</p>
        </div>
    )
}