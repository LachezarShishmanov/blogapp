const React = require('react')
const NavBar = require('../components/Navbar')

class New extends React.Component {
    render(){
        return(
            <div>
                 <head>
            <link rel="stylesheet" href="/css/app.css"/>
            </head>

            <NavBar/>

                <h1>Create New Blog</h1>

                <form action ='/blog' method='POST'>
                    Title: <input type="text" name="title" /> 
                    <br/>
                    Body: <input type="text" name="body" /> 
                    <br/>
                    Author: <input type="text" name="author" /> 
                    <br/>
                    <input  type="submit" value="create new post" />
                </form>
            </div>
        )
    }
}

module.exports = New