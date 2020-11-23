import React from 'react';
import styles from './test.module.scss'
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
