import React, { isValidElement, useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, Switch, TouchableWithoutFeedback, Keyboard } from "react-native";

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const UselessTextInput = () => {
    const [size, setSize] = useState(null);
    const [flooring_price, setFlooring_price] = useState(null);
    const [installation_cost, setInstallation_cost] = useState(null);
    const [dim, setDim]= useState('FT')
    const [isEnabled, setIsInabled] = useState(true)

    const toggleSwitch = () => {
        if (isEnabled){
            setDim('M')
        }
        else{
            setDim('FT')
        }
        setIsInabled(previousState => !previousState)
    }


    function PriceAlert (size, flooring_price, installation_cost)  {

        return(
            alert(`installation cost before tax: ${flooring_price * size}$\nflooring cost before tax: ${installation_cost * size}$\ntotal cost before tax: ${flooring_price * size + installation_cost * size}$\ntax: ${(flooring_price * size + installation_cost * size) * 0.13}$\ntotal cost = ${(flooring_price * size + installation_cost * size) * 1.13}$`)
        );

    }

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <Text>M - FT</Text>
                <Switch
                    trackColor={{false: 'grey', true: 'grey'}}
                    ios_backgroundColor='grey'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text>Size in {dim}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => setSize(val)}
                    placeholder="Size of a room"
                    keyboardType="numeric"
                />
                <Text>Price per unit</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => setFlooring_price(val)}
                    placeholder="Price per unit of flooring"
                    keyboardType="numeric"
                />
                <Text>Price of installation</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => setInstallation_cost(val)}
                    placeholder="Price per unit of flooring"
                    keyboardType="numeric"
                />
                <Button title='Calculate'
                        onPress={() => PriceAlert(size, flooring_price, installation_cost)}
                />
            </SafeAreaView>
        </DismissKeyboard>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default UselessTextInput;