/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  AlertIOS,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import ArticleDetail from './ArticleDetail'
import ArticleCell from './ArticleCell'
import { retrieveArticles } from '../networking/ArticleNetworking'

export default class Articles extends Component {

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

        this.state = {
          dataSource: ds.cloneWithRows([]),
          articles: []
        };
    }
    // selectedArticle = (rowIndex) => {
    selectedArticle(rowIndex) {            
        var article = this.state.articles[rowIndex]        
        this.props.navigator.push({
            title: 'Artigo '+article.id,
            component: ArticleDetail,
            passProps: {article: article}
        });
    }        
    componentDidMount() { 
        var currentThis = this  
        retrieveArticles().then(function(response) {
            var articles = []
            var responseArray = Object.values(response)[0]
            responseArray.forEach(function(article, i) {
                articles.push(article)
            })            
            currentThis.setState({
                dataSource: currentThis.state.dataSource.cloneWithRows(articles),
                articles: articles
            })
        })
        .catch(function(error) {
            //TODO handle error
        })
    } 
    _renderRow(rowData, sectionID, rowID, highlightRow) {          
        const title = rowData.articleTitle
        const smallDescription = rowData.articleSmallDescription
        const articleImage = rowData.articleImage

        return (            
            <TouchableOpacity style={styles.cellContainer} onPress={() => this.selectedArticle(rowID)}>
                <ArticleCell articleTitle={title} articleSmallDescription={smallDescription} articleImage={articleImage}></ArticleCell>
            </TouchableOpacity>            
        );
    }    
    render() {
        return(
            <View style={styles.container}>
                <ListView
                    style={styles.listContainer}
                    dataSource={this.state.dataSource}                                    
                    renderRow={this._renderRow.bind(this)}
                    enableEmptySections={true}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }    
}   

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#666'    
  },
  listContainer: {  
    flex: 1,
    backgroundColor: '#f0f0f0'    
  },
  cellContainer: {
    flex: 1
  }
});
module.exports = Articles