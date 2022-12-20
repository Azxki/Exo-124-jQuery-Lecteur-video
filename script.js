// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video');
let progress = $('.progress__filled');
let play_but = $('.toggle');
let player__slide = $('.player__slider');

play_but.click(() => {
    player[0].play();
    play_but.html('\u23f8');
    play_but.click(() => {
        player[0].pause();
        play_but.html('►');
    })
})
