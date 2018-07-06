
import 'pixi.js';
import * as filters from 'pixi-filters';
//import Barba from 'barba.js';
// import '../../node_modules/fullpage.js/vendors/jquery.easings.js';
// import '../../node_modules/fullpage.js/vendors/scrolloverflow.min.js';
import 'fullpage.js/dist/jquery.fullpage';
//import * as THREE from 'three';
import {TimelineMax} from 'gsap';
// import Draggable from 'gsap/Draggable';
// import ScrollMagic from 'scrollmagic';
// import 'animation.gsap';
// import 'debug.addIndicators';

let tl = new TimelineMax();

// $('#fullpage').fullpage({
//   anchors: ['one','two','three']
// });



// var text1 = $('.slog p.first').text();
// var text2 = $('.slog p.second').text();
// var text3 = $('.slog p.three').text();
// var arr1 = text1.split('');
// var arr2 = text2.split('');
// var arr3 = text3.split('');
// $('.slog p').text(' ');

// // console.log(arr.indexOf('a', 3));


// $.each(arr1,function(index) {
//   $('.slog p.first').append('<span>'+arr1[index]+'</span>');
//   $('.slog p.first span:eq('+ arr1.indexOf('j')+')').addClass('white ch-1');
// });

// $.each(arr2,function(index) {
//   $('.slog p.second').append('<span>'+ arr2[index]+'</span>');
//   $('.slog p.second span:eq('+ arr2.indexOf('a')+')').addClass('white ch-2');
//   $('.slog p.second span:eq('+ arr2.indexOf('f')+')').addClass('white ch-3');
//   $('.slog p.second span:eq('+ arr2.indexOf('n')+')').addClass('white ch-4');
// });

// $.each(arr3,function(index) {
//   $('.slog p.three').append('<span>'+arr3[index]+'</span>');
//   $('.slog p.three span:eq('+ arr3.indexOf('e')+')').addClass('white ch-5');
// });


// Draggable.create('.bounds',{
//   type:'x',
//   // bounds: '.scroll',
//   throwProps:true,
//   bounds:{minX:0, maxX: 470},
//   onDrag:Update
// });  

// function Update(i) {
//   var a = $('.scroll').parent().find('a');
  
//   var sum  = this.endX*0.02;
//   var w = parseInt(90) +sum + 0.6;
//   var h = parseInt(90) +sum + 0.6;

//   var ch1 = document.querySelector('.ch-1');
//   var ch1r = ch1;

//   console.log( this);
  
//   tl.to('.wrapper', 0.00001, {width: w+'%', height: h+'%'});
//   tl.fromTo('.slog p span',0.000,{opacity: 1},{opacity: 1-(this.endX/this.maxX)},0);

//   tl.to('.ch-1',0.00001,{x: this.endX*(-434/this.maxX)},0);
//   tl.to('.ch-2',0.00001,{x: this.endX*(-15/this.maxX),y: this.endX*(-30/this.maxX)},0); //-15 -30
//   tl.to('.ch-3',0.00001,{x: this.endX*(-410/this.maxX),y: this.endX*(-30/this.maxX)},0); //-410 -30
//   tl.to('.ch-4',0.00001,{x: this.endX*(-225/this.maxX),y: this.endX*(-30/this.maxX)},0); //-225 -30
//   tl.to('.ch-5',0.00001,{x: this.endX*(-160/this.maxX),y: this.endX*(-60/this.maxX)},0); //-160 -60

//   if(this.x > 250) {
//     tl.to('.d-title',0.00001,{opacity: -1.5+(this.endX/(this.maxX/2)), y: 20-(this.endX*(20/this.maxX)), ease: Back.easeOut.config(1.7)},0);
//   }
// };



// $(document).on('click', function() {
//   $.fn.fullpage.silentMoveTo('two', 1);
// });


// document.getElementById("primary-banner").addEventListener('load', function(e){
//   console.log(e.currentTarget);
// }, true);

// var left;
// var ev;
// $('body').click(function(event) {
//   left = event.target.offsetLeft;
//   ev = event.target;
// });

// var lastClicked;

// Barba.Dispatcher.on('linkClicked', function(el) {
//   lastClicked = el;
// });
// var ExpandTransition = Barba.BaseTransition.extend({
//   start: function() {

//     Promise
//       .all([this.newContainerLoading, this.enlargeThumb()])
//       .then(this.showNewPage.bind(this));
//   },

//   enlargeThumb: function() {
//     var deferred = Barba.Utils.deferred();
//     //    var thumbPosition = this.originalThumb.getBoundingClientRect();


//    	  // let cloned = lastClicked.cloneNode(true);
//    	  // cloned.classList.add('is-cloned');

//  	  //this.oldContainer.querySelector('.section').appendChild(cloned);
//     //ev.parentElement.parentElement.appendChild(cloned);

//     // 	  console.log(ev.parentElement.parentElement);
//     // this.cloneThumb = this.originalThumb.cloneNode(true);
//     // this.cloneThumb.style.position = 'absolute';
//     // this.cloneThumb.style.top = thumbPosition.top + 'px';

//     // this.oldContainer.appendChild(this.cloneThumb);

//     tl.to('.page-new', 1, {
//       width: '100%',height: '100%',
//       onComplete: function() {
//         deferred.resolve();
//       }
//     });
//     return deferred.promise;
//   },

//   showNewPage: function() {
//     this.newContainer.style.visibility = 'visible';
//     this.done();
//   }
// });


// var ShrinkTransition = Barba.BaseTransition.extend({
//   start: function() {
//     this.newContainerLoading.then(this.shrinkImage.bind(this));
//   },

//   shrinkImage: function() {
//     var _this = this;

//     this.oldContainer.style.zIndex = '10';
//     this.newContainer.style.visibility = 'visible';

//     var href = Barba.HistoryManager.prevStatus().url.split('/').pop();
//     var destThumb = this.newContainer.querySelector('a[href="' + href + '"]');
//     var destThumbPosition = destThumb.getBoundingClientRect();
//     var fullImage = this.oldContainer.querySelector('#bbbb');

//     TweenLite.to(this.oldContainer.querySelector('.back'), 1, { opacity: 0 });

//     TweenLite.to(fullImage, 1, {
//       width: '500px',
//       height: '500px',
//       onComplete: function() {
//         _this.done();
//         fullpage;
//       }
//     });
//   }
// });

// Barba.Pjax.getTransition = function() {
//   var transitionObj = ExpandTransition;

//   if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
//     transitionObj = ShrinkTransition;
//   }

//   return transitionObj;
// };
// Barba.Pjax.start();






























//import fragment from './fragment.glsl';
//import vertex from './vertex.glsl';

// $(window).scroll(function() {
//   if($(window).scrollTop() > 1) {
//     $('.img-2').addClass('active');
//     $('.text-main').addClass('active-sp');
//   }else{
//     $('.img-2').removeClass('active');
//     $('.text-main').removeClass('active-sp');
//   }
// });


// var spanT = $('.text-main span');
// for (var i = 1; i < spanT.length; i +=2) {
//   spanT[i].className += 'top';
// }
// for (var i = 0; i < spanT.length; i+=2) {
//   spanT[i].className += 'bottom';
// }

// let tl = new TimelineMax();


var app = new PIXI.Application(window.innerWidth, window.innerHeight, {transparent : true}); //создаем сцену с цветом, шириной и высотой
document.getElementById('body').appendChild(app.view); //добавляем в body созданую сцену.

//app.stage.interactive = true;

var container = new PIXI.Container(); // создаем один общий контейнер
var BgContainer = new PIXI.Container(); //создаем контейнер(слой) с картинкой

app.stage.addChild(container); //добавляем на сцену наш контейнер(общий)
container.addChild(BgContainer); //добавляем на общий контейнер слой(контейнер) с картинкой

//image
// var bg = PIXI.Sprite.fromImage('../img/girl1.jpg'); //создаем картинку

var txt1 = PIXI.Texture.fromImage('../img/girl1.jpg');
var txt2 = PIXI.Texture.fromImage('../img/girl2.jpg');
// create a new Sprite using the texture
var bg = new PIXI.Sprite(txt1);
bg.width = 420;
bg.height = 600;
bg.y= 0;
BgContainer.addChild(bg); //добавляем на контейнер(слой) нашу картинку.





//displacement
var dispSprite = PIXI.Sprite.fromImage('../img/displacement.png'); //создаем дисплейсмент мэп (картинку)
dispSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT; //передаем этой текстуре(дисплейсменту) цикличность, чтобы начиналась с начала
var dispFilter = new PIXI.filters.DisplacementFilter(dispSprite); //создаем фильтр из дисплейсмента
app.stage.addChild(dispSprite); // добавляем на сцену
BgContainer.filters = [dispFilter]; // передаем контейнеру(слою) с картинкой наш фильтр
dispFilter.scale.x = 1; //размытие по X
dispFilter.scale.y = 1; //размытие по Y
//end


// var filter = new filters.BulgePinchFilter();
// filter.strength = 0.1;
// filter.radius = 90;
// filter.center.x = 0.5;
// filter.center.y = 0.5;
// BgContainer.filters = [filter,dispFilter];


// var shock = new filters.ShockwaveFilter();
// shock.center.x = 500;
// shock.center.y = 480;
// shock.amplitude = 56;
// shock.radius = 2000;
// shock.amplitude = 100;
// container.filters = [filter,dispFilter,shock];

  
// var x = (e.pageX /screen.width).toFixed(2);
// var y = (e.pageY /screen.height).toFixed(2);
// filter.center.x = x;
// filter.center.y = y;





$('.title').mouseenter(function(e) {
  // $(e.target).css('opacity','1');
  $('.title').removeClass('tl-act');
  $(this).addClass('tl-act');
  // $('.title').css('opacity','0');

  var h =document.querySelector('.tl-act');
  var p= h.getBoundingClientRect();
  $('.tl-act').mousemove(function(event) {
    /*Adjust the clip-path*/
    // h.style.setProperty('--x',((event.originalEvent.offsetX+210)/$('.tl-act').width()*100)+'%');
    //h.style.setProperty('--x',(e.clientX-p.top)+'px');
    // h.style.setProperty('--y',(e.clientY-p.left)+'px');
    // h.style.setProperty('--y',(e.clientY-p.left)+'px');
    
    // console.log($('.tl-act').width() - event.originalEvent.offsetX );
    // if(event.originalEvent.offsetX >= $('.tl-act').width()/2) {
      
    //   h.style.setProperty('--xx',((event.originalEvent.offsetX)/$('.tl-act').width()*60)+'%');
    //   console.log((event.originalEvent.offsetX + $('.tl-act').width()/2)/$('.tl-act').width()*60);
    // }
    // console.log((event.originalEvent.offsetX - 420)/$('.tl-act').width()*60);
  });
});


$('.title').each(function() {
  var _this = $(this);
  var text = $(this).text();
  var text_arr = text.split('');

  $(this).text(' ');


  
  $.each(text_arr, function(i) {
    $(_this).append('<span>'+ text_arr[i] +'</span>');
  });
  
  for (var i = 1; i < $('span', _this).length; i += 2) {
    $('span', _this)[i].classList.add('red');
  }


  var array = [];
  $('.title').each(function() {
    array.push($(this).data('img').split('||'));
  });
  var result = [].concat(array[0],array[1],array[2] );

  $('span.red',this).each(function() {
    $(this).on('mouseenter',function() {   
      for (var i = 0; i < result.length; i++) {
        if($(this).index('.red') === i) {
          bg.texture = PIXI.Texture.fromImage(result[i]); 
        }
      }           
      // Math.floor(Math.random()*arr_img.length)
     
    });
  });

  $(_this).append('<div class="dublicate">'+text+'</div>');
  // $('.dublicate',_this).css('left',$('span', _this).position().left);


  $(this).mousemove(function(e) {
    bg.y = e.clientY - (bg.height/2);
    bg.x = e.clientX - (bg.width/2); 
    // bg.texture = PIXI.Texture.fromImage(arr_img[Math.floor(Math.random()*arr_img.length)]);
    
    tl.to($('.dublicate',_this),0.001,{width:  e.offsetX/$(this).width() * 100+'%'});
  });



  $(this).mouseout(function() {
    // tl.to($('.dublicate',_this),0,{width: 0+'%'});
    // $('.title').css('opacity','1');
    // tl.fromTo(dispFilter.scale,1,{y:1500},{y: 0});
    // bg.texture = PIXI.Texture.fromImage(arr_img[Math.floor(Math.random()*arr_img.length)]);
  });

});




TweenMax.ticker.addEventListener('tick',doWaves);
tl.to(dispFilter.scale,0.5,{x:25});
function doWaves() {
  dispSprite.x += 2; //ф-ция по смещению дисплейсмента по Иксу
};


// // Listen for animate update
app.ticker.add(function(delta) {
  app.renderer.render(container); //создаем рендер нашего общего контейнера
});





// var ExpandTransition = Barba.BaseTransition.extend({
//   start: function() {
//     Promise
//       .all([this.newContainerLoading, this.enlargeThumb()])
//       .then(this.showNewPage.bind(this));
//   },

//   enlargeThumb: function() {
//     var deferred = Barba.Utils.deferred();
//     // var thumbPosition = this.originalThumb.getBoundingClientRect();

    
//     //this.oldContainer.appendChild(this.cloneThumb);

//     tl.to(shock,2,{time: 3, onComlete: function() {
      
//       deferred.resolve();
//     }});

//     return deferred.promise;

//     console.log(this.newContainer);
//   },

//   showNewPage: function() {
//     this.newContainer.style.visibility = 'visible';

    
//     this.newContainer.appendChild(app.view);
//     this.newContainer.classList.add('active');
//     var src = $('.active').data('src');

//     var bg = PIXI.Sprite.fromImage(src);
//     BgContainer.addChild(bg);

//     console.log($('.active').data('src'));
//     //var src = $('#body').data('src');
//     //var bg = PIXI.Sprite.fromImage(src);
//     //tl.to(shock,2,{time: 3});
//     this.done(); 


//     // console.log(this.newContainer);
    
//     // tl.to(shock,1.5,{time: 3, onComplete: function() {
      
//     // }});

//   }
// });


// var ShrinkTransition = Barba.BaseTransition.extend({
//   start: function() {
//     this.newContainerLoading.then(this.shrinkImage.bind(this));
//     console.log(this.newContainerLoading.then(this.shrinkImage.bind(this)));
//   },

//   shrinkImage: function() {
//     var _this = this;

//     this.oldContainer.style.zIndex = '10';
//     this.newContainer.style.visibility = 'visible';

//     var href = Barba.HistoryManager.prevStatus().url.split('/').pop();
//     var destThumb = this.newContainer.querySelector('a[href="' + href + '"]');
//     var destThumbPosition = destThumb.getBoundingClientRect();
//     var fullImage = this.oldContainer.querySelector('#bbb');

//     TweenLite.to(this.oldContainer.querySelector('.back'), 0.2, { opacity: 0 });

//     this.newContainer.appendChild(app.view);
//     this.newContainer.classList.add('active');


//     //    var src = ;
//     var bg = PIXI.Sprite.fromImage('../img/1.jpg');
//     bg.width = 1920; //задаем ширину
//     bg.height = 1080; //задаем высоту
//     bg.y= 0;
//     BgContainer.addChild(bg);


//     TweenLite.to(fullImage, 0.3, {
//       height: 100,
//       onComplete: function() {

//         tl.to(shock,2,{time: 3, onComplete: function() {
//           _this.done();  
//         }});
        

//         //
//       }
//     });
//   }
// });

// Barba.Pjax.getTransition = function() {
//   var transitionObj = ExpandTransition;

//   if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
//     transitionObj = ShrinkTransition;
//   }

//   return transitionObj;
// };
// Barba.Pjax.start();
