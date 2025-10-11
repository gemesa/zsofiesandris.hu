import { z } from "zod";

export const weddingApplicationSchema = z.object({
  fullName: z.string().nonempty(),
  email: z.email(),
  phoneNumber: z.string().nonempty(),
  otherGuests: z.string().optional(),
  foodRestrictions: z.string().optional(),
  comment: z.string().optional(),
});

export type WeddingApplicationFormData = z.infer<
  typeof weddingApplicationSchema
>;
export type WeddingApplicationEntry = WeddingApplicationFormData & {
  submittedApplicationAt?: Date;
  isFromWebsite?: boolean;
  isTestEntry?: boolean;
};
