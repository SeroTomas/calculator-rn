import CalculatorButton from '@/components/CalculatorButton';
import CustomText from '@/components/CustomText';
import Row from '@/components/Row';
import { View } from 'react-native';


const CalculatorApp = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end", marginBottom: 30, marginHorizontal: 30 }}>
                <CustomText textType='primary'>
                    25 x 25
                </CustomText>
                <CustomText textType='secondary'>
                    500
                </CustomText>
            </View>
            <View style={{ justifyContent: "flex-end", marginBottom: 20 }}>
                <Row>
                    <CalculatorButton label='C' color='lightGray' blackText onPress={() => console.log("C")} />
                    <CalculatorButton label='+/-' color='lightGray' blackText onPress={() => console.log("+/-")} />
                    <CalculatorButton label='del' color='lightGray' blackText onPress={() => console.log("del")} />
                    <CalculatorButton label='%' color='orange' onPress={() => console.log("%")} />
                </Row>
                <Row>
                    <CalculatorButton label='7' onPress={() => console.log("7")} />
                    <CalculatorButton label='8' onPress={() => console.log("8")} />
                    <CalculatorButton label='9' onPress={() => console.log("9")} />
                    <CalculatorButton label='x' color='orange' onPress={() => console.log("x")} />
                </Row>
                <Row>
                    <CalculatorButton label='4' onPress={() => console.log("4")} />
                    <CalculatorButton label='5' onPress={() => console.log("5")} />
                    <CalculatorButton label='6' onPress={() => console.log("6")} />
                    <CalculatorButton label='-' color='orange' onPress={() => console.log("-")} />
                </Row>
                <Row>
                    <CalculatorButton label='1' onPress={() => console.log("1")} />
                    <CalculatorButton label='2' onPress={() => console.log("2")} />
                    <CalculatorButton label='3' onPress={() => console.log("3")} />
                    <CalculatorButton label='+' color='orange' onPress={() => console.log("+")} />
                </Row>
                <Row>
                    <CalculatorButton label='0' doubleSize onPress={() => console.log("0")} />
                    <CalculatorButton label='.' onPress={() => console.log(".")} />
                    <CalculatorButton label='=' color='orange' onPress={() => console.log("=")} />
                </Row>
            </View>
        </View>
    )

}

export default CalculatorApp;