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