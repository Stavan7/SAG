import React from 'react'
import {
	Text,
	View,
	StyleSheet,
} from 'react-native'
import { shadow } from '@utils/index'
import { FONTS, COLORS } from '@constants/index'

interface ContactCardProps {
	header: string;
	textOne: string;
	textTwo: string;
	handleTextOnePress?: () => void;
	handleTextTwoPress?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ header, textOne, textTwo, handleTextOnePress, handleTextTwoPress }) => {
	return (
		<View style={[styles.cardContainer, shadow]}>
			<Text style={[styles.cardText, { fontFamily: FONTS.BOLD, textDecorationLine: 'underline' }]}>{header}</Text>
			<Text style={styles.cardText} onPress={handleTextOnePress}>{textOne}</Text>
			<Text style={styles.cardText} onPress={handleTextTwoPress}>{textTwo}</Text>
		</View>
	)
}

export default ContactCard

const styles = StyleSheet.create({
	cardContainer: {
		height: 120,
		width: '90%',
		marginTop: 20,
		alignSelf: 'center',
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.GREEN
	},
	cardText: {
		fontSize: 16,
		color: COLORS.BLACK,
		paddingVertical: 2,
		fontFamily: FONTS.MEDIUM
	},
})