import styled from '@emotion/styled'

export const UserInfo = styled.div(props => ({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: props.backgroundColor ?? '#5e31ad',
  color: 'white',
  width: '10%',
  padding: '1rem 2rem',
  gap: 16,
  borderRadius: 16,
  margin: '2rem 0',
  h1: {
    fontWeight: 400,
    fontSize: 16
  },
  div: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%'
  }
}))
