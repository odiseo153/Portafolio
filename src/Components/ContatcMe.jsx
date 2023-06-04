import React from 'react'
import { useForm } from 'react-hook-form'


export default function ContatcMe() {

const { register, handleSubmit } = useForm()


  return (
    <div>
      <form action="/action_page.php">
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="textarea" className="form-control"/>
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
    </div>
  )
}
