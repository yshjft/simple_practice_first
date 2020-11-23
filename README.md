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
   리액트 프로젝트에서 컴포넌트를 스타일링 할 때 CSS Module 이라는 기술을 사용하면, CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있다. (즉 CSS Module은 클래스의 이름을 고유하게 바꾸어 준다)

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

6. npm run eject                     
   npm run eject이라는 것을 통해서 create-react-app에 숨겨져 있는 설정들을 확인할 수 있다.(한번 eject을 하면 되돌릴 수 없으므로 신중히 선택하라고 한다.) 대표적으로 웹팩 설정을 확인할 수 있다. 이 웹팩 설정을 수정하여서 CSS Module을 활성화 화였다.

   - 비활성화 : test.module.css
   - 활성화 : test.css

   활성화와 비활성화의 경우 위와 같은 차이를 나타낸다. 다음은 webpack.config.js를 어떻게 수정하였는지를 작성한다.

   ```
   {
      test: cssRegex,
      exclude: cssModuleRegex,
      use: getStyleLoaders({
         importLoaders: 1,
         sourceMap: isEnvProduction
            ? shouldUseSourceMap
            : isEnvDevelopment,
         modules: {
            localIdentName: "[name]__[local]___[hash:base64:5]",
         },
      }),
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
    },
   ```

   위와 같이 수정하는데 조금 고생을 하였는데 아래를 참고하여 수정할 수 있었다.

   - https://github.com/rails/webpacker/issues/2197
