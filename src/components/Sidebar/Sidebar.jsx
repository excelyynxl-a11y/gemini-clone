import React, { useContext, useState } from 'react'
import './Sidebar.css';
import { FileQuestionIcon, HistoryIcon, MenuIcon, MessageCircle, Plus, Settings } from 'lucide-react';
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }
 
    return (
        <div className='sidebar'>
            <div className="top">
                <MenuIcon 
                    className='menu'
                    onClick={() => setExtended(prev => !prev)}
                />
                <div 
                    className="new-chat"
                    onClick={() => newChat()}
                >
                    <Plus />
                    {extended ? 
                    <p>
                        New Chat 
                    </p>
                    :
                    null
                    }
                </div>

                {extended ?
                <div className="recent">
                    <p className="recent-title">
                        Recent 
                    </p>
                    {prevPrompts.map((item, index) => {
                        return(
                            <div 
                                className="recent-entry"
                                onClick={() => loadPrompt(item)}
                            >
                                <MessageCircle />
                                <p>
                                    {item.slice(0, 18)}...
                                </p>
                            </div>
                        )
                    })}
                </div>
                :
                null
                }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <FileQuestionIcon />
                    {extended ?
                    <p>
                        Help
                    </p>
                    :
                    null
                    }
                </div>

                <div className="bottom-item recent-entry">
                    <HistoryIcon />
                    {extended ?
                    <p>
                        Activity
                    </p>
                    :
                    null
                    }
                </div>

                <div className="bottom-item recent-entry">
                    <Settings />
                    {extended ?
                    <p>
                        Settings
                    </p>
                    :
                    null
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar