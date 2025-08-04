import { config } from "dotenv";
config({ path: ".env.local" });

import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./index";

const main = async () => {
    try {
        await migrate(db, {
            migrationsFolder: 'src/db/migrate'
        })
        console.log('migrate success')
    } catch (error) {
        console.error('Error during process', error)
        process.exit(1)
    }
}

main()