
import { Text, TextProps } from 'react-native'

import { customTextStyles } from '@/styles/customText.styles'

interface Props extends TextProps {
    textType: "primary" | "secondary";
}

const CustomText = ({ children, textType, ...rest }: Props) => {

    const style = textType === "primary" ? customTextStyles.primary : customTextStyles.secondary

    return (
        <Text {...rest} style={style}>
            {children}
        </Text>
    )
}

export default CustomText;
