function adduser()
{
    user=document.getElementById("user_name").value
    //estas mandando a llamar el localstorage para guardar el nombre de usuario pero ne secitas una clave (usuario)
    localStorage.setItem("usuario",user)
    window.location="tinke_room.html"
}