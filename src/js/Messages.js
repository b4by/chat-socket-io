let messageForm = document.getElementById('send-message__form')
let messageInput = document.getElementById('send-message__input')
let messagesContainer = document.getElementById('chat-container')

class Message {

  constructor(data) {
    this.username = data.username
    this.usernameColor = data.color
    this.message = data.message
  }

  setMessageDate = () => {
    let hours = new Date().getHours()
    let minutes = (new Date().getMinutes() < 10) ? '0' : '' + new Date().getMinutes()
    return date = `${hours}:${minutes}`
  }

  createMessage = () => 
  `
  <li class="chat__message message">
    <div class="message__username" style='color:${this.usernameColor}'">${this.username}</div>
    <div class="message__content">${this.message}</div>
    <div class="message__date">${this.setMessageDate()}</div>
  </li>
  `
  
  addChatMessage = () => {
    
  }


}

function addChatMessageTo(container) {
  let messageContainer = document.querySelector(`#${container}`)
}

const message = new Message({
  username: '1',
  color: '2',
  message: '3'
}).createMessage();

console.log(message)