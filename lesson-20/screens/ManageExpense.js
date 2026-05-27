import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {useLayoutEffect} from "react";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import MapView from "react-native-maps";


function Input(props) {
	return null;
}

function ManageExpense({route, navigation}) {
	const editedExpenseId = route.params?.expenseId;
	const isEdition = !!editedExpenseId;
	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEdition ? "Edit Expense" : "Add Expense"
		})
	}, [navigation, isEdition]);
	
	
	function deleteExpenseHandler() {
	};
	
	function canceExpenseHandler() {
	};
	
	function confirmExpenseHandler() {
	};
	
	
	return (
		<>
			<View>
				<Text>Your Expenses</Text>
				<View>
					<TextInput label='Amount' />
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.buttons}>
					<Button onPress={canceExpenseHandler} title={'Cancel'}/>
					<Button onPress={confirmExpenseHandler} title={isEdition ? "Confirm Edit" : "Confirm Add"}/>
				</View>
				{isEdition && (
					<View style={styles.deleteContainer}>
						<IconButton icon="trash" color="red" size={24} onPress={deleteExpenseHandler}/>
					</View>
				)}
			</View>
			<MapView style={{ flex: 1 }} />
		</>
	);
}

export default ManageExpense;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: 'center',
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
		borderRadius: 4,
		color: 'white',
		textAlign: 'center',
	}
});
