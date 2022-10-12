const React = require('react')

class Blogs extends React.component {
    render () {
        return (<div>
            <h1>Blogs</h1>
        </div>)
    }
}


const React = require('react')
const fruits = require('../../models/fruits')

class Show extends React.Component{
    render(){
        console.log(this.props)
        // receive data from fruits.js
        const fruit = this.props.fruit
        const presentDate = this.props.date
        return(
        <div>
            <h1>Show Page!!!</h1>
            <a href="/fruits">Home</a>
            <h3>The fruit name is {fruit.name} and the color is {fruit.color}</h3>

            <h4>{fruit.readyToEat ? 'Its ready to eat' : 'It is not ready to eat... Cant touch this'}</h4> 
            
            <h6>Year:{presentDate}</h6>
        </div>
        )  
        
    }
}