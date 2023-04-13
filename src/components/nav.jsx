import React from "react"
import Dropdown from "./dropdown"


export default function navigate () {
    return(
        <div className="nav">
            <div className="navbar">


            <div>
               <div className="instruments">Instruments</div>
               <div className="dropinstru">
                <ul>
                    <li>Guitar</li>
                    <li>Bass</li>
                    <li>Ukelele</li>
                    <li>Piano</li>
                    <li>Singing</li>
                </ul>
               </div>
          </div>

            <a href="" ><div className="artistcourses">Artist Courses</div></a>
            <a href="" ><div className="blog">Blog</div></a>
            <a href="" ><div className="familyplan">Family Plan</div></a>
            <a href="" ><div className="help">Help</div></a>
            


            <Dropdown/>

            </div>
        </div>
    )
}