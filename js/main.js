$(function () {
  let introImg = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_intro',
      start: '1px top',
      end: '+=2000',
      scrub: 1,
      pin: true,
    }
  })

  introImg
    .from('.sc_intro .img_wrap', {
      opacity: 0,
      yPercent: -50,
      duration: 2,
    })
    .to('.sc_intro .img_wrap', {
      opacity: 0,
      yPercent: -50,
      delay: .3,
      duration: 2,
    })

  let introTitle = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_intro',
      start: "1px top",
      end: '+=2000',
      scrub: 1,
      pin: true,
    },
  });

  let introTxt = new SplitType('.sc_intro .title_area h2', {
    types: 'words, chars',
  });
  introTitle.from(introTxt.chars, {
      yPercent: 100,
      stagger: 0.1,
      duration: 2,
    })
    .to(introTxt.chars, {
      yPercent: -100,
      delay: .3,
      duration: 2,
    })

  $('.sc_project .title_area > * span').each(function (index, item) {
    let triggerEl = $(this).parents('section');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top top',
        end: '+=2000',
        scrub: 1,
        pin: true,
      }
    });

    tl.from(item, {
        yPercent: 200,
        opacity: 0,
      })
      .to(item, {
        immediateRender: false,
        yPercent: -200,
        delay: .3,
      })
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('.first_int').offset().top) {
      $('.pagination').css({
        'display': 'flex'
      });
      $('.pagination .page_name').text('PC Page_대한항공');
    } else if ($(window).scrollTop() >= $('.second_int').offset().top) {
      $('.pagination .page_name').text('Mobile Page_이케아');
    } else if ($(window).scrollTop() >= $('.third_int').offset().top) {
      $('.pagination .page_name').text('Responsible Page_나이키');
    } else {
      $('.pagination').css({
        'display': 'none'
      });
    }
  })

  $('.summary').each(function (index, item) {
    let triggerEl = $(this);
    let l_cnt01Wrap = $(this).find('.cnt_area_left .cnt_wrap');
    let l_cnt01 = $(this).find('.cnt_area_left .cnt_wrap .cnt01');
    let r_cnt02 = $(this).find('.cnt_area_right .cnt02 .description p');
    let l_cnt03Cover01 = $(this).find('.cnt_area_left .cnt03 .img_cover01');
    let l_cnt03Cover02 = $(this).find('.cnt_area_left .cnt03 .img_cover02');
    let l_cnt03Wrap = $(this).find('.cnt_area_left .cnt03 .img_wrap');
    let r_cnt03 = $(this).find('.cnt_area_right .cnt03');
    let r_cnt03Cover01 = $(this).find('.cnt_area_right .cnt03 .img_cover01');
    let l_cnt04 = $(this).find('.cnt_area_left .cnt04');
    let r_cnt03Cover02 = $(this).find('.cnt_area_right .cnt03 .img_cover02');
    let r_cnt04Txt = $(this).find('.cnt_area_right .cnt04 .description p')
    let r_cnt04Li = $(this).find('.cnt_area_right .cnt04 li')
    let r_cnt04 = $(this).find('.cnt_area_right .cnt04');

    gsap.to(l_cnt01Wrap, {
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        duration: 1,
        markers: true,
      },
      width: '100%',
    })
    gsap.to(l_cnt01, {
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: .1,
      },
      opacity: .9,
    })

    let firstPjSum = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top top',
        end: '+=9000',
        scrub: 1,
        pin: true,
      }
    })

    firstPjSum
      .from(r_cnt02, {
        yPercent: 200,
        opacity: 0,
        stagger: 0.1,
      })
      .to(r_cnt02, {
        immediateRender: false,
        yPercent: -200,
        opacity: 0,
        delay: .3,
      })
      .to(l_cnt03Cover01, {
        width: '50%',
      }, 'cnt03-1')
      .to(l_cnt03Cover02, {
        height: '50%',
      }, 'cnt03-1')
      .to(r_cnt03, {
        display: 'block',
      }, 'cnt03-1')
      .to(r_cnt03Cover01, {
        width: 0,
      }, 'cnt03-1')
      .from(l_cnt03Wrap, {
        clipPath: 'inset(50%)',
      }, 'cnt03-1')
      .to(l_cnt03Wrap, {
        clipPath: 'inset(50%)',
      }, 'cnt03-2')
      .from(l_cnt04, {
        clipPath: 'inset(50%)',
      }, 'cnt03-2')
      .to(r_cnt03Cover02, {
        height: '50%',
      }, 'cnt03-2')
      .to(r_cnt04, {
        display: 'flex',
        delay: .2,
      }, 'cnt03-2')
      .from(r_cnt04Li, {
        opacity: 0,
      }, 'cnt03-3')
      .from(r_cnt04Txt, {
        yPercent: 200,
        opacity: 0,
        delay: .2,
      }, 'cnt03-3')
      .to(r_cnt04Txt, {
        immediateRender: false,
        yPercent: -200,
        opacity: 0,
        delay: .2,
      }, 'cnt04-1')
      .to(r_cnt04Li, {
        opacity: 0,
      }, 'cnt04-1')
      .to(r_cnt04, {
        display: 'none',
      }, 'cnt04-2')
  })
})