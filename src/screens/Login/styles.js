import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    backGround:{
        flex:1,
        
        backgroundColor:'#fff',
      
        borderRadius:5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,  
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        
    },
    footerPart:{
        height:80,
        justifyContent:'center',
        alignItems:'center'
        
    },
    pagenameBackGround:{
        width:Dimensions.get('window').width/2,
        height:Dimensions.get('window').width/2-50,
        alignSelf:'center',
        marginTop:60,
        resizeMode: "stretch" ,
        justifyContent:'center',
        alignItems:'center'             
    },
    loginText:{
        fontFamily:'Poppins-SemiBold',
        color:'#AB0000',
        fontSize:22,

    },
    footerText:{
        fontFamily:'Poppins-Bold',
        color:'#620000',
        fontSize:14,
        textTransform:'uppercase',
    },
    textInput:{
        color:'#000',
        fontFamily:'Poppins-Regular',
        fontSize:12,
        width:'100%'
      
    },
    textInputOuter:{
       
        backgroundColor:'#DBE2ED',
        marginBottom:30,
        borderRadius:7,
        padding:5,
        flexDirection:'row',
        alignItems:'center'
    },
    btnOuter:{
        backgroundColor:'#AB0000',       
        margin:10,
        marginBottom:30,
       
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        height:60,
        flexDirection:'row'

    },
    btnMessage:{
        fontFamily:'Poppins-Bold',
        fontSize:15,
        textTransform:'uppercase',
        color:'#fff'
    },
    inputicon:{
        fontSize:20,
        color:'#AB0000',
        marginTop:-5
    },
    btnIcon:{
        color:'#fff',
        fontSize:20,
        marginTop:-5,
        marginRight:5
    },
    socialLoginOuter:
    {
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    socialLoginText:{
        fontFamily:'Poppins-Medium',
        color:'#620000',
        fontSize:14,
    }

});
