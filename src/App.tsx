import Header from './components/Header'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import Details from './pages/Details/Details'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function App() {
  return (
    <>
      <Header/>
      <Main>
        <SkeletonTheme baseColor='var(--colors-ui-base)' highlightColor='var(--colors-bg)'>
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/country/:name' element={<Details/>}/>
          </Routes>
          </BrowserRouter>
        </SkeletonTheme>
      </Main>
    </>
  )
}

export default App
