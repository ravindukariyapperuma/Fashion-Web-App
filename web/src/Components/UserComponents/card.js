import React, { Component } from 'react'
import './card.css';

export class card extends Component {
    render() {
        return (
                <div class="card">
                    <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
                    <div class="container">
                        <h4><b>John Doe</b></h4> 
                        <p>Architect & Engineer</p> 
                    </div>

            </div>
        )
    }
}

export default card