

function escrevendoLetra(elemento){
    function ativaLetra(elemento){
        const arrayTexto = elemento.innerHTML.split(''); //separa cada letra em um array
        elemento.innerHTML = ''; //limpa o elemento
        arrayTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i)
        })
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()


function MenuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');

    const navMenu = document.querySelector('header .navegacao-primaria');
    
    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    })
    
}



function sobreMim(){

    const divExperiencia = document.querySelectorAll('.experiencia_content div');
    const liExperiencia = document.querySelectorAll('.experiencia_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }


    liExperiencia.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index);
        });
    });

    liEducation.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index);
        });
    });

}

sobreMim();

const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonALL = document.querySelector('.projects_models .all');

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})


listaALL.forEach((item)=>{
    item.classList.add('ativo');
})


function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });

    if (buttom == 'website'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo')
    }
    if(buttom == 'game'){
        lista[3].classList.add('ativo');
    }

    if(buttom == 'outro'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } if(currentButton.classList.contains('website')){
            showLista(listaALL, "website")
        }

        if(currentButton.classList.contains('game')){
            showLista(listaALL, "game")
        }

        if(currentButton.classList.contains('outro')){
            showLista(listaALL, "outro")
        }

        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all")
        }
    });
})