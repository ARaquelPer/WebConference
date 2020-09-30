window.onload = function(){
    //código para manipulação DOM
const btnRegister = document.getElementById("btnRegister")
btnRegister.addEventListener("click", function(){
    //Abertura da janela modal
swal({
    title: "Inscrição na WebConference",
    html:
        '<input id="txtName" class="swal2-input" placeholder="name">'+
        '<input id="txtEmail" class="swal2-input" placeholder="e-mail">',
    showCancelButton: true,
    confirmButtonText: "Inscrever",
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm: () => {
        const name = document.getElementById('txtName').value
        const email = document.getElementById('txtEmail').value
        const url_base = "http://fcawebbook.herokuapp.com"
        return
        fetch(`${url_base}/conference/1/participants/${email}`,{
            headers: {"Content-Type": "application/x-www-form-urlencoded" },
            method: "POST",
            body: `nomeparticipant=${name}`
        })
        .then (response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json ();
        })
        .catch(error => {
            swal.showValidationEroor(`Pedido falhou: ${error}`);
        }); 
    },
    allowOutsideClick: () => !swal.isLoading()
}).then(result => {
    if (result.value) {
        if (!result.value.err_code) {
            swal ({title: "Inscrição feita com sucesso!"})
        }else {
            swal({title: `${result.value.err_message}`})
        }
    }
})

})

}
