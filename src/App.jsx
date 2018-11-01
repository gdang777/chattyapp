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
       currentUser: data.currentUser.name,
       messages:[],
       content: ''
      };
      this.textEnter = this.textEnter.bind(this);
      // this.handleEditClick = this.handleEditClick.bind(this);
  }
  // handleEditClick() {
  //   this.setState({
  //       editModeEnabled: !this.state.editModeEnabled
  //       console.log("name field edit clicked");
  //   })
  // }
  textEnter(content){
    const incomingMessage = {
      username: this.state.currentUser,
      content: content
    }
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
    console.log("received message on frontend", event.data);
    const parsedObject = (JSON.parse(event.data));
    const messages = this.state.messages.concat(parsedObject);
    this.setState({messages: messages});

    console.log("parsed object", parsedObject);
  });
}
  
  render() {
    if(this.state.loading){
     return <h1>Loading.....</h1>
    } else {
      return (<div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <ChatBar clickEdit={this.handleEditClick} textEnter={this.textEnter} chatUser={this.state.currentUser}/>
      <Message />
      <MessageList userMessage={this.state.messages}/>
      </div> 
      );
    }
  }
}
export default App;
