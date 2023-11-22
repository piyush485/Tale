import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () =>  {
  const pageSize = 10;
  const apiKey = import.meta.env.VITE_NEWS_API;
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <BrowserRouter>
          <LoadingBar color='#f11946' progress={progress} height={3}/>
          <Navbar />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country={'in'} category={'general'} />} />
            <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country={'in'} category={'business'} />} />
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country={'in'} category={'entertainment'} />} />
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country={'in'} category={'health'} />} />
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country={'in'} category={'science'} />} />
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country={'in'} category={'sports'} />} />
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country={'in'} category={'technology'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App;
