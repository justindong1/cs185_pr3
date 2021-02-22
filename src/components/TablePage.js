import { Component } from 'react';
import './TablePage.css';

class TablePage extends Component {
    render() {
        return(
            <div>
                <h1 className="projects">Projects</h1>
                <div className="table-grid-container">
                    <div className="table-grid-item header">Name</div>
                    <div className="table-grid-item header">Details</div>
                    <div className="table-grid-item header">Year</div>
                    <div className="table-grid-item"><a className="name" href="https://github.com/recipull/recipull.github.io">Recipull</a></div>
                    <div className="table-grid-item">Recipull is a web application created using Reactjs, Java, and MySQL during the Spring 2019 quarter of CS48. 
                        It allows users to input a list of ingredients that they own to see which recipes they can make.</div>
                    <div className="table-grid-item">2019</div>
                    <div className="table-grid-item"><a className="name" href="https://github.com/rhiannaso/SpoilAlert">SpoilAlert</a></div>
                    <div className="table-grid-item">SpoilAlert is an android application created using Kotlin during the Fall 2020 quarter of CS184. 
                        It allows users to record the various grocery items that they currently have in their fridge and receive notifications when they are close to expiring. 
                        It also allows users to create and join a house where they can view items owned by other members of the house.</div>
                    <div className="table-grid-item">2020</div>
                </div>
          </div>
        )
    }
}

export default TablePage; 