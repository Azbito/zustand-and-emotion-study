import create from 'zustand'

const useStore = create(set => ({
  user: {
    nickname: ''
    // age: 0,
    // amountOfBearClicked: 0
  },
  updateNickname: newNickname => {
    set(state => ({
      user: {
        ...state.user,
        nickname: newNickname
      }
    }))
    localStorage.setItem(
      'userinfos',
      JSON.stringify({ user: { nickname: newNickname } })
    )
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
