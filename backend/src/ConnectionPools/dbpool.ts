import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Create a new pool instance
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,  // Use the DATABASE_URL from Supabase or your environment
    max: 10,  // Maximum number of clients in the pool
    idleTimeoutMillis: 30000,  // Time before a client is removed if idle
    connectionTimeoutMillis: 2000,  // Max wait time for acquiring a client from the pool
});

// Export the pool to be used in your repositories
export default pool;
