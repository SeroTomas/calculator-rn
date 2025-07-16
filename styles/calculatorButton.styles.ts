import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const calculatorButtonStyle = StyleSheet.create({

    darkGray: {
        backgroundColor: Colors.darkGray,
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10,
    },

    lightGray: {
        backgroundColor: Colors.lightGray,
    },

    orange: {
        backgroundColor: Colors.orange,
    },
} as const);

export const calculatorButtonTextStyle = StyleSheet.create({

    text: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: "300",
    },

    blackText: {
        color: "#000000"
    }

} as const);