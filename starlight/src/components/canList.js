import React from 'react'
import Can from './Can'

//Passes the JSON from the state which gets passed down to cans to make a list. Can.js makes the items this makes the list.
const CanList = ({cans}) => {
    const mappedCans = cans.map((can) =>
    <Can
    key={can.id}
    can={can}
    />
  )

  return (
    <div className="container">
      <ul className="list-group">
        {mappedCans}
      </ul>
    </div>
  )
}

export default CanList
