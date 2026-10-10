# Biz Core by Tech Studio

Biz Core is a premium Odoo-style ERP and multi-company SaaS starter built with React, TypeScript, Vite, and Supabase-ready database assets. It is designed as a production-oriented foundation for a multi-tenant business management platform serving Indian business requirements.

## Features included
- Multi-tenant company shell with role-aware navigation.
- Dashboard with KPI cards and recent transaction tables.
- ERP module navigation for CRM, Sales, Purchase, Inventory, Accounting, HR, Projects, Manufacturing, POS, and Admin.
- Responsive UI with sidebar and header, accessible form layouts, and premium enterprise styling.
- Supabase-ready migration structure with tables for companies, users, plans, products, stock movement, accounting accounts, and more.
- Development seed scripts and .env.example for local setup.
- Testing setup using Vitest and React Testing Library.

## Tech stack
- Frontend: React + TypeScript + Vite
- UI: Lucide icons, custom CSS, responsive components
- Database: PostgreSQL / Supabase
- Auth: Supabase Auth (integration layer configured via env)
- Testing: Vitest + Testing Library

## Local setup
1. Copy `.env.example` to `.env` and provide your Supabase values.
2. Install dependencies:
   npm install
3. Run the app:
   npm run dev
4. Run tests:
   npm test
5. Build for production:
   npm run build

## Important notes
- This is a foundational ERP starter, not a fully government-verified statutory package.
- GST, e-invoice, and payroll rules are modeled as configurable logic with external integration boundaries.
- All financial calculations are represented with decimal-safe patterns and transactional architecture guidance.

## Project structure
- `src/` - frontend application
- `supabase/migrations/` - PostgreSQL migration scripts
- `supabase/seed/` - development seed data
- `docs/` - deployment and security guidance

## License
This project is scaffolded for internal business use and modification.
