const btn_share = document.querySelector('.btn-share')
const modal = document.querySelector('.modal-content')

btn_share.addEventListener('click', () => {
  modal.classList.add('show-modal')
})

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal-content')) {
    modal.classList.remove('show-modal')
  }
})


/* Share Aside */
/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
*/




// function socialWindow(url) {
//   var left = (screen.width - 570) / 2;
//   var top = (screen.height - 570) / 2;
//   var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
//   window.open(url,"NewWindow",params);
// }

// function setShareLinks() {
//   var pageUrl = encodeURIComponent(document.URL);
//   var tweet = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));
  
//   jQuery(".social-share.facebook").on("click", function() {
//       url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
//       socialWindow(url);
//   });

//   jQuery(".social-share.twitter").on("click", function() {
//       url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
//       socialWindow(url);
//   });

//   jQuery(".social-share.linkedin").on("click", function() {
//       url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
//       socialWindow(url);
//   })
// }


const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check this out: ");
  let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  pinterestBtn.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();


// const whatsapp = document.querySelector('.whatsapp')
// const telegram = document.querySelector('.telegram')
// const twitter = document.querySelector('.twitter')

// const pageUrl = locatoin.href
// const message = 'Are your reade to read?'

// const whatsappApi = `https://wa.me/?text=${pageUrl}. ${message}`
// const telegramApi = `https://t.me/share/url?url=${pageUrl}&text=${message}`
// const twitterApi = `https://twitter.com/intent/tweet?text=${pageUrl}. ${message}`

// whatsapp.addEventListener('click', () => {
//   window.open(document.url = whatsappApi,'_blank')
// })

// telegram.addEventListener('click', () => {
//   window.open(url = telegramApi,target='blank')
// })

// twitter.addEventListener('click', () => {
//   window.open(url = twitterApi,target='blank')
// })