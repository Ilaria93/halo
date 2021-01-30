var play = 0;
var clock;

$('.next').click(function(){
    next();
});

$('.prev').click(function(){
    prev();
});

$('.go').click(function(){
        $('.go').text("Stop");
        if (play == 0){
            clock = setInterval(function(){
                next();
            }, 2000);
            play = 1;
        }else{
            $('.go').text("Start");
            clearInterval(clock);
            play = 0;
        }
    });
//intercetto il click sui pallini
$('.bullets .fa-circle').click(function(){
    //recupero l'immagine corrente
    var nowImg= $('img.active');
    // recupero il pallino corrente
    var nowBullet = $('.fa-circle.active');
    //tolgo la classe active all'immagine corrente
    nowImg.removeClass('active');
    //tolgo la classe active al pallino corrente
    nowBullet.removeClass('active');


    //aggiungo la classe active al pallino su cui l'utente ha cliccato
    $(this).addClass('active');
    //recupero l'immagine corrispondenteb al pallino su cui l'utente a cliccato

    // recupero la posizione del pallino su cui l'utente ha cliccato
    var position = $(this).index();
    //recupero l'immagine con la stessa posizione del pallino
    var newImg = $('.slide img').eq(position);
    //a questa immagine aggiungo la classe active
    newImg.addClass('active');
});

function next(){
    var nowImg= $('img.active');
    var nowBullet = $('.fa-circle.active');

    nowImg.removeClass('active');
    nowBullet.removeClass('active');

    var nextImg = nowImg.next('img');
    var nextBullet = nowBullet.next('.fa-circle');


    if(nextImg.length != 0){

        nextImg.addClass('active');
        nextBullet.addClass('active');
    }else{
        nextImg = $('img:first-of-type');
        nextImg.addClass('active');
        $('.fa-circle:first-child').addClass('active');
    }

}
function prev(){
    var nowImg = $('img.active');
    var nowBullet= $('.fa-circle.active');

    nowImg.removeClass('active');
    nowBullet.removeClass('active');

    var lastImg = nowImg.prev('img');
    var lastBullet = nowBullet.prev('.fa-circle');

    if(lastImg.length != 0){
        lastImg.addClass('active');
        lastBullet.addClass('active');
    }else{
        lastImg= $('img:last-of-type');
        lastImg.addClass('active');
        $('.fa-circle:last-child').addClass('active');
    }
}
