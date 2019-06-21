

import React, {Component} from 'react';
import {Button, Image, Text, View, TouchableOpacity, TextInput} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      
      width: 0,
      height: 0,
      hasil: 0,
    }
  }

  prosesTambah(width, height){
  
    let count = (width / ((height/100)*(height/100))).toFixed(2);
    this.setState({
      hasil: count
    });
    
  }
  
  render() {
    return (
      <View style={{flex: 1, flexDirection:'column'}}>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>

          <View style={{flex: 1, flexDirection:'column', paddingLeft:50}}>
            <TouchableOpacity >
              <Image
                style={{width:50, height:50}}
                source={require('./male.png')}
              />
              <Text>Male</Text>
            </TouchableOpacity>
            
          </View>

          <View style={{flex: 1, flexDirection:'column',  paddingLeft:50}}>
          <TouchableOpacity>
              <Image
                style={{width:50, height:50}}
                source={require('./female.png')}
              />
              <Text >Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, flexDirection:'column', borderColor: 'grey', borderWidth: 1, margin:15}}>
          <TextInput style={{ fontSize: 50, textAlign:'center'}} placeholder="0" onChangeText={(height) => this.setState({height})}></TextInput>
          <Text style={{textAlign:'center'}} >Height (in cm)</Text>
        </View>

        <View style={{flex: 1, flexDirection:'column', borderColor: 'grey', borderWidth: 1, margin:15}}>
        <TextInput style={{ fontSize: 50, textAlign:'center' }} placeholder="0" onChangeText={(width) => this.setState({width})}></TextInput>
          <Text style={{textAlign:'center'}} >Weight (in kgs)</Text>
        </View>

        <View style={{flex: 1, flexDirection:'column'}}>
          <Button onPress={() =>this.prosesTambah(this.state.width, this.state.height)}  title="Submit"></Button>
          <Text style={{textAlign:'center', marginTop: 10}}>Your BMI is {this.state.hasil}</Text>
        </View>  

            
      </View>
    );
  }
}


