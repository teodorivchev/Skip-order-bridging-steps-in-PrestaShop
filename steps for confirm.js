/*Избягване на всички натискания при поръчка за един юзер */
/*skip steps for confirm in shopping card*/
var url2 = window.location.href;
$(document).ready(function() {
    var al = $(".header_user_info span").html(); /*GET USER*/
    if (al === "Test Tesa") { /*USER*/
        if (url2 === "YOUR SITE/quick-order") {
            $(".button-small").attr("href", "YOUR SITE/module/bankwire/payment")
            $(".button-small").addClass("dirOrder");
            $('.button-small').text("Потвърди поръчката");
            $(".step-num").remove();
            $(".address_delivery").remove();
            $(".order_carrier_content").remove();
            $(".address_delivery select form-group selector1").remove();
            $(".address_delivery").remove();
            $(".addressesAreEquals").remove();
            $("ul").remove();
            $(".payment_module").remove();
            $(".address_add").remove();
            $(".warning").remove();

        }
    }
	/*auto submit form*/
    if (al === "Test Tesa") {
        if (url2 === "http://kanor.bg/module/bankwire/payment") {
            $('form').submit();
        }
    }
})