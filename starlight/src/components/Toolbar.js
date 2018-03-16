import React from 'react'

//Toolbar holds the can counter as well as the search bar where you can tpye in a size and it will return matching results in real time
const Toolbar = ({cans, seeker}) => {

  const totalCount = cans.length

  const searchFor = (e) => {
    e.preventDefault()
    seeker(e.target.value)
  }

  return(
    <div className="row justify-content-center ">
      <br />
      <div className="col align-self-center">
        <h4>Can Count: <span className="badge badge-pill badge-primary">{totalCount}</span></h4>
        <input onChange={ searchFor }  id="search" name="search" type="text" placeholder="Search Size Here"></input>
        <br />
      </div>
      <br />
    </div>
  )
}

export default Toolbar
