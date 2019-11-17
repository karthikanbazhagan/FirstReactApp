import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footer'>
                <ul>
                    <li><a href="">Conditions of Use & Sale</a></li>
                    <li><a href="">Privacy Notice</a></li>
                    <li><a href="">Contact</a></li>
                    <li><span>©2019, Karthik Anbazhagan</span></li>
                </ul>
            </div>
        );
    }
}

export default Footer;