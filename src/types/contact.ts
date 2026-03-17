export interface ConsultationRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string; // e.g. "header-cta", "sticky-cta", "countries-cta"
}

export interface ApiResult<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

