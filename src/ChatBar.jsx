import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.chatUser = this.props.chatUser;
  }
  handlekeyPressforName(e){
    if (e.key === 'Enter') {
      console.log(this.chatUser);
      this.props.handleEditClick(this.chatUser);
      e.target.value ='';
    }
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.textEnter(e.target.value, this.chatUser);
      e.target.value ='';
      document.getElementById("uName").value = '';
    }
  }
  nameEdit(e) {
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