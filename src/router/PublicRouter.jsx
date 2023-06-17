import React from 'react'

const PublicRouter = ({isAutentication}) => {
  return (
    <div>{isAutentication? <Navigate to="/home"/>:<Outlet/>}</div>
  )
}

export default PublicRouter