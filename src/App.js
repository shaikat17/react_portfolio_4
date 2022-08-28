import "./App.css"
import { Pages } from "./components/pages/Pages"
import { Fragment, useEffect } from "react"

//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Fragment>
      <Pages />
    </Fragment>
  )
}

export default App
