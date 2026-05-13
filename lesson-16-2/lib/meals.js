import path from 'path';
import sql from 'better-sqlite3';
import xss from "xss";
import * as fs from "node:fs";
import slugify from "slugify";

const db = sql(path.join(process.cwd(), 'meals.db'));

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	//throw new Error('Failed to fetch meals');
	return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}


export async function saveMael(meal) {
	meal.slug = slugify(meal.title, {lower: true});
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const fileName = `${meal.slug}.${extension}`;
	const stream = fs.createWriteStream('public/images/' + fileName);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if(error){
			throw new Error('Failed to save meal image');
		}
	});
	
	meal.image = '/images/' + fileName;
	
	db.prepare(`
	INSERT INTO meals
	    (title, slug, summary, instructions, image, creator, creator_email)
	VALUES (
	        @title,
	        @slug,
	        @summary,
	        @instructions,
	        @image,
	        @creator,
	        @creator_email
				 )
	`).run(meal);
	
}
