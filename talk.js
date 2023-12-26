$(function() {
    $('#yes').click(function(event) {
        modal('迪士尼的烟花在这里给予你，这是一份专属你的烟花~'
        , function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('你还敢不愿意？', A);
    });
});

function A() {
    modal('信不信我锤爆你狗头', B);
}

function B() {
    modal('我强制你点开愿意！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">' +
        '<div class="mask"></div>' +
        '<div class="modal">' +
        '<p>' + content + '</p>' +
        '<button type="button" id="confirm" class="confirm">确定</button>' +
        '</div>' +
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}