function apiconnect(){

    document.getElementById("form1").addEventListener("submit", async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
    
        await fetch("https://primary-production-8518.up.railway.app/webhook-test/8584e79f-ab46-4e56-9912-1df590038d82", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    });
}

function confirmDonate(){

    let value = document.getElementById("valor").value.trim();
    let number = Number(value)

    if(value == isNaN(number) && number <= 5){

        Swal.fire({
            title: "Formulário não enviado!",
            text: "Preencha todos os campos antes de enviar.",
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
            text: "Formulário enviado com sucesso.",
            icon: "success",
            iconColor: "#4edb3f",
            confirmButtonText: "OK",
            confirmButtonColor: "#4edb3f"
        });
        
        apiconnect()
    }
}