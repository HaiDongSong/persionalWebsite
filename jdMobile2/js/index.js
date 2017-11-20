window.onload = function(){
	headerScroll();
	
	cutDownTime();
	
	banner();
	
}
function headerScroll(){
	var jd_nav = document.querySelector('.jd_nav');
	var jd_header = document.querySelector('.jd_header');
	
	var maxDistance = jd_nav.offsetHeight + jd_nav.offsetTop;
	
	
	jd_header.style.backgroundColor = 'rgba(201, 21, 35, 0)';
	
	window.onscroll = function(){
		var scrollTop = window.document.body.scrollTop;
		var percentage = scrollTop / maxDistance;
		if(percentage > 1 )
		{		
			percentage = 1;

		}
		jd_header.style.backgroundColor = 'rgba(201, 21, 35, '+percentage+')';		
	}
	
	
	
}

function cutDownTime(){
	var setHour = 12;
	conversionSecond = setHour * 60 * 60;;
	
	
	var liAll = document.querySelectorAll('.jd_main .main_content:nth-child(1) .content_top li');
	console.log(liAll);
	
	conversionSecond++;
	var timeId = setInterval(function(){
		if(conversionSecond <= 0)
		{
//			clearInterval(timeId);
			console.log('结束啦！');
			console.log('活动又开始啦！');
			
			conversionSecond = setHour * 60 * 60;;
			return;
		}
		conversionSecond--;
		var hour = Math.floor(conversionSecond / 3600);
		var minute = Math.floor(conversionSecond%3600/60);
		var second = Math.floor(conversionSecond%60);
		liAll[0].innerHTML = Math.floor(hour/10);
		liAll[1].innerHTML = hour%10;
		liAll[3].innerHTML = Math.floor(minute/10);
		liAll[4].innerHTML = minute%10;
		liAll[6].innerHTML = Math.floor(second/10);
		liAll[7].innerHTML = second%10;
	},1000);
	
}
	
function banner() {
	var width = document.body.offsetWidth;
	var bannerUl = document.querySelector('.banner_images');
	var bannerLiAll = document.querySelectorAll('.banner_index li');
	var index = 1;
	var timeId = setInterval(function(){
		
		index++;
		bannerUl.style.transition = 'all .3s';
		bannerUl.style.transform = 'translateX('+width*index*-1+'px)';
			
	},1000);
	
	bannerUl.addEventListener('webkitTransitionEnd',function(){
		console.log(' Transition over!');
		if(index > 8)
		{
			index = 1;
			bannerUl.style.transition = '';
			bannerUl.style.transform = 'translateX('+index*width*-1+'px)';
		}else if(index < 1){
			index = 8;
			bannerUl.style.transition = '';
			bannerUl.style.transform = 'translateX('+index*width*-1+'px)';
		}
		for(var i = 0; i < bannerLiAll.length;i++){
			bannerLiAll[i].className = '';
		}
		bannerLiAll[index-1].className = 'current';	
	});
	
	//三个触摸事件
	var startX = 0;
	var moveX = 0;
	var distanceX = 0;
	
	bannerUl.addEventListener('touchstart',function (event){
		clearInterval(timeId);
		bannerUl.style.transition = '';
		startX = event.touches[0].clientX;
		
	});
	bannerUl.addEventListener('touchmove',function(event){
		moveX = event.touches[0].clientX - startX;
		bannerUl.style.transform = 'translateX('+(index*-1*width+moveX)+'px)';
	});
	bannerUl.addEventListener('touchend',function(event){
		
		if(Math.abs(moveX) > width/3)
		{
			if(moveX>0)
			{
				index--;
			}
				
			else{
				index++;
			}
			bannerUl.style.transition = 'all .3s';
			bannerUl.style.transform = 'translateX('+width*index*-1+'px)';
				
		}		
		bannerUl.style.transition = 'all .3s';
		bannerUl.style.transform = 'translateX('+width*index*-1+'px)';
		
		
		
		timeId = setInterval(function(){
			index++;
			bannerUl.style.transition = 'all .3s';
			bannerUl.style.transform = 'translateX('+width*index*-1+'px)';
		},1000);
		
		
	});
	
}
