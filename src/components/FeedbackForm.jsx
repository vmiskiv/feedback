import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

import { useState } from 'react'

export default function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = e => setText(e.target.value)

  return (
    <Card>
      <form action="#">
        <h2>How would you rate our service?</h2>
        {/* todoo rating select compoenent */}
        <div className="input-group">
          <input 
            onChange={handleTextChange}
            type="text" 
            placeholder='write a review'
            value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  )
}