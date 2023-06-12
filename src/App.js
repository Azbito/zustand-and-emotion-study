import { useEffect, useState } from 'react'
import useStore from './store'
import Bear from '../src/assets/images/bear.png'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { UserInfo } from './components/UserInfo'
import { Global, css } from '@emotion/react'

export default function App() {
  const {
    user,
    updateNickname,
    getUserFromLocalStorage,
    age,
    updateAge,
    updateAmountOfBearClicked
  } = useStore()
  const [nicknameInputed, setNicknameInputed] = useState('')
  const [ageInputed, setAgeInputed] = useState(0)
  const [amountBearClicked, setAmountBearClicked] = useState(0)

  const handleButtonclick = () => {
    if ((nicknameInputed && ageInputed !== '') || null) {
      updateNickname(nicknameInputed)
      updateAge(ageInputed)
      setNicknameInputed('')
      setAgeInputed(0)
      return
    }
    alert('Please, fill all the blanks')
  }

  const handleAmountBearClicked = () => {
    setAmountBearClicked(amountBearClicked + 1)
    updateAmountOfBearClicked(amountBearClicked)
  }

  useEffect(() => {
    getUserFromLocalStorage()
  }, [])

  return (
    <div>
      <Container>
        <UserInfo>
          <div>
            <b>
              Nickname: <h1>{user.nickname}</h1>
            </b>
          </div>
          <div>
            <b>
              Age: <h1>{user.age}</h1>
            </b>
          </div>
          <div>
            <b>
              You clicked <h1>{user.amountOfBearClicked} times</h1> on the bear
            </b>
          </div>
        </UserInfo>
        <Button onClick={handleButtonclick}>Save</Button>
        <Input
          placeholder="Type your nickname"
          onChange={e => setNicknameInputed(e.target.value)}
          value={nicknameInputed}
        />
        <Input
          placeholder="Type your age"
          onChange={e => setAgeInputed(e.target.value)}
          value={ageInputed}
        />
        <img
          title="This bear belongs to Duolingo's arts"
          onClick={handleAmountBearClicked}
          src={Bear}
          alt="Duolingo's bear art"
        />
      </Container>
    </div>
  )
}
