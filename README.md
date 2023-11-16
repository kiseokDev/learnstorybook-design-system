<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
self 엘리스 pre-onboarding 
</h1>

## 🚅 무엇을 위한 repo 인가요? </br> -> StoryBook 튜토리얼을 학습하고 만든 결과물 입니다"


안녕하세요 **[신입] 프론트엔드 개발자**로 지원한 이기석입니다.
</br>
면접 준비기간 5일동안 '**나는 엘리스 팀들에게 어떤 팀원이 되야할까?**' 고민했습니다.
</br>
신입 개발자로서 '**스스로**' '**주도적**' 인 자세가 중요하다고 생각되었습니다. 
</br>
그래서 '**미리**' 준비 해봤습니다. 제가 무엇을 노력해야 할지 찾아보았습니다.

![image](https://github.com/kiseokDev/learnstorybook-design-system/assets/107299502/44132a21-71ca-443d-9dad-208f92cf8262)
![image](https://github.com/kiseokDev/learnstorybook-design-system/assets/107299502/790edade-5b6b-44e7-85a7-8b7d878aa05e)

이와 같은 정보를 바탕으로 StoryBook을 활용하여 자체 공통 컴포넌트를 제작하는구나 알게 되었습니다. 
</br>
## 5일동안 [StoryBook를](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)학습하고 만든 결과물을 공유드립니다


## 목차
- [StoryBook 학습 및 배포](#storybook-학습-및-배포)
- [컴포넌트 UI 리뷰 - UI만 별도로 리뷰할 수 있어요](#ui만-별도로-리뷰할-수-있어요)
- [npm 자동 릴리스 배포](#npm-자동-릴리스-배포)
- [엘리스 공통 컴포넌트 만들어보기](#엘리스-공통-컴포넌트-만들어보기)
- [만든 공통 컴포넌트 외부 Web에서 사용해보기](#만든-공통-컴포넌트-외부-web에서-사용해보기)
- [🔎 폴더구조](#-폴더구조)

</br>

 

## StoryBook 학습 및 배포
[StoryBook 보러가기](https://6552e91ed69dbda616e90d9d-uotihsxrwd.chromatic.com/?path=/story/example-customelicebutton--all-buttons&globals=backgrounds.grid:!false;backgrounds.value:!hex(333333))
1. 공통 컴포넌트 UI 확인할 수 있는 stories 제작 
2. 공통 컴포넌트에 대한 Docs를 제작
3. 동료들이 확인할 수 있도록 크로마틱에 배포 ( Github Action 활용한 지속적 통합, 배포 )
![image](https://github.com/kiseokDev/learnstorybook-design-system/assets/107299502/a89eb08b-1864-4ef6-afd2-ddd0c127afd2)

</br>

## UI만 별도로 리뷰할 수 있어요
  [현재 빌드된 공통 컴포넌트들 보러가기](https://www.chromatic.com/build?appId=6552e91ed69dbda616e90d9d&number=17)
</br>
UI 컴포넌트 작업관련 동료직원들이 리뷰할 수 있도록하는 Chromatic 내장 기능 
<img src="https://github.com/kiseokDev/learnstorybook-design-system/assets/107299502/21ab39a6-66e7-4cdf-bf13-bbfb636ecbac" alt="uitest" width="700em" />
</br>
PR 과정에서 관련 동료들이 UI 리뷰를 Accept해야 최종 Merge 할 수 있다.
<img src="https://github.com/kiseokDev/learnstorybook-design-system/assets/107299502/095a7323-aac0-43ae-81d8-ae01a7fbaf8c" alt="image" width="700em" />


## npm 자동 릴리스 배포
git push -> npm 패키징 자동 릴리스 배포 (CICD)
<img src="https://github.com/kiseokDev/learnstorybook-design-system/assets/107299502/e2e3bc94-2406-4aff-8eb6-08cd12dce08c" alt="image" width="700em" />
</br>
[npm 배포 보러가기](https://www.npmjs.com/package/@dev.leekiseok/elice-storybook?activeTab=code)


## 엘리스 공통 컴포넌트 만들어보기
src/stories/CustomEliceButton/EliceButton.jsx
<img src="https://github.com/kiseokDev/learnstorybook-design-system/assets/107299502/0a576889-f63b-4d64-af0a-72d8dcaacc90" alt="code" width="700em" />


## 만든 공통 컴포넌트 외부 Web에서 사용해보기 
-- 이미지
[외부 Web](https://web-app-using-external-design-system-vv97xolo8-kiseokdev.vercel.app/)

## 🔎 폴더구조

    .
    ├── node_modules
    ├── src
    ├── .babelrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── LICENSE
    ├── package.json
    ├── rollup.config.mjs
    ├── vite.config.js
    ├── yarn.lock
    └── README.md

1. **`node_modules`**: 이 디렉토리에는 프로젝트가 의존하는 모든 코드 모듈(예: npm 패키지)이 포함되어 있습니다.

2. **`src`**: 이 디렉토리에는 애플리케이션에서 볼 수 있는 모든 코드가 포함됩니다.

3. **`.babelrc.json`**: 이 파일은 코드 변환 시 babel이 사용할 프리셋과 플러그인을 지정합니다.

4. **`.gitignore`**: 이 파일은 git에게 프로젝트 개발 과정 중 추적하거나 유지 관리하지 말아야 할 파일을 알려줍니다.

5. **`.prettierignore`**: 이 파일은 prettier에게 포맷하지 말아야 할 파일을 알려줍니다.

6. **`.prettierrc`**: 이 파일은 코드 포맷팅 시 prettier가 사용할 규칙을 지정합니다.

7. **`LICENSE`**: 이 템플릿은 MIT 라이선스 하에 라이선스가 부여됩니다.

8. **`package.json`**: Node.js 프로젝트를 위한 표준 매니페스트 파일로, 프로젝트의 이름, 저자 등 프로젝트 특정 메타데이터가 일반적으로 포함됩니다. npm은 이 파일을 기반으로 프로젝트에 필요한 패키지를 알 수 있습니다.

9. **`rollup.config.mjs`**: 이 파일은 코드 번들링 시 rollup이 사용할 플러그인을 지정합니다.

10. **`yarn.lock`**: 프로젝트를 위해 설치된 npm 의존성의 정확한 버전을 기반으로 자동 생성된 파일입니다. (수동 변경 X!!)

11. **`vite.config.js`**: 이 파일은 [Vite](https://vitejs.dev/)에게 코드 번들링 시 사용할 플러그인을 지정합니다.

12. **`README.md`**: 프로젝트에 대한 유용한 참조 정보를 포함하고 있는 텍스트 파일입니다.


