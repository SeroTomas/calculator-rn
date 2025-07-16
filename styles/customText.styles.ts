import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const customTextStyles = StyleSheet.create({

    primary: {
        color: Colors.textPrimary,
        fontSize: 40,
        fontFamily: "SpaceMono",
    },

    secondary: {
        color: Colors.textSecondary,
        fontSize: 20,
        fontFamily: "SpaceMono"
    },

} as const);