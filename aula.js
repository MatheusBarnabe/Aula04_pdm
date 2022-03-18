// function fatorial (n){
//     if (n < 0) return Promise.reject("Valor não pode ser negativo")
//     let res = 1
//     for (let i = 2; i <= n; i++) res *= i
//     return Promise.resolve(res)
// }

// async function chamadaComThenCatch(){
//     try{ 
//         const f1 = await fatorial(10)
//         console.log(f1)
//         const f2 = await fatorial (-10)
//         console.lof(f2)
//     }
//     catch (e){
//         console.log(e)
//     }
// }
// chamadaComThenCatch()

// // function chamadaComThenCatch(){
// //     fatorial(5)
// //     .then((res) => console.log(res))
// //     .catch(erro => console.log(erro))

// //     fatorial(-10)
// //     .then(res => console.log(res))
// //     .catch(erro => console.log(erro))
// // }
// chamadaComThenCatch() //chamando a função explicitamente







// async function hello (nome){
//     return `Hello, ${nome}` 
// }

// const resultado = hello ("João")
// resultado.then (res => console.log(res))









// function hello (nome){
//     return new Promise (function (resolve, reject){
//         resolve( `Hello, ${nome}`)
//     })
// }

// function hello (nome) {
//     return `Hello, ${nome}`
// }

// const resultado = hello ("Ana")
// console.log("Até mais")









// require('dotenv').config()
// const axios = require ('axios')

// //const PROTCOL = process.env.PROTCOL
// //const BASE_URL = process.env.BASE_URL

// const { PROTOCOL, BASE_URL, APPID, Q, CNT, UNITS, LANGUAGE } = process.env

// const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&units=${UNITS}$lang=${LANGUAGE}`

// axios.get(url)
// .then(res => {
//     //console.log(res.data)
//     return res.data
// })
// .then(res => {
//     console.log(res)
//     return res
// })
// .then(res => {
//     res.cnt
//     return res
// })
// .then(res => {
//     return res['list']
// })
// .then(res => {
//     for (let i = 0; i < res.length; i++){
//         console.log ("Temp min: " + res[i].main.temp_min)
//         console.log ("Temp max: " + res[i].main.temp_max)
//         console.log("descrição: " + res[i].weather[0].description)
//     }
//     //para cada previsão, exibir:
//     //temperatura máxima
//     //temperatura mínima
//     //descrição
// })

