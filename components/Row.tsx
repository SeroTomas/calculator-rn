import { ViewProps, View, StyleSheet } from 'react-native'

interface Props extends ViewProps { }

const Row = ({ children, ...rest }: Props) => {
    return (
        <View
            style={rowStyle.row}
            {...rest}
        >
            {children}
        </View>
    )
}

export default Row;


const rowStyle = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10
    }
});

