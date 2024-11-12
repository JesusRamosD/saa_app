import { StyleSheet } from "react-native";

export const productsStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    product: {
        padding: 16,
        margin: 10,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productText: {
        fontSize: 16,
        color: 'black',
    },
    searchContainer: {
        padding: 10,
        backgroundColor: 'lightgray',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    search: {
        flex: 1,
        padding: 10,
        width: "80%",
        fontSize: 18,
    }
})