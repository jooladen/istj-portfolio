# ISTJ Portfolio - Development Guide

## 패키지 관리
- **항상 `pnpm` 사용** (npm, yarn 사용 금지)

## 개발 순서
1. 변경 사항 작성
2. 타입체크: `pnpm tsc --noEmit`
3. 빌드: `pnpm build`
4. 개발 서버: `pnpm dev`

## 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **State**: Zustand
- **Data**: JSON mock files (mocks/)

## 프로젝트 구조 (Atomic Design + Clean Architecture)
```
├── app/                    # Next.js App Router 페이지
├── components/
│   ├── atoms/              # 기본 UI 요소 (Button, Badge, SkillBar)
│   ├── molecules/          # 조합 컴포넌트 (ProjectCard)
│   ├── organisms/          # 섹션 컴포넌트 (Header)
│   └── templates/          # 레이아웃 (PortfolioLayout)
├── mocks/                  # JSON 목업 데이터
└── lib/                    # 유틸리티, 헬퍼
```

## 코딩 컨벤션
- `type` 선호, `interface` 자제
- **`enum` 절대 금지** → 문자열 리터럴 유니온 사용
- 컴포넌트는 Atomic Design 레이어에 맞게 배치
- 클라이언트 컴포넌트는 파일 상단에 `"use client"` 명시

## 금지 사항
- ❌ `console.log` 사용 (개발 중에만 허용)
- ❌ `any` 타입 사용
- ❌ `npm` 또는 `yarn` 사용
- ❌ 외부 이미지 URL을 `next.config.ts`에 등록 없이 사용

## 데이터 수정
포트폴리오 내용 수정: `mocks/portfolio.json`
