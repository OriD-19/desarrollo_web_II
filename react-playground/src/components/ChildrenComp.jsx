import React from 'react'

const ChildrenComp = ({ children }) => {
  return (
    <div>
        <h1>Welcome to the children component!</h1>
        <div>
            { children }
        </div>
        <h2>End of the children component</h2>
    </div>
  )
}

export default ChildrenComp