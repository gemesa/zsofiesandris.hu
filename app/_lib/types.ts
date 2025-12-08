import { z } from 'zod';

export const weddingApplicationSchema = z.object({
  fullName: z.string().nonempty('Kérjük, add meg a teljes neved!'),
  email: z.email('Kérjük, add meg az e-mail címed!'),
  attendance: z.enum(['Igen', 'Nem'], {
    message: 'Kérjük, válaszd ki, hogy részt veszel-e!',
  }),
  phoneNumber: z.string().optional(),
  otherGuests: z.string().optional(),
  smallChildren: z.number().min(0, 'A szám nem lehet negatív').optional(),
  midChildren: z.number().min(0, 'A szám nem lehet negatív').optional(),
  foodRestrictions: z.string().optional(),
  comment: z.string().optional(),
  accommodation: z
    .enum(['prónay', 'vendégház', 'nem-kell-szallas'], {
      message: 'Kérjük, válaszd ki, hogy milyen szállást szeretnél!',
    })
    .optional(),
});

export type WeddingApplicationFormData = z.infer<typeof weddingApplicationSchema>;
export type WeddingApplicationEntry = WeddingApplicationFormData & {
  submittedApplicationAt?: Date;
  isFromWebsite?: boolean;
  isTestEntry?: boolean;
};
