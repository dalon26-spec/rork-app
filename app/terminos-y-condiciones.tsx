import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";
const isMobile = width < 768;

export default function TerminosYCondicionesPage() {
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
        <Text style={styles.title}>Términos y Condiciones de Uso</Text>
        
        <Text style={styles.paragraph}>
          Este documento establece los Términos y Condiciones de Uso de la aplicación móvil y sitio web Petem.
        </Text>
        
        <Text style={styles.paragraph}>
          Al registrarse o utilizar los servicios de Petem, el usuario declara conocer y aceptar íntegramente los presentes términos.
        </Text>
        
        <Text style={styles.paragraph}>
          Petem actúa como plataforma de intermediación tecnológica entre usuarios y proveedores de productos o servicios relacionados con el cuidado y bienestar animal.
        </Text>
        
        <Text style={styles.paragraph}>
          Petem no presta directamente servicios veterinarios, de paseo, guardería ni comercializa productos de terceros; su función es conectar a las partes.
        </Text>
        
        <Text style={styles.paragraph}>
          Petem no será responsable por daños, pérdidas o reclamaciones derivadas de la prestación de servicios o venta de productos por parte de terceros.
        </Text>
        
        <Text style={styles.paragraph}>
          El uso de la aplicación implica la aceptación de todas las políticas complementarias publicadas en el sitio web petem.co.
        </Text>
        
        <Text style={styles.paragraph}>
          Ley aplicable: República de Colombia.
        </Text>
        
        <Text style={styles.paragraph}>
          Jurisdicción: Jueces y tribunales de Bogotá, D.C.
        </Text>
        
        <Text style={styles.contactTitle}>Contacto</Text>
        <Text style={styles.contactText}>
          Para consultas sobre estos términos:{"\n"}
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: Colors.brand.text,
    marginTop: 24,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#3D3D3D",
    marginBottom: 30,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.brand.darkGray,
    marginLeft: 16,
    marginBottom: 8,
  },
  disclaimerBox: {
    backgroundColor: Colors.brand.sand,
    padding: 24,
    borderRadius: 12,
    marginVertical: 32,
    borderWidth: 2,
    borderColor: Colors.brand.green,
  },
  disclaimerText: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.brand.text,
    textAlign: "center" as const,
    fontWeight: "500" as const,
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
    color: Colors.brand.darkGray,
    marginBottom: 40,
  },
});
