
    // clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m + ":"+ session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();

window.onload = showTime;


///////////slider///////////

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 4000;
let slideInterval;

    const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
        if(current.nextElementSibling) {
            current.nextElementSibling.classList.add('current');
        }else {
            slides[0].classList.add('current');
        }
    setTimeout(() => current.classList.remove('current'));
};

    const prevSlide = () => {
    const current = document.querySelector('.current');
        current.classList.remove('current');
        if(current.previousElementSibling) {
            current.previousElementSibling.classList.add('current');
        }else {
            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'));
    };


        next.addEventListener('click', () => {
        nextSlide();
            if(auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            }
        });

        prev.addEventListener('click', () => {
        prevSlide();
            if(auto){
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
            }
        });


        if (auto) {
            slideInterval = setInterval(nextSlide, intervalTime);
    }

    const loginEmail = document.querySelector('#login-email');
    const loginPassword = document.querySelector('#login-password');
    const loginSend = document.querySelector('#login-send');
    
    loginSend.addEventListener('click', function(e){
        let loginMsgError = $('.login-messageError');
        let loginMsgSucces = $('.login-messageSucces')
        e.preventDefault();
        if(loginEmail.value.length === 0 || loginPassword.value.length === 0){
            loginEmail.style.border = 'solid indianred thin';
            loginPassword.style.border = 'solid indianred thin';
            loginMsgError.fadeIn();
            setTimeout(() => {
                loginMsgError.fadeOut();
            }, 2000);
        }else{
            loginEmail.style.border = '#ffffff thin solid';
            loginPassword.style.border = '#ffffff thin solid';
            loginMsgSucces.fadeIn();
            setTimeout(()=>{
                loginMsgSucces.fadeOut();
            },2000)
            loginEmail.value = '';
            loginPassword.value = '';
            setTimeout(()=>{
                $('.login-modal').fadeOut('slow');
            },2300)
        }
    })

// jquery popup///////>>
$('#login').on('click', (e)=>{
    e.preventDefault()
    $('.login-modal').slideToggle(300).css({
        display: 'flex',
    })
    
})
    $('#login-close').on('click', (e)=>{
        e.preventDefault()
        $('.login-modal').fadeOut('slow');
        loginEmail.style.border = '#ffffff thin solid';
        loginPassword.style.border = '#ffffff thin solid';
        $('#login-form input').val('');
    })
    loginEmail.addEventListener('keyup',()=>{
        loginEmail.style.border = '#ffffff thin solid';
    })
    loginPassword.addEventListener('keyup',()=>{
        loginPassword.style.border = '#ffffff thin solid';
    })

$('#register').on('click', (e)=>{
    e.preventDefault()
    $('.register-modal').slideToggle(300).css({
        display: 'flex',
    })
})

    $('#register-close').on('click', (e)=>{
        e.preventDefault()
        $('.register-modal').fadeOut('slow');
        $('#register-form input').val('')
         $('.weak, .medium, .strong').css({backgroundColor:'transparent'})
         $('.password-strength').hide();
         document.querySelector('#rpt-password-error').style.display = 'none';
    })



// password strength
$('.password-strength').hide();
// $('.weak').hide();
// $('.medium').hide();
// $('.strong').hide();
    
    document.getElementById('register-send').addEventListener('click',function(e){
        e.preventDefault();
        let name = document.getElementById('register-name')
        let country = document.getElementById('register-country')
        let city = document.getElementById('register-city')
        let phone = document.getElementById('register-tel')
        let email = document.getElementById('register-email')
        let RepPass = document.getElementById('register-repeatPassword')
        if(regPassword.value !== RepPass.value){
            document.querySelector('#rpt-password-error').style.display = 'block';
        }else if(regPassword.value === RepPass.value){
            document.querySelector('#rpt-password-error').style.display = 'none';
        }
        if(name.value.length === 0 || country.value.length === 0 || city.value.length === 0 || phone.value.length === 0 || email.value.length === 0 || regPassword.value.length === 0 || regPassword.value !== RepPass.value){
            $('.register-msgError').fadeIn()
            setTimeout(()=>{
                $('.register-msgError').fadeOut()
            },1000)

        }
        else{
            $('#register-form input').val('')
            $('.weak, .medium, .strong').css({backgroundColor:'transparent'})
            $('.register-msgSucces').fadeIn()
            setTimeout(() => {
                $('.register-msgSucces').fadeOut()
                $('.register-modal').fadeOut('slow');
            }, 2000);
            $('.password-strength').hide();
        }
    })

    let regPassword = document.getElementById('register-password')

    regPassword.addEventListener('input',function(){
        $('.password-strength').show();
        if(this.value.match(/[a-z]/) || this.value.match(/[A-Z]/) || this.value.match(/[1-9]/)){
            $('.weak').css({backgroundColor:'indianred'})
        }
        if(this.value.match(/[1-9]/) && this.value.length > 4 && this.value.match(/[a-z]/) || this.value.match(/[1-9]/) && this.value.match(/[A-Z]/) || this.value.match(/[a-z]/) && this.value.match(/[A-Z]/)){
            $('.medium').css({backgroundColor: 'orange'})
        }
        if(this.value.match(/[a-z]/) && this.value.match(/[1-9]/) && this.value.length > 5 && this.value.match(/[A-Z]/)){
            $('.strong').css({
                backgroundColor: 'green',
            })
        }
        if(this.value === ''){
            $('.weak, .medium, .strong').css({backgroundColor:'transparent'})
        }
    })

    // res menu 
    $('#res-menu').on('click',function(e){
        e.preventDefault()
      $(this).toggleClass('active');
      $('header').toggleClass('active')
    })
