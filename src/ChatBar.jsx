import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.chatUser = this.props.chatUser;
  }
  handlekeyPressforName(e){
    if (e.key === 'Enter') {
      this.props.handleEditClick(e.target.value);
      e.target.value ='';
    }
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.textEnter(e.target.value, this.chatUser);
      e.target.value ='';
    }
  }
  nameEdit(e) {
    if (!e.target.value) {
      return;
    }
    this.chatUser = e.target.value;
  }
  render() {
    return (
    <footer className="chatbar">
      <input id="uName" onKeyUp={this.nameEdit.bind(this)} onKeyPress={this.handlekeyPressforName.bind(this)} type="text"  className="chatbar-username" placeholder={this.chatUser} />
      <input onKeyPress={this.handleKeyPress.bind(this)} className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
    );
  }
}
export default ChatBar;