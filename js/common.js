
$(function () {
	//숙박할인권 받으러가기 버튼
	$('.btn_goCoupon').click(function(){
		$('#contents').addClass('openCoupon');
	})

	//숙박할인권 랜덤 출력
	var arrCoupon = new Array();
	var c_1 = "<li><a href='",
		c_1_d = "<li class='disabled'><a href='",
		c_2 = "' target='_blank'><img src='../images/coupon/img-coupon-",
		c_3 = ".png' alt=''><img src='../images/coupon/img-coupon-",
		c_4 = "-disabled.png' alt='' class='img_disabled'></a></li>";

		//로고 이미지, 링크 수급예정

		arrCoupon[0] = c_1 + '#' + c_2 + '0' + c_3 + '0' + c_4;
		arrCoupon[1] = c_1_d + '#' + c_2 + '1' + c_3 + '1' + c_4;
		arrCoupon[2] = c_1 + '#' + c_2 + '2' + c_3 + '2' + c_4;
		arrCoupon[3] = c_1_d + '#' + c_2 + '3' + c_3 + '3' + c_4;
		arrCoupon[4] = c_1 + '#' + c_2 + '4' + c_3 + '4' + c_4;
		arrCoupon[5] = c_1 + '#' + c_2 + '5' + c_3 + '5' + c_4;
		arrCoupon[6] = c_1 + '#' + c_2 + '6' + c_3 + '6' + c_4;
		arrCoupon[7] = c_1 + '#' + c_2 + '7' + c_3 + '7' + c_4;
		arrCoupon[8] = c_1 + '#' + c_2 + '8' + c_3 + '8' + c_4;
		arrCoupon[10] = c_1 + '#' + c_2 + '9' + c_3 + '9' + c_4;

	var couponLength = arrCoupon.length;

	for(var i=0;i<=couponLength;i++){
		var movenum = arrCoupon.splice(Math.floor(Math.random() * arrCoupon.length),1)[0]
		$('.coupon_wrap').append(movenum);
	}

})

