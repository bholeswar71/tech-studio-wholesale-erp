export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'home' },
  { id: 'crm', label: 'CRM', icon: 'users' },
  { id: 'sales', label: 'Sales', icon: 'receipt' },
  { id: 'purchase', label: 'Purchase', icon: 'cart' },
  { id: 'inventory', label: 'Inventory', icon: 'warehouse' },
  { id: 'accounting', label: 'Accounting', icon: 'landmark' },
  { id: 'hr', label: 'HR', icon: 'briefcase' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'manufacturing', label: 'Manufacturing', icon: 'factory' },
  { id: 'pos', label: 'POS', icon: 'shoppingBag' },
  { id: 'admin', label: 'Admin', icon: 'settings' },
];

export const dashboardMetrics = [
  { label: 'Revenue', value: '₹18.6L', trend: '+12.4%', accent: 'blue' },
  { label: 'Gross Margin', value: '₹5.7L', trend: '+8.1%', accent: 'green' },
  { label: 'Receivables', value: '₹3.2L', trend: '-4.6%', accent: 'orange' },
  { label: 'Payables', value: '₹2.8L', trend: '+2.0%', accent: 'purple' },
  { label: 'Cash Balance', value: '₹7.9L', trend: '+6.9%', accent: 'red' },
];

export const lowStockItems = [
  { col1: 'BOLT-103', col2: 'Fasteners', col3: '12', col4: 'Reorder' },
  { col1: 'CABLE-010', col2: 'Electrical', col3: '9', col4: 'Reorder' },
  { col1: 'PACK-02', col2: 'Packaging', col3: '16', col4: 'Review' },
];

export const revenueRows = [
  { col1: 'Q1', col2: '₹4.1L', col3: '₹3.6L', col4: '↑ 13%' },
  { col1: 'Q2', col2: '₹5.3L', col3: '₹4.2L', col4: '↑ 18%' },
  { col1: 'Q3', col2: '₹4.8L', col3: '₹4.1L', col4: '↑ 10%' },
  { col1: 'Q4', col2: '₹6.2L', col3: '₹5.3L', col4: '↑ 15%' },
];

export const moduleCards = [
  { title: 'CRM', description: 'Leads, opportunities, follow-up pipeline, and account relationship tracking.', status: 'Live' },
  { title: 'Sales', description: 'Quotations, orders, invoices, receipts, returns, and ageing reports.', status: 'Live' },
  { title: 'Purchase', description: 'RFQ, PO approvals, supplier ledger, and procurement tracking.', status: 'Ready' },
  { title: 'Inventory', description: 'Warehouse stock, movements, counts, valuation, and reorder controls.', status: 'Live' },
  { title: 'Accounting', description: 'Chart of accounts, journals, postings, ageing, and reports.', status: 'Ready' },
  { title: 'HR & Payroll', description: 'Attendance, payroll, leave, statutory rules, and salary slips.', status: 'Scaffold' },
];

export const companySummary = {
  name: 'Tech Studio Wholesale ERP',
  gstin: '27ABCDE1234F1Z5',
  currency: 'INR',
  fy: '2025-26',
  timezone: 'Asia/Kolkata',
};
