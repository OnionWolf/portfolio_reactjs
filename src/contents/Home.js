import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import avatar from '../img/BW_Profile.jpg';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={avatar} className="avatar"></img>
            <ReactTypingEffect className="typingeffect" text={['Logan Senko','Info. Designer ']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
        )
    }
}
export default Home