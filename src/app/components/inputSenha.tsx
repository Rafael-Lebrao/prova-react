// InputSenha.tsx
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputSenhaProps {
    value?: string;
    onChangeText?: (text: string) => void;
}

export function InputSenha({ value, onChangeText }: InputSenhaProps) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira uma Senha"
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity style={styles.icon} onPress={toggleSecureEntry}>
                    <Ionicons name={secureTextEntry ? "eye" : "eye-off"} color="#333" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        width: '80%'
    },
    input: {
        flex: 1,
        height: 40,
    },
    icon: {
        padding: 10,
    },
});

export default InputSenha;
