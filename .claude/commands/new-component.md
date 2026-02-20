# 새 컴포넌트 생성

Atomic Design 패턴에 맞는 새 컴포넌트를 생성합니다.

## Atomic Design 레이어 기준

| 레이어 | 위치 | 예시 |
|--------|------|------|
| atoms | components/atoms/ | Button, Badge, Icon, Input |
| molecules | components/molecules/ | ProjectCard, SkillGroup |
| organisms | components/organisms/ | Header, Footer, Section |
| templates | components/templates/ | PortfolioLayout, PageTemplate |

## 사용법

"새 버튼 컴포넌트 만들어줘" → atoms/
"프로젝트 필터 컴포넌트 만들어줘" → molecules/
"푸터 섹션 만들어줘" → organisms/
