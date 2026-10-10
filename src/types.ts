export type NavItem = {
  id: string;
  label: string;
  icon: string;
};

export type Metric = {
  label: string;
  value: string;
  trend: string;
  accent: 'blue' | 'green' | 'orange' | 'purple' | 'red';
};

export type TableRow = {
  col1: string;
  col2: string;
  col3: string;
  col4?: string;
};

export type ModuleCard = {
  title: string;
  description: string;
  status: 'Live' | 'Ready' | 'Scaffold';
};
