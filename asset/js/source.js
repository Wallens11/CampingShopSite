document.getElementById("year").innerHTML = new Date().getFullYear();

$(document).ready(function () {
    $('.mv').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

$(function () {
    $('.top').on('inview', function (event, isInView) {
        //一度のみのinviewの際は　.oneにする
        if (isInView) {
            // .visibleがビューポートに入った場合
            $(this).addClass('effect');
        } else {
            // .visibleがビューポートにから抜けた場合
            $(this).removeClass('effect');
        }
        //$('#footer').off('inview');
    });
});

function buy(product_name, product_price){
    const message = `商品をご購入したいです。商品コード : ${product_name}、${product_price}`
    const whatsapp = `https://wa.me/818075517003?text=${message}`
    open(whatsapp, "_blank")
}