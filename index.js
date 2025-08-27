function apiconnect(){

    document.getElementById("form1").addEventListener("submit", async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
    
        await fetch("https://n8n-n8n.0brmvo.easypanel.host/webhook-test/8584e79f-ab46-4e56-9912-1df590038d82", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    });
}

function confirmDonate(){

    let value = document.getElementById("valor");

    if(!value.value.trim()){

        Swal.fire({
            title: "Erro ao enviar!",
            text: "Certifique-se de que preencheu todos os campos corretamente.",
            Color: "#e1e1e1",
            theme: "dark",
            icon: "error",
            iconColor: "#4edb3f",
            confirmButtonText: "OK",
            confirmButtonColor: "#4edb3f"
        });
        
    }else{
        
        Swal.fire({
            title: "Enviado!",
            text: "Muito obrigado pela sua doação! Enviaremos um email de confirmação para você.",
            icon: "success",
            theme: "dark",
            iconColor: "#4edb3f",
            confirmButtonText: "OK",
            confirmButtonColor: "#4edb3f"
        });
        
        apiconnect()
    }
}