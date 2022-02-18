import React from 'react'

const PostsList = ({posts})=>  {

  return (
    <div class="row">
    <div class="col-sm-6">
    {posts.map((post, index) =>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.body}</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
       )}
    </div>
  </div>
   
  )
}

export default PostsList