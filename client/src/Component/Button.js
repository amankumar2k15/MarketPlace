import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="button-hide" style={{ backgroundColor: props.backgroundColor, padding: props.padding, position: props.position, right: props.right, color: props.color, borderRadius: props.borderRadius, fontSize: props.fontSize }}>{props.text}</button>
    </div>
  )
}

export default Button