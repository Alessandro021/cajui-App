import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {

  const url = 'https://cajui.ifnmg.edu.br/cajui/login';
  return (
    <WebView
      source={{ uri: url}}
      style={{ marginTop: 40}}
    />
  );
}