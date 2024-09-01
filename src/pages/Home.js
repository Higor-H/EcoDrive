import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Result from "./Result";

const Stack = createNativeStackNavigator();

export default function Home({ navigation }) {

    const [quilometragem, setQuilometragem] = useState("");
    const [listros, setLitros] = useState("");
    const [error, setError] = useState(false);

    const validateInputs = () => {
        if (!quilometragem || isNaN(quilometragem) || quilometragem <= 0 || 
            !listros || isNaN(listros) || listros <= 0) {
            setError(true);
        } else {
            setError(false);
            navigation.navigate("Result", { quilometragem: quilometragem, listros: listros });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>EcoDrive</Text>
            <Text style={styles.mainSubText}>Calcule a média de consumo de seu veículo.</Text>
            <StatusBar style="auto" />

            <View style={styles.container2}>
                <Text style={styles.inputText}>Informe a quilometragem (KM) percorrida pelo veículo</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setQuilometragem}
                    placeholder="Quilometragem percorrida pelo veículo"
                    value={quilometragem}
                />

                <Text style={styles.inputText}>Informe a quantidade de litros consumidos</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setLitros}
                    placeholder="Litros consumidos"
                    value={listros}
                />

                <TouchableOpacity style={styles.button} onPress={validateInputs}>
                    <Text style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>

                {error && <Text style={styles.errorText}> Preencha todos os campos com valores válidos.</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 0.7,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle:{
        color: "#4CAF50",
        fontSize: 60,
    },
    mainSubText:{
        fontSize:25,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        height: 55,
        fontSize: 20,
        padding: 12,
        borderRadius: 20,
        marginBottom: 15,
    },
    inputText:{
        marginTop:50,
        fontSize:30,
        textAlign: 'center',
    },
    border:{
        borderWidth:1,
        padding:20,
    },
    button:{
        padding:10,
        backgroundColor:"#4CAF50",
        borderRadius:10,
    },
    textButton:{
        fontSize: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 20,
        fontSize: 16,
    },
});