 function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance) {
     
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('#home');
});

link2.addEventListener('click', () => {
    scrollToElement('#problemaSolucao');
});

link3.addEventListener('click', () => {
    scrollToElement('#formulario');
});
 
//  function selecionarPerfil(valor) {
  
//     setTimeout(() => {
//       const select = document.getElementById("perfilSelect");
//       select.value = valor;
//     }, 150);
//   }

 function selecionarPerfil(valor) {
    const tentarSelecionar = () => {
      const select = document.getElementById("perfilSelect");

      if (select) {
        select.value = valor;
      } else {
        // Continua tentando até o select aparecer
        setTimeout(tentarSelecionar, 100);
      }
    };

    tentarSelecionar();
  }