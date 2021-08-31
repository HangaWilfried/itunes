const searchingMethode = document.querySelector('#typing');
const searchingSubmit = document.querySelector('#submitted');
const musicAvailable = document.querySelector('#musiqueDisponible');
 

function getMusicApi(){
    if(searchingMethode.length !== 0){
        let maStar = searchingMethode.value;
        let url = `https://itunes.apple.com/search?term=${maStar}&limit=5&entity=musicVideo`;
        fetch(url).then(response =>response.json().then(data => {
            let displayed = '<ul>';
            for(information in data.results){
                displayed += `<li><strong>${data.results[information].artistName}</strong> - ${data.results[information].trackCensoredName}</li>`
            }
            displayed += '</ul>';
            musicAvailable.innerHTML = displayed;
        })).catch(err => `${err} n'existe pas dans la liste`);
    }
}


searchingSubmit.addEventListener('click', getMusicApi); 