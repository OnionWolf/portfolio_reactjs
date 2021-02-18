import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render () {
        return (
            <div className="condiv">
                <h1 className="subtopic">Education</h1>
                <Widecard title="Information Design" where="Mount Royal University (MRU)" from="Sept 2019" to="2023"/>
                <Widecard title="Culinary Arts" where="Southern Alberta Institute of Technology (SAIT)" from="Sept 2009" to="2011"/>
            </div>
        )
    }
}
export default Education