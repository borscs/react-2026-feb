"use server"

import {saveMael} from "@/lib/meals";
import {redirect} from "next/navigation";


function isInvalid(text){
	return !text || text.trim() === "";
}

export  async function shareMeal(formData) {
	const meal = {
		creator: formData.get('name'),
		creator_email: formData.get('email'),
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
	}
	
	if(
		isInvalid(meal.creator) ||
			isInvalid(meal.creator_email) ||
			isInvalid(meal.title) ||
			isInvalid(meal.summary) ||
			isInvalid(meal.instructions) ||
			isInvalid(meal.image) ||
		!meal.creator_email.includes('@') ||
		!meal.image ||
		meal.image.size === 0
	){
		throw new Error('Invalid input');
	}
	
	await saveMael(meal);
	redirect('/meals');
}
