import { registerRootComponent } from "expo";
import TrackPlayer from "react-native-track-player";
import App from "./App";
import "./service";

registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => require("./service"));
