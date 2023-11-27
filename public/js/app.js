console.log('Client side javascript file is loaded!')

//fetch api
//recupera le informazioni dal sito e poi fa response nella funzione
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})



//recupero gli input
const weatherForm=document.querySelector('form')
const localita = document.querySelector('input')
const messageOne=document.querySelector('#messageOne')
const messageTwo= document.querySelector('#messageTwo')



//parlo con il file
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const valori = localita.value;

    messageOne.textContent = 'loading...'
    messageTwo.textContent=''

    fetch('http://localhost:3000/weather?address='+valori).then((response)=>{
        response.json().then((data)=>{
            if (data.error){
                console.log(data.error)
                const errore = data.error
                messageOne.textContent = errore
            }
            else {
                console.log(data.location)
                console.log(data.forecast)

                const dataLocation = data.location
                const dataForecast = data.forecast

                messageOne.textContent = dataLocation
                messageTwo.textContent= dataForecast
            }
        })
    })
})