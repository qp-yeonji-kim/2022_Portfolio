$(function () {
  $(window).scroll(function () {
    let first_intTop = $('.first_int').offset().top;
    let second_intTop = $('.second_int').offset().top;
    let third_intTop = $('.third_int').offset().top;
    let footerTop = $('.sc_contact').offset().top;
    let curTop = $(window).scrollTop();

    if (second_intTop > curTop && curTop >= first_intTop) {
      $('.pagination').css({
        'display': 'block'
      });
      $('.pagination .cur').text('01');
      $('.pagination .page_name').text('PC Page_대한항공');
    } else if (third_intTop > curTop && curTop >= second_intTop) {
      $('.pagination .cur').text('02');
      $('.pagination .page_name').text('Mobile Page_이케아');
    } else if (footerTop > curTop && curTop >= third_intTop) {
      $('.pagination .cur').text('03');
      $('.pagination .page_name').text('Responsible Page_나이키');
    } else {
      $('.pagination').css({
        'display': 'none'
      });
    }
  })

  $('header .menu_btn').on('click', function () {
    $(this).toggleClass('on');
    $('.nav').toggleClass('on');

    if($(this).hasClass('on')){
      let menuTxt = gsap.timeline();
      menuTxt.from('.nav .gnb li a', {
        yPercent: 100,
        duration: .4,
      })
    }
  });

  $('.nav .gnb a, header .contact_btn').on('click', function () {
    $('header .menu_btn, .nav').removeClass('on');
  });

  let introImg = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_title',
      start: '1px top',
      end: '+=2000',
      scrub: 1,
      pin: true,
    }
  })

  introImg
    .from('.sc_title .img_wrap', {
      opacity: 0,
      yPercent: -50,
      duration: 2,
    })
    .to('.sc_title .img_wrap', {
      opacity: 0,
      yPercent: -50,
      delay: .3,
      duration: 2,
    })

  let introTitle = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_title',
      start: "1px top",
      end: '+=2000',
      scrub: 1,
      pin: true,
    },
  });

  let introTxt = new SplitType('.sc_title .title_area h2', {
    types: 'words, chars',
  });
  introTitle.from(introTxt.chars, {
      yPercent: 100,
      stagger: 0.1,
      duration: 3,
    })
    .to(introTxt.chars, {
      yPercent: -100,
      delay: .3,
      duration: 3,
    })

  $('.sc_project').each(function (index, item) {
    let sc_intro = $(this).find('.sc_intro');
    let sc_intro_span = $(this).find('.sc_intro .title_area > * span');
    let sc_summary = $(this).find('.sc_summary');
    let l_cnt01Wrap = sc_summary.find('.cnt_area_left .cnt_wrap');
    let l_cnt01 = sc_summary.find('.cnt_area_left .cnt_wrap .cnt01');
    let r_cnt02 = sc_summary.find('.cnt_area_right .cnt02 span');
    let l_cnt03Cover01 = sc_summary.find('.cnt_area_left .cnt03 .img_cover01');
    let l_cnt03Cover02 = sc_summary.find('.cnt_area_left .cnt03 .img_cover02');
    let l_cnt03Wrap = sc_summary.find('.cnt_area_left .cnt03 .img_wrap');
    let r_cnt03 = sc_summary.find('.cnt_area_right .cnt03');
    let r_cnt03Cover01 = sc_summary.find('.cnt_area_right .cnt03 .img_cover01');
    let l_cnt04 = sc_summary.find('.cnt_area_left .cnt04');
    let r_cnt03Cover02 = sc_summary.find('.cnt_area_right .cnt03 .img_cover02');
    let r_cnt04Tit = sc_summary.find('.cnt_area_right .cnt04 .title_wrap span')
    let r_cnt04Txt = sc_summary.find('.cnt_area_right .cnt04 .description span')
    let r_cnt04Li = sc_summary.find('.cnt_area_right .cnt04 li')
    let r_cnt04Link = sc_summary.find('.cnt_area_right .cnt04 .link_renewal span')
    let r_cnt04 = sc_summary.find('.cnt_area_right .cnt04');

    let intro_tl = gsap.timeline({
      scrollTrigger: {
        trigger: sc_intro,
        start: 'top top',
        end: '+=2000',
        scrub: 1,
        pin: true,
      }
    });

    intro_tl.from(sc_intro_span, {
        yPercent: 200,
        opacity: 0,
      })
      .to(sc_intro_span, {
        immediateRender: false,
        yPercent: -200,
        delay: .3,
      })

    gsap.to(l_cnt01Wrap, {
      scrollTrigger: {
        trigger: sc_summary,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        duration: .4,
      },
      width: '100%',
    })
    gsap.to(l_cnt01, {
      scrollTrigger: {
        trigger: sc_summary,
        start: 'top bottom',
        end: 'bottom top',
        scrub: .1,
      },
      opacity: .9,
    })

    let sum_tl = gsap.timeline({
      scrollTrigger: {
        trigger: sc_summary,
        start: 'top top',
        end: '+=8000',
        scrub: 1,
        pin: true,
      }
    })

    sum_tl
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
        duration: .4,
      }, 'cnt03-1')
      .to(l_cnt03Cover02, {
        height: '50%',
        duration: .4,
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
      }, 'cnt03-2')
      .from(r_cnt04Tit, {
        yPercent: 200,
        opacity: 0,
        stagger: 0.1,
      }, 'cnt03-3')
      .from(r_cnt04Li, {
        opacity: 0,
      }, 'cnt03-3')
      .from(r_cnt04Txt, {
        yPercent: 200,
        opacity: 0,
      }, 'cnt03-3')
      .from(r_cnt04Link, {
        yPercent: 200,
      }, 'cnt03-3')
      .to(r_cnt04Link, {
        yPercent: -200,
      }, 'cnt04-1')
      .to(r_cnt04Txt, {
        yPercent: -200,
        duration: .4,
      }, 'cnt04-1')
      .to(r_cnt04Tit, {
        immediateRender: false,
        yPercent: -200,
        opacity: 0,
        duration: .4,
      }, 'cnt04-1')
      .to(r_cnt04Li, {
        opacity: 0,
        duration: .4,
      }, 'cnt04-1')
      .to(r_cnt04, {
        display: 'none',
        duration: .4,
      }, 'cnt04-2')
  })
})