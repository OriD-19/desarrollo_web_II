import React, { useEffect } from 'react'

const Message = () => {

  const mouseMoveListener = (e) => {
    console.log(e);
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveListener);

    return () => {
      window.removeEventListener('mousemove', mouseMoveListener);
    }
  }, []);

  return (
    <div>
      <span className="badge bg-danger">Este usuario ya existe</span>
    </div>
  )
}

export default Message;