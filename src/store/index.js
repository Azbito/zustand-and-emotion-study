import create from 'zustand'

const useStore = create(set => ({
  user: {
    nickname: '',
    age: 2,
    amountOfBearClicked: 0
  },
  updateNickname: newNickname => {
    set(state => {
      const updatedUser = {
        ...state.user,
        nickname: newNickname
      }
      localStorage.setItem('userinfos', JSON.stringify({ user: updatedUser }))
      return { user: updatedUser }
    })
  },
  updateAge: newAge => {
    set(state => {
      const updatedUser = {
        ...state.user,
        age: newAge
      }
      localStorage.setItem('userinfos', JSON.stringify({ user: updatedUser }))
      return { user: updatedUser }
    })
  },
  updateAmountOfBearClicked: newAmount => {
    set(state => {
      const updatedUser = {
        ...state.user,
        amountOfBearClicked: newAmount
      }
      localStorage.setItem('userinfos', JSON.stringify({ user: updatedUser }))
      return { user: updatedUser }
    })
  },
  getUserFromLocalStorage: () => {
    const storedUser = localStorage.getItem('userinfos')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      set({ user: { ...parsedUser.user } })
    }
  }
}))

export default useStore
