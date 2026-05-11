import path from 'path';
import sql from 'better-sqlite3';

const db = sql(path.join(process.cwd(), 'meals.db'));

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare('SELECT * FROM meals').all();
}

