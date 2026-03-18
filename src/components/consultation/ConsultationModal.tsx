import React from 'react';
import { toast } from 'sonner';
import { GetGrantButton } from '../GetGrantButton';
import { GetGrantInput } from '../GetGrantInput';
import { GetGrantModal } from '../GetGrantModal';
import { sendConsultationRequest } from '../../lib/api/contact';
import { useConsultation } from '../../context/ConsultationContext';
import type { ConsultationRequest } from '../../types/contact';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ConsultationModal() {
  const { isOpen, closeConsultation, preset } = useConsultation();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [values, setValues] = React.useState<ConsultationRequest>({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: undefined,
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (isOpen) {
      setErrors({});
      setValues((prev) => ({
        ...prev,
        message: '',
        source: preset?.source,
      }));
    }
  }, [isOpen, preset?.message, preset?.source]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = 'Введите имя';
    if (!values.email.trim()) next.email = 'Введите email';
    else if (!emailRe.test(values.email.trim()))
      next.email = 'Некорректный email';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const res = await sendConsultationRequest({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone?.trim() || undefined,
      message: values.message?.trim() || undefined,
      source: values.source,
    });

    setIsSubmitting(false);

    if (!res.ok) {
      toast.error('Не удалось отправить заявку', {
        description: res.error ?? 'Попробуйте позже',
      });
      return;
    }

    toast.success('Заявка отправлена', {
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    closeConsultation();
    setValues({
      name: '',
      email: '',
      phone: '',
      message: '',
      source: values.source,
    });
  };

  return (
    <GetGrantModal
      isOpen={isOpen}
      onClose={closeConsultation}
      title="Получить консультацию"
      size="lg">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GetGrantInput
            label="Имя"
            placeholder="Как к вам обращаться?"
            value={values.name}
            error={errors.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            autoComplete="name"
          />
          <GetGrantInput
            label="Email"
            type="email"
            placeholder="email@example.com"
            value={values.email}
            error={errors.email}
            onChange={(e) =>
              setValues((v) => ({ ...v, email: e.target.value }))
            }
            autoComplete="email"
          />
        </div>

        <GetGrantInput
          label="Телефон (опционально)"
          placeholder="+996 ..."
          value={values.phone ?? ''}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          autoComplete="tel"
        />

        <div>
          <label className="block mb-2 text-sm text-foreground">
            Сообщение (опционально)
          </label>
          <textarea
            rows={4}
            value={values.message ?? ''}
            onChange={(e) =>
              setValues((v) => ({ ...v, message: e.target.value }))
            }
            placeholder="Например: интересуют страны/визы/пакет сопровождения…"
            className="w-full px-4 py-3 bg-background border border-border/40 rounded-lg shadow-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:shadow-md transition-all duration-200 resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <GetGrantButton
            type="submit"
            variant="primary"
            size="lg"
            className="flex-1"
            disabled={isSubmitting}>
            {isSubmitting ? 'Отправляем…' : 'Отправить'}
          </GetGrantButton>
          <GetGrantButton
            type="button"
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={closeConsultation}>
            Отмена
          </GetGrantButton>
        </div>

        <p className="text-xs text-muted-foreground">
          Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
        </p>
      </form>
    </GetGrantModal>
  );
}
