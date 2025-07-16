import { Text, Pressable } from 'react-native'

import * as Haptics from 'expo-haptics';

import { calculatorButtonStyle, calculatorButtonTextStyle } from '@/styles/calculatorButton.styles';
import { Colors } from '@/constants/Colors';

interface Props {
    label: string;
    color?: Exclude<keyof typeof Colors, "textPrimary" | "textSecondary" | "background">;
    blackText?: boolean;
    doubleSize?: boolean;

    onPress: () => void;
}

const CalculatorButton = ({
    label,
    color = "darkGray",
    blackText = false,
    doubleSize = false,
    onPress
}: Props) => {

    return (
        <Pressable
            style={({ pressed }) => ({
                ...calculatorButtonStyle.darkGray,
                ...calculatorButtonStyle[color],
                opacity: pressed ? 0.7 : 1,
                width: doubleSize ? 180 : 80,
            })}
            onPress={() => {
                Haptics.impactAsync();
                onPress();
            }}
        >
            <Text style={[calculatorButtonTextStyle.text, blackText && calculatorButtonTextStyle.blackText]}>
                {label}
            </Text>
        </Pressable >
    )
}


export default CalculatorButton;