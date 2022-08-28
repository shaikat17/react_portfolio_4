import React, { Fragment } from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <Fragment>
      <footer>
        {social.map((item) => (
          <Fragment>
            <i data-aos='zoom-in'>{item.icon}</i>
          </Fragment>
        ))}
        <p data-aos='zoom-in'>All Right Resceved 2018</p>
      </footer>
    </Fragment>
  )
}

export default Footer
