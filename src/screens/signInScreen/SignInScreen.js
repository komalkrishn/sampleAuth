import React, {useState} from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Logo from '../../../assets/goGreenLogo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';

const SignInScreen=({navigation})=> {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  

    const signInPressed = (activeTab)=>{
        setSelected(activeTab);
         
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
            <CustomButton text= 'sign in' onPress={()=> navigation.navigate('home')} />
            <CustomButton text= 'forgot password' onPress={forgotPass} />
            <View style={styles.otherButt}>
            <CustomButton text= {[<Entypo name="facebook" size={24} color="black" />, 'sign in with fb']} onPress={siginFacebook}  bgColor='#1877f2' fgColor='white' />
            <CustomButton text= {[<AntDesign name="google" size={24} color="pink" />,'sign in with Google']} onPress={siginGoogle} bgColor='#4285F4' fgColor='white' />
            <CustomButton text= {[<AntDesign name="apple1" size={24} color="grey" />,'sign in with Apple']} onPress={siginApple} bgColor='#bab9c4' fgColor='white' />
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