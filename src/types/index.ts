export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  image: string;
  href: string;
  title?: string;
}

export interface TrackingStatus {
  cnNumber: string;
  status: string;
  origin?: string;
  destination?: string;
}
