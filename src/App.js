import { useEffect, useState } from 'react'
import './App.css'
import useStore from './store'
import Bear from '../src/assets/images/bear.png'

export default function App() {
  const {
    user,
    updateNickname,
    getUserFromLocalStorage,
    age,
    updateAge,
    updateAmountOfBearClicked
  } = useStore()
  const [nickname, setNickname] = useState('')
  const [ageInputed, setAgeInputed] = useState(0)
  const [amountBearClicked, setAmountBearClicked] = useState(0)

  const handleButtonclick = () => {
    updateNickname(nickname)
    updateAge(ageInputed)
    setNickname('')
    setAgeInputed(0)
  }

  const handleAmountBearClicked = () => {
    setAmountBearClicked(amountBearClicked + 1)
    updateAmountOfBearClicked(amountBearClicked)
  }

  useEffect(() => {
    getUserFromLocalStorage()
  }, [])

  return (
    <div className="App">
      <div>
        <h1>{user.nickname}</h1>
        <p>{user.age}</p>
        <input onChange={e => setNickname(e.target.value)} value={nickname} />
        <input onChange={e => setAgeInputed(e.target.value)} value={age} />
        <img
          title="This bear belongs to Duolingo's arts"
          onClick={handleAmountBearClicked}
          src={Bear}
          alt="Duolingo's bear art"
        />
        <button onClick={handleButtonclick}>Save</button>
      </div>
    </div>
  )
}
