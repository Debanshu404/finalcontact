import React,{ useState } from 'react'

import './App.css'
import JobApplicationForm from './JobApplicationForm'
import ActualJob from './ActualJob.jsx'
import ContactUs from './ContactUs.jsx'
import Chooseui from './Chooseui.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  



  <JobApplicationForm/>
  <ActualJob/>
  <ContactUs/>
<Chooseui/>
  
  </>
  )
}

export default App
