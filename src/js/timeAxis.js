import '../css/timeAxis.scss';
import './conmons/navmenu';
// import 'Swiper/dist/css/swiper.css';

var Swiper = require("Swiper/dist/js/swiper.min.js");

var modifier = 2; //每天的px
var historyList = [{
		"detail": "Swiper中文网上线",
		"date": "2014-11-21"
	},
	{
		"detail": "Swiper3.x版本上线",
		"date": "2015-02-11"
	},
	{
		"detail": "Swiper交友群开通",
		"date": "2015-02-26"
	},
	{
		"detail": "Swiper3.0.4，图片延迟加载",
		"date": "2015-03-06"
	},
	{
		"detail": "Swiper资源论坛上线[<a href='http://bbs.swiper.com.cn' target='_blank'>下载资源</a>]",
		"date": "2015-03-22"
	},
	{
		"detail": "Swiper交友群扩容至1000人",
		"date": "2015-07-27"
	},
	{
		"detail": "Swiper3.2.0，响应式设置",
		"date": "2015-11-07"
	},
	{
		"detail": "Swiper3.3.0，导航条样式增加",
		"date": "2016-01-10"
	},
	{
		"detail": "获得百度认证[<a href='https://www.baidu.com/s?wd=swiper' target='_blank'>看认证情况</a>]",
		"date": "2016-05-27"
	},
	{
		"detail": "Swiper3.4.0，变焦和历史状态",
		"date": "2016-10-16"
	},
	{
		"detail": "Swiper交友群人数达到2000",
		"date": "2017-01-19"
	},
	{
		"detail": "Swiper3.4.2",
		"date": "2017-03-10"
	},
	{
		"detail": "众多知名网站将Swiper作为滑动插件首选",
		"date": "2017-05-20"
	},
	{
		"detail": "Swiper4.0测试版上线",
		"date": "2017-08-30"
	},
];


var mySwiper = new Swiper('#swiper-history .swiper-container', {
	virtualTranslate: true,
	preventClicks: false,
	navigation: {
		nextEl: '#swiper-history .swiper-button-next',
		prevEl: '#swiper-history .swiper-button-prev',
	},
	pagination: {
		el: '#swiper-history .swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			if (index > 0) {
				var day1 = new Date(historyList[index]['date'].replace(/-/g, "/"));
				var day2 = new Date(historyList[index - 1]['date'].replace(/-/g, "/"));
				var time = day1 - day2
				var marginLeft = parseInt(time / (1000 * 60 * 60 * 24)) * modifier;
			} else {
				var marginLeft = 0
			}
			return '<span class="' + className + '" style="margin-left:' + marginLeft + 'px;"></span>';

		},
	},
	on: {
		init: function () {
			var mySlides = '';
			for (var i = 0; i < historyList.length; i++) {
				this.appendSlide('<div class="swiper-slide slide' + i + '"><span class="detail">' + historyList[i]['detail'] + '</span><span class="date">' + historyList[i]['date'] + '</span></div>');
				this.slides[i].style.transform = 'translate3d(' + (-i) * this.width + 'px, 0px, 0px)';
			}
			this.slideTo(13);
		},
		slideChangeTransitionStart: function () {
			var detailPrev = this.slides[this.previousIndex].querySelector('.detail');
			var datePrev = this.slides[this.previousIndex].querySelector('.date');
			detailPrev.offsetHeight;
			datePrev.offsetHeight;
			this.slides[this.previousIndex].style.zIndex = 1;
			detailPrev.style.opacity = datePrev.style.opacity = 0;
			detailPrev.style.transform = datePrev.style.transform = 'translate3d(0px, 0px, 0px)';

			var detailActive = this.slides[this.activeIndex].querySelector('.detail');
			var dateActive = this.slides[this.activeIndex].querySelector('.date')
			detailActive.offsetHeight;
			dateActive.offsetHeight;
			this.slides[this.activeIndex].style.zIndex = 999;
			detailActive.style.opacity = dateActive.style.opacity = 1;
			detailActive.style.transform = 'translate3d(0px, 10px, 0px)';
			dateActive.style.transform = 'translate3d(0px, -10px, 0px)';

			var moveDay1 = new Date(historyList[this.activeIndex]['date'].replace(/-/g, "/"));
			var moveDay2 = new Date(historyList[0]['date'].replace(/-/g, "/"));
			var moveTime = moveDay1 - moveDay2
			var moveDistance = parseInt(moveTime / (1000 * 60 * 60 * 24)) * modifier + 10 * this.activeIndex;
			var move = this.width / 2 - 5 - moveDistance;

			this.$el.find(".swiper-pagination").css('left', move + 'px'); //pagination会重新渲染，因此不能用this.pagination.$el
		},
	},

});