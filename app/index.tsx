import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Linking,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import Colors from "@/constants/colors";

const logoRemoto = { uri: 'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/qzjsgpw4dyzfy7jm9qsl3' };

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";
const isMobile = width < 768;

export default function HomePage() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={["#FFE8E0", "#FFFDFB", "#E6F6F2"]}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <Header />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <QuienesSomosSection />
        <VisionMisionSection />
        <EcosistemaSection />
        <ImpactSection />
        <TransparencySection />
        <CompromisoSection />
        <Footer />
      </ScrollView>
    </LinearGradient>
  );
}

function Header() {
  return (
    <LinearGradient
      colors={["#A7E3D0", "#B8E6D5", "#F7A98A"]}
      locations={[0, 0.8, 1]}
      style={styles.header}
    >
      <View style={styles.headerContent}>
        <Image
          source={logoRemoto}
          style={styles.logoImage}
          resizeMode="contain"
          accessibilityLabel="Logo oficial Petem"
        />
      </View>
    </LinearGradient>
  );
}

function HeroSection() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.heroSection}>
      <Animated.View
        style={[
          styles.heroContent,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={styles.heroTitle}>
          Tecnología con corazón: conectamos personas, servicios y bienestar animal.
        </Text>
        
        <Text style={styles.heroDescription}>
          Creamos un ecosistema digital donde la empatía, la innovación y el amor por las mascotas se transforman en bienestar real.
        </Text>
        
        <TouchableOpacity
          style={styles.heroCTA}
          onPress={() => {
            Linking.openURL("https://petem.app");
          }}
        >
          <Text style={styles.heroCTAText}>Conoce nuestro propósito 🐾</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

function QuienesSomosSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Quiénes somos</Text>
      <Text style={styles.sectionText}>
        Somos <Text style={styles.bold}>Petem</Text>, una comunidad creada para quienes aman, cuidan y protegen a los animales. A través de la tecnología, conectamos guardianes, veterinarios, paseadores, tiendas, fundaciones y amantes de las mascotas en un entorno que impulsa el bienestar animal con propósito y trazabilidad.
      </Text>
      <Text style={styles.sectionText}>
        Petem nació del amor incondicional hacia las mascotas y la convicción de que podemos hacer del cuidado animal una experiencia más humana, conectada y responsable.
      </Text>
    </View>
  );
}

function VisionMisionSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Visión y Misión</Text>
      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Nuestra visión</Text>
        <Text style={styles.sectionText}>
          Convertirnos en la plataforma más confiable y humana de América Latina para el bienestar animal, donde cada acción deje una huella positiva y medible.
        </Text>
      </View>
      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Nuestra misión</Text>
        <Text style={styles.sectionText}>
          Facilitar la conexión entre personas, productos y servicios que promuevan el bienestar animal. Impulsamos la educación, la adopción responsable y la trazabilidad para que cada decisión dentro del ecosistema Petem genere impacto real y transparente.
        </Text>
      </View>
    </View>
  );
}

function EcosistemaSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Nuestro ecosistema</Text>
      <Text style={styles.sectionText}>
        En Petem, todo está conectado para crear valor y bienestar:
      </Text>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listText}>
            <Text style={styles.bold}>Marketplace de productos y servicios:</Text> ofrecemos artículos, alimentos y servicios verificados para el cuidado animal, donde cada compra contribuye al Fondo Huella Solidaria.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listText}>
            <Text style={styles.bold}>Placas QR inteligentes:</Text> conectan a cada mascota con su perfil digital, facilitando su reencuentro en caso de pérdida.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listText}>
            <Text style={styles.bold}>Perfil integral de mascotas:</Text> centraliza información médica, vacunas, hábitos y cuidados.
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listBullet}>•</Text>
          <Text style={styles.listText}>
            <Text style={styles.bold}>Fundaciones y hogares aliados:</Text> reciben apoyo directo y verificable gracias a nuestros aportes solidarios.
          </Text>
        </View>
      </View>
      <Text style={styles.sectionText}>
        Cada componente del ecosistema Petem trabaja en armonía bajo un mismo propósito: <Text style={styles.bold}>crear bienestar sostenible y medible.</Text>
      </Text>
    </View>
  );
}

function ImpactSection() {
  const [impactAmount, setImpactAmount] = useState<number>(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const haloAnim = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    const targetAmount = 1000000;
    const duration = 2000;
    const steps = 60;
    const increment = targetAmount / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setImpactAmount(Math.floor(increment * currentStep));
      } else {
        setImpactAmount(targetAmount);
        clearInterval(timer);
        
        Animated.loop(
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 1.06,
              duration: 1500,
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 1,
              duration: 1500,
              useNativeDriver: true,
            }),
          ])
        ).start();
      }
    }, duration / steps);

    Animated.loop(
      Animated.sequence([
        Animated.timing(haloAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(haloAnim, {
          toValue: 0.6,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => clearInterval(timer);
  }, [fadeAnim, pulseAnim, haloAnim]);

  const handleViewFoundations = () => {
    Linking.openURL("https://petem.app");
  };

  return (
    <View style={styles.impactSection}>
      <Animated.View style={[styles.impactContainer, { opacity: fadeAnim }]}>
        <Text style={styles.impactTitle}>Impacto Petem acumulado</Text>
        <Text style={styles.impactSubtitle}>
          Petem realiza un aporte mensual compuesto por una <Text style={styles.bold}>semilla base de $1.000.000 COP</Text> más un <Text style={styles.bold}>porcentaje sobre las ventas</Text> del marketplace y los servicios de la aplicación.{"\n"}Cada cierre mensual se suma a este contador histórico, que refleja el compromiso constante de Petem con el cuidado y bienestar de las mascotas y sus propietarios.
        </Text>
        
        <View style={styles.counterContainer}>
          <Animated.View 
            style={[
              styles.haloEffect,
              {
                opacity: haloAnim,
                transform: [{
                  scale: haloAnim.interpolate({
                    inputRange: [0.6, 1],
                    outputRange: [1, 1.1],
                  })
                }]
              }
            ]} 
          />
          <Animated.View style={[
            styles.amountContainer,
            { transform: [{ scale: pulseAnim }] }
          ]}>
            <Text style={styles.currencySymbol}>$</Text>
            <Text style={styles.impactAmount}>
              {impactAmount.toLocaleString('es-CO')}
            </Text>
            <Text style={styles.currencyCode}> COP</Text>
          </Animated.View>
        </View>
        
        <View style={styles.detailAporte}>
          <Text style={styles.detailAporteText}>
            🌱 Aporte mensual fijo: <Text style={styles.bold}>$1.000.000 COP</Text> + porcentaje sobre las ventas del mes.
          </Text>
        </View>
        
        <Text style={styles.impactUpdate}>
          Última actualización: Octubre 2025
        </Text>
        
        <TouchableOpacity style={styles.foundationsButton} onPress={handleViewFoundations}>
          <Text style={styles.foundationsButtonText}>Ver fundaciones beneficiadas 🐾</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

function TransparencySection() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.transparencySection}>
      <Animated.View style={[styles.transparencyContainer, { opacity: fadeAnim }]}>
        <Text style={styles.sectionTitle}>Transparencia y trazabilidad</Text>
        
        <Text style={styles.transparencyText}>
          En <Text style={styles.bold}>Petem</Text> creemos que la confianza se construye con hechos. El <Text style={styles.bold}>Fondo Huella Solidaria</Text> es una iniciativa 100% interna, financiada exclusivamente con los recursos derivados de nuestras utilidades comerciales.
        </Text>
        <Text style={styles.transparencyText}>
          No recibimos ni gestionamos donaciones de terceros. Cada aporte se canaliza directamente a fundaciones y hogares registrados, bajo seguimiento y evidencia verificable.
        </Text>
        <Text style={styles.transparencyText}>
          Nuestro compromiso es que cada cifra visible en Petem represente un <Text style={styles.bold}>acto de impacto tangible, medible y auditable.</Text>
        </Text>
        
        <View style={styles.transparencyNote}>
          <Text style={styles.transparencyNoteTitle}>Nota aclaratoria</Text>
          <Text style={styles.transparencyNoteText}>
            Petem <Text style={styles.bold}>no recibe, solicita ni administra donaciones externas</Text> bajo ninguna modalidad. La <Text style={styles.bold}>Huella Solidaria Petem</Text> se financia exclusivamente con recursos propios provenientes de las operaciones del marketplace y otros servicios de la plataforma.
          </Text>
          <Text style={styles.transparencyNoteText}>
            Cada entrega es ejecutada directamente por Petem sin intermediarios, garantizando transparencia, trazabilidad y cumplimiento normativo.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}

function CompromisoSection() {
  const handleUnete = () => {
    Linking.openURL("https://petem.app");
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Nuestro compromiso</Text>
      
      <Text style={styles.sectionText}>
        Más que una plataforma, somos una familia digital al servicio del bienestar animal. Trabajamos cada día para fortalecer el vínculo entre humanos y mascotas, promover la educación responsable y apoyar causas que dejen huella.
      </Text>
      
      <View style={styles.blockquoteContainer}>
        <Text style={styles.blockquoteText}>
          En Petem, creemos que cada clic puede transformar una vida.{"\n"}Por eso, transformamos nuestras acciones en impacto real.
        </Text>
      </View>
      
      <TouchableOpacity style={styles.compromisoButton} onPress={handleUnete}>
        <Text style={styles.compromisoButtonText}>Únete al movimiento Petem ❤️</Text>
      </TouchableOpacity>
    </View>
  );
}

function Footer() {
  const handleLegalLink = (page: string) => {
    router.push(`/${page}` as any);
  };

  const handleSocial = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <View style={styles.footerInstitutional}>
          <Text style={styles.footerInstitutionalText}>
            Petem – Establecimiento de comercio registrado a nombre de Daniel Grillo Londoño.
          </Text>
          <Text style={styles.footerInstitutionalText}>
            Cámara de Comercio de Bogotá – Colombia.
          </Text>
          <Text style={styles.footerInstitutionalText}>
            www.petem.co | info@petem.co
          </Text>
        </View>
        
        <View style={styles.footerContacts}>
          <Text style={styles.footerContactTitle}>Contacto institucional:</Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:contacto@petem.co')}>
            <Text style={styles.footerContactEmail}>contacto@petem.co</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:ceo@petem.co')}>
            <Text style={styles.footerContactEmail}>ceo@petem.co</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:privacidad@petem.co')}>
            <Text style={styles.footerContactEmail}>privacidad@petem.co</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footerSocials}>
          <TouchableOpacity onPress={() => handleSocial("https://instagram.com/petem.app")}>
            <Text style={styles.footerSocialIcon}>📷</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocial("https://facebook.com/petem.app")}>
            <Text style={styles.footerSocialIcon}>📘</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocial("https://tiktok.com/@petem.app")}>
            <Text style={styles.footerSocialIcon}>🎵</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => handleLegalLink("terminos-y-condiciones")}>
            <Text style={styles.footerLink}>Términos y Condiciones</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLegalLink("politica-de-privacidad")}>
            <Text style={styles.footerLink}>Política de Privacidad</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLegalLink("tratamiento-de-datos")}>
            <Text style={styles.footerLink}>Tratamiento de Datos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLegalLink("exencion-de-responsabilidad")}>
            <Text style={styles.footerLink}>Exención de Responsabilidad</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.footerVersion}>
          Petem Web v1.2.5 – Institucional Informativa (sin funciones operativas)
        </Text>
        
        <Text style={styles.footerCopyright}>
          © 2025 Petem. Todos los derechos reservados.{"\n"}Tecnología con propósito y corazón.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorScheme: {
    colorScheme: "light" as const,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    minHeight: isMobile ? 180 : 220,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    paddingVertical: 24,
  },
  headerContent: {
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  logoImage: {
    width: 160,
    height: 160,
    alignSelf: "center" as const,
    marginTop: 10,
    marginBottom: 10,
  },


  heroSection: {
    paddingVertical: 60,
    paddingHorizontal: isMobile ? 24 : 60,
    alignItems: "center" as const,
  },
  heroContent: {
    alignItems: "center" as const,
    maxWidth: 700,
  },
  heroTitle: {
    fontSize: isMobile ? 18 : 20,
    fontWeight: "600" as const,
    color: "#4A2C18",
    textAlign: "center" as const,
    marginBottom: 16,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  heroSubtitle: {
    fontSize: isMobile ? 15 : 16,
    fontWeight: "400" as const,
    color: "#5F5A58",
    textAlign: "center" as const,
    marginBottom: 16,
    fontFamily: isWeb ? "Poppins, Nunito Sans, sans-serif" : undefined,
  },
  heroDescription: {
    fontSize: isMobile ? 15 : 16,
    fontWeight: "400" as const,
    color: "#5F5A58",
    textAlign: "center" as const,
    marginBottom: 32,
    lineHeight: 24,
    fontFamily: isWeb ? "Poppins, Nunito Sans, sans-serif" : undefined,
  },
  heroCTA: {
    backgroundColor: "#12B79B",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  heroCTAText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.brand.white,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  section: {
    paddingVertical: 50,
    paddingHorizontal: isMobile ? 24 : 60,
    maxWidth: 1000,
    alignSelf: "center" as const,
    width: "100%",
  },
  sectionTitle: {
    fontSize: isMobile ? 24 : 28,
    fontWeight: "700" as const,
    color: "#4A2C18",
    marginBottom: 16,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  sectionText: {
    fontSize: isMobile ? 15 : 16,
    fontWeight: "400" as const,
    color: "#5F5A58",
    lineHeight: 24,
    marginBottom: 15,
    fontFamily: isWeb ? "Poppins, Nunito Sans, sans-serif" : undefined,
  },
  subsection: {
    marginBottom: 20,
  },
  subsectionTitle: {
    fontSize: isMobile ? 18 : 20,
    fontWeight: "600" as const,
    color: "#4A2C18",
    marginBottom: 10,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  listContainer: {
    marginVertical: 16,
  },
  listItem: {
    flexDirection: "row" as const,
    marginBottom: 12,
  },
  listBullet: {
    fontSize: 16,
    color: "#5F5A58",
    marginRight: 8,
    marginTop: 3,
  },
  listText: {
    flex: 1,
    fontSize: isMobile ? 15 : 16,
    fontWeight: "400" as const,
    color: "#5F5A58",
    lineHeight: 24,
    fontFamily: isWeb ? "Poppins, Nunito Sans, sans-serif" : undefined,
  },
  bold: {
    fontWeight: "700" as const,
  },
  blockquoteContainer: {
    backgroundColor: "#F5F2EF",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderLeftWidth: 4,
    borderLeftColor: "#12B79B",
    marginVertical: 24,
    borderRadius: 8,
  },
  blockquoteText: {
    fontSize: isMobile ? 15 : 16,
    fontWeight: "400" as const,
    color: "#5F5A58",
    lineHeight: 24,
    fontStyle: "italic" as const,
    fontFamily: isWeb ? "Poppins, Nunito Sans, sans-serif" : undefined,
  },

  impactSection: {
    paddingVertical: 60,
    paddingHorizontal: isMobile ? 24 : 60,
    alignItems: "center" as const,
  },
  impactContainer: {
    backgroundColor: "#FFFDF8",
    padding: isMobile ? 35 : 60,
    borderRadius: 20,
    alignItems: "center" as const,
    width: "100%",
    maxWidth: 700,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
  },
  impactTitle: {
    fontSize: isMobile ? 24 : 30,
    fontWeight: "700" as const,
    color: "#4A2C18",
    marginBottom: 20,
    textAlign: "center" as const,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  impactSubtitle: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: "400" as const,
    color: "#5F5A58",
    marginBottom: 25,
    textAlign: "center" as const,
    lineHeight: 24,
    fontFamily: isWeb ? "Poppins, Nunito Sans, sans-serif" : undefined,
  },
  counterContainer: {
    position: "relative" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    marginVertical: 30,
    minHeight: 120,
  },
  haloEffect: {
    position: "absolute" as const,
    top: -30,
    left: -30,
    right: -30,
    bottom: -30,
    borderRadius: 999,
    backgroundColor: "rgba(255, 212, 0, 0.35)",
    ...(isWeb ? { backdropFilter: "blur(25px)", WebkitBackdropFilter: "blur(25px)" } : {}),
  },
  amountContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    position: "relative" as const,
    zIndex: 1,
  },
  currencySymbol: {
    fontSize: isMobile ? 48 : 64,
    fontWeight: "800" as const,
    color: "#FFD400",
    textShadowColor: "rgba(255, 212, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  impactAmount: {
    fontSize: isMobile ? 48 : 64,
    fontWeight: "800" as const,
    color: "#FFD400",
    textShadowColor: "rgba(255, 212, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  currencyCode: {
    fontSize: isMobile ? 24 : 32,
    fontWeight: "800" as const,
    color: "#FFD400",
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  detailAporte: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  detailAporteText: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: "400" as const,
    color: "#5F5A58",
    textAlign: "center" as const,
    fontFamily: isWeb ? "Poppins, Nunito Sans, sans-serif" : undefined,
  },
  impactUpdate: {
    fontSize: isMobile ? 12 : 14,
    fontWeight: "400" as const,
    color: "#777",
    marginTop: 15,
    marginBottom: 25,
    textAlign: "center" as const,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  foundationsButton: {
    backgroundColor: "#12B79B",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  foundationsButtonText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.brand.white,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },

  transparencySection: {
    paddingVertical: 48,
    paddingHorizontal: isMobile ? 24 : 60,
    alignItems: "center" as const,
  },
  transparencyContainer: {
    backgroundColor: "#EDE1D2",
    padding: 40,
    borderRadius: 20,
    width: "100%",
    maxWidth: 800,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  transparencyText: {
    fontSize: isMobile ? 15 : 16,
    fontWeight: "400" as const,
    color: "#5C5C5C",
    lineHeight: 24,
    marginBottom: 16,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  transparencyNote: {
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "#C8C0B3",
  },
  transparencyNoteTitle: {
    fontSize: isMobile ? 16 : 17,
    fontWeight: "600" as const,
    color: "#4A2C18",
    marginBottom: 12,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  transparencyNoteText: {
    fontSize: isMobile ? 14 : 15,
    fontWeight: "400" as const,
    color: "#5C5C5C",
    lineHeight: 22,
    marginBottom: 12,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  compromisoButton: {
    backgroundColor: "#12B79B",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 16,
    alignSelf: "center" as const,
  },
  compromisoButtonText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.brand.white,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  footer: {
    backgroundColor: "#FFF8F6",
    paddingVertical: 40,
    paddingHorizontal: isMobile ? 20 : 60,
  },
  footerContent: {
    maxWidth: 1200,
    alignItems: "center" as const,
    width: "100%",
    alignSelf: isWeb && !isMobile ? ("center" as const) : ("auto" as const),
  },
  footerInstitutional: {
    alignItems: "center" as const,
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(74, 44, 24, 0.2)",
    width: "100%",
  },
  footerInstitutionalText: {
    fontSize: isMobile ? 13 : 14,
    fontWeight: "500" as const,
    color: "#4A2C18",
    textAlign: "center" as const,
    marginBottom: 6,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  footerContacts: {
    alignItems: "center" as const,
    marginBottom: 32,
  },
  footerContactTitle: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: "#5F5A58",
    marginBottom: 12,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  footerContactEmail: {
    fontSize: 13,
    color: "#12B79B",
    marginBottom: 6,
    textDecorationLine: "underline" as const,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  footerSocials: {
    flexDirection: "row" as const,
    gap: 24,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    marginBottom: 32,
  },
  footerSocialIcon: {
    fontSize: 32,
  },
  footerLinks: {
    flexDirection: isMobile ? ("column" as const) : ("row" as const),
    gap: isMobile ? 16 : 32,
    alignItems: "center" as const,
    marginBottom: 32,
  },
  footerLink: {
    fontSize: 13,
    color: "#5F5A58",
    textDecorationLine: "underline" as const,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  footerVersion: {
    fontSize: 14,
    color: "#5F5A58",
    textAlign: "center" as const,
    marginTop: 24,
    marginBottom: 12,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },
  footerCopyright: {
    fontSize: 14,
    color: "#5F5A58",
    textAlign: "center" as const,
    fontFamily: isWeb ? "Poppins, Roboto, sans-serif" : undefined,
  },

});
