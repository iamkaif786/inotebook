import React from 'react'

import Notes from './Notes';
const Home = () => {
  
  return (
    <div>
      <div className="container my-3 bg-dark ms-5" style={{ height: "330px", width: "360px" }}>
        <h2> Add a note </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
            <input type="email" className="form-control" style={{ width: "70%" }} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
            <input type="password" className="form-control" style={{ width: "70%" }} id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label text-light" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-outline-primary ms-5">Login</button>
        </form>
      </div>
      <Notes />
    </div>
  )
}

export default Home
