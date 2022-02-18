import React from 'react';
import { Link } from 'react-router-dom';


const NavBar= ()=>{
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/users" class="nav-link active" aria-current="page" href="#">Users</Link>
        </li>
        <li class="nav-item">
          <Link to="/counter" class="nav-link" href="#">Counter</Link>
        </li>
        <li class="nav-item">
          <Link to="/posts" class="nav-link" href="#">Posts</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default NavBar;