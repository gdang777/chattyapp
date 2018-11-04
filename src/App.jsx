import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import data from '../data.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      type:"text",
      currentUser: data.currentUser.name,
      messages:[],
      content: '',
      count: 0
    };
    this.textEnter = this.textEnter.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }
  textEnter(content, chatUser){
    this.setState({currentUser: chatUser});
    const incomingMessage = {
      type:"postMessage",
      username: chatUser,
      content: content
    }
    this.socket.send(JSON.stringify(incomingMessage));
  }
  handleEditClick(name) {
    const incomingMessage = {
      type:"postNotification",
      username: name,
      content: `${this.state.currentUser} changed name to ${name}` 
    }
    this.setState({currentUser: name});
    this.socket.send(JSON.stringify(incomingMessage));
  }

  componentDidMount() {    
    setTimeout(() => {
      this.setState({loading:false})
    },1000)
    this.socket = new WebSocket("ws://localhost:3001/");
    this.socket.addEventListener("open", (event) => {
      console.log("connection established")
    });

  this.socket.addEventListener("message", (event) => {
    const parsedObject = (JSON.parse(event.data));
    if(parsedObject.type === 'connectedUsers'){
      this.setState({count:parsedObject.count})
    }    
      const messages = this.state.messages.concat(parsedObject);
      this.setState({messages: messages});
  });
}
  render() {
    if(this.state.loading){
     return <h1>Loading.....</h1>
    } else {
      return (<div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Talky</a>
          {(this.state.count > 1) ?
          <a className="counter">{this.state.count} Users online</a> 
          :
          <a className="counter">{this.state.count} User online</a>
          }
        </nav>
      <ChatBar handleEditClick={this.handleEditClick} textEnter={this.textEnter} chatUser={this.state.currentUser}/>
      <Message />
      <MessageList userMessage={this.state.messages}/>
      </div> 
      );
    }
  }
}
export default App;
