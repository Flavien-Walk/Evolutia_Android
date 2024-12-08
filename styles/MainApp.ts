import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: "#6D57FC", // Couleur de fond violet
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Centrage vertical et horizontal
  },
  logo: {
    width: 160, // Largeur du logo
    height: 130, // Hauteur du logo
    marginBottom: 20, // Marge inférieure pour l'espacement
    marginTop: 100, // Marge supérieure pour positionner le logo
  },
  card: {
    backgroundColor: "#FFFFFF", // Couleur de fond blanche pour la carte
    borderRadius: 20, // Bords arrondis
    width: "90%", // Largeur relative à l'écran
    paddingVertical: 65, // Espacement vertical interne
    paddingHorizontal: 20, // Espacement horizontal interne
    alignItems: "center", // Alignement centré
    shadowColor: "#000", // Ombre noire
    shadowOpacity: 0.1, // Opacité de l'ombre
    shadowRadius: 10, // Rayon de l'ombre
    shadowOffset: { width: 0, height: 5 }, // Positionnement de l'ombre
    elevation: 5, // Élévation (pour Android)
  },
  title: {
    fontSize: 24, // Taille de la police
    fontWeight: "bold", // Texte en gras
    color: "#000", // Couleur noire
    textAlign: "center", // Alignement centré
    marginBottom: 15, // Marge inférieure
  },
  highlight: {
    color: "#5c34e7", // Couleur spéciale pour le texte en évidence
  },
  subtitle: {
    fontSize: 16, // Taille de la police
    color: "#333", // Couleur grise foncée
    textAlign: "left", // Alignement à gauche
    marginBottom: 30, // Marge inférieure
    lineHeight: 22, // Hauteur de ligne
  },
  question: {
    fontSize: 18, // Taille de la police
    fontWeight: "300", // Poids léger
    color: "#000", // Couleur noire
    textAlign: "center", // Alignement centré
    marginBottom: 30, // Marge inférieure
  },
  linkWrapper: {
    width: "80%", // Largeur relative à l'écran
    alignItems: "center", // Alignement centré
    marginBottom: 15, // Marge inférieure
  },
  button: {
    backgroundColor: "#5c34e7", // Couleur de fond violette
    paddingVertical: 12, // Espacement vertical interne
    borderRadius: 10, // Bords arrondis
    alignItems: "center", // Alignement centré
    width: "100%", // Largeur totale du bouton
    shadowColor: "#000", // Ombre noire
    shadowOpacity: 0.1, // Opacité de l'ombre
    shadowRadius: 5, // Rayon de l'ombre
    shadowOffset: { width: 0, height: 2 }, // Positionnement de l'ombre
    elevation: 3, // Élévation (pour Android)
  },
  buttonText: {
    color: "#fff", // Texte blanc
    fontWeight: "bold", // Texte en gras
    fontSize: 16, // Taille de la police
  },
  orText: {
    fontSize: 14, // Taille de la police
    color: "#666", // Couleur grise
    marginBottom: 15, // Marge inférieure
    textAlign: "center", // Alignement centré
  },
});

export default styles;
