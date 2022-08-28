import React, { Fragment } from "react"

export const Heading = ({ title }) => {
  return (
    <Fragment>
      <h2 className='heading' data-aos='zoom-in-down'>
        {title}
      </h2>
    </Fragment>
  )
}
