import "@rork/polyfills";
import { BundleInspector } from '@rork/inspector';
import { RorkSafeInsets } from '@rork/safe-insets';
import { RorkErrorBoundary } from '@rork/rork-error-boundary';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { Component, ErrorInfo, ReactNode, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Suppress non-critical warnings from dependencies
LogBox.ignoreLogs([
  'Deep imports from the react-native package are deprecated',
  'Require cycle:',
  'VirtualizedLists should never be nested',
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: componentWillMount has been renamed',
  'Non-serializable values were found in the navigation state',
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="terminos-y-condiciones" options={{ headerShown: false }} />
      <Stack.Screen name="politica-de-privacidad" options={{ headerShown: false }} />
      <Stack.Screen name="tratamiento-de-datos" options={{ headerShown: false }} />
      <Stack.Screen name="exencion-de-responsabilidad" options={{ headerShown: false }} />
    </Stack>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={errorStyles.container}>
          <Text style={errorStyles.title}>Algo salió mal</Text>
          <Text style={errorStyles.message}>
            {this.state.error?.message || 'Error desconocido'}
          </Text>
          <TouchableOpacity
            style={errorStyles.button}
            onPress={() => this.setState({ hasError: false, error: null })}
          >
            <Text style={errorStyles.buttonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

const errorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    padding: 20,
    backgroundColor: '#F9F8F7',
  },
  title: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: '#7A5844',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: '#5C5C5C',
    textAlign: 'center' as const,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#7A5844',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#FFFFFF',
  },
});

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
    
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      const metaTag = document.querySelector('meta[name="color-scheme"]');
      if (metaTag) {
        metaTag.setAttribute('content', 'light');
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'color-scheme';
        newMeta.content = 'light';
        document.head.appendChild(newMeta);
      }
    }
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BundleInspector><RorkSafeInsets><RorkErrorBoundary><RootLayoutNav /></RorkErrorBoundary></RorkSafeInsets></BundleInspector>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
