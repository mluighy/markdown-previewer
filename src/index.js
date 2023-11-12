import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MarkDown from './markdown.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const text = 
`Marked - Markdown Parser
========================

Markdown parser is a simple text formatter whose goal is to be very easy to read and write, even when not converted to HTML.
This demo page will let you type anything you like and see how it gets converted. 

How To Use The Demo
-------------------

Link: [Google](https://www.google.com)

Inline code: \`if(true) {} \`

- Lists support blockquotes

  > Just like this example here. By the way, you can
  > nest lists inside blockquotes!
  > - Fantastic!

- Lists support preformatted text

      You just need to indent an additional four spaces.

![Google Logo](https://www.google.com/images/errors/logo_sm.gif)
for bold. ***Three together*** for ___both___`

root.render(
  <React.StrictMode>
     <MarkDown test={text} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
