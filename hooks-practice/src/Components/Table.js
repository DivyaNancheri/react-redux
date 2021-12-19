import React from 'react'

const Table = ({ posts }) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          { (posts.length > 0) ? posts.map( (post, index) => {
             return (
              <tr key={ index }>
                <td>{ post.id }</td>
                <td>{ post.title }</td>
                <td>{ post.body }</td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
  }

export default Table
