import axios from 'axios'

export function retrieveArticles() {
	return axios.get('https://59ba8aff36acf20011fe2a00.mockapi.io/apitest/articles')          
}