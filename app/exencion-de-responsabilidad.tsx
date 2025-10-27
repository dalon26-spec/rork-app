import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";
const isMobile = width < 768;

export default function ExencionDeResponsabilidadPage() {
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FFFD" }}>
      <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ChevronLeft size={24} color={Colors.brand.brown} />
          <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.version}>Versión 1.0.0 — Octubre 2025 — Bogotá, Colombia</Text>
        <Text style={styles.title}>Exoneración de Responsabilidad</Text>
        
        <Text style={styles.paragraph}>
          Petem actúa únicamente como intermediario tecnológico entre usuarios y prestadores de servicios o productos.
        </Text>
        
        <Text style={styles.paragraph}>
          Petem no asume responsabilidad alguna por daños, accidentes, pérdidas, deficiencias o incumplimientos derivados de las relaciones entre usuarios y terceros.
        </Text>
        
        <Text style={styles.paragraph}>
          La información publicada en la aplicación o el sitio web tiene carácter informativo y no constituye asesoramiento médico, veterinario o legal.
        </Text>
        
        <Text style={styles.paragraph}>
          El uso de la plataforma implica aceptación de esta exoneración y de los términos y condiciones generales.
        </Text>
        
        <Text style={styles.contactTitle}>Contacto</Text>
        <Text style={styles.contactText}>
          Para consultas legales:{"\n"}
          📧 legal@petem.co
        </Text>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FFFD",
  },
  header: {
    paddingHorizontal: isMobile ? 20 : 60,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.brand.lightGray,
    backgroundColor: "#F8FFFD",
  },
  backButton: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 8,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.brand.brown,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: isMobile ? 20 : 60,
    paddingVertical: 40,
    maxWidth: 900,
    width: "100%",
    alignSelf: isWeb && !isMobile ? ("center" as const) : ("auto" as const),
  },
  version: {
    fontSize: 14,
    color: "#3D3D3D",
    marginBottom: 24,
    textAlign: "center" as const,
  },
  title: {
    fontSize: isMobile ? 32 : 42,
    fontWeight: "700" as const,
    color: Colors.brand.brown,
    marginBottom: 32,
    textAlign: "center" as const,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#3D3D3D",
    marginBottom: 30,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: Colors.brand.brown,
    marginTop: 24,
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#3D3D3D",
    marginBottom: 40,
  },
});
