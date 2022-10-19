const React = require('react')


class NavBar extends React.Component{
    render() {
        return(
            <nav style={styles.container}>
               <a href='/'>Home</a>
               <a href='/blog'>Blogs</a>
               <a href='/blog/new'>Create New Blog</a>
               <a href='/user/signup'>Signin/up</a>
               <a href='/user/signout'>Signout</a>
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