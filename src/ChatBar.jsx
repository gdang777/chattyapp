import React, {Component} from 'react';

class ChatBar extends Component {
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log(e.target.value)
      this.props.textEnter(e.target.value)
    }
  }
  render() {
    return (
    <footer className="chatbar">
      <input className="chatbar-username" placeholder={this.props.chatUser} />
      <input onKeyPress={this.handleKeyPress.bind(this)} className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
    
    );
  }
}
export default ChatBar;