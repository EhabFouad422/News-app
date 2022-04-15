
const request = require('request')

const news = (callback) => {

const url = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=63f500ca802f40b7ac31582d6f35e345"
request({url,json:true},(error,response)=>{
    
    if (error) {
        callback("Error Has Occurred", undefined)
    }
    else if (response.body.message) {
        callback(response.body.message, undefined)
    }
    else if (response.body.articles.length ===0) {
        callback("Invalid Search", undefined)
    }
    else {
        callback(undefined, (response.body.articles))
    }

})
}




module.exports = news;