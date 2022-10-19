const React = require('react')
const NavBar = require('../components/Navbar')


class Blogs extends React.Component {
    render () {
        const{blogs}=this.props
        return (
        <div>
             <head>
            <link rel="stylesheet" href="/css/app.css"/>
            </head>

            <NavBar/>

            <h1>Blogs</h1>

            <ul>
          {blogs.map((blog, idx) => (
            <li>
         <a href={`/blog/${blog._id}`}>{blog.title} </a><br />{blog.author} <br />{blog.body}
              <br />
<form action={`/blog/${blog._id}?_method=delete`} method='post' >
                  <input type='submit' value='Delete'/>
                </form>
                <a href={`/blog/${blog._id}/edit`}>Edit</a>
            </li>
          ))}
        </ul>
        </div>
        )    
}
}
module.exports = Blogs