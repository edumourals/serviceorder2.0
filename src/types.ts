export enum OrderStatus {
  OPEN = 'Aberta',
  CREATION = 'Criação',
  PRODUCTION = 'Produção',
  AWAITING_INSTALLATION = 'Aguardando instalação',
  COMPLETED = 'Concluída',
  CANCELLED = 'Cancelada',
}

export enum PaymentMethod {
  CASH = 'Dinheiro',
  PIX = 'Pix',
  CREDIT = 'Crédito',
  DEBIT = 'Débito',
  BOLETO = 'Boleto',
}

export interface ServiceOrder {
  id: number;
  clientName: string;
  clientPhone: string;
  description: string;
  openDate: string; // ISO String
  closeDate?: string | null; // ISO String
  value: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod | string;
  observations: string;
}

export interface DashboardStats {
  totalOpen: number;
  completedThisMonth: number;
  revenueThisMonth: number;
  byStatus: { name: string; value: number }[];
}

export type SubscriptionStatus = 'trial' | 'active' | 'past_due' | 'canceled' | 'unpaid';

export interface UserProfile {
  id: string;
  email: string;
  company_name: string;
  subscription_status: SubscriptionStatus;
  subscription_end_date: string;
}