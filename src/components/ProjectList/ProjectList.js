import React, { Component } from 'react'
import './ProjectList.css'
import Project from "../Project/Project.js"
import { projects } from '../../data'

export class ProjectList extends Component {



    renderscreen(){
        return{
            
        }
    }

    render() {
        return (
            <div className='plmain'>
            <div className='pl'>
                <div className="pl-texts">
                    <h1 className="pl-title">Create & Inspire with Ψsi</h1>
                </div>
                <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} name1={item.name1} ></Project>
        ))}
      </div>
            </div>

            </div>
        )
    }
}

export default ProjectList
