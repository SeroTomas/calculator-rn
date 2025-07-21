import { View } from 'react-native';

import { useCalculator } from '@/hooks/useCalculator';

import CalculatorButton from '@/components/CalculatorButton';
import CustomText from '@/components/CustomText';
import Row from '@/components/Row';


const CalculatorApp = () => {

    const {
        formula,
        result,
        deleteLastInput,
        handleCalculator,
        deleteAll,
        handleResult,
        changeSign


    } = useCalculator();


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end", marginBottom: 30, marginHorizontal: 30 }}>
                <CustomText textType='primary'>
                    {formula}
                </CustomText>
                <CustomText textType='secondary'>
                    {result}
                </CustomText>
            </View>
            <View style={{ justifyContent: "flex-end", marginBottom: 20 }}>
                <Row>
                    <CalculatorButton label='C' color='lightGray' blackText onPress={deleteAll} />
                    <CalculatorButton label='+/-' color='lightGray' blackText onPress={changeSign} />
                    <CalculatorButton label='del' color='lightGray' blackText onPress={deleteLastInput} />
                    <CalculatorButton label='%' color='orange' onPress={() => handleCalculator("/")} />
                </Row>
                <Row>
                    <CalculatorButton label='7' onPress={() => handleCalculator("7")} />
                    <CalculatorButton label='8' onPress={() => handleCalculator("8")} />
                    <CalculatorButton label='9' onPress={() => handleCalculator("9")} />
                    <CalculatorButton label='x' color='orange' onPress={() => handleCalculator("*")} />
                </Row>
                <Row>
                    <CalculatorButton label='4' onPress={() => handleCalculator("4")} />
                    <CalculatorButton label='5' onPress={() => handleCalculator("5")} />
                    <CalculatorButton label='6' onPress={() => handleCalculator("6")} />
                    <CalculatorButton label='-' color='orange' onPress={() => handleCalculator("-")} />
                </Row>
                <Row>
                    <CalculatorButton label='1' onPress={() => handleCalculator("1")} />
                    <CalculatorButton label='2' onPress={() => handleCalculator("2")} />
                    <CalculatorButton label='3' onPress={() => handleCalculator("3")} />
                    <CalculatorButton label='+' color='orange' onPress={() => handleCalculator("+")} />
                </Row>
                <Row>
                    <CalculatorButton label='0' doubleSize onPress={() => handleCalculator("0")} />
                    <CalculatorButton label='.' onPress={() => handleCalculator(".")} />
                    <CalculatorButton label='=' color='orange' onPress={handleResult} />
                </Row>
            </View>
        </View>
    )

}

export default CalculatorApp;