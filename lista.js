(function(){
    'use strict';
    
    var $ul = document.querySelector('ul');
    var $lis= $ul.querySelectorAll('li');
    var $txtTeam = document.querySelector('#txtTeam');    //variaveis
    var $btn = document.querySelector('#btn');
    $btn.addEventListener('click', addTeam);

   
    $ul.addEventListener('click', function (e){          //adicionar um listener/ ao clicar executa a função / e: mouse event de click
       console.log(e.target.nodeName);                   // LI
        if(e.target.nodeName === 'LI'){                  // target retorna o elemento que disparou o evento / nodeName o nome do evento
            
            marcadoOk(e.target);                         //Se marcado
            
            removeTime(e.target);                        //Delete-o
            
        }
    })
    
    function removeTime(li){
        if(confirm('Deseja realmete deletar o ' + li.textContent + ' da lista?')){
            li.parentNode.removeChild(li);                 //parentNode faz referencia a uma tag anterior"pai", pra depois remover a tag"filho"
        }
    }

    function marcadoOk(li){
        li.classList.toggle('done');                       //classList retorna o nome da classe do elemento / toggle alterna
    }
   
    function addTeam(){                                    //função de adicionar ao Time
        var li = document.createElement('li');             //cria elemento li no html
        var text = document.createTextNode($txtTeam.value) //createTextNode cria um texto com o valor do texto inserido
        
        li.appendChild(text);                             //add Texto na li      
        $ul.appendChild(li);                              //add li na ul
        
        $txtTeam.value = '';                              //após escrever, deixa o input vazio
        $txtTeam.focus();    
    }
    //------------------------------------------------------------------------------------------------------
    
    var $ul2 = document.querySelector('#listaPlayer');
    var $lis2 = $ul2.querySelectorAll('li');
    var $txtPlayer = document.querySelector('#txtPlayer');      
    var $btn2 = document.querySelector('#btn2');
    $btn2.addEventListener('click', addPlayer);

   
    $ul2.addEventListener('click', function (e){            
       console.log(e.target.nodeName);                    
        if(e.target.nodeName === 'LI'){                    
            
            marcadoOk(e.target);                           
            
            removePlayer(e.target);                         
            
        }
    })
    
    function removePlayer(li){
        if(confirm('Deseja realmete deletar o ' + li.textContent + ' da lista?')){
            li.parentNode.removeChild(li);                  
        }
    }

    function marcadoOk(li){
        li.classList.toggle('done');                         
            }
   
    function addPlayer(){                                     
        
        var li = document.createElement('li');               
        var text = document.createTextNode($txtPlayer.value);  
        

        li.appendChild(text);                                    
        $ul2.appendChild(li);                                
        
        $txtPlayer.value = '';                                
        $txtPlayer.focus();                                   
    
    }
})()