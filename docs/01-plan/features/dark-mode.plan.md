# Plan: 다크모드 (Dark Mode)

## 개요

| 항목 | 내용 |
|------|------|
| 기능명 | 다크모드 |
| 우선순위 | Medium |
| 예상 난이도 | Low |
| 작성일 | 2026-02-21 |

## 배경 / 목적

ISTJ 포트폴리오에 다크모드를 추가하여 사용자 경험을 개선합니다.
어두운 환경에서의 가독성 향상 및 트렌디한 UI 옵션 제공이 목적입니다.

## 요구사항

### 기능 요구사항
- [ ] 라이트/다크 모드 토글 버튼 (Header에 배치)
- [ ] 시스템 설정(prefers-color-scheme) 자동 감지
- [ ] 선택한 테마를 localStorage에 저장 (새로고침 후에도 유지)
- [ ] 부드러운 전환 애니메이션 (transition)

### 비기능 요구사항
- [ ] 깜빡임(Flash Of Unstyled Content) 방지
- [ ] 미니멀 ISTJ 디자인 정체성 유지

## 기술 접근

### 방식: Next.js + Tailwind CSS v4 다크모드
- `next-themes` 라이브러리 사용
- Tailwind `dark:` variant 활용
- HTML `class` 기반 다크모드 (`darkMode: 'class'`)

### 색상 설계
| 요소 | 라이트 | 다크 |
|------|--------|------|
| 배경 | `bg-white` | `dark:bg-neutral-950` |
| 주 텍스트 | `text-neutral-900` | `dark:text-neutral-100` |
| 보조 텍스트 | `text-neutral-600` | `dark:text-neutral-400` |
| 테두리 | `border-neutral-100` | `dark:border-neutral-800` |
| 헤더 배경 | `bg-white/95` | `dark:bg-neutral-950/95` |

## 구현 범위

### In Scope
- Header 토글 버튼
- 전체 페이지 배경 / 텍스트 색상
- 카드, 테두리, SkillBar 색상
- localStorage 퍼시스턴스

### Out of Scope
- 테마별 이미지 분리
- 다크모드 전용 색상 커스터마이징 UI

## 파일 영향 범위

```
package.json           ← next-themes 추가
app/layout.tsx         ← ThemeProvider 감싸기
app/globals.css        ← dark variant 변수 추가
components/
  atoms/ThemeToggle.tsx      ← 토글 버튼 (신규)
  organisms/Header.tsx       ← 토글 버튼 삽입
  templates/PortfolioLayout.tsx
  atoms/SkillBar.tsx
  molecules/ProjectCard.tsx
```

## 완료 기준

- [ ] 토글 클릭 시 즉시 테마 전환
- [ ] 새로고침 후 테마 유지
- [ ] 시스템 다크모드 자동 감지
- [ ] 모든 섹션에서 다크 색상 적용
- [ ] 깜빡임 없음
