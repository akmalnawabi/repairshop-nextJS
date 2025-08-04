import { pgTable, serial, varchar, boolean, integer, timestamp, text} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const customers = pgTable("customers", {
    id: serial("id").primaryKey(),
    firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    address: varchar("address"),
    city: varchar("city"),
    active: boolean("active").notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().
    $onUpdate(() => new Date()),
})

export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id").notNull().references(
        () => customers.id
    ),
    title: varchar("title").notNull(),
    description: text("description"),
    completed: boolean("completed").notNull().default(false),
    tech: varchar("tech").notNull().default("unassigned"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().
    $onUpdate(() => new Date()),
})

// relations 

export const cutomersRelations = relations(customers, 
    ({many}) => ({
        tickets: many(tickets),
    })
)

export const ticketsRelations = relations(tickets, 
    ({one}) => ({
        customer: one(customers, {
            fields: [tickets.customerId],
            references: [customers.id],
        })
    })
)