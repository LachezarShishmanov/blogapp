const React = require('react')

class HomePage extends React.Component {
    render(){
        return(<div>
            <header>
            <link rel="stylesheet" href="/CSS/app.css"/>
            </header>
            <h1>Welcome to my Blog App</h1>
             <img src='../../public/bg.png' width="300px" height="300px"/> 
        </div>)
    }
}

module.exports = HomePage