import React from 'react';

export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
  badge?: string;
  variant?: 'default' | 'highlight';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PlanItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  support: string;
  price: string;
  installments: string;
  highlight?: boolean;
}