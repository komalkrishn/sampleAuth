import React, {useState} from 'react';
import { StyleSheet, Text,Image, View, ImageBackground, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/goGreenLogo.png';
import Facebook from '../../../assets/fb.png';
import Google from '../../../assets/google.png';
import Apple from '../../../assets/apple.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';

function SignInScreen(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

    const signInPressed = ()=>{
        console.warn('sign in')
    }
    const forgotPass = ()=>{
        console.warn('forgot pass')
    }
    const siginFacebook = ()=>{
        console.warn('sign in with Facebook')
    }
    const siginGoogle = ()=>{
        console.warn('sign in with Google')
    }
    const siginApple = ()=>{
        console.warn('sign in with Apple')
    }
    return (
         <ScrollView>
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='contain'/>
            <CustomInput placeholder='Username' value={userName} setValue={setUserName}/>
            <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text= 'sign in' onPress={signInPressed} />
            <CustomButton text= 'forgot password' onPress={forgotPass} />
            <View style={styles.otherButt}>
            <CustomButton text= {[<Image style={{width: 10, height: 20, marginRight: 20}} source={Facebook}/>, 'sign in with fb']} onPress={siginFacebook}  bgColor='#1877f2' fgColor='white' />
            <CustomButton text= {[<Image style={{width: 10, height: 20, marginRight: 20}} source={Google}/>,'sign in with Google']} onPress={siginGoogle} bgColor='#4285F4' fgColor='white' />
            <CustomButton text= {[<Image style={{width: 10, height: 20, marginRight: 20}} source={Apple}/>,'sign in with Apple']} onPress={siginApple} bgColor='#bab9c4' fgColor='white' />
            </View>
        </View>
        </ScrollView>
        
         
    );
}
const styles = StyleSheet.create({
     root: {
        flex: 1,
        alignItems: 'center',
       position: 'relative',
       top: 60
         
     },
    logo: {
        width: 200,
        height: 200,
   },
   otherButt: {
       flex: 1,
       flexDirection: 'row',
       alignItems: 'flex-start',
       justifyContent: 'space-evenly',
       width: '20%',
       margin: 20
   }
  });

export default SignInScreen;