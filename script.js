function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let formularioAno = document.getElementById("txtano")
   let resultado = document.getElementById("resultado")
   if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
      alert("[ERRO] Por favor, verifique os dados e tente novamente!")
   } else {
      var fsex = document.getElementsByName("radsex")
      var idade = ano - Number(formularioAno.value)
      var gênero = ""
      var img = document.createElement("img")
      img.setAttribute("id", "foto")
      if (fsex[0].checked) {
         gênero = "homem"
         if(idade >= 0 && idade < 10){
            img.setAttribute("src", "foto-bebe-menino.png")
         } else if (idade < 21){
            img.setAttribute("src", "foto-jovem-homem.png")
         } else if (idade < 50){
            img.setAttribute("src", "foto-homem-adulto.png")
         } else {
            img.setAttribute("src", "foto-homem-idoso.png")
         }
      } else if (fsex[1].checked) {
         gênero = "mulher"
         if(idade >= 0 && idade < 10){
            img.setAttribute("src", "foto-bebe-menina.png")
         } else if (idade < 21){
            img.setAttribute("src", "foto-jovem-mulher.png")
         } else if (idade < 50){
            img.setAttribute("src", "foto-mulher-adulta.png")
         } else {
            img.setAttribute("src", "foto-mulher-idosa.png")
         }
      }
      resultado.style.textAlign = "center"
      resultado.innerHTML = `Olá! Detectamos ${gênero} com ${idade} anos.`
      resultado.appendChild (img)
   }  

}