import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Clock  from './linkPages/Clock'
import  Comms  from './linkPages/Comms'
import  Games  from './linkPages/Games'
import  Header  from './linkPages/Header'
import  Index  from './linkPages/Index'
import  Media  from './linkPages/Media'
import  Minecraft  from './linkPages/Minecraft'
import  Obsolet  from './linkPages/Obsolet'
import  Radio  from './linkPages/Radio'
import  SocialMedia  from './linkPages/SocialMedia'
import  Streaming  from './linkPages/Streaming'
import  Tools  from './linkPages/Tools'
import  TestArea  from './linkPages/TestArea'
import  Twitch  from './linkPages/Twitch'
import  Webs  from './linkPages/Webs'
import  Youtube  from './linkPages/Youtube'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={ <Index />} /> 
      <Route path='/Clock' element={ <Clock />} />
      <Route path='/Comms' element={ <Comms />} />
      <Route path='/Media/Games' element={ <Games />} />
      <Route path='/Header' element={ <Header />} />
      <Route path='/Media' element={ <Media />} />
      <Route path='/Media/Games/Minecraft' element={ <Minecraft />} />
      <Route path='/Tools/Obsolet' element={ <Obsolet />} />
      <Route path='/Tools/TestArea' element={ <TestArea />} />
      <Route path='/Media/Radio' element={ <Radio />} />
      <Route path='/SocialMedia' element={ <SocialMedia />} />
      <Route path='/Media/Streaming' element={ <Streaming />} />
      <Route path='/Tools' element={ <Tools />} />
      <Route path='/Media/Twitch' element={ <Twitch />} />
      <Route path='/Webs' element={ <Webs />} />
      <Route path='/Media/Youtube' element={ <Youtube />} />
      </Routes>
    </Router>
  //  <>

  //  </>
  )
}

export default App
