import React from 'react'
import {Link} from 'react-router-dom'


function Main () {
    return(
        <div>
            main
            <Link to='/contact'>Go to Contact</Link>
            <br/>
            <Link to='/aboutus'></Link>
        </div>
    )
}
export default Main;