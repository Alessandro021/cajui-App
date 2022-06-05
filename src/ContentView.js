import React, { useState, useRef} from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import NavigationView from '../src/NavigationView'
import { back } from 'react-native/Libraries/Animated/Easing';

const styles = {
    container: {
        flex: 1,
    },
};

const HTML_SIZE_ADJUSTED = "<!DOCTYPE html>" +
"<html>" +
"<head>" +
"<meta name='viewport' content='width=640'/>" +
"<title>Viewport Test</title>" +
"</head>" +
"<body style=\"margin: 0px;\">" +
"<div style=\"width: 600px; height: 600px; border: 20px solid green; background-color: red;\"></div>" +
"</body>" +
"</html>";
const url = 'https://cajui.ifnmg.edu.br/cajui/login';
export default function ContentView(){
    const webViewRef = useRef();
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanForward] = useState(false);
    const handleBackPress = () => {
        webViewRef.current.goBack();
    }
    const handleForwardPress = () => {
        webViewRef.current.goForward();
    }
   return(
    <View style ={styles.container}>
        <WebView
            ref= {webViewRef}
            source={{ uri: url}}
            originWhitelist = {['*']}
            style={{ marginTop: 40}}
            onNavigationStateChange={state => {
                const voltar = state.canGoBack;
                const avancar = state.canGoForward;
                setCanGoBack(voltar);
                setCanForward(avancar)
            }}
        />
        <NavigationView 
            onBackPress = {handleBackPress}
            onForwardPress={handleForwardPress}
            canGoBack={canGoBack}
            canGoForward={canGoForward}
        />
    </View>
   )
};


