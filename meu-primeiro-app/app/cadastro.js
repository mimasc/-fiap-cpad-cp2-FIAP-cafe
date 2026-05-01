import React, { useContext, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Link } from 'expo-router';

import { AuthContext } from '../contexts/AuthContext';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import { validateRegister } from '../utils/validation';

export default function Cadastro() {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  function updateField(field, value) {
    setForm(previous => ({ ...previous, [field]: value }));
    setErrors(previous => ({ ...previous, [field]: '' }));
    setServerError('');
  }

  async function handleRegister() {
    const validationErrors = validateRegister(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      await register(form);
    } catch (error) {
      setServerError(error.message);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/logoFiap.png')} style={styles.logo} />

        <View style={styles.card}>
          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.subtitle}>Cadastre-se para pedir sem fila.</Text>

          <FormInput
            label="Nome completo"
            value={form.name}
            onChangeText={value => updateField('name', value)}
            error={errors.name}
            autoCapitalize="words"
          />

          <FormInput
            label="E-mail"
            value={form.email}
            onChangeText={value => updateField('email', value)}
            error={errors.email}
            keyboardType="email-address"
          />

          <FormInput
            label="Senha"
            value={form.password}
            onChangeText={value => updateField('password', value)}
            error={errors.password}
            secureTextEntry
          />

          <FormInput
            label="Confirmar senha"
            value={form.confirmPassword}
            onChangeText={value => updateField('confirmPassword', value)}
            error={errors.confirmPassword}
            secureTextEntry
          />

          {!!serverError && <Text style={styles.error}>{serverError}</Text>}

          <PrimaryButton title="Cadastrar" onPress={handleRegister} />

          <Link href="/login" style={styles.link}>
            Já tenho conta
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2b2a2a',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    height: 130,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#3a3a3a',
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: '#ff2d6f',
  },
  title: {
    color: '#ff2d6f',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#cfcfcf',
    marginBottom: 22,
    marginTop: 6,
  },
  error: {
    color: '#ff4d4d',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  link: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
