import React, { useContext } from 'react'
import './Main.css';
import { AtomIcon, Code, CompassIcon, CookieIcon, ImagesIcon, Mic, Send, Trees, User, UserIcon } from 'lucide-react';
import { Context } from '../../context/Context';

const Main = () => {

    const {
        onSent, 
        recentPrompt, 
        showResult, 
        loading, 
        resultData, 
        setInput, 
        input
    } = useContext(Context);

    return (
        <div className='main'>
            
            <div className="nav">
                <p>
                    Gemini 
                </p>
                <User className='user-icon'/>
            </div>

            <div className='main-container'>

                {!showResult ?
                <>
                    <div className="greet">
                        <p>
                            <span>
                                Hello, Ex.
                            </span>
                        </p>
                        <p>
                            How can I help you today?
                        </p>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <p>
                                Suggest so Kuala Lumpur weekend getaways.
                            </p>
                            <CompassIcon className='card-icon'/>
                        </div>

                        <div className="card">
                            <p>
                                Summarise what is urban planning.
                            </p>
                            <Trees className='card-icon'/>
                        </div>

                        <div className="card">
                            <p>
                                Improve the readbility of the following code.
                            </p>
                            <Code className='card-icon'/>
                        </div>

                        <div className="card">
                            <p>
                                Give me a chocolate chip cookies recipe.
                            </p>
                            <CookieIcon className='card-icon'/>
                        </div>
                    </div>
                </>
                :
                <div
                    className='result'
                >
                    <div className='result-title'>
                        <UserIcon 
                            className='user-icon'
                        />
                        <p>
                            {recentPrompt}
                        </p>
                    </div>

                    <div className='result-data'>
                        {/* fake Gemini Icon */}
                        <AtomIcon 
                            className='gemini-icon'
                        /> 
                        {loading ? 
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html:resultData}}>
                        </p>
                        }
                    </div>
                </div>
                }
                

                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text" 
                            placeholder='Enter a prompt here.'
                        />
                        <div>
                            <ImagesIcon className='search-box-icon'/>
                            <Mic className='search-box-icon'/>
                            {input?
                            <Send 
                                onClick={() => onSent()} 
                                className='search-box-icon'
                            />
                            :
                            null
                            }
                        </div>
                    </div>

                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, 
                        so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
        )
}

export default Main