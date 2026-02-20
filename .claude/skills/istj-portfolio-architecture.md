---
name: istj-portfolio-architecture
description: ISTJ 포트폴리오 전체 아키텍처. Use when working with project structure, components, or layout.
---

# ISTJ Portfolio Architecture

## 개요
Next.js 16 App Router 기반 ISTJ 개발자 미니멀 포트폴리오

## 디자인 컨셉
- MBTI ISTJ: 논리적, 체계적, 신뢰감
- 미니멀 스타일: 흰 배경, 모노크롬, 정밀한 그리드
- 폰트: Geist (sans-serif + mono 혼용)

## 폴더 구조
```
components/
  atoms/       → Badge, SkillBar (재사용 최소 단위)
  molecules/   → ProjectCard (atoms 조합)
  organisms/   → Header (molecules + atoms 조합)
  templates/   → PortfolioLayout (전체 레이아웃)
app/
  page.tsx     → 메인 페이지 (모든 섹션 포함)
  layout.tsx   → 루트 레이아웃 + 메타데이터
mocks/
  portfolio.json → 모든 콘텐츠 데이터
```

## 데이터 흐름
```
portfolio.json → page.tsx (import) → 각 섹션 컴포넌트
```

## 섹션 구조
1. About (Hero) - profile 데이터
2. Skills - skills 배열 (SkillBar)
3. Projects - projects 배열 (ProjectCard)
4. Experience - experience 배열
5. Contact - profile.email
