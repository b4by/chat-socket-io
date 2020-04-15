import '../scss/style.scss'

window.addEventListener('DOMContentLoaded', function() {
  let socket = io();

  // Username Form

  let pageLogin = document.getElementById('page-login')
  let userNameForm = document.getElementById('username-form')
  let userNameInput = document.getElementById('username-input')
  let usersListContainer = document.getElementById('users-list')

  userNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = userNameInput.value
    if (username.trim()) {
      socket.emit('new user', username)
      pageLogin.style.display = 'none'
    } else {
      return
    }
  })

  // Add username to chat sidebar

  const addUserToUsersList = (user) => {
    let template =
    `
    <li class="sidebar__user user" data-socketId="${user.socketId}">
      <img class="user__img" src="${user.avatar.path}" alt="${user.avatar.name}">
      <div class="user__info">
        <span class="user__name">${user.username}</span>
      </div>
    </li>
    `

    usersListContainer.innerHTML += template;
  }

  // Notify chat about user event

  const notify = (user, event) => {
    let getNotifyTemplate = (event) => 
    `
      <li class="chat__message notify">
        <div class="notify__content">${user.username} ${event}</div>
      </li>
    `

    if (event === 'joined') {
      messagesContainer.innerHTML += getNotifyTemplate(event)
    } else {
      messagesContainer.innerHTML += getNotifyTemplate(event)
    }

    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  // Add New Message To Chat

  let messagesContainer = document.getElementById('chat-container')
  let messageForm = document.getElementById('chat-form')
  let messageInput = document.getElementById('chat-input')

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message.trim()) {
     socket.emit('add message', message)
     messageInput.value = ''
    } else {
      return
    }
  })

  let addChatMessage = (data) => {
    let chatMessageTemplate = `
    <li class="chat__message message">
      <div class="message__username" style='color:${data.color}'">${data.username}</div>
      <div class="message__content">${data.message}</div>
      <div class="message__date">${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes(): '' + new Date().getMinutes()} </div>
    </li>
    `
    messagesContainer.innerHTML += chatMessageTemplate
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  // Socket Emits

  socket.on('user disconnected', (user) => {
    notify(user, 'has left the chat')
  })

  socket.on('user joined', (user) => {
    notify(user, 'joined the chat')
    addUserToUsersList(user)
  })

  socket.on('new message', (data) => {
    addChatMessage(data);
  });

})