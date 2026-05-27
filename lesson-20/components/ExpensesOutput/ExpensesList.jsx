import {FlatList, Text, View, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({expenses}) {
	
	const renderExpenseItem = (itemData) => {
		return <ExpenseItem {...itemData.item} />
	}
	
	return <FlatList
		data={expenses}
		renderItem={renderExpenseItem}
		keyExtractor={(item) => item.id}
	/>
}

const styles = StyleSheet.create({
	itemView: {
		padding: 8,
		minHeight: 48,
		backgroundColor: GlobalStyles.colors.error500,
	}
})

