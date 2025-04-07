import pool from '../../../db';

export async function GET(request) {
  try {
    const [rows] = await pool.query('SELECT * FROM employees');
    console.log('Database rows:', rows); // Debugging
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    });
  }
}