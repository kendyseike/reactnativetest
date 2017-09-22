import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class ArticleCell extends Component {

  render() {
    return (      
        <View style={styles.cellContainer}>
            <Image style={styles.cellImage}
                       source={{uri: this.props.articleImage}}/>
            <View style={styles.textContainer}>
                <Text style={styles.cellTitle}>{this.props.articleTitle}</Text>
                <Text style={styles.cellSubtitle}>{this.props.articleSmallDescription}</Text>
            </View>                                
        </View>
    )
  }
}

const styles = StyleSheet.create({
  cellContainer: {  
    flex: 1,
    flexDirection: 'column',      
    backgroundColor: '#fff',    
    marginTop: 10
  }, 
  textContainer: {
    flex: 1,
    padding: 10
  }, 
  cellTitle: {   
    flex: 1,
    color: '#000',
    fontSize: 22,    
    textAlign: 'center',
    fontWeight: '700'
  },
  cellSubtitle: {  
    flex: 1, 
    color: '#000',
    fontSize: 18,    
    textAlign: 'center',
    fontWeight: '300'
  },
  cellImage: {  
    flex: 1,  
    flexDirection: 'column',    
    height: 200,    
    resizeMode: 'cover'
  }
});