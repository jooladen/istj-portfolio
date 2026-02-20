# Design: 다크모드 (Dark Mode)

## 참조
- Plan: `docs/01-plan/features/dark-mode.plan.md`
- 작성일: 2026-02-21

---

## 1. 아키텍처 설계

### 라이브러리 선택: `next-themes`
- SSR 환경에서 FOUC 방지 내장
- `ThemeProvider`로 전체 앱 감싸기
- `useTheme()` 훅으로 현재 테마 접근
- `storageKey: 'theme'`으로 localStorage 자동 관리

### 데이터 흐름
```
localStorage / system preference
        ↓
  ThemeProvider (app/layout.tsx)
        ↓
  HTML <html class="dark">
        ↓
  Tailwind dark: variant 적용
        ↓
  모든 컴포넌트에 자동 반영
```

---

## 2. 파일별 변경 명세

### 2.1 `package.json`
```bash
pnpm add next-themes
```

### 2.2 `app/layout.tsx`
```tsx
import { ThemeProvider } from "next-themes";

// RootLayout body 안을 ThemeProvider로 감싸기
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

### 2.3 `app/globals.css`
기존 `@media (prefers-color-scheme: dark)` 제거 (next-themes가 담당)
`body` 스타일에 `transition-colors` 추가:
```css
body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.2s, color 0.2s;
}
```

### 2.4 `components/atoms/ThemeToggle.tsx` (신규)
```tsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-4" />; // 하이드레이션 방지

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="font-mono text-xs text-neutral-400 hover:text-neutral-900
                 dark:hover:text-neutral-100 transition-colors"
      aria-label="테마 전환"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
```

### 2.5 `components/organisms/Header.tsx`
- `ThemeToggle` import 추가
- nav 옆에 `<ThemeToggle />` 삽입
- 스크롤 시 배경에 `dark:bg-neutral-950/95 dark:border-neutral-800` 추가

### 2.6 `components/templates/PortfolioLayout.tsx`
```diff
- <div className="min-h-screen bg-white text-neutral-900">
+ <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">

- <footer ... className="... border-t border-neutral-100">
+ <footer ... className="... border-t border-neutral-100 dark:border-neutral-800">

- <p className="text-xs text-neutral-400 ...">
+ <p className="text-xs text-neutral-400 dark:text-neutral-500 ...">
```

### 2.7 `components/atoms/SkillBar.tsx`
```diff
- <span className="text-sm font-medium text-neutral-800">
+ <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">

- <div className="h-1 bg-neutral-100 rounded-full">
+ <div className="h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">

- <div className="... bg-neutral-800 ..."
+ <div className="... bg-neutral-200 dark:bg-neutral-200 ..."

- <span className="text-xs text-neutral-400 ...">
+ <span className="text-xs text-neutral-400 dark:text-neutral-500 ...">
```

### 2.8 `components/molecules/ProjectCard.tsx`
```diff
- <div className="border border-neutral-200 p-6 hover:border-neutral-400 ...">
+ <div className="border border-neutral-200 dark:border-neutral-800 p-6
+                  hover:border-neutral-400 dark:hover:border-neutral-600 ...">

- <h3 className="font-medium text-neutral-900">
+ <h3 className="font-medium text-neutral-900 dark:text-neutral-100">

- <p className="text-sm text-neutral-600 ...">
+ <p className="text-sm text-neutral-600 dark:text-neutral-400 ...">

- <a className="text-xs text-neutral-500 hover:text-neutral-900 ...">
+ <a className="text-xs text-neutral-500 dark:text-neutral-400
+               hover:text-neutral-900 dark:hover:text-neutral-100 ...">
```

### 2.9 `app/page.tsx`
섹션별 텍스트 및 테두리 색상에 `dark:` variant 추가:
```diff
- <span className="text-xs font-mono text-neutral-400 ...">
+ <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 ...">

- <h1 className="text-4xl font-semibold ... text-neutral-900">
+ <h1 className="text-4xl font-semibold ... text-neutral-900 dark:text-neutral-100">

- <p className="text-base text-neutral-600 ...">
+ <p className="text-base text-neutral-600 dark:text-neutral-400 ...">

- 모든 border-b border-neutral-100 →  dark:border-neutral-800 추가
- 모든 링크 hover:text-neutral-900 →  dark:hover:text-neutral-100 추가
```

---

## 3. 색상 토큰 정리

| 용도 | 라이트 | 다크 |
|------|--------|------|
| 페이지 배경 | `bg-white` | `dark:bg-neutral-950` |
| 헤더 배경 | `bg-white/95` | `dark:bg-neutral-950/95` |
| 주 텍스트 | `text-neutral-900` | `dark:text-neutral-100` |
| 보조 텍스트 | `text-neutral-600` | `dark:text-neutral-400` |
| 연한 텍스트 | `text-neutral-400` | `dark:text-neutral-500` |
| 구분선 | `border-neutral-100` | `dark:border-neutral-800` |
| 카드 테두리 | `border-neutral-200` | `dark:border-neutral-800` |
| 카드 호버 | `hover:border-neutral-400` | `dark:hover:border-neutral-600` |
| 스킬바 배경 | `bg-neutral-100` | `dark:bg-neutral-800` |
| 스킬바 채움 | `bg-neutral-800` | `dark:bg-neutral-200` |

---

## 4. 구현 순서

1. `pnpm add next-themes`
2. `ThemeToggle.tsx` 신규 생성
3. `layout.tsx` → ThemeProvider 적용
4. `globals.css` → transition 추가
5. `Header.tsx` → ThemeToggle 삽입 + dark 클래스
6. `PortfolioLayout.tsx` → dark 클래스
7. `SkillBar.tsx` → dark 클래스
8. `ProjectCard.tsx` → dark 클래스
9. `page.tsx` → dark 클래스 전체 적용
10. 브라우저 확인

---

## 5. 완료 기준 (검증)

| 검증 항목 | 방법 |
|-----------|------|
| 토글 동작 | 버튼 클릭 시 즉시 전환 |
| 퍼시스턴스 | 새로고침 후 테마 유지 |
| 시스템 감지 | OS 다크모드 설정과 연동 |
| FOUC 없음 | 첫 로드 시 깜빡임 없음 |
| 전체 적용 | 모든 섹션 다크 색상 확인 |
