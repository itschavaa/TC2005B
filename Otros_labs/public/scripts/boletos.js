const boletosPost = () =>{
const form = document.getElementById('form-boletos');
const data = new FormData(form);
fetch('/boletos',{
    method: 'POST',
    data: data,
}).then(res => res.json()).then(res=> {
    console.log(data);
})
    console.log(data);
}