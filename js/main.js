const t1 = document.querySelectorAll('.first');
const t2 = document.querySelectorAll('.second');

function playAnimation() {
  TweenMax.staggerFromTo(
    t1,
    4,
    {
      opacity: 0,
      x: -1000,
      ease: Elastic.easeOut.config(1.2, 0.9)
    },
    {
      opacity: 1,
      x: 0,
      ease: Elastic.easeOut.config(1.2, 0.9)
    }
  );

  TweenMax.staggerFromTo(
    t2,
    4,
    {
      opacity: 0,
      x: 1000,
      ease: Elastic.easeOut.config(1.2, 0.9)
    },
    {
      opacity: 1,
      x: 0,
      ease: Elastic.easeOut.config(1.2, 0.9)
    }
  );
}

// ScrollTrigger를 사용하여 애니메이션 트리거 설정
ScrollTrigger.create({
  trigger: '.first',
  start: 'top 80%',
  onEnter: playAnimation,
  onEnterBack: playAnimation
});


const lnb = document.querySelector('.lnb')
let lnbHeight = lnb.offsetHeight;

window.addEventListener('scroll', function(){
    let windowTop = window.scrollY;
    if (windowTop >= lnbHeight) {
        lnb.classList.add('drop')
    } else {
        lnb.classList.remove('drop');
    }

})


gsap.utils.toArray(".section").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
        trigger: item,
        start: "top 30%",
        end: "bottom 5%",

        onEnter: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.4
        }),
        onEnterBack: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.4
        }),
    });
});



//부드러운 스크롤
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


/*tab_menu*/



const tabItem = document.querySelectorAll('.tab_item')
const tabInner = document.querySelectorAll('.tab_content')

tabItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        tabInner.forEach((inner)=> {
            inner.classList.remove('active')
        })

        tabItem.forEach((item)=> {
            item.classList.remove('active')
        })

        tabItem[idx].classList.add('active')
        tabInner[idx].classList.add('active')

       

        
    })
})

//제이쿼리 lnb 스크롤
$(function() {
    // lnb_style(window scroll_event)
    $(window).scroll(function() {
      if ($(this).scrollTop() <= 500) {
        $('.lnb_list li').removeClass('on');
      }else if ($(this).scrollTop() <= 1000) {
        $('.lnb_list li').removeClass('on');
        $('.lnb_list li').eq(0).addClass('on');
      } else if ($(this).scrollTop() <= 2500) {
        $('.lnb_list li').removeClass('on');
        $('.lnb_list li').eq(1).addClass('on');
      } else if ($(this).scrollTop() <= 3500) {
        $('.lnb_list li').removeClass('on');
        $('.lnb_list li').eq(2).addClass('on');
      } else if ($(this).scrollTop() <= 4500) {
        $('.lnb_list li').removeClass('on');
        $('.lnb_list li').eq(3).addClass('on');
      }
    });
  });
  

  $(document).ready(function() {
    // lnb 클릭 이벤트 리스너
    $('.lnb_list li a').on('click', function(event) {
      event.preventDefault(); // 기본 동작 방지
  
      let targetId = $(this).attr('href'); // 대상 섹션의 ID 가져오기
      let targetSection = $(targetId); // 대상 섹션 요소 가져오기
  
      // 부드러운 스크롤 이동
      $('html, body').animate({
        scrollTop: targetSection.offset().top
      }, 800); // 부드러운 스크롤 속도 (800ms)  
    });
  });
  





$(document).ready(function(){
    popup();
})

function popup(){
    //팝업 열기
    $('.content01 .icon_03').on('click',function(e){
        e.preventDefault();
        $('.project_modal').fadeIn(300);
        $("body").addClass('notScroll');
        $('body').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
            })
    })

    //팝업 닫기
    $('.close_icon').on('click',function(e){
        e.preventDefault();
        $('.project_modal').fadeOut(100);
        $("body").removeClass('notScroll');
    })

    $('.bg').on('click',function(e){
        e.preventDefault();
        $('.project_modal').fadeOut(100);
        $("body").removeClass('notScroll');
    })
}




/*     let xhr = new XMLHttpRequest();
    xhr.open("GET", "./code/code.html", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let codeDiv = document.createElement("div");
        codeDiv.innerHTML = xhr.responseText;
        let code01Div = codeDiv.querySelector("#code01");
        document.querySelector(".code01").appendChild(code01Div);
      }
    };
    xhr.send();

    let xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "./code/code.html", true);
    xhr1.onreadystatechange = function() {
      if (xhr1.readyState === 4 && xhr.status === 200) {
        let codeDiv = document.createElement("div");
        codeDiv.innerHTML = xhr1.responseText;
        let code01Div = codeDiv.querySelector("#code02");
        document.querySelector(".code02_01").appendChild(code01Div);
      }
    };
    xhr1.send(); */

//code보기
    const tabElements = [
      { codeSelector: "#code01", targetSelector: ".code01" },
      { codeSelector: "#code02", targetSelector: ".code02_01" },
      { codeSelector: "#code02_02", targetSelector: ".code02_02" },
      { codeSelector: "#code02_03", targetSelector: ".code02_03" },
      { codeSelector: "#code03_01", targetSelector: ".code03_01" },
      { codeSelector: "#code03_02", targetSelector: ".code03_02" },
      { codeSelector: "#code03_03", targetSelector: ".code03_03" },
      { codeSelector: "#code04_01", targetSelector: ".code04_01" },
      { codeSelector: "#code04_02", targetSelector: ".code04_02" },
      { codeSelector: "#code05_01", targetSelector: ".code05_01" },
      { codeSelector: "#code05_02", targetSelector: ".code05_02" },
      // 추가적인 탭에 대한 설정들을 이곳에 추가할 수 있습니다.
    ];
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./code/code.html", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const codeDiv = document.createElement("div");
        codeDiv.innerHTML = xhr.responseText;
        
        for (let i = 0; i < tabElements.length; i++) {
          const codeSelector = tabElements[i].codeSelector;
          const targetSelector = tabElements[i].targetSelector;
          
          const codeDivClone = codeDiv.cloneNode(true);
          const code01Div = codeDivClone.querySelector(codeSelector);
          document.querySelector(targetSelector).appendChild(code01Div);
        }
      }
    };
    xhr.send();


//code보기_펼쳐보기,접기

const openBtn = document.querySelector('.open_btn')
const closeBtn = document.querySelector('.close_btn')
const code02 = document.querySelector('.code02_03')

openBtn.addEventListener('click', function(){
    code02.style.display = 'block'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
  code02.style.display = 'none'
  openBtn.style.display = 'block'
  closeBtn.style.display = 'none'
})

const openBtn2 = document.querySelector('.open_btn2')
const closeBtn2 = document.querySelector('.close_btn2')
const code03 = document.querySelector('.code03_02')

openBtn2.addEventListener('click', function(){
    code03.style.display = 'block'
    openBtn2.style.display = 'none'
    closeBtn2.style.display = 'block'
})

closeBtn2.addEventListener('click', function(){
  code03.style.display = 'none'
  openBtn2.style.display = 'block'
  closeBtn2.style.display = 'none'
})

const openBtn3 = document.querySelector('.open_btn3')
const closeBtn3 = document.querySelector('.close_btn3')
const code04 = document.querySelector('.code04_02')

openBtn3.addEventListener('click', function(){
    code04.style.display = 'block'
    openBtn3.style.display = 'none'
    closeBtn3.style.display = 'block'
})

closeBtn3.addEventListener('click', function(){
  code04.style.display = 'none'
  openBtn3.style.display = 'block'
  closeBtn3.style.display = 'none'
})

const openBtn4 = document.querySelector('.open_btn4')
const closeBtn4 = document.querySelector('.close_btn4')
const code05 = document.querySelector('.code05_02')

openBtn4.addEventListener('click', function(){
    code05.style.display = 'block'
    openBtn4.style.display = 'none'
    closeBtn4.style.display = 'block'
})

closeBtn4.addEventListener('click', function(){
  code05.style.display = 'none'
  openBtn4.style.display = 'block'
  closeBtn4.style.display = 'none'
})



/* top_btn */
const topBtn = document.querySelector('.top_btn')

window.addEventListener('scroll', () => {

    if (window.scrollY > 3800) {
        gsap.to(topBtn, 0.3, {
            opacity: 1
        })
    } else {
        gsap.to(topBtn, 0.3, {
            opacity: 0
        })
    } /* 스크롤 내릴 때 */
})

topBtn.addEventListener('click', () => {
    gsap.to(window, 0.5, {
        scrollTo: 0
    })
}) /* 스크롤 위로 올릴때 */

window.addEventListener('scroll', function() {
  let scrollY = window.scrollY;
  let scrollBox = document.querySelector('.scroll_box');
  
  if (scrollY > 3800) {
    scrollBox.style.display = 'none';
  } else {
    scrollBox.style.display = 'block';
  }
});

window.addEventListener('scroll', function() {
  let scrollY = window.scrollY;
  let scrollBox = document.querySelector('.top_btn');
  
  if (scrollY > 3800) {
    scrollBox.style.display = 'block';
  } else {
    scrollBox.style.display = 'none';
  }
});

