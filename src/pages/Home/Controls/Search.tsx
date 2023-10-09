import styled from 'styled-components'
import {IoSearch} from 'react-icons/io5'

type SearchProps = {
  search: string,
  setSearch: (e: string) => void
}

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
  width: 100%;

  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`

  margin-left: 2rem;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  outline: none;
  border: none;
  color: var(--colors-text);
  &::placeholder{
    color: var(--colors-text);
  }
`

const Search = ({search, setSearch}: SearchProps) => {
  return (
    <InputContainer>
      <IoSearch/>
      <Input id="search" onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}

export default Search