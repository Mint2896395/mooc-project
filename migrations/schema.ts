import {
  pgTable,
  pgEnum,
  bigint,
  varchar,
  uuid,
  timestamp,
  unique,
  text,
} from "drizzle-orm/pg-core";

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])

import { sql } from "drizzle-orm"

export const courses = pgTable("courses", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  src: varchar("src", { length: 255 }),
  code: varchar("code", { length: 255 }),
  vdoUrl: varchar("vdo_url", { length: 255 }),
  category: varchar("category", { length: 255 }),
  seat: varchar("seat", { length: 255 }),
  status: varchar("status", { length: 255 }),
  userId: uuid("user_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .default(timezone("utc", "now"))
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
    .default(timezone("utc", "now"))
    .notNull(),
});

export const profiles = pgTable("profiles", {
	id: uuid("id").primaryKey().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	username: text("username"),
	fullName: text("full_name"),
},
(table) => {
	return {
		profilesUsernameKey: unique("profiles_username_key").on(table.username),
	}
});

function timezone(arg0: string, arg1: string): string | import("drizzle-orm/column.d-aa4e525d").a<unknown> {
	throw new Error("Function not implemented.");
}
