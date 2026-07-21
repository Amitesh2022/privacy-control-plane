# Privacy Control Plane

Privacy Control Plane helps organisations understand where personal information is used and whether it is protected.

[Watch the product demo](docs/demo.webm)

## Business problem and users

Privacy Control Plane helps organisations understand where personal information is used and whether it is protected. It is useful for privacy teams, service owners, risk teams, and managers.

## Key workflows

- See which services use personal information.
- Find missing privacy checks.
- Review how information moves between services.
- Assign work to the right team.
- Track improvements and readiness.

## Angular highlights

The product uses Angular to organise separate pages, forms, checks, and shared information. Forms warn users when information is missing. Automated checks and a production build confirm that the product works correctly.

## Java backend highlights

The Java backend uses Spring Boot. It provides real API endpoints to list, search, and create privacy review records. It checks incoming information, returns clear errors, exposes a health check, and includes automated Java tests.

## Architecture and state flow

The browser application calls the Java API on port 8080. The Java service checks the request and keeps the shared product information. After a user creates a record, the API returns the saved result and the browser refreshes the list.

## Accessibility and responsive behaviour

Buttons, forms, and links can be used with a keyboard. Labels explain what each field does, and important information is shown with words, not only colours. The layout also adjusts for tablets and phones.

## Run and verify

These commands install the project, check it, and start it on a computer:

```bash
npm ci
npm test -- --watch=false
npm run build
npm start
npm run backend:test
npm run backend:build
npm run fullstack
```

## Structure

- `backend/` — the Java API, validation, business rules, and tests.
- `scripts/run-full-stack.mjs` — starts the frontend and backend together.
- `src/` — the product pages, actions, and design.
- `docs/demo.webm` — a short video showing the product.
- `package.json` — the commands and packages needed to run it.
- `README.md` — this simple product guide.

## Tradeoffs and roadmap

This project uses sample information and does not connect to a real company system. A future version could connect to real service records, add approval roles, alerts, and formal privacy reports.
