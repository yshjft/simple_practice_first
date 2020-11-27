import React from 'react';
import  {BrowserRouter} from 'react-router-dom'
import styles from './test.scss'
import cssStyle from './test.css'


function App() {
  return (
    <div className={`${styles.App}`}>
     start !!
     <div className={`${cssStyle.cmt}`}>css module test</div>
    </div>
  );
}

export default App;
