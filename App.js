import React, { useCallback, useEffect, useMemo, useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import { Animated, StyleSheet, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { ContextProvider } from "./context";
import { ToastProvider } from "react-native-toast-notifications";
import registerNNPushToken, { getPushDataObject } from "native-notify";
// import pics from "./assets/presto.png";
import pics from "./images/presto.png";
import { StatusBar } from "expo-status-bar";
import * as Sentry from "sentry-expo";
import env from "./config";
// // general padding for all container is 20 pixels

SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

Sentry.init({
  dsn: env.SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production

  // To set a uniform sample rate
  tracesSampleRate: 0.1,
});

// Access any @sentry/react-native exports via:
// Sentry.Native.*

export default function App() {
  registerNNPushToken(2428, "XWwJ73vel8wZTUd9jHRdMz");
  console.log("env.SENTRY_DSN :>> ", env.SENTRY_DSN);
  return (
    <AnimatedAppLoader>
      <View style={{ flex: 1, bbackground: "white" }}>
        <NavigationContainer>
          <ToastProvider>
            <ContextProvider>
              <Provider store={store}>
                {/* <StatusBar style="auto" /> */}
                <AppNavigator />
              </Provider>
            </ContextProvider>
          </ToastProvider>
        </NavigationContainer>
      </View>
    </AnimatedAppLoader>
  );
}

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = useState(false);

  const startAsync = useCallback(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => Asset.fromURI(image).downloadAsync(),
    [image]
  );

  const onFinish = useCallback(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        // Instruct SplashScreen not to hide yet, we want to do this manually
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }) {
  const background = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(background, {
        toValue: 0,
        // duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "#0B365B",
              opacity: background,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              transform: [
                {
                  scale: background,
                },
              ],
            }}
            source={pics}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}





//login error undefined

// upload button on navbar
// n b


// btc transaction value in naira 
// showing toast twice 
// register