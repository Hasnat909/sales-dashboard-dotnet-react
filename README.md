A clean, demo-ready sales dashboard: a .NET 9 Web API that serves KPI data and a Vite + React frontend that renders KPI cards, charts, and a compact status bar — built as a hands-on learning project to demonstrate full-stack skills.

What this repo has

End-to-end demo you can run locally in minutes for a live walkthrough.

Modern stack: .NET 9 backend with OpenAPI (Swagger) and a Vite + React frontend leveraging Chart.js for visualizations.

Purposeful UI: concise KPI cards, trend charts, and a status bar designed for quick executive demos.

Ideal for interviews and technical walkthroughs — contains clear controller logic for metrics and a focused frontend for presentation.

Tech stack

Backend: .NET 9, ASP.NET Core Web API, OpenAPI/Swagger for easy exploration.

Frontend: React (Vite), Chart.js for charts, Axios for API calls, modern CSS for a polished “glass” UI.

Dev tooling: Vite dev server for fast frontend refreshes; dotnet run for the API.

(This project was created as a learning/portfolio piece — code is intentionally compact and easy to inspect.)

Highlights / What you can demo in 5–8 minutes

Start both services and show an interactive frontend that:

Displays Total Sales, Orders, Avg Order Value, Customer metrics, and other KPIs as cards.

Renders a 6-month bar chart for sales and a trend line for percentage changes.

Includes a Refresh control to fetch updated KPIs and a compact status bar showing system status and timestamps.

Open the API’s Swagger UI to show the GET /api/dashboard endpoint and sample payloads.

Browse the backend controller to discuss data modeling and how metrics are produced (great entry point for architecture discussion).

Quickstart (run locally)

Run the backend:

cd backend/SalesDashboardAPI
dotnet run


Run the frontend:

cd frontend
npm install
npm run dev


Open the frontend (usually http://localhost:5173 or the URL shown by Vite) and the API Swagger page (URL shown in the dotnet run output). These two actions are sufficient for a live demo.

