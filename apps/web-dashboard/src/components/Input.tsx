import React from 'react'

type Props = {
    placeholder: string,
    className: string
}

const Input = (props: Props) => {
  return (
    <input type="text" className={props.className}/>
  )
}

export default Input