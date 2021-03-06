import React, { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity, BackHandler, Alert, ActivityIndicator } from 'react-native';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles";
import { FAQ, FAQ_URL } from '../../config/ApiConfig';
import AccordionComponent from "../../components/AccordionComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

function Faq({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [faqList, setFaqList] = useState([]);
  const [openBox, setOpenBox] = useState(null);

  const [webViewHeight, setWebViewHeight] = useState(null);
  const onMessage = (event) => {
    setWebViewHeight(Number(event.nativeEvent.data));
  }
  const injectedJavaScript = `
  window.ReactNativeWebView.postMessage(
    Math.max(document.body.offsetHeight, document.body.scrollHeight)
  );
`


  const _changeOpenBox = (key) => {
    if (openBox == key) {
      setOpenBox(null)
    } else {
      setOpenBox(key)
    }
  };
  const _getFaqs = async () => {
    setIsLoading(true)
    fetch(FAQ, {
      method: "get",
    })
      .then((response) => {

        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then(([status, response]) => {
        if (status == 200) {
          // console.log(JSON.stringify(response.faq_list, null, " "));
          setFaqList(response.faq_list);
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
    _getFaqs()
  }, [navigation]);
  if (isLoading) {
    return (
      <>
        <Header navigation={navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#620000" />
        </View>
      </>
    )
  } else {
    return (
      <>
        <Header navigation={navigation} />
        <View style={styles.filterBar}>
          <Text style={styles.CategoryText2}>Faq</Text>
        </View>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          {faqList.map((item, key) => (
            <View style={styles.outerBox} key={key}>
              <TouchableOpacity onPress={() => { _changeOpenBox(key) }} style={styles.boxheader}>
                <Text style={styles.boxheaderTxt}>{item.faq_title}</Text>
                <AntDesign name={openBox == key ? "up" : "down"} style={styles.boxIcon} />
              </TouchableOpacity>
              {openBox == key ?
                <ScrollView contentContainerStyle={{
                  flexGrow: 1,
                  height: webViewHeight
                }}>
                  <WebView
                    source={{ uri: FAQ_URL + item.faq_id }}
                    scrollEnabled={false}
                    onMessage={onMessage}
                    injectedJavaScript={injectedJavaScript}
                  />
                </ScrollView>
                : <></>}

            </View>
          ))}

          {/* <AccordionComponent item={faqList}  /> */}
        </ScrollView>
        <Footer navigation={navigation} />
      </>
    )
  }

}


export default Faq;