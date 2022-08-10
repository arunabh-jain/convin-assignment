import React from 'react'
import errorPage from "../ExtraFiles/ErrorPage.jpg";

const PageNotFound = () => {
  return (
    <img style={{Height:"100vh", Width:"100vw",}} src={errorPage} alt='Page not found' />
  )
}

export default PageNotFound;