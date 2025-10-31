# README_for_AI.md (machine-first)
# Repo: sales-dashboard-dotnet-react
# Purpose: exact, evidence-cited description of repository contents and runtime behavior
# Generated: 2025-10-31
# NOTE: All paths are relative to repository root (e.g., backend/SalesDashboardAPI/... and frontend/...)

project:
  name: "Sales Dashboard (learning project)"
  short_description: "Fullstack learning project: .NET 9 API serving simulated KPIs + React (Vite) frontend showing KPI cards and charts."
  confidence: "High (claims derived from provided code scan citations)."

one_line_summary:
  - "Fullstack sales dashboard: .NET 9 API returning simulated KPIs and trends; React + Vite frontend renders KPI cards and charts."
  - evidence:
    - "backend/SalesDashboardAPI/Controllers/DashboardController.cs:14-44"
    - "frontend/src/App.jsx:98-127"

tech_stack:
  backend:
    - platform: "dotnet / .NET 9"
      evidence: "backend/SalesDashboardAPI/SalesDashboardAPI.csproj:1-12"
    - web_framework: "ASP.NET Core Web API (OpenAPI/Swagger enabled)"
      evidence: "backend/SalesDashboardAPI/Program.cs:1-31; backend/SalesDashboardAPI/SalesDashboardAPI.csproj:1-12"
  frontend:
    - framework: "React (Vite) — project uses Vite dev server and React dependencies"
      evidence: "frontend/package.json:12-17; frontend/vite.config.js:1-7"
    - chart_library: "Chart.js"
      evidence: "frontend/package.json:12-17"
    - http_client: "axios"
      evidence: "frontend/package.json:12-17"

implemented_features:
  - name: "GET /api/dashboard REST endpoint"
    description: "Returns JSON with KPIs (totalSales, totalOrders, avgOrderValue, monthly array of 6 values, totalCustomers, customerSatisfaction, dailyAvgOrders, activeLocations), trends (salesTrend, ordersTrend, avgOrderTrend), uptime, lastUpdated, systemStatus."
    evidence:
      - "backend/SalesDashboardAPI/Controllers/DashboardController.cs:14-44"
  - name: "CORS enabled for frontend origin"
    description: "CORS configured to allow requests from frontend origin (localhost:5173) so SPA can call the API in dev."
    evidence:
      - "backend/SalesDashboardAPI/Program.cs:7-16"
  - name: "Frontend KPI cards and controls"
    description: "Front-end renders KPI cards (total sales, orders, customers, etc.) with a refresh button to re-fetch dashboard data."
    evidence:
      - "frontend/src/App.jsx:98-105"
  - name: "Charts: monthly bar chart and trend line chart"
    description: "Front-end displays a 6-month bar chart and line chart for trend percentages."
    evidence:
      - "frontend/src/App.jsx:107-121"
  - name: "UI styling (glass-morphism), responsive grid, fixed-height charts"
    evidence:
      - "frontend/src/App.css:37-49"
      - "frontend/src/App.css:112-144"
  - name: "Status bar (system status, uptime, last updated)"
    evidence:
      - "frontend/src/App.jsx:123-127"
  - name: "Development tooling"
    description: "Vite dev server for frontend; dotnet run for backend."
    evidence:
      - "frontend/package.json:7-9"
      - "backend/SalesDashboardAPI/Properties/launchSettings.json:8"

data_and_persistence:
  persistent_storage:
    present: false
    evidence:
      - "No ORM/connection strings/migrations found — checked: backend/SalesDashboardAPI/appsettings.json, backend/SalesDashboardAPI/appsettings.Development.json, backend/SalesDashboardAPI/SalesDashboardAPI.csproj, backend/SalesDashboardAPI/Controllers/*"
  data_source:
    description: "Controller simulates/randomly generates KPI data on each request (non-persistent)."
    evidence:
      - "backend/SalesDashboardAPI/Controllers/DashboardController.cs:21-23"

quickstart:
  backend:
    steps:
      - "cd backend/SalesDashboardAPI"
      - "dotnet run"
    evidence:
      - "backend/SalesDashboardAPI/Properties/launchSettings.json:8 (run/profile info)"
      - "backend/SalesDashboardAPI/Program.cs:1-31"
  frontend:
    steps:
      - "cd frontend"
      - "npm install"
      - "npm run dev"
    evidence:
      - "frontend/package.json:7-9 (scripts)"
      - "frontend/vite.config.js:1-7"
  notes:
    - "API dev URL/port originates from launchSettings or dotnet output; scan referenced backend/SalesDashboardAPI/Properties/launchSettings.json for configured URL/port."
    - evidence: "backend/SalesDashboardAPI/Properties/launchSettings.json:8"

api_summary:
  base_path: "/api"
  endpoints:
    - method: "GET"
      route: "/api/dashboard"
      description: "Returns dashboard JSON with KPIs, trends, monthly data, uptime, lastUpdated, systemStatus."
      evidence:
        - "backend/SalesDashboardAPI/Controllers/DashboardController.cs:14-44"

real_time_features:
  signalr_or_websocket_or_sse:
    found: false
    searched_files:
      - "backend/SalesDashboardAPI/Program.cs"
      - "backend/SalesDashboardAPI/Controllers/*"
      - "frontend/package.json"
    evidence_statement: "No SignalR / WebSocket / SSE found in searched files."

auth_and_security:
  authentication_registered: false
  authorization_attributes_present: false
  evidence_search:
    - "backend/SalesDashboardAPI/Program.cs"
    - "backend/SalesDashboardAPI/Controllers/*"
    - "backend/SalesDashboardAPI/appsettings.json"
    - "backend/SalesDashboardAPI/appsettings.Development.json"
    - "backend/SalesDashboardAPI/SalesDashboardAPI.csproj"
  evidence_statement: "No JWT, ASP.NET Identity, [Authorize], or OAuth found in searched files."

database_and_migrations:
  orm_present: false
  provider: null
  connection_strings_present: false
  migrations_present: false
  evidence_search:
    - "backend/SalesDashboardAPI/appsettings.json"
    - "backend/SalesDashboardAPI/appsettings.Development.json"
    - "backend/SalesDashboardAPI/SalesDashboardAPI.csproj"
    - "backend/SalesDashboardAPI/Controllers/*"
  evidence_statement: "No database provider/migrations found; data is simulated in controller."

tests:
  frontend_tests:
    found: false_or_minimal
    details: "No test files (*.spec.ts or *.test.ts) detected in frontend scan."
    evidence_search:
      - "frontend (glob for *.spec.ts, *.test.ts)"
  backend_tests:
    found: false
    evidence_search:
      - "workspace root for *.csproj with test items; backend folder scanned"
  evidence_statement: "No tests or test projects found."

docker_and_cicd:
  docker_files_present: false
  ci_workflows_present: false
  searched_files:
    - "repo root for Dockerfile, docker-compose.yml"
    - ".github/workflows/*"
  evidence_statement: "No Dockerfile, docker-compose or CI workflows found."

known_limitations (evidence-backed):
  - "No persistent data storage; data is randomly generated per request (see: backend/SalesDashboardAPI/Controllers/DashboardController.cs:21-23)."
  - "No authentication or authorization configured; app uses default pipeline and no [Authorize] attributes (see: backend/SalesDashboardAPI/Program.cs:23; backend/SalesDashboardAPI/Controllers/DashboardController.cs:7-9)."
  - "No real-time push mechanism (SignalR/WebSocket) present (see: searched list above)."
  - "No tests or CI pipelines detected (see: tests section above)."

suggested_next_steps (concise, actionable):
  - "Introduce persistent storage (e.g., EF Core with SQLite or SQL Server) and move simulated data logic into a data layer."
  - "Add authentication (JWT) and protect endpoints as required."
  - "Add unit/integration tests for backend and frontend components."
  - "Add Dockerfiles and a simple CI workflow for builds/tests."
  - "Consider adding SignalR for live KPI updates if near-real-time data is required."

security_findings:
  plaintext_secrets_found: false
  evidence: "backend/SalesDashboardAPI/appsettings.json and other config files show no plaintext secrets in scanned lines."

file_locations_of_interest:
  - "backend/SalesDashboardAPI/Controllers/DashboardController.cs:14-44 (core endpoint and simulated data generation)"
  - "backend/SalesDashboardAPI/Program.cs:7-16 (CORS configuration) and Program.cs:1-31 (service setup)"
  - "backend/SalesDashboardAPI/Properties/launchSettings.json:8 (run profile / URL/port evidence)"
  - "backend/SalesDashboardAPI/SalesDashboardAPI.csproj:1-12 (backend project file)"
  - "frontend/package.json:7-17 (scripts and dependencies)"
  - "frontend/vite.config.js:1-7 (Vite config)"
  - "frontend/src/App.jsx:98-127 (UI rendering of KPIs, charts, status bar)"
  - "frontend/src/App.css:37-49; 112-144 (UI styling and layout)"

consumption_instructions_for_other_AIs:
  - "To verify claims, open each cited file and inspect the exact lines indicated."
  - "If a claim is missing or a file path differs (e.g., nested root folder), prefix with outer folder name as appropriate."
  - "If requiring ports, consult backend/SalesDashboardAPI/Properties/launchSettings.json or console output after dotnet run."

skipped_boilerplate_and_reasoning:
  - "backend/SalesDashboardAPI/bin/ - build outputs (auto-generated)"
  - "backend/SalesDashboardAPI/obj/ - build intermediates (auto-generated)"
  - "frontend/node_modules/ - dependency packages (auto-generated)"
  - "frontend/public/ - static assets; no custom logic"
