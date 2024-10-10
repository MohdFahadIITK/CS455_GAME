import pool from '../ConnectionPools/dbpool';

console.log("Using database URL:", process.env.DATABASE_URL);

export const getUserByEmail = async (email: string) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    } catch (err) {
        throw new Error('Error fetching user by email: ');
    }
};

export const createUser = async (username: string, email: string, hashedPassword: string) => {
    try {
        const client = await pool.connect();
        const result = await client.query(
            'INSERT INTO users (username, email, passwordhash) VALUES ($1, $2, $3) RETURNING id',
            [username, email, hashedPassword]
        );
        return result.rows[0];
    } catch (err) {
        throw new Error('Error creating user: ');
    }
};




