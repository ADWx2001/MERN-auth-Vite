import React from 'react'

export default function Contact() {
  return (
    <div className="container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out! I am always open to discussing new opportunities.</p>
        <form action="#" method="post">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name"/><br/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email"/><br />
            <label htmlFor="message">Message: </label>
            <textarea name="message" id="message" rows="5"></textarea><br />
            <button type="submit">Submit</button>
            
        </form>
    </div>
  )
}
