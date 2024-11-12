import { StyleSheet } from "react-native";

export const productDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formInput: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        color: 'black'
    },
    descriptionInput: {
        minHeight: 200,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        padding: 8
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        marginTop: 20
    },
})