import React, { Component } from 'react';

class TopNavigationBar extends Component
{
    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        return(
            <nav class='top-nav'>
            <div className="top-navigation-bar">
                <ul>
                   <li><a href=""><span>Home</span></a></li>
                   <li><a href=""><span>News</span></a></li>
                   <li><a href=""><span>Contact</span></a></li>
                   <li><a href=""><span>About</span></a></li>
                </ul> 
            </div>
            </nav>
        )

    }
}

export default TopNavigationBar;