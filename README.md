# 인턴 생활 중에 하는 아주아주 간단한 프로젝트를 사칭한 연습

### 설치

1. CRA
   npx create-react-app '프로젝트 이름' --template typescript

   - (아마 버전문제가 발생할 것이다)  
     npm uninstall typescript  
     rm tsconfig.json  
     npm i typescript @4.0.5

2. redux  
   npm i redux react-redux @types/react-redux

3. router  
   npm i react-router-dom @types/react-router-dom

4. sass  
   npm i node-sass --save

   - 버전 문재 발생시 아래와 같이 한다.  
     npm uninstall node-sass  
     npm install node-sass@4.14.1

   - react-app-env.d.ts 파일에 다음과 같은 설정을 헤주어야 한다.

   ```
   declare module '\*.css' {
      const classes: {[key: string]: string}
      export default classes
   }

   declare module '\*.scss' {
      const classes: {[key: string]: string}
      export default classes
   }
   ```

5. css module
   리액트 프로젝트에서 컴포넌트를 스타일링 할 때 CSS Module 이라는 기술을 사용하면, CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있다.

- example.module.css

```
.example {
  background: black;
  color: white;
  padding: 2rem;
}
```

- Example.js

```
import React from "react";
import styles from "./example.module.css";

function Example() {
  return <div className={styles.example}>{styles.example}</div>;
}

export default Example;
```
