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

### 설정

1. css module  
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

2. npm run eject  
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

   webpack.config.js에서 sass도 css module 활성화 하듯이 수정하였다. 사실 이게 정확학 맞는지 모르겠다..ㅎㅎㅎㅎ

   ```
   {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: getStyleLoaders(
         {
         importLoaders: 3,
         sourceMap: isEnvProduction
            ? shouldUseSourceMap
            : isEnvDevelopment,
            modules: {
               localIdentName: "[name]__[local]___[hash:base64:5]",
            },
         },
         'sass-loader'
      ),
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
   },
   ```
   
### 1차 작업을 끝내면서
   개인적인 프로젝트(?)에 타입스크립트를 처음 사용해보았고 한동안 리덕스를 사용하지 않아 다시 공부한다는 개념으로 시작한 프로젝트였다. 예상과 달리 다른 할 것들이 생겨 기간을 너무 오래 잡은 감(기간이 길어지니 흥미와 효율이 너무 떨어진다)이 있어 일단은 1차적인 부분만을 완성하여 급하게 종료한다. 조금 의미있고 완성도 있는 작은 프로젝트를 하려고 했는데 그렇게 되지 못하여 조금 아쉽다. 하지만 타입스크립트를 사용해본 것, scss를 설정하고 사용해본 것, 리덕스를 정말 오랜만에 다시 사용하여 복습한 것은 조금이나마 의미가 있는것 같다.
   
### 앞으로...
지금 뭔가를 더 해본다기 보다는 앞으로 시간이 있을 때마다 이 프로젝트에서 사용한 것을 복습하거나 기능을 추가하려고 한다.

* redux의 useSelector, useDispatch 훅 공부하고 정리하기
* kakao map api 사용해서 위치 보여주기
* redux middleware 공부 및 적용
* redux-persist 적용
* 배포해보기
