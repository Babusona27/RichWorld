import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import OTPTextInput from 'react-native-otp-textinput';
import { FORGET_PASSWORD_OTP_CHECK, RESEND_OTP } from '../../config/ApiConfig'

import AsyncStorage from '@react-native-async-storage/async-storage';

function OtpScreenForgetPass({ navigation, route }) {
  const { response } = route.params;
  const [isResend, setIsResend] = useState(false);
  const [forgetPasswordOtp, setForgetPasswordOtp] = useState("");
  const [otpInput, setOtp] = useState("");
  const [errorMsg, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const checkOtp = () => {
    if (otpInput == "") {
      setErrorMessage("Please enter otp");
    } else if (isResend) {
      if (otpInput != forgetPasswordOtp) {
        setErrorMessage("Wrong otp");
      } else {
        setIsLoading(true)
        const formData = new FormData();
        formData.append('user_id', response.userDetails[0].id);
        formData.append('otp', otpInput);
        fetch(FORGET_PASSWORD_OTP_CHECK, {
          method: "POST",
          body: formData
        })
          .then((response) => {

            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
          })
          .then(([status, response]) => {
            if (status == 200) {
              if (response.status == false) {
                setErrorMessage(response.message);
              } else {
                AsyncStorage.setItem('userData', JSON.stringify(response.userDetails[0])).then(() => {
                  navigation.navigate('HomeScreen');
                })
              }
            } else {
              console.log(status, response);
            }
          })
          .catch((error) => console.log("error", error))
          .finally(() => {
            setIsLoading(false)
          });
      }
    } else {
      if (otpInput != response.forget_password_otp) {
        setErrorMessage("Wrong otp");
      } else {
        // setIsLoading(true)
        const formData = new FormData();
        formData.append('user_id', response.userDetails[0].id);
        formData.append('otp', otpInput);
        fetch(FORGET_PASSWORD_OTP_CHECK, {
          method: "POST",
          body: formData
        })
          .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
          })
          .then(([status, response]) => {
            if (status == 200) {
              if (response.status == false) {
                setErrorMessage(response.message);
                console.log(response.message);
              } else {
                AsyncStorage.setItem('userData', JSON.stringify(response.userDetails[0])).then(() => {
                  navigation.navigate('HomeScreen');
                })
              }
            } else {
              console.log(status, response);
            }
          })
          .catch((error) => console.log("error", error))
          .finally(() => {
            setIsLoading(false)
          });
      }
    }
  }
  const _resend_Otp = () => {
    setIsLoading(true)
    const formData = new FormData();
    formData.append('user_id', response.userDetails[0].id);
    fetch(RESEND_OTP, {
      method: "POST",
      body: formData
    })
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then(([status, response]) => {
        if (status == 200) {
          if (response.status == false) {
            setErrorMessage(response.message);
          } else {
            setIsResend(true);
            setForgetPasswordOtp(response.forget_password_otp);
          }
        } else {
          console.log(status, response);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setIsLoading(false)
      });
  }
  useEffect(() => {
  }, [navigation]);

  return (
    <>
      <View style={styles.backGround}>
        {isLoading ? <ActivityIndicator size="large" color="#AB0000" /> : <></>}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={require('../../assets/Image/loginBackground.png')} style={styles.pagenameBackGround} >
            <Text style={styles.loginText}>OTP Verification</Text>
          </ImageBackground>
          <View style={{ flex: 1, padding: 10, marginTop: 20 }}>
            <Text style={styles.signupText1}>We have sent and OTP to your : {forgetPasswordOtp}</Text>

            <Text style={styles.errorMessage}>{errorMsg}</Text>

            <View style={styles.otpBoxOuter}>
              <OTPTextInput textInputStyle={styles.otpBoxStyle} handleTextChange={(otpInput) => setOtp(otpInput)} />
            </View>


            <TouchableOpacity onPress={() => {
              _resend_Otp();
            }} style={styles.resendButton} >
              <Text style={styles.resendButtonText}>Resend Otp</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btnOuter} onPress={() => {
              checkOtp()
            }}>
              <AntDesign name="arrowright" style={styles.btnIcon} />
              <Text style={styles.btnMessage}>Submit</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>


      </View>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Login');
      }} style={styles.footerPart}>
        <Text style={styles.footerText}>Sign In</Text>
      </TouchableOpacity>
    </>
  )

}


export default OtpScreenForgetPass;