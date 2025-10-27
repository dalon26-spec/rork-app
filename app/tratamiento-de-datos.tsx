import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";
const isMobile = width < 768;

export default function TratamientoDeDatosPage() {
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
        <Text style={styles.title}>Tratamiento de Datos Personales</Text>
        
        <Text style={styles.paragraph}>
          Petem, en su calidad de responsable del tratamiento de datos personales, informa que los datos recolectados serán utilizados para fines legítimos relacionados con la operación y mejora de los servicios ofrecidos a través de su plataforma digital.
        </Text>
        
        <Text style={styles.paragraph}>
          Finalidades principales: gestión de usuarios, contacto, envío de notificaciones, vinculación de servicios y personalización de la experiencia.
        </Text>
        
        <Text style={styles.paragraph}>
          Derechos del titular: conocer, actualizar, rectificar o suprimir información; solicitar prueba de la autorización otorgada; ser informado sobre el uso de sus datos.
        </Text>
        
        <Text style={styles.paragraph}>
          Medio de contacto: privacidad@petem.co
        </Text>
        
        <Text style={styles.paragraph}>
          El tratamiento de datos se realiza bajo estrictas medidas de seguridad, garantizando confidencialidad, integridad y disponibilidad de la información.
        </Text>
        
        <Text style={styles.contactTitle}>Contacto</Text>
        <Text style={styles.contactText}>
          Para consultas sobre tratamiento de datos personales:{"\n"}
          📧 privacidad@petem.co
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
