import * as react from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}>Series da Xilften</Text>
        <Text style={estilo.subTitulo}>Essas são as melhores das melhores</Text>
        <Text style={estilo.serie}>Peaky Blinders</Text>
        <View style={estilo.image}>
          <Image style={estilo.img} source={require("./assets/peakyblinders.jpg")}/>
        </View>
        <Text style={estilo.serie}>Bob Esponja</Text>
        <View style={estilo.image}>
          <Image style={estilo.img} source={require("./assets/bobesponja.jpg")}/>
        </View>
        <Text style={estilo.serie}>Naruto</Text>
        <View style={estilo.image}>
          <Image style={estilo.img} source={require("./assets/naruto.png")}/>
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#15151f",
    justifyContent: "center"
  },
  titulo:{
    fontSize:40,
    color:"#fff",
    fontWeight:"bold",
    textAlign: "center",
    marginTop: 30
  },
  subTitulo:{
    fontSize: 21,
    color:"#999",
    marginBottom: 50,
    textAlign: "center"
  },
  serie:{
    fontSize: 15,
    color: "#999",
    marginLeft: 20
  },
  img:{
    width: 300,
    height: 200,
    marginBottom: 20
  },
  image:{
    alignItems: "center"
  }
})