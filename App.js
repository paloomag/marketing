import React, {useEffect,useState} from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';
import {LivePlayer} from "react-native-live-stream";
import RNFS from 'react-native-fs';

export default function App () {
  const [data, setData] = useState({});
  const path = RNFS.ExternalDirectoryPath;

  
  useEffect(()=>{
        RNFS.readFile(`${path}/url.json`).then(async (contents) => {
          setData(JSON.parse(contents));
      })
  }, [])
  return(
      <View style={styles.backgroud}>
        <StatusBar hidden={true} /> 
        <LivePlayer source={{uri:`${data.url}`}}
        paused={false}
        muted={false}
        isLooping
        bufferTime={300}
        maxBufferTime={1000}
        resizeMode={"contain"}
        style={styles.backgroundVideo}
        />
      </View>
  );
}
const styles = StyleSheet.create({

  backgroud:{
      width:'100%',
      height:'100%',
  },
  backgroundVideo:{
      height: '100%',
      width: '100%',
      backgroundColor:'#000',
  }
})