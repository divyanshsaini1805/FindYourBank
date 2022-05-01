import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Errors({errors}) {
  return (
    <div>{errors}</div>
  )
}
