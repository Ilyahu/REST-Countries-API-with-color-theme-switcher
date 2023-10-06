import styled from "styled-components";
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import { Container } from "./Container";
import { useEffect, useState } from "react"

const HeaderElement = styled.header`
  width: 100%;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({href: '/'})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
`

const LOCAL_STORAGE_KEY = 'themeKey'

const Header = () => {
  const [theme, setTheme] = useState(() => {
    const localValue = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (localValue === null) return 'light'
    return JSON.parse(localValue) 
  })
  
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
      document.body.setAttribute('data-theme', theme)
    }, [theme])

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size="14px"/> : <IoMoon size="14px"/>}
            <span style={{marginLeft: '0.75rem'}}>Dark Mode</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  )
}

export default Header