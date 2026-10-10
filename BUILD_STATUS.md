# Biz Core by Tech Studio

## Checklist
- [x] Repository initialized and project structure created.
- [x] Shared ERP SaaS foundation established in code, routing, and UI shell.
- [x] Dashboard and core module navigation implemented.
- [x] Supabase-ready SQL schema and seed scripts added.
- [x] Security and deployment documentation prepared.
- [x] Testing infrastructure configured.
- [ ] End-to-end feature parity with all ERP modules expected in a full commercial rollout.
- [ ] Live Supabase credentials and production deployment settings still need to be supplied by the user.

## Current status
This repository is being scaffolded into a production-oriented ERP & multi-tenant SaaS starter for Biz Core. The app currently includes the enterprise shell, dashboard, and core module pages; the underlying database schema, security policies, and deployment configuration are included as production-ready starter assets.

The code intentionally keeps a clear implementation boundary for modules that require external integrations (GST filing, e-invoice, payment gateway, payroll statutory engines). Those features are represented as configurable architecture points rather than claims of verified government API integration.
