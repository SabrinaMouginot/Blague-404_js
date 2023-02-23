let Page = 300;
for(let i = 0; i <=300; i ++ ) {
    Page = Page - i
    while(Page>0){
        document.getElementById('p1').innerHTML += (Page-i)+' Servez-vous!<br>';
        Page--;
    }
    if(Page===0){
        document.getElementById('p1').innerHTML += Page+' Changement de rouleau<br>';
        Page = 300;
        Page = Page - i;
        while(Page>0){
            document.getElementById('p1').innerHTML += (Page-i)+' Servez-vous!<br>';
            Page--;
        }
        if(Page===0){
            document.getElementById('p1').innerHTML += Page+' Changez de rouleau si vous ne voulez pas utiliser vos doigts. 😜<br>';
        }
    }
}
// Page;
