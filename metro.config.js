// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const metroConfig = getDefaultConfig(__dirname);

// 删除生产中console日志
metroConfig.transformer.minifierConfig.compress.drop_console = true;

module.exports = metroConfig;
