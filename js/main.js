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
    })
    .to('.sc_intro .img_wrap', {
      opacity: 0,
      yPercent: -50,
      delay: .3,
    })

  let introTitle = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_intro',
      start: "1px top",
      end: '+=2000',
      pin: '.sc_intro',
      scrub: 1,
    },
  });

  let introTxt = new SplitType('.sc_intro .title_area h2', {
    types: 'words, chars',
  });
  introTitle.from(introTxt.chars, {
      yPercent: 100,
      stagger: 0.1,
    })
    .to(introTxt.chars, {
      yPercent: -100,
      delay: .3,
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
    opacity: .9,
  })

  let firstPjSum = gsap.timeline({
    scrollTrigger: {
      trigger: $('.first_summary'),
      start: 'top top',
      end: '+=8000',
      scrub: 1,
      pin: true,
    }
  })
  firstPjSum
    .from('.first_summary .cnt_area_right .cnt02 .fade', {
      yPercent: 200,
      opacity: 0,
      stagger: 0.1,
    })
    .to('.first_summary .cnt_area_right .cnt02 .fade', {
      immediateRender: false,
      yPercent: -200,
      opacity: 0,
      delay: .3,
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
    .from('.first_summary .cnt_area_right .cnt04 li', {
      borderBottom: '1px solid transparent',
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
    .to('.first_summary .cnt_area_right .cnt04 li', {
      borderBottom: '1px solid transparent',
      delay: .2,
    }, 'cnt04')
})