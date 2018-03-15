import React from 'react'
import Message from './Message'

const MessageList = ({messages, deleteMessages}) => {
    const mappedMessages = messages.map((message) =>
    <Message
    key={can.id}
    message={message}
    deleteMessages={deleteMessages}
    />
  )
  return (
    <div className="container">
      <ul className="list-group">
        {mappedMessages}
      </ul>
    </div>
  )
}

export default MessageList
