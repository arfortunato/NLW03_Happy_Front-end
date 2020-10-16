//create map

const map = L.map("mapid").setView([-27.5847994, -48.5394522], 14);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)

    //add icon tileLayer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})


//Adicioanr campo de fotos

function addPhotoField(){
    
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //Realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //Verificar se o campo está vazio, se sim, não clonar
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}


function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <=1){
        //limpar valor do campo
        span.parentNode.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

function toggerSelect(event){
    //remover a classe active  
    document.querySelectorAll('.button-select button').forEach(button => {
        button.classList.remove('active')
    })
    
    //colocar a classe active
    const button = event.currentTarget
    button.classList.add('active')
  
    //atualizar o input hidden
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se é sim ou não
    input.value = button.dataset.value

}