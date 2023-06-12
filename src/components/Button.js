import styled from '@emotion/styled'

export const Button = styled.button(props => ({
  backgroundColor: props.backgroundColor ?? '#14b319',
  color: 'white',
  border: 'none',
  borderRadius: 16,
  padding: '.5rem',
  cursor: 'pointer',
  transition: '.2s',
  outline: 'none',
  '&:hover': {
    backgroundColor: props.backgroundColorHover ?? '#0e9c13'
  },
  '&:active': {
    backgroundColor: props.backgroundColorHover ?? '#108514'
  }
}))
