function saludar()
{
    let nom=document.getElementById("nombre_id").value
    alert("Hola " + nom )
}

function hacerclick()
{
    alert("Hice click!!!")
   
}

function validarvacios()
{
    console.log("Hola")
    let ape=document.getElementById("apellido_id").value
    console.log(ape.length)
    if (ape.length<=2)
    {
        document.getElementById("help_apellido").innerHTML="⛔ Debe contener al menos tres letras"
    }
}