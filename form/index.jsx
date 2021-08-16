import React from "react"
import "./form.css"

const Form = () => {
  return (
    <div className="container">
      <div className="form">
        <div className="title-div">
          <h2 className="title">LOGIN</h2>
        </div>
        <form>
          <input required placeholder="email" type="email" />
          <input required placeholder="password" type="password" />
          <p className="dummy-text">Don't have an account yet? <a href="/signup">Sign Up</a></p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form