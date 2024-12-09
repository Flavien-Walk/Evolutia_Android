import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page d'Inscription</Text>
      {/* Bouton pour revenir à la page principale */}
      <Link to="/" style={styles.button}>
        <Text style={styles.buttonText}>Retour</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D57FC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#6D57FC',
    fontWeight: 'bold',
  },
});

export default Register;


