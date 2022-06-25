import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Modal from './Modal'
// import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return ReactDom.createPortal(
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}

export default App;
