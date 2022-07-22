import React, { Component } from 'react'
import './Project.css'

export class Project extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             image:this.props.img,
             link:this.props.link,
             name1:this.props.name1
        }
    }

    render() {
        return (
            <div className='p full border'>
                <div className="p-browser">
                    <div className='tileHeading'>{this.state.name1}</div>
                </div>
                <a href={this.state.link} target="_blank" rel="noreferrer">
        <img src= {this.state.image} alt="" className="pl-img" ></img>
      </a>
            </div>
        )
    }
}

export default Project
