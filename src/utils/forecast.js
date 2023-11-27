const request = require('request')

//includi umidità

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=fd8aeb0167ad6b2f1169c536ed35535c&query='+ latitude + ',' + longitude
    request({url, json:true, language:'it'},(error, {body}={})=>{
        if (error){
            callback('no funsia internet', undefined)
        }
        else if (body.error){
            callback('le coordinate sono sbagliate, riprova', undefined)
        }
        else {
            callback(undefined,
                body.current.weather_descriptions[0] + '. Attualmente ci sono ' + body.current.temperature + ' gradi. Sono percepiti ' + body.current.feelslike + ' gradi. ' +
                'L\'umidità percepita è del '+ body.current.humidity + ' %')

        }
    })
}

module.exports = forecast