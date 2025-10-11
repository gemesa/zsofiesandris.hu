import { boolean, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const applications = pgTable("applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: text("fullName").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phoneNumber").notNull(),
  otherGuests: text("otherGuests").default("").notNull(),
  smallChildren: integer("smallChildren").default(0).notNull(),
  midChildren: integer("midChildren").default(0).notNull(),
  foodRestrictions: text("foodRestrictions").default("").notNull(),
  comment: text("comment").default("").notNull(),
  submittedApplicationAt: timestamp("submittedApplicationAt")
    .notNull()
    .defaultNow(),
  isFromWebsite: boolean("isFromWebsite").default(true).notNull(),
  isTestEntry: boolean("isTestEntry").default(false).notNull(),
});
