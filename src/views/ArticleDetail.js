import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class ArticleDetail extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image style={styles.coverImage}
                       source={{uri: this.props.article.articleImage}}/>
                <View style={styles.textContainer}>                
                    <Text style={styles.title}>{this.props.article.articleTitle}</Text>
                    <Text style={styles.description}>{this.props.article.articleFullDescription}</Text>
                </View>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#f1f1f1'
    },    
    coverImage: {
        flex: 1,  
        flexDirection: 'column',    
        height: 200,    
        resizeMode: 'cover',
        marginTop: 50
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,        
    }, 
    title: {        
        flexDirection: 'column',
        color: '#000',        
        textAlign: 'center',
        fontSize: 22,        
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '700'
    },
    description: {
        flexDirection: 'column',
        color: '#000',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }    
});