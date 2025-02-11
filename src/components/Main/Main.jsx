import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>ByteBuddy</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">

        {!showResult
        ?<>
        <div className="greet">
          <p><span>Hello there!</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to visit while travelling in Goa</p>
            <img src={assets.compass_icon} />
          </div>
          <div className="card">
            <p>Briefly summarize the concept of hooks in react jaascript</p>
            <img src={assets.code_icon} />
          </div>
          <div className="card">
            <p>Reccomed new suspense, thriller kdramas to watch</p>
            <img src={assets.message_icon} />
          </div>
          <div className="card">
            <p>Create a detailed travel itinerary for a city</p>
            <img src={assets.bulb_icon} />
          </div>
        </div>
        
        </> : <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? 
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> 
            :  <p dangerouslySetInnerHTML={{__html:resultData}}></p> }
           
          </div>
          </div>}

        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => {setInput(e.target.value)}} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img onClick={() => onSent()}  src={assets.send_icon} />
            </div>
          </div>
          <p className='bottom-info'>
          ByteBuddy may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
