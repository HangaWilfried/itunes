const searchingMethode = document.querySelector('#typing');
const searchingSubmit = document.querySelector('#submitted');
const musicAvailable = document.querySelector('#musiqueDisponible');
 

function getMusicApi(){
    if(searchingMethode.length !== 0){
        let maStar = searchingMethode.value;
        let url = `https://itunes.apple.com/search?term=${maStar}&limit=30&entity=musicVideo`;
        fetch(url).then(response =>response.json().then(data => {
            let displayed = '<ul>';
            for(information in data.results){
                displayed += `<li><strong>${data.results[information].artistName}</strong> - ${data.results[information].trackCensoredName}
                                <ul>
                                    <li class="sublist"> <button>Download</button> <button>Play</button> </li>
                                </ul>
                             </li>`
            }
            displayed += '</ul>';
            musicAvailable.innerHTML = displayed;
        })).catch(err => {
            musicAvailable.innerHTML = `${err} n'existe pas dans la liste`;
        });
    }
}


searchingSubmit.addEventListener('click', getMusicApi); 