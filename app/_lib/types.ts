import { z } from "zod";

export const weddingApplicationSchema = z.object({
  fullName: z.string().nonempty("Kérjük, add meg a teljes neved!"),
  email: z.email("Kérjük, add meg az e-mail címed!"),
  attendance: z.enum(["Igen", "Nem"]),
  phoneNumber: z.string().optional(),
  otherGuests: z.string().optional(),
  smallChildren: z.number().min(0, "A szám nem lehet negatív").optional(),
  midChildren: z.number().min(0, "A szám nem lehet negatív").optional(),
  foodRestrictions: z.string().optional(),
  comment: z.string().optional(),
  accomodation: z.enum(["szállás0", "szállás1", "szállás2"], {
    message: "Kérjük, válaszd ki, hogy milyen szállást szeretnél!",
  }).optional(),
});

export type WeddingApplicationFormData = z.infer<
  typeof weddingApplicationSchema
>;
export type WeddingApplicationEntry = WeddingApplicationFormData & {
  submittedApplicationAt?: Date;
  isFromWebsite?: boolean;
  isTestEntry?: boolean;
};
