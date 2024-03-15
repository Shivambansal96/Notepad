import React, { useState } from 'react';
// import MDEditor from '@uiw/react-md-editor';
import MDEditor from '@uiw/react-md-editor';


function LandingPage() {

    const [markdownContent, setMarkdownContent] = useState('Hello Coders');

    return(
        <div className="landing-page">
            <MDEditor value={markdownContent} onChange={setMarkdownContent} />
            <MDEditor.Markdown  />
        </div>

    
    )
}

export default LandingPage;