import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const globalStyles = StyleSheet.create({

    backGround: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 20,
    },

    primaryText: {
        color: Colors.textPrimary,
        fontSize: 20,
        fontFamily: 'SpaceMono',
    },

});
