import {
  pgTable,
  text,
  timestamp,
  serial,
  uuid,
  varchar,
  uniqueIndex,
  AnyPgColumn,
} from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .defaultRandom()
    .notNull()
    .primaryKey(),
  updated_at: timestamp("created_at").defaultNow().notNull(),
  username: text("username").notNull(),
  fullName: text("full_name").notNull(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  src: varchar("src", { length: 255 }),
  code: varchar("code", { length: 255 }),
  vdo_url: varchar("vdo_url", { length: 255 }),
  category: varchar("category", { length: 255 }),
  seat: varchar("seat", { length: 255 }),
  status: varchar("status", { length: 255 }),
  userId: uuid("user_id")
    .references(() => profiles.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const newses = pgTable("newses", {
  id: serial("id").primaryKey(),
  source_id: serial("source_id"),
  source_name: varchar("source_name", { length: 255 }),
  author: varchar("author", { length: 255 }),
  title: varchar("title", { length: 255 }),
  description: text("description"),
  url: varchar("url", { length: 255 }),
  url_to_image: varchar("url_to_image", { length: 255 }),
  publishedAt: timestamp("published_at"),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

