# Privacy Control Plane

A privacy engineering portfolio for monitoring control coverage, regional processing risk, and the delivery progress of responsible-data programs.

[Watch the running product demo](docs/demo.webm)

## Why this product matters

Privacy obligations cross legal, security, platform, and product teams. A shared control plane makes data-flow initiatives and unresolved risk understandable without reducing privacy to a checklist.

## Intended users

- Privacy engineering and data-governance teams
- Security, legal, and compliance stakeholders
- Program leaders responsible for regulated data

## Core workflows

- Review control coverage across the privacy portfolio
- Identify medium-risk data flows
- Advance remediation programs and observe derived metrics
- Inspect teams, progress, and risk in a single operational table

## Current capabilities

- Signal-driven privacy portfolio metrics
- Typed data-flow workstreams
- Interactive progress and risk transitions
- Responsive executive and operational presentation
- Server-rendering and hydration-ready foundation

## Angular technical highlights

- Angular standalone application architecture
- Signals and computed values for predictable derived state
- OnPush change detection
- Strict TypeScript and Vitest coverage
- Angular SSR and hydration configuration

## Architecture and data flow

Typed workstreams are stored in an Angular signal. Computed signals derive portfolio coverage and risk counts. User actions update the signal immutably, allowing OnPush rendering to remain explicit and efficient.

## Accessibility and responsive behavior

The interface uses semantic headings, labelled regions, native interactive controls, visible status text in addition to color, keyboard-operable actions, and layouts that adapt to narrower screens. Automated tests cover the central state behavior; a production release should add continuous WCAG audits with assistive-technology review.

## Project structure

- src/app/app.ts — typed domain state and actions
- src/app/app.html — operational interface
- src/app/app.scss — responsive presentation
- src/app/app.spec.ts — component behavior tests
- docs/demo.webm — verified product demo

## Run locally

```bash
npm ci
npm test
npm run build
npm start
```

## Verification

- Strict TypeScript compilation
- Automated component or state tests
- Production build
- Real-browser interaction check
- Demo-video playback and frame inspection

## Tradeoffs

This portfolio demonstration models program status rather than processing personal information. An enterprise version would require data discovery, lawful-basis records, retention policies, DPIA workflows, access controls, and audit-grade evidence.

## Roadmap

- Data inventory and processing-purpose registry
- DPIA and approval workflows
- Retention and deletion evidence
- Multilingual regulatory reporting
