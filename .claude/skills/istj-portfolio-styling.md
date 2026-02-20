---
name: istj-portfolio-styling
description: ISTJ 포트폴리오 스타일링 가이드. Use when modifying UI, colors, spacing, or Tailwind classes.
---

# Styling Guide

## 색상 팔레트 (미니멀 모노크롬)
- 배경: `bg-white`
- 주 텍스트: `text-neutral-900`
- 보조 텍스트: `text-neutral-600`
- 연한 텍스트: `text-neutral-400`
- 테두리: `border-neutral-100` (기본), `border-neutral-200` (강조)
- 호버: `hover:border-neutral-400`, `hover:text-neutral-900`

## 타이포그래피
- 제목: `text-4xl font-semibold tracking-tight`
- 섹션 제목: `text-xs font-mono tracking-widest uppercase` (소문자 없음)
- 본문: `text-base leading-relaxed`
- 보조: `text-sm text-neutral-600`
- 태그/메타: `text-xs font-mono`

## 간격
- 섹션 간격: `py-16` 또는 `py-24` (Hero)
- 섹션 구분: `border-b border-neutral-100`
- 컨테이너: `max-w-4xl mx-auto px-6`

## 인터랙션
- 모든 호버: `transition-colors duration-200`
- 링크 언더라인: `border-b` 방식 사용 (text-decoration 아님)

## ISTJ 원칙
- 화려한 애니메이션 자제
- 그리드 기반 정렬
- 일관된 간격과 여백
