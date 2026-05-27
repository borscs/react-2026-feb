export default function getFormatterDate(date){
	return date.getFullYear()+ '-' + (date.getMonth()+1) + '-' + date.getDate();
}
