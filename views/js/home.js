
let url = 'https://gateway.marvel.com:443/v1/public/characters?'


fetch('/hash')
.then(res=>res.json())
.then(data=>{
    data = data.body
    console.log(data)
    console.log(url+`ts=${data.ts}&apikey=${data.api}&hash=${data.hash}`)
})