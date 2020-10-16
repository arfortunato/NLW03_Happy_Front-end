const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//create map

const map = L.map("mapid", options).setView([-27.5847994, -48.5394522], 14);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create popup overlay


L.marker([-27.5847994, -48.5394522], {icon})
  .addTo(map)


  /*imagem galery*/

  function selectImage(event){
    const button = event.currentTarget
    


    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeClassActive)
    
    function removeClassActive(button){
      button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    //atualizar o container de imagem
    imageContainer.src = image.src


    //adicionar a classe .active para esse botão
    button.classList.add('active')
  }