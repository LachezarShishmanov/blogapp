const React = require('react')


class NavBar extends React.Component{
    render() {
        return(
            <nav style={styles.container}>
               <a href='/'>Home</a>
               <a href='/Blogs'>Blogs</a>
               <a href='/Blogs/new'>Create New Blog</a>
               <a href='/Users/Signup'>Signin/up</a>
               <a href='/Users/Signout'>Signout</a>
            </nav>
        )
    }
}

module.exports = NavBar

const styles ={
   container: {
     display: "flex",
     justifyContent: "space-between",
     backGroundColor:"white",



   }


}