# InventoryHub – Full-Stack Integration Project

Full-stack application integrating front-end and back-end with structured JSON API, integration fixes, and performance optimizations (developed with Microsoft Copilot).

## Features

- **Front-end / back-end communication** – API client and consistent request/response flow
- **Structured JSON** – Clear API contracts for inventory and items
- **Integration handling** – Error handling and response parsing
- **Performance** – Efficient requests and minimal payloads

## Project structure

- `server/` – Express API (JSON responses, CORS, inventory endpoints)
- `client/` – Front-end that consumes the API
- `package.json` – Scripts and dependencies

## Setup

```bash
npm install
npm run server   # Start API (port 3001)
npm run client   # Start front-end (port 3000)
```

## API (JSON)

- `GET /api/inventory` – List inventory items
- `GET /api/inventory/:id` – Get one item
- `POST /api/inventory` – Create item (JSON body)
