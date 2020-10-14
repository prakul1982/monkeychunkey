import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput , TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class  App extends React.Component {
  constructor(){
    super(
      this.state={txt:'',
    displayText:''
    }
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <Header backgroundColor={'#243ab4'}
    centerComponent={{
      text:'monkeyChunkey',
      style:{color:'white' , fontSize:20}
    }}/>
    <TextInput style={styles.inputBox}
    onChangeText={(text)=>
    this.setState({txt:text})
    }
    value={this.state.txt}
    />

    <TouchableOpacity   
      style={style.goButton}
      onPress={()=>{
        this.setState({displayText:this.state.text})
      }}
      >
       </TouchableOpacity>
      <text style={styles.displayText}>
      {this.state.displayText}
      </text>

      </View>
  
    );
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    marginTop:200,
    width:100,
    alignSelf:"center",
    height:40,
    textAlign:"center",
    borderWidth:4,
    outline:"none"
  },
goButton:{
  width:50,
  alignSelf:"center",
  height:50,
  padding:30,
  margin:30
},
displayText:{
  textAlign:"center",
  fontSize:30
}

});
