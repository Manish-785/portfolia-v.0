const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuList = document.querySelectorAll('.items')
const header = document.querySelector('.header');
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('active');
    
})
menuIcon.addEventListener('click',()=>{
    menuList.forEach((box,index) =>{
        setTimeout(()=>{
            box.classList.toggle('hidden');
        },index*50)
    })
    setTimeout(()=>{header.classList.toggle('border');},50)
    
})

const anime = document.querySelector('.anime');
anime.addEventListener('mouseover',()=>{
    anime.style['background'] = 'linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)';
    anime.style['color'] = 'white';
}) 
anime.addEventListener('mouseout',()=>{
    anime.style['background']='transparent'; 
    anime.style['color']='firebrick';
})

const music = document.querySelector('.music');
music.addEventListener('mouseover',()=>{
    music.style['background']='linear-gradient(rgb(173, 83, 137), rgb(60, 16, 83))';
    music.style['color']='#C5FAD5';
})
music.addEventListener('mouseout',()=>{
    music.style['background'] = 'transparent';
    music.style['color'] = 'lightgrey';
})

const novel = document.querySelector('.novel');
novel.addEventListener('mouseover',()=>{
    novel.style['background']='linear-gradient(to top, #09203f 0%, #537895 100%)';
})
novel.addEventListener('mouseout',()=>{
    novel.style['background']='transparent';
})


const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');
lightMode.addEventListener('click',()=>{
    darkMode.classList.toggle('hide');
    lightMode.classList.toggle('hide');
    
    header.style['background'] = 'linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)';
    
    menuList.forEach(box =>{
        box.style['background'] = 'linear-gradient(89.7deg, rgb(0, 0, 0) -10.7%, rgb(53, 92, 125) 88.8%)';
    })
    
    const color1 = document.querySelectorAll('#color');
    color1.forEach(color =>{
        color.style['color'] = 'blue';
    })
    
    const color2 = document.querySelectorAll('#color2');
    color2.forEach(color=>{
        color.style['color'] = 'white';
    })
    
    const introduction = document.querySelector('#introduction-section').style;
    introduction['background'] = 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 122%)'
    
    const projects = document.querySelector('#project-section').style;
    projects['background'] = 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 122%)';

    const hobbies = document.querySelector('#hobbies-section').style;
    hobbies['background'] = 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 122%)';

    const mainBackground = document.getElementsByTagName("body")[0];
    mainBackground.style['background'] = 'black';


})
darkMode.addEventListener('click',()=>{
    darkMode.classList.toggle('hide');
    lightMode.classList.toggle('hide');
    
    header.style['background'] = 'radial-gradient(circle at 12.3% 19.3%,rgb(95, 209, 249) 0%,rgb(85, 88, 218) 100.2%)';
    
    menuList.forEach(box =>{
        box.style['background'] = 'radial-gradient(circle at 12.3% 19.3%,rgb(95, 209, 249) 0%,rgb(85, 88, 218) 100.2%)';
    })
    
    const color1 = document.querySelectorAll('#color');
    color1.forEach(color =>{
        color.style['color'] = '#1e375a';
    })
    
    const color2 = document.querySelectorAll('#color2');
    color2.forEach(color=>{
        color.style['color'] = '#1e375a';
    })


    const introduction = document.querySelector('#introduction-section').style;
    introduction['background'] = 'radial-gradient(circle at 12.3% 19.3%,rgb(95, 209, 249) 0%,rgb(85, 88, 218) 100.2%)'
    
    const projects = document.querySelector('#project-section').style;
    projects['background'] = 'radial-gradient(circle at 12.3% 19.3%,rgb(95, 209, 249) 0%,rgb(85, 88, 218) 100.2%)';

    const hobbies = document.querySelector('#hobbies-section').style;
    hobbies['background'] = 'radial-gradient(circle at 12.3% 19.3%,rgb(95, 209, 249) 0%,rgb(85, 88, 218) 100.2%)';

    const mainBackground = document.getElementsByTagName("body")[0];
    mainBackground.style['background-image'] = 'url("img/vivid-blurred-colorful-wallpaper-background.jpg")';
})
