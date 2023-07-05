document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefaut(); 

let nome = document.getElementByld("nome").value;
let email = document.getElementByld("email").value;

console.log("Nome:", nome);
console.log("Email:", email);

let FormData = new FormData();
formData.append("email",email);




fetch("https://formspree.io/f/form_id", {
method:"post",
headers:{
    "Acept":"aplication/json"
},
  body:formData
})

.then(function(response) { 
    if(response.ok){
        alert("Formulário enviado com sucesso!");
} else {
    alert("Ocorreu um erro ao enviar o formulário.Por favor tente novamente mais tarde!")
}
});

.catch(function(error) {
        alert("Ocorreu um erro ao enviar o formulário.Por favor, tente novamente mais tarde!")
});

});
