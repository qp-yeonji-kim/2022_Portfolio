/*   
  const menu_arr = ['대한항공', '이케아', '나이키']

  $('.sc_project').each(function(index, item){
    let Top = $(this).scrollTop();
  });

  $(window).scroll(function(){
    let curTop = $(window).scrollTop();
    let contTop = $('.sc_project').scrollTop();
    배열로 만드는 방법?
    if (curTop = contTop){
      $('.pagination .cur').text($('.sc_project').index());
      $('.pagination .page_nmae').text(menu_arr[idx]);
    }
  }) 

https://codepen.io/ChrisCrossCrash/pen/YzwjKYG
*/

/* 

  intro = gsap.timeline({
    scrollTriger:{

    }

    intro.from('mtxt')
    intro.from('y: -100')
    intro.from('y: -100')
    intro.from('pen')
    intro.from(intro'y: -100' 1.2)
    intro.from(intro img'y: -10', .1)<-속도 조절

  })

  const motion

  motion.pause();

  motion01.restart();

  reverse


*/


/* each index item 
변수 처리를 해줘야 함 자식들..
$(this).find('우쨰구')

물어보기...

snap

*/
$(function () {
  $('.cntMotion > *').each(function (index, item) {
    let triggerEl = $(this).parents('section');
    let yVal = $(this).data('y') ? $(this).data('y') : 200;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top top',
        end: '+=5000',
        scrub: 1,
        pin: true,
      }
    })

    tl.from(item, {
        yPercent: yVal,
        opacity: 0,
      })
      .to(item, {
        immediateRender: false,
        yPercent: -200,
        opacity: 0,
        delay: .2,
      })
  })

  gsap.to('.first_summary .cnt_area_left .cnt_wrap', {
    scrollTrigger: {
      trigger: $('.first_summary'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
    width: '100%',
  })
  gsap.to('.first_summary .cnt_area_left .cnt_wrap .cnt01', {
    scrollTrigger: {
      trigger: $('.first_summary'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: .1,
    },
    opacity: 1,
  })

  let firstPjSum = gsap.timeline({
    scrollTrigger: {
      trigger: $('.first_summary'),
      start: 'top top',
      end: '+=5000',
      scrub: 1,
      pin: true,
    }
  })

  firstPjSum
    .from('.first_summary .cnt_area_right .cnt02 .fade', {
      yPercent: 200,
      opacity: 0,
    })
    .to('.first_summary .cnt_area_right .cnt02 .fade', {
      immediateRender: false,
      yPercent: -200,
      opacity: 0,
      delay: .2,
    })
    .to('.first_summary .cnt_area_right .cnt03', {
      display: 'block',
    })
    .to('.first_summary .cnt_area_right .cnt03 .img_cover01', {
      width: 0,
    }, 'cnt03-1')
    .to('.first_summary .cnt_area_right .cnt03 .img_cover02', {
      height: '50%',
    }, 'cnt03-2')
    .to('.first_summary .cnt_area_left .cnt03 .img_cover01', {
      width: '50%',
    }, 'cnt03-1')
    .to('.first_summary .cnt_area_left .cnt03 .img_cover02', {
      height: '50%',
    }, 'cnt03-1')
    .from('.first_summary .cnt_area_left .cnt03 .img_wrap', {
      clipPath: 'inset(50%)',
    }, 'cnt03-1')
    .to('.first_summary .cnt_area_left .cnt03 .img_wrap', {
      clipPath: 'inset(50%)',
    }, 'cnt03-2')
    .from('.first_summary .cnt_area_left .cnt04', {
      clipPath: 'inset(50%)',
    }, 'cnt03-2')
    .to('.first_summary .cnt_area_right .cnt04', {
      display: 'flex',
      delay: .2,
    }, 'cnt03-2')
    .from('.first_summary .cnt_area_right .cnt04 .fade', {
      yPercent: 200,
      opacity: 0,
      delay: .2,
    }, 'cnt03-2')
    .to('.first_summary .cnt_area_right .cnt04 .fade', {
      immediateRender: false,
      yPercent: -200,
      opacity: 0,
      delay: .2,
    }, 'cnt04')
    .to('.first_summary .cnt_area_right .cnt04', {
      display: 'none',
    }, 'cnt04')



    
  /* 끝 */
})