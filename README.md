<p align="center">
  <a href="https://weato.net/">
    <img alt="weato" src="https://user-images.githubusercontent.com/6462456/178449846-16b61d0a-0c82-4ba9-bb8b-4ed6a3dc706d.png" width="50"/>
  </a>
</p>
<h1 align="center">
  <b>Weato</b> Frontend
</h1>
<p align="center"><strong>아토피 정보 통합 서비스</strong>
(뉴스레터 + 커뮤니티)<br/>
<strong>💊Weato💊</strong>의 프론트엔드 클라이언트 개발 기록입니다.<br/>
<a href="https://github.com/ceos15th-AllG/weato_backend-SpringBoot-"><i>백엔드 기록은 여기에</i></a></p>

---

## 🚀 MVP 기능

1. 뉴스레터 및 커뮤니티 통합 웹 서비스 (프론트 + 백엔드)
2. 뉴스레터 구독 발송 서비스 (백엔드)

## ✨ 개발 아키텍처

![architecture_with_bg](https://user-images.githubusercontent.com/6462456/178453568-f545fe3f-e16b-4717-98ac-59ec86353a81.jpg)

## 💫 기술 스택

<!-- prettier-ignore-start -->
|          | 사용한 기술 스택 |
| -------- | ------------ |
| 마크업 및 구조 | <img alt="Next.js" src ="https://img.shields.io/badge/Next.js-000000.svg?&style=flat&logo=next.js&logoColor=FFFFFF"/> |
| 스타일링 | <img alt="Emotion" src ="https://img.shields.io/badge/Emotion-5B0BB5.svg?&style=flat&logo=tailwindcss&logoColor=FFFFFF"/> |
| 상태 관리 도구 | <img alt="Recoil" src ="https://img.shields.io/badge/Recoil-3178C6.svg?&style=flat"/> |
| 빌드 도구 | <img alt="SWC" src ="https://img.shields.io/badge/SWC-FFFFFF.svg?&style=flat&logo=swc&logoColor=000000"/> <img alt="Babel" src ="https://img.shields.io/badge/Babel-F9DC3E.svg?&style=flat&logo=babel&logoColor=000000"/> |
| 라이브러리 관리 | <img alt="Yarn" src ="https://img.shields.io/badge/Yarn-2C8EBB.svg?&style=flat&logo=yarn&logoColor=FFFFFF"/> |
| 배포 | <img alt="Vercel" src ="https://img.shields.io/badge/Vercel-000000.svg?&style=flat&logo=vercel&logoColor=FFFFFF"/> |
<!-- prettier-ignore-end -->

## 🤝 협업 플로우

> 🔗 Gitflow 협업 방식

1. `main` 브랜치는 배포가 필요한 작업 발생 시에만 push
2. `develop` 브랜치에 개발 단위 적용
3. 개발하려는 기능을 나누어 `feature/작업` 브랜치에서 작업 후
**Pull Request**하는 방식 사용
4. 개발 진행 중 세부적인 사항들에 대해서는 프론트 팀 내부 회의를 거쳐
빠르게 결정하기

## 📝 커밋 컨벤션

- **Udacity Git Commit Message Style Guide**를 참고함

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

## 📝 PR 컨벤션

> 제목 : **header/작업 내용**

```markdown
# 작업 내용

작업 내용을 요약해서 한 줄로 적어주세요.

# 작업 목록

- 작업 내용을
- 하나 하나 리스트로 나누어
- 작은 단위로 적어주세요.

# 연결된 이슈

특정 이슈를 해결한 작업이라면 이슈 번호를 명시해 주세요.  
없다면 ❌ 만 남겨주삼
```

## 📝 Issue 컨벤션

```markdown
고려 중입니다...
```

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
- [ ] 백엔드 API 일부(소셜 로그인) 연동 작업
- [x] 해커톤 (07-23)

### 8월 1주차 (07-25 ~ 08-01)

- [ ] 백엔드 API 연동 작업

### 8월 2주차 (08-02 ~ 08-04)

- [ ] QA 및 디버깅
- [ ] SEO
- [ ] 빌드 및 렌더링 최적화
- [x] 데모데이 (08-05)
