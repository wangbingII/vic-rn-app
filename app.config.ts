import { ExpoConfig, ConfigContext } from "expo/config";
import * as dotenv from "dotenv";

dotenv.config({
  path: process.env.APP_ENV ? `.${process.env.APP_ENV}` : "" + `.env`,
});

export default ({ config }: ConfigContext): ExpoConfig => {
  // console.log("process.env.APP_MODE", process.env.APP_MODE);
  return {
    ...config,
    name: "vic-rn-app",
    slug: "vic-rn-app",
    extra: {
      eas: {
        projectId: "bd991b05-8694-40ff-a2ab-cc52b1ee6193",
      },
    },
    owner: "vicwang",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  };
};
