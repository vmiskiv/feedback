import { useState } from 'react';
import Header from './components/Header'

import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList';


function App () {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are u sure u want to delete?')) {
      setFeedback(feedback.filter((item) => {
        return item.id !== id
      }))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList 
          feedback ={feedback}
          handleDelete={deleteFeedback}
        />

      </div>
    </>
  )
}


export default App;