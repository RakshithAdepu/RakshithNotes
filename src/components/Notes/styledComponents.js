import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Title = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 40vh;
  width: 70vw;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 3px 5px 6px 4px #475569;
`

export const TitleInputElement = styled.input`
  border: 1px solid transparent;
  border-radius: 5px;
  padding-left: 3vw;
  color: #1e293b;
  outline: none;
  width: 60vw;
  height: 7vh;
  font-weight: bold;
`
export const TitleInputContent = styled.input`
  border: 1px solid transparent;
  border-radius: 5px;
  padding-left: 3vw;
  color: #1e293b;
  outline: none;
  width: 60vw;
`

export const AddButton = styled.button`
  background-color: #334155;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 1vh;
  margin-left: 50vw;
  width: 10vw;
`
