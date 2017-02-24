/**
 * Created by chenzhitao on 2017/2/23.
 */
//初始化
var $imgs = $(".container .imglist li");
var $imglist = $(".imglist");
var $prebtn = $(".container .prebtn");
var $nextbtn = $(".container .nextbtn");
var $bullet = $(".container .bullet li");
var imgcount = $imgs.length;
var imgwidth = $imgs.width();
var pageIndex = 0;
var isAnimate = false;
$imglist.append($imgs.eq(0).clone());
$imglist.prepend($imgs.last().clone());
$imglist.width((imgcount+2)*imgwidth);

$imglist.css({left:-imgwidth});

$prebtn.click(function () {
    playPre(1);
})

$nextbtn.click(function () {
    playNext(1);
})

$bullet.click(function () {
    var index = $(this).index();
    if(index > pageIndex){
        playNext(index-pageIndex);
    }else if(index < pageIndex){
        playPre(pageIndex-index);
    }
})
setInterval(function () {
    playNext(1)
},2000)
function  playNext(len) {
    if(isAnimate == true) return;
    isAnimate = true;
    $imglist.animate(
        {left:"-="+len*imgwidth},function () {
            pageIndex += len;
            if(pageIndex === imgcount){
                $imglist.css({left:-imgwidth});
                pageIndex = 0;

            }
            setBullet();
            isAnimate = false;

        }
    );

}

function playPre(len) {

    if(isAnimate == true) return;
    isAnimate = true;
    $imglist.animate(
        {left:"+="+len*imgwidth},function () {
            pageIndex -= len;
            if(pageIndex <0){
                $imglist.css({left:-imgwidth*imgcount})
                pageIndex = imgcount - 1;

            }
            setBullet();
            isAnimate = false;
        }
    )

}

function  setBullet() {
    $bullet.removeClass("active");
    $bullet.eq(pageIndex).addClass("active");
}