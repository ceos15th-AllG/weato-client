<p align="center">
  <a href="https://weato.net/">
    <img width="3000" alt="WEATO" src="https://user-images.githubusercontent.com/6462456/230350718-5bce4df8-9125-4b54-9e75-8bf16f6d38cc.png">
  </a>
</p>
<h2 align="center">
  <b>Weato</b> Frontend
</h2>
<p align="center">
아토피 정보 통합 서비스 <strong>Weato 💊</strong> 의 프론트엔드 개발 기록입니다.
<br/>
<a href="https://weato.net" target="_blank">데모 사이트</a>
</p>

---

<br />

## ✨ 서비스 소개

![Instagram post - 2](https://user-images.githubusercontent.com/6462456/230354119-c92222dc-b68f-44c6-95ea-5b1354015206.png)

![Instagram post - 3](https://user-images.githubusercontent.com/6462456/230354108-7cf776cb-d6d3-4245-9d32-bdd3118dd1ab.png)

<!-- <p align="center">
기능 1 - 뉴스레터 서비스 제공
</p> -->

![Instagram post - 4](https://user-images.githubusercontent.com/6462456/230354103-7a3921d5-7fa3-43c5-99d7-46d986483156.png)

<!-- <p align="center">
기능 2 - 아토피 정보 관련 커뮤니티
</p> -->

<br />

## 🎨 배포 화면

<p align="center">
  <center><strong>메인 홈</strong></center>
  <center>메인 배너, 이주의 아토레터와 가장 많은 스크랩을 보여줘요.</center>
  <img width="1551" alt="image" src="https://user-images.githubusercontent.com/6462456/230395327-c89a81bf-a217-4b87-98b6-675d27ea42c1.png" />

  <center><strong>뉴스레터 홈</strong></center>
  <center>새로 발행된 순서대로 뉴스레터를 보여줘요.<br />
  뉴스레터를 6개의 태그 별로 분류해서 모아 볼 수도 있어요.</center>
  <img width="1551" alt="image" src="https://user-images.githubusercontent.com/6462456/230395376-dcdd59c7-04d3-4e7e-8be8-23a46acd448c.png" />

  <center><strong>뉴스레터 - 상세</strong></center>
  <center>발행된 뉴스레터를 웹으로 볼 수 있는 상세 페이지에요.<br />
  마음에 드는 경우 좋아요, 또는 마이페이지에 스크랩할 수 있어요.</center>
  <img width="1551" alt="image" src="https://user-images.githubusercontent.com/6462456/230395483-461583d0-056c-471d-862c-9b7ae622669f.png" />
  
  <center><strong>커뮤니티 홈 (비회원)</strong></center>
  <center>비회원의 경우 회원 가입 혹은 로그인을 유도하는 내용을 소개해요.</center>
  <img width="1551" alt="image" src="https://user-images.githubusercontent.com/6462456/230395531-edf60c80-b4f3-4f5a-89b7-7edefb1831c6.png" />
  
  <center><strong>소셜 로그인 연결</strong></center>
  <center>네이버 아이디를 통해 Weato에 간편하게 로그인할 수 있어요.</center>
  <img width="1551" alt="image" src="https://user-images.githubusercontent.com/6462456/230395622-8d36cbd2-ff5f-434f-b8bc-ff81ad8557d3.png" />
  
  <center><strong>검색 모달</strong></center>
  <center>발행된 모든 뉴스레터 및 게시글에 대해서 키워드 검색이 가능해요.</center>
  <img width="1551" alt="image" src="https://user-images.githubusercontent.com/6462456/230395676-b0571866-a647-4c5e-902a-0ed6f30d654b.png" />
</p>

## 🚀 개발 아키텍처

![architecture_with_bg](https://user-images.githubusercontent.com/6462456/178453568-f545fe3f-e16b-4717-98ac-59ec86353a81.jpg)

<br />

## 💫 기술 스택

<!-- prettier-ignore-start -->
|          | 사용한 기술 스택 |
| -------- | ------------ |
| 마크업 및 구조 | <img alt="Next.js" src ="https://img.shields.io/badge/Next.js-000000.svg?&style=flat&logo=next.js&logoColor=FFFFFF"/> |
| 스타일링 | <img alt="Emotion" src ="https://img.shields.io/badge/Emotion-5B0BB5.svg?&style=flat&logo=tailwindcss&logoColor=FFFFFF"/> |
| 상태 관리 도구 | <img alt="Recoil" src ="https://img.shields.io/badge/Recoil-3178C6.svg?&style=flat"/> |
| 빌드 도구 | <img alt="Babel" src ="https://img.shields.io/badge/Babel-F9DC3E.svg?&style=flat&logo=babel&logoColor=000000"/> |
| 라이브러리 관리 | <img alt="Yarn" src ="https://img.shields.io/badge/Yarn-2C8EBB.svg?&style=flat&logo=yarn&logoColor=FFFFFF"/> |
| 배포 | <img alt="Vercel" src ="https://img.shields.io/badge/Vercel-000000.svg?&style=flat&logo=vercel&logoColor=FFFFFF"/> |
<!-- prettier-ignore-end -->

<br />

## 🤝 협업 플로우

> 🔗 **Gitflow 협업 방식**

1. `main` 브랜치는 배포가 필요한 작업 발생 시에만 push
2. `develop` 브랜치에 개발 단위 적용
3. 개발하려는 기능을 나누어 `feature/작업` 브랜치에서 작업 후
**Pull Request**하는 방식 사용
4. 개발 진행 중 세부적인 사항들에 대해서는 프론트 팀 내부 회의를 간단하게 거쳐
빠르게 결정하기

<br />

## 📝 커밋 컨벤션

> 🔗 **Udacity Git Commit Message Style Guide**를 참고

<!-- prettier-ignore-start -->
|    | Gitmoji | Header | 설명 |
|----|---------|--------|-----|
| ✨ | `:sparkle:` | feat: | 새로운 기능에 대한 커밋 |
| 🐛 | `:bug:` | fix: | 버그 수정에 대한 커밋 |
| 👷 | `:construction_worker:` | build: | 빌드 관련 파일 수정에 대한 커밋 |
| 🔨 | `:hammer:` | chore: | 그 외 자잘한 수정에 대한 커밋 (기타 변경 사항) |
| 💚 | `:green_heart:` | ci: | CI 관련 설정 수정에 대한 커밋 |
| 📝 | `:memo:` | docs: | 문서 수정에 대한 커밋 |
| 💄 | `:lipstick:` | style: | ui 스타일에 관한 커밋  |
| 🎨 | `:art:` | refactor: | 코드 리팩토링에 대한 커밋  |
| ✅ | `:white_check_mark:` | test: | 테스트 코드 수정에 대한 커밋 |
| 🎉 | `:tada:` | init: | 프로젝트 시작에 대한 커밋 |
| 🔖 | `:bookmark:` | release: | 릴리즈에 대한 커밋 |
| ➕ | `:heavy_plus_sign:` | plus: | 의존성 추가에 대한 커밋 |
| ➖ | `:heavy_minus_sign:` | minus: | 의존성 제거에 대한 커밋 |
<!-- prettier-ignore-end -->

<br />

## 📝 PR 컨벤션

> PR 제목 - **분류: 작업 내용**

```markdown
# 작업 내용

작업 내용을 요약해서 한 줄로 적어주세요.

# 작업 목록

- 작업 내용을
- 하나 하나 리스트로 나누어
- 작은 단위로 적어주세요.

# 연결된 이슈

특정 이슈를 해결한 작업이라면 이슈 번호를 명시해 주세요.
```

<!-- ## 📝 Issue 컨벤션

```markdown
고려 중입니다...
``` -->

<br />

## ⌛️ 개발 일정

### 7월 3주차 (07-11 ~ 07-17)

- [x] Typescript 제외하고 프로젝트 세팅 뒤집어 엎기
- [x] 협업 Convention 정리
- [x] 디렉토리 구조 및 컴포넌트 분리
- [x] 라우팅 기초 설정
- [x] Vercel 배포 연결
- [x] 네비게이션 및 컴포넌트 스타일링
- [x] 뉴스레터 페이지 레이아웃 및 스타일링
- [x] 커뮤니티 페이지 레이아웃 및 스타일링

### 7월 4주차 (07-18 ~ 07-24)

- [x] 도메인 배포 연결
- [x] 검색 페이지 레이아웃 및 스타일링
- [x] 회원가입 페이지 스타일링
- [x] 백엔드 API 일부(소셜 로그인) 연동 작업
- [x] 해커톤 (07-23)

### 8월 1주차 (07-25 ~ 08-01)

- [x] 백엔드 API 연동 작업

### 8월 2주차 (08-02 ~ 08-04)

- [x] QA 및 디버깅
- [x] 빌드 및 렌더링 최적화
- [x] 데모데이 (08-05)

### 9월 ~ 10월

- [x] 뉴스레터 및 커뮤니티 서비스 정식 런칭 (1달)
- [x] 모바일 랜딩페이지 작업
- [x] 뉴스레터 및 커뮤니티 서비스 단축 운영 (2주)

<br />

## 😄 팀원 소개

- **기획** - 박재민, 박성호
- **디자인** - 정주연, 조아라
- **프론트엔드** - 최어진
- **백엔드** - 백지훈

![Instagram post - 5](https://user-images.githubusercontent.com/6462456/230354097-f47cad1e-f4f0-446e-87fb-b5ae32eccb29.png)
