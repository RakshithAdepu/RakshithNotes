import {useState} from 'react'

import {
  MainContainer,
  Title,
  InputContainer,
  TitleInputElement,
  TitleInputContent,
  AddButton,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeText = event => {
    setText(event.target.value)
  }

  const onClickAdd = () => {
    setList(prev => [...prev, {title, text}])
    setTitle('')
    setText('')
  }

  return (
    <>
      <MainContainer>
        <Title>Notes</Title>
        <InputContainer>
          <TitleInputElement
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <TitleInputContent
            type="text"
            placeholder="Take a Note"
            onChange={onChangeText}
            value={text}
          />
          <AddButton type="button" onClick={onClickAdd}>
            Add
          </AddButton>
        </InputContainer>

        <NoteItem item={list} />
      </MainContainer>
    </>
  )
}

export default Notes
