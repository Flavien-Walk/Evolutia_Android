import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import styles from '../styles/MainApp';

const MainApp: React.FC = () => {
  const navigateTo = (route: string) => {
    console.log(`Navigation vers ${route}`); // Remplacer par un gestionnaire de navigation (React Navigation, etc.)
  };

  return (
    <>
      {/* StatusBar configurée pour être translucide */}
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

      {/* Fond violet couvrant toute la page */}
      <View style={styles.background}>
        <View style={styles.container}>
          {/* Logo */}
          <Image
            source={require('../assets/Logo Blanc Evolut\'IA.png')}
            style={styles.logo}
          />

          {/* Conteneur englobant */}
          <View style={styles.card}>
            {/* Texte de bienvenue */}
            <Text style={styles.title}>
              Bienvenue dans <Text style={styles.highlight}>Évolut'IA</Text> !
            </Text>

            {/* Sous-titre */}
            <Text style={styles.subtitle}>
              Nous sommes ravis de vous voir rejoindre notre plateforme
              d'apprentissage personnalisée. Profitez d'un parcours éducatif
              adapté à vos besoins, où chaque étape est pensée pour vous faire
              progresser à votre rythme.
            </Text>

            {/* Question */}
            <Text style={styles.question}>Prêt(e) à commencer ?</Text>

            {/* Bouton S'inscrire */}
            <View style={styles.linkWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigateTo('register')}>
                <Text style={styles.buttonText}>S'inscrire</Text>
              </TouchableOpacity>
            </View>

            {/* Texte "ou" */}
            <Text style={styles.orText}>ou</Text>

            {/* Bouton Connexion */}
            <View style={styles.linkWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigateTo('login')}>
                <Text style={styles.buttonText}>Connexion</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MainApp;
