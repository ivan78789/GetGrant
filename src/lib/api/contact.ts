import type { ApiResult, ConsultationRequest } from '../../types/contact';

export interface ConsultationResponse {
  requestId?: string;
}

/**
 * Frontend stub/contract for backend email + CRM lead creation.
 * Backend can implement POST /api/consultation to send an email + store lead.
 */
export async function sendConsultationRequest(
  payload: ConsultationRequest,
  opts?: { signal?: AbortSignal; baseUrl?: string }
): Promise<ApiResult<ConsultationResponse>> {
  const baseUrl = opts?.baseUrl ?? (import.meta as any).env?.VITE_API_BASE_URL ?? '';
  const url = `${baseUrl}/api/consultation`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      signal: opts?.signal
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return { ok: false, error: text || `Request failed (${res.status})` };
    }

    const data = (await res.json().catch(() => ({}))) as ConsultationResponse;
    return { ok: true, data };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? 'Network error' };
  }
}

