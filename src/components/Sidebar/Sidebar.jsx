import React, { useState } from 'react'
import './Sidebar.css';
import { FileQuestionIcon, HistoryIcon, MenuIcon, MessageCircle, Plus, Settings } from 'lucide-react';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    return (
        <div className='sidebar'>
            <div className="top">
                <MenuIcon 
                    className='menu'
                    onClick={() => setExtended(prev => !prev)}
                />
                <div className="new-chat">
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
                    <div className="recent-entry">
                        <MessageCircle />
                        <p>
                            What is React...
                        </p>
                    </div>
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