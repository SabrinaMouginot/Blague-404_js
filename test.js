let Page = 300;
for(let i = 0; i <=300; i ++ ) {
    Page = Page - i
    while(Page>0){
        document.getElementById('p1').innerHTML += (Page-i)+' Servez-vous!<br>';
        Page--;
    }
    if(Page===0){
        document.getElementById('p1').innerHTML += Page+' <h1>Changement de rouleau</h1><br>';
        Page = 300;
        Page = Page - i;
        while(Page>0){
            document.getElementById('p1').innerHTML += (Page-i)+' Servez-vous!<br>';
            Page--;
        }
        if(Page===0){
            document.getElementById('p1').innerHTML += Page+'<h1> Changez de rouleau si vous ne voulez pas utiliser vos doigts. 😜</h1><br>';
        }
    }
}

