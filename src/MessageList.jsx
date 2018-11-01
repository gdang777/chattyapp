import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const newMessages = this.props.userMessage.map(message => {
      return (<Message
        key={message.id}
        type={message.type}
        user={message.username}
        content={message.content}
        />)
    });
    return (
    <section className="Messages">
      {newMessages}
    </section>
    )
  }
}
export default MessageList;