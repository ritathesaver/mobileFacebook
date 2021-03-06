import React from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

export default (Input = ({ label, style = {}, inputStyle = {}, ...props }) => {
	return (
		<View style={[ styles.container, style ]}>
			{label && <Text style={[ styles.label ]}>{label}</Text>}
			<TextInput style={[ styles.inputForm, inputStyle ]} {...props} />
		</View>
	)
})

const styles = StyleSheet.create({
	container: {
		padding: 5,
		marginTop: 5
	},
	inputForm: {
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#ccc',
		color: '#000',
		backgroundColor: '#fff',
		padding: 10
	},
	label: {
		color: '#fff'
	}
})
