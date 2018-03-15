import React from 'react'

const Can = ({can}) => {
  return (
    <div>
      <li className="list-group-item">
      <i>Name:</i> {can.name}
      <br/>
      <i>Serial:</i> {can.serial}
      <br/>
      <i>Size:</i> {can.size}
      <br/>
      <i>Creation Date:</i> {can.createdDate}
      <br/>
      <i>Modified Date:</i> {can.modifiedDate}
      <br/>
      </li>
    </div>
  )
}

export default Can
