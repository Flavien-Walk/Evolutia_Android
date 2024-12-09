import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';
import styles from '../styles/MainApp';
import { Alert } from 'react-native';


// Import des composants Login et Register
import Login from '../components/Login';
import Register from '../components/Register';

const HomeScreen: React.FC = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.background}>
        {/* Bouton en haut à droite */}
        <TouchableOpacity
  style={styles.topRightButton}
  onPress={() => Alert.alert('Bouton cliqué !')}
>
  <Text style={styles.topRightButtonText}>Menu</Text>
</TouchableOpacity>


        <View style={styles.container}>
          <Image
            source={require('../assets/Logo Blanc Evolut\'IA.png')}
            style={styles.logo}
          />
          <View style={styles.card}>
            <Text style={styles.title}>
              Bienvenue dans <Text style={styles.highlight}>Évolut'IA</Text> !
            </Text>
            <Text style={styles.subtitle}>
              Nous sommes ravis de vous voir rejoindre notre plateforme.
            </Text>
            <Text style={styles.question}>Prêt(e) à commencer ?</Text>
            <View style={styles.linkWrapper}>
              <Link to="/register" style={styles.button}>
                <Text style={styles.buttonText}>S'inscrire</Text>
              </Link>
            </View>
            <Text style={styles.orText}>ou</Text>
            <View style={styles.linkWrapper}>
              <Link to="/login" style={styles.button}>
                <Text style={styles.buttonText}>Connexion</Text>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const MainApp: React.FC = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </NativeRouter>
  );
};

export default MainApp;
