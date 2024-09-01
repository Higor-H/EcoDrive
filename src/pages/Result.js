import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Result({ route, navigation }) {

  const { quilometragem, listros } = route.params;


  const resultado = quilometragem / listros;
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    if(resultado > 12){
      setCategoria("A");
    } else if (resultado <= 12 && resultado > 10){
      setCategoria("B");
    } else if (resultado <= 10 && resultado > 8){
      setCategoria("C");
    } else if (resultado <= 8 && resultado > 4){
      setCategoria("D");
    } else {
      setCategoria("E");
    }
  }, [resultado]); 


  return (
    <View style={styles.border}>
      <Text style={styles.textTable}>Consumo: {resultado.toFixed(2)} Km/L</Text>
      <Text style={styles.textTable} >Seu veículo é da categoria: {categoria}</Text>


      <Text  style={styles.textTableFixSpacer} >Indicação de Consumo de Veículos</Text>
      <Text style={styles.textTableFix}><Text>A </Text>Mais de 12 Km/l</Text>
      <Text style={styles.textTableFix}><Text>B </Text>Até 12 Km/l</Text>
      <Text style={styles.textTableFix}><Text>C </Text>Até 10 Km/l</Text>
      <Text style={styles.textTableFix}><Text>D </Text>Até 8 Km/l</Text>
      <Text style={styles.textTableFix}><Text>E </Text>Até 4 Km/l</Text>
    </View>
  );
}


const styles = StyleSheet.create({
   
    border:{
      borderWidth:1,
      padding:20,
    },
    textTable:{
      fontSize:30
    },
    textTableFix:{
      fontSize:25
    },
    textTableFixSpacer:{
      fontSize:25,
      marginTop:50
    }
  });