const React = require('react')
const NavBar = require('../components/Navbar')


class HomePage extends React.Component {
    render(){
        return(<div>
           
            <head>
            <link rel="stylesheet" href="/css/app.css"/>
            </head>

            <NavBar/>

            <h1>Welcome to my Blog App</h1>
             <img src='bg.png' width="300px" height="300px"/> 
        </div>)
    }
}

module.exports = HomePage