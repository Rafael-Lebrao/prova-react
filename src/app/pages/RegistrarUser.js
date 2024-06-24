import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';

import MyInput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import Password from '../components/password';
import { DatabaseConnection } from '../../database/database_connection';

const db = DatabaseConnection.getConnection();

const RegisterUser = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [userSenha, setUserSenha] = useState('');

  let register_user = () => {
    console.log(userName,userSenha);

    if (!userName) {
      alert('Por favor preencha o nome !');
      return;
    }
    if (!userSenha) {
      alert('Por favor preencha a senha !');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_senha) VALUES (?,?)',
        [userName, userSenha],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário Registrado com Sucesso !!!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro ao tentar Registrar o Usuário !!!');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <MyInput
                placeholder="Entre com o Nome"
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{ padding: 10 }}
              />
              <MyInput
                placeholder="Entre com uma senha"
                onChangeText={
                  (userSenha) => setUserName(Password)
                }
                style={{ padding: 10 }}
              />
    
              <Mybutton title="Gerar Senha" onPress={Password}/>
              <Mybutton title="Salvar" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;