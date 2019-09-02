//$(function () {
//    
//     $('[data-toggle="tooltip"]').tooltip();
//    $('.dropdown-toggle').dropdown();
//    
//    $('#navbar').on('show.bs.collapse', function(){
//        $(this).css("opacity","1.00");
//        $("#navbar #myNavbar").css("border-top","1px solid #eee");
//    });
//
//    $('#navbar').on('hide.bs.collapse', function(){
//        $(this).css("opacity","0.9");
//        $("#navbar #myNavbar").css("border-top","none");
//    }); 
//});
var url = window.location;
$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

// Will also work for relative and absolute hrefs
$('ul.nav a').filter(function() {
    return this.href == url;
}).parent().addClass('active');

function setCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function changeCurType(){
	var cur = document.getElementById("currency-select");
	var strCur = cur.options[cur.selectedIndex].value;
	setCookie('c', strCur, 100);
	location.reload(true);
}
$('#submit_email').submit(function (e) {
	e.preventDefault();
	var postData = $(this).serialize();
	$.ajax({
		url: 'email_submit.php',
		type: 'POST',
		data: postData,
		success:function (r) {
			alert(r)
		}
	});
});
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
jQuery(document).ready(function() {
    var cur = (function () {
    var cur = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '//sp-today.com/fcur/fcur2.json',
        'dataType': "json",
        'success': function (data) {
            cur = data;
        }
    });
    return cur;
})();
var x = getCookie('c');
if (x == 'aleppo') {
	var url = '//sp-today.com/ticker-news/aleppo_cur.json';
}else {
	var url = '//sp-today.com/ticker-news/cur.json';
}
    var cursyp = (function () {
    var cursyp = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        'success': function (data) {
            cursyp = data;
        }
    });
    return cursyp;
})();
            
    $('#f_amount').add('#from').add('#to').add('#sell_radio').add('#buy_radio').bind("change paste keyup", function() {
        if($('#sell_radio').is(':checked')){
            cur.USDSYP = cursyp[0].sell_price;
            cur.EURSYP = cursyp[1].sell_price;
            cur.TRYSYP = cursyp[2].sell_price;
            cur.EGPSYP = cursyp[3].sell_price;
            cur.SARSYP = cursyp[4].sell_price;
            cur.JODSYP = cursyp[5].sell_price;
            cur.AEDSYP = cursyp[6].sell_price;
            cur.QARSYP = cursyp[7].sell_price;
            cur.BHDSYP = cursyp[8].sell_price;
            cur.LYDSYP = cursyp[9].sell_price;
            cur.KWDSYP = cursyp[10].sell_price;
            cur.OMRSYP = cursyp[11].sell_price;
            cur.GBPSYP = cursyp[12].sell_price;
            cur.SEKSYP = cursyp[13].sell_price;
            cur.CADSYP = cursyp[14].sell_price;
            cur.NOKSYP = cursyp[15].sell_price;
            cur.DKKSYP = cursyp[16].sell_price;
        }else{
            cur.USDSYP = cursyp[0].buy_price;
            cur.EURSYP = cursyp[1].buy_price;
            cur.TRYSYP = cursyp[2].buy_price;
            cur.EGPSYP = cursyp[3].buy_price;
            cur.SARSYP = cursyp[4].buy_price;
            cur.JODSYP = cursyp[5].buy_price;
            cur.AEDSYP = cursyp[6].buy_price;
            cur.QARSYP = cursyp[7].buy_price;
            cur.BHDSYP = cursyp[8].buy_price;
            cur.LYDSYP = cursyp[9].buy_price;
            cur.KWDSYP = cursyp[10].buy_price;
            cur.OMRSYP = cursyp[11].buy_price;
            cur.GBPSYP = cursyp[12].buy_price;
            cur.SEKSYP = cursyp[13].buy_price;
            cur.CADSYP = cursyp[14].buy_price;
            cur.NOKSYP = cursyp[15].buy_price;
            cur.DKKSYP = cursyp[16].buy_price;
        }
        from = $('#from').val();
        to = $('#to').val();

        if(from == 'SYP' || to == 'SYP')
            $('.sell_buy').fadeIn(200);
        else
            $('.sell_buy').fadeOut(200);
        
        if(cur[from+to]){
            rate = cur[from+to];
        }else if(cur[to+from] && !cur[from+to]){
            rate = 1/cur[to+from];
        }else if(from == to){
            rate = 1;
        }else{
            rate = cur[from+to];
        }
        $('#t_amount').val(Math.round($('#f_amount').val() * rate * 1000) /1000);
    });
    
    $('#t_amount').add('#to').add('#from').add('#sell_radio').add('#buy_radio').bind("change paste keyup", function() {
        if($('#sell_radio').is(':checked')){
            cur.USDSYP = cursyp[0].sell_price;
            cur.EURSYP = cursyp[1].sell_price;
            cur.TRYSYP = cursyp[2].sell_price;
            cur.EGPSYP = cursyp[3].sell_price;
            cur.SARSYP = cursyp[4].sell_price;
            cur.JODSYP = cursyp[5].sell_price;
            cur.AEDSYP = cursyp[6].sell_price;
            cur.QARSYP = cursyp[7].sell_price;
            cur.BHDSYP = cursyp[8].sell_price;
            cur.LYDSYP = cursyp[9].sell_price;
            cur.KWDSYP = cursyp[10].sell_price;
            cur.OMRSYP = cursyp[11].sell_price;
            cur.GBPSYP = cursyp[12].sell_price;
            cur.SEKSYP = cursyp[13].sell_price;
            cur.CADSYP = cursyp[14].sell_price;
            cur.NOKSYP = cursyp[15].sell_price;
            cur.DKKSYP = cursyp[16].sell_price;
        }else{
            cur.USDSYP = cursyp[0].buy_price;
            cur.EURSYP = cursyp[1].buy_price;
            cur.TRYSYP = cursyp[2].buy_price;
            cur.EGPSYP = cursyp[3].buy_price;
            cur.SARSYP = cursyp[4].buy_price;
            cur.JODSYP = cursyp[5].buy_price;
            cur.AEDSYP = cursyp[6].buy_price;
            cur.QARSYP = cursyp[7].buy_price;
            cur.BHDSYP = cursyp[8].buy_price;
            cur.LYDSYP = cursyp[9].buy_price;
            cur.KWDSYP = cursyp[10].buy_price;
            cur.OMRSYP = cursyp[11].buy_price;
            cur.GBPSYP = cursyp[12].buy_price;
            cur.SEKSYP = cursyp[13].buy_price;
            cur.CADSYP = cursyp[14].buy_price;
            cur.NOKSYP = cursyp[15].buy_price;
            cur.DKKSYP = cursyp[16].buy_price;
        }
        to = $('#to').val();
        from = $('#from').val();
        if(cur[to+from] && !cur[from+to]){
            rate = cur[to+from];
        }else if(!cur[to+from] && cur[from+to]){
            rate = 1/cur[from+to];
        }else if(from == to){
            rate = 1;
        }
        else{
            rate = cur[from+to];
        }
        $('#f_amount').val(Math.round($('#t_amount').val() * rate * 1000) /1000);
    });
    
});