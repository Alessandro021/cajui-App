import React from 'react';
import { WebView } from 'react-native-webview';
import { View, TouchableOpacity, Text } from 'react-native';

const styles = {
    hide: { display: 'none'},
    container: {
        height: 50,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    button: {

    },
    buttonTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight:'800',
    },

}

const NavigationView = ({onBackPress, onForwardPress, canGoBack, canGoForward}) => (

    <View style= {([styles.container, !canGoBack && !canGoForward && styles.hide])}>
        {canGoBack && (<TouchableOpacity style={styles.button} onPress={onBackPress}>
            <Text style={styles.buttonTitle}>Voltar</Text>
        </TouchableOpacity>)}
        
        {canGoForward && (<TouchableOpacity style={styles.button} onPress={onForwardPress}>
        <Text style={styles.buttonTitle}>Avançar</Text>
        </TouchableOpacity>)}
    </View>

);

export default NavigationView;