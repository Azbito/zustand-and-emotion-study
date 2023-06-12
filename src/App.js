import { useEffect, useState } from 'react'
import './App.css'
import useStore from './store'

export default function App() {
  const { user, updateNickname, getUserFromLocalStorage } = useStore()
  const [nickname, setNickname] = useState('')
  // const [age, setAge] = useState(0)

  const handleButtonclick = () => {
    updateNickname(nickname)
    setNickname('')
    // setAge(0)
  }
  const handleInputChange = event => {
    setNickname(event.target.value)
  }
  useEffect(() => {
    getUserFromLocalStorage()
  }, [])

  return (
    <div className="App">
      <div>
        <h1>{user.nickname}</h1>
        <input onChange={handleInputChange} value={nickname} />
        <button onClick={handleButtonclick}>Save</button>
      </div>
    </div>
  )
}
