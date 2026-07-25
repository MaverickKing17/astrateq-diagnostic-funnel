export interface Option {
  id: string;
  text: string;
  subtext?: string;
  weight: number;
}

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  options: Option[];
}

export interface UserAnswers {
  [questionId: number]: string; // Option ID
}

export interface DrivingContextSummary {
  routeType: string;
  condition: string;
  commuteLength: string;
}

export interface DiagnosticResult {
  score: number;
  scoreLabel: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'MODERATE';
  attentionStability: 'EXCELLENT' | 'GOOD' | 'MODERATE';
  fatigueRisk: 'LOW' | 'MODERATE' | 'ELEVATED';
  environmentalComplexity: 'LOW' | 'MODERATE' | 'HIGH';
  drivingContextSummary: DrivingContextSummary;
  supportiveInsight: string;
  tier: 1 | 2 | 3;
  tierName: string;
  tierTag: string;
  tierDesc: string;
  riskProfile: string;
  riskDesc: string;
  attentionReadiness: 'High' | 'Moderate' | 'Pending Review';
  privacyAlignment: 'Excellent' | 'High' | 'Good';
  recommendation: string;
}

export interface AnalyticsEvent {
  id: string;
  name: string;
  timestamp: string;
  data?: Record<string, any>;
}
