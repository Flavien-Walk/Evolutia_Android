import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/LoginScreenStyles'; // Assurez-vous que le chemin correspond à votre projet

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Gestion de la connexion classique
  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.3.203:3636/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Connexion réussie', `Bienvenue ${data.user?.username || 'utilisateur'}!`);
        // Redirection vers la page d'accueil
      } else {
        Alert.alert('Erreur', data.error || 'Identifiants incorrects.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      Alert.alert('Erreur', 'Une erreur est survenue, veuillez réessayer.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Retour */}
      <Link to="/" style={styles.backArrow}>
        <Text style={styles.backText}>←</Text>
      </Link>

      {/* Logo */}
      <Image
        source={require('../assets/Logo noir Evolut\'IA.png')}
        style={styles.logo}
      />

      {/* Titre */}
      <Text style={styles.title}>Se connecter</Text>

      {/* Champ email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A29BFE"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Champ mot de passe */}
      <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="#A29BFE"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Bouton "Mot de passe oublié" */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      {/* Bouton Connexion classique */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      {/* Texte ou */}
      <Text style={styles.orText}>ou continuer avec</Text>

      {/* Boutons Google, Facebook et Apple */}
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Image
            source={require('../assets/google.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/apple.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/Facebook.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
