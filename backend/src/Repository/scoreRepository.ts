import pool from '../ConnectionPools/dbpool';

console.log("Using database URL:", process.env.DATABASE_URL);

export const saveScore = async (user_auth_token: string, score: number, name: string) => {
    const client = await pool.connect();
    try {
        const result = await client.query(
            'INSERT INTO live_session_score (user_auth_token, score) VALUES ($1, $2, $3) RETURNING id',
            [user_auth_token, score, name]
        );
        console.log('Query executed successfully:', result);
        return { success: true, id: result.rows[0].id };
    } catch (err) {
        console.error('Error executing query:', err);
        return { success: false, error: 'Error saving score: ' + err };
    } finally {
        client.release();
    }
};

export const getCurrentScore = async (user_auth_token: string) => {
    const client = await pool.connect(); // Get a client from the pool
    try {
        // Execute the select query
        const result = await client.query(
            'SELECT score FROM live_session_score WHERE user_auth_token = $1',
            [user_auth_token]
        );

        if (result.rows.length === 0) {
            throw new Error('No score found for the given user_auth_token');
        }

        return result.rows[0].score;
    } catch (err) {
        console.error('Error fetching score:', err);
        throw new Error('Error fetching score: ' + err);
    } finally {
        client.release();
    }
};

export const getTopScores = async () => {
    const client = await pool.connect();
    try {
        const result = await client.query(
            'SELECT name, score FROM live_session_score ORDER BY score DESC LIMIT 10'
        );

        if (result.rows.length === 0) {
            throw new Error('No top scores found');
        }

        return result.rows; // Return the top 10 scores
    } catch (err) {
        console.error('Error fetching top scores:', err);
        throw new Error('Error fetching top scores: ' + err);
    } finally {
        client.release();
    }
};
