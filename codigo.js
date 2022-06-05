



const btn = document.getElementById("enviar");


const comprobar = (e) => {
  
  alert("comprobando...")
  const user = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;
  

  if (user === "" || pass === "") {

    e.preventDefault();
    alert("debe completar todos los campos")
    
  } 

  else if (user.includes("@") == !true) {

    e.preventDefault();
    alert("nombre de usuario no valido, debe contener un @");
  }

  else {
    alert(`bienvenido ${user}`);
  };
}

btn.addEventListener("click", comprobar);






