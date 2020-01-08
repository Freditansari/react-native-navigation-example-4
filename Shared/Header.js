import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

const Header = ({title, navigation}) => {
    return (
      <View style ={styles.container}>
        <View style={styles.header}>
          <Text style ={styles.headerText}>{title}</Text>
            {/* <MaterialIcons style={styles.icon} name = 'menu' size={28}/> */}
            <MaterialIcons style={styles.icon} name = 'menu' size={28}/>
            <View style ={styles.wallet}>
              <MaterialIcons style={styles.dollar} name = 'account-balance-wallet' size={28}/>
              <Text styles={styles.amount}>$1,234</Text>
            </View>
        </View>

      
        
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'flex-start',
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
      },
      icon: {
        position: 'absolute',
        left: 0,
      },
      // dollar:{
      //   position: 'absolute',
      //   right: 30,
      // },
      // amount:{
      //   position: 'absolute',
      //   right: 0,
      // }, 
      wallet:{
        flexDirection:"row",
        position: "absolute",
        right:0, 
        justifyContent:'center',
        alignItems:"center"
      }
})

export default Header
