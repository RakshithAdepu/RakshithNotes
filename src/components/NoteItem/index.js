import {
  ImgIcon,
  EmptyHeadingNote,
  EmptyParaNote,
  SecondCont,
  ListPara,
  ListHeading,
  ListCont,
  ListItem,
} from './styledComponents'

const NoteItem = props => {
  const {item} = props

  return (
    <>
      {item.length === 0 ? (
        <SecondCont>
          <ImgIcon
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
            alt="notes empty"
          />
          <EmptyHeadingNote>No Notes Yet</EmptyHeadingNote>
          <EmptyParaNote>Notes you added will appear here</EmptyParaNote>
        </SecondCont>
      ) : (
        <ListCont>
          {item.map(el => (
            <ListItem>
              <ListHeading>{el.title}</ListHeading>
              <ListPara>{el.text}</ListPara>
            </ListItem>
          ))}
        </ListCont>
      )}
    </>
  )
}

export default NoteItem
