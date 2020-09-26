window.onload = function(){
    //código para manipulação DOM
const btnRegister = document.getElementById("btnRegister")
btnRegister.addEventListener("click", function(){
    //Abertura da janela modal
swal({
    title: "Inscrição na WebConference",
    html:
        '<input id="txtName" class="swal2-input" placeholder="name">'+
        '<input id="txtEmail" class="swal2-input" placeholder="e-mail">'+
})

})

}
