let avatars = [
  {
    name: 'chel1',
    path: '/assets/img/chel1.png'
  },
  {
    name: 'chel2',
    path: '/assets/img/chel2.png'
  },
  {
    name: 'chel3',
    path: '/assets/img/chel3.png'
  },
  {
    name: 'chel4',
    path: '/assets/img/chel4.png'
  },
  {
    name: 'chel5',
    path: '/assets/img/chel5.png'
  } 
]

const getRandomAvatar = () => {
  return avatars[Math.floor(Math.random() * avatars.length)]
}

module.exports = { getRandomAvatar }
