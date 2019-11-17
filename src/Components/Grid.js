import React, { Component } from 'react';

class Grid extends Component
{
    constructor(props)
    {
        super(props);        
    }

    render()
    {
        return(
            <div class="grid-container">
                <Card index = '1' />
                <Card index = '2' />
                <Card index = '3' />

                <Card index = '4' />
                <Card index = '5' />
                <Card index = '6' />

                <Card index = '7' />
                <Card index = '8' />
                <Card index = '9' />
            </div> 
        )
    }
}

function Card(props)
{
    return <div class="grid-item">{props.index}</div>
}

export default Grid;