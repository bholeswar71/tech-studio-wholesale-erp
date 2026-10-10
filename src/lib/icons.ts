import { Building2, BriefcaseBusiness, Factory, FolderKanban, Home, Landmark, ReceiptText, Settings, ShoppingBag, Users, Warehouse } from 'lucide-react';

export const navIcons = {
  home: Home,
  users: Users,
  receipt: ReceiptText,
  cart: ShoppingBag,
  warehouse: Warehouse,
  landmark: Landmark,
  briefcase: BriefcaseBusiness,
  folder: FolderKanban,
  factory: Factory,
  shoppingBag: ShoppingBag,
  settings: Settings,
};

export const topStatRows = [
  { label: 'Open Quotations', value: '42', detail: '₹11.4L pending' },
  { label: 'Due Invoices', value: '16', detail: '₹3.7L overdue' },
  { label: 'Stock On Hand', value: '1,425 units', detail: 'Across 3 locations' },
  { label: 'Payroll Run', value: 'Due in 4 days', detail: '67 employees' },
];
