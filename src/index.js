import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class MySolder extends React.Component{
    render(){
        return(
            <div className="main-cont">

                <div className="top">
                    <h1 className="title1" >Tacos</h1>
                </div>

                <div className="content">
                    <div className="c1 left" >
                        <h3>Hello from LEFT</h3>
                    </div>

                    <div className="c1 right" >
                        <h3>Hello from RIGHT</h3>
                    </div>
                </div>

                <div className="bottom">
                    <p>By: Edmundo Rubio</p>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<MySolder/>, document.getElementById('root'))