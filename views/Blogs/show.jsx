const React = require('react')


class Show extends React.Component{
    render(){
        console.log(this.props)
        // receive data from fruits.js
        const blog = this.props.blog
        const presentDate = this.props.date
        return(
        <div>
            <h1>Show Page!!!</h1>
            <a href="/blog">Home</a>
        
        </div>
        )  
        
    }
}

module.exports = Show;