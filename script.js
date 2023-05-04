// 'use strict';

// console.log(parseInt(0.0000005));


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderCountry = function(data,classname=''){
  const html = `
  <article class="country ${classname}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(2)} M People</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend',html)
  countriesContainer.style.opacity = 1;
}

// ///////////////////////////////////////
// // const getCountryData = function (country){
// // const request = new XMLHttpRequest();
// // request.open('GET',`https://restcountries.com/v2/name/${country}`);
// // request.send();

// // console.log(request.responseText);

// // request.addEventListener('load',function(){
// //     console.log(this.responseText);
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     renderCountry(data);


// //     //get neighbour data\
  
// //     const [neighbour] = data.borders

// //     if(!neighbour)return;

// //     //AJAX CALL COUNTRY 2
// //     const request2 = new XMLHttpRequest();
// // request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
// // request2.send();

// // request2.addEventListener('load',function(){
// //   const data2 =  JSON.parse(this.responseText);
// //   console.log(data2);
// //   renderCountry(data2 , 'neighbour')

// // })

    
// // })
// // }


// // getCountryData('poland');
// // setTimeout(()=>{
// //   console.log('1 second passed');
// //   setTimeout(()=>{
// //     console.log('2 second passed');
// //     setTimeout(()=>{
// //       console.log('3 second passed');
// //       setTimeout(()=>{
// //         console.log('4 second passed');
// //       },1000)
// //     },1000)
// //   },1000)
// // },1000)



// // const request = new XMLHttpRequest();
// // request.open('GET',`https://restcountries.com/v2/name/${country}`);
// // request.send();

// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// const getCountryData = function(country){
//  fetch(`https://restcountries.com/v2/name/${country}`)
//  .then(res => res.json())
//  .then(data =>{
//   console.log(data);
//   renderCountry(data[0]);
//   const neighbour =  data[0].borders[0];
//   if(!neighbour) return;
  
//   return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
 
//  }).then(response => response.json())
//  .then(data =>renderCountry(data,'neighbour'))
//  .catch(err => alert(err));
// };
 
// btn.addEventListener('click',function(){
//   getCountryData('portugal');

// })





// // setTimeout(()=>{
// // console.log('0 sec timer');
// // },0)

// // Promise.resolve('Resolved promise 1').then(res => console.log(res));
// // console.log('Test end');


// // Promise.resolve('Resolved promise 2').then(res =>{
// //   for(let i = 0; i<1000; i++){
// //     console.log(res);
// //   }
// // })

// const LotteryPromise = new Promise(function(resolve,reject){
//   console.log('Welcome in lottery');
//   setTimeout(()=>{
//     if(Math.random () >=0.5){
//       resolve('You WON Money');
//     }else{
//       reject(new Error('You lost your Money'))
//     }
//   },2000)
   
// })
// LotteryPromise.then(res =>console.log(res))
// .catch(err =>console.error(err));

// //Promisifying setTimeout
// const wait =  function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000)
//   })
// }
// wait(2).then(()=>{
//   console.log('I waited for 2 seconds');
//   return wait(1);
// }).then(()=>{
//   console.log('I Waited for 1 secondsss');
// })


// Promise.resolve('abc').then(x =>  console.log(x));
// Promise.reject(new Error('Problem')).catch(x =>  console.error(x));





// // const getPosition = function(){
// //   return new Promise(function(resolve,reject){
// //     navigator.geolocation.getCurrentPosition(resolve,reject)  
// //     // (position =>resolve(position),err=>reject(err));
// //   })
// // }

// // getPosition().then(res =>console.log(res));

// // const whereAmI = function(){
// //   getPosition().then(pos => {
// //       const {latitude:lat , longitude:lng} = (pos.coords);
// //       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

// //   })
// // }

// // btn.addEventListener('click',whereAmI);



// const images = document.querySelector('.images');


// // const CreateImage = function(imgP){
// //   return new Promise(function(resolve,reject){
// //     const img = document.createElement('img');
// //     img.src=imgP;
// //     img.addEventListener('load',function(){
// //       images.append(img);
// //       resolve(img)
// //     })
// //     img.addEventListener('error',function(){
// //       reject(new Error('Image not Found'));
// //     })
// //   })
// // }

// // CreateImage('img/img-1.jpg').then(res =>console.log(res))

// // setTimeout(()=>{

// // })
// //  const wait =  function(seconds){
// //   return new Promise(function(resolve){
// //     setTimeout(resolve, seconds * 1000)
// //   })
// // }


// const licznik = function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000);
//   })
// }

// const zdjecia = document.querySelector(".images")
// const CreateImage = function(e){
//   return new Promise (function(resolve,reject){
//     const img = document.createElement('img');
//     img.src = e;
    
//     img.addEventListener('load',function(){
//       zdjecia.append(img);
//       resolve(img);
//     })
//     img.addEventListener('error',function(){
//       reject(new Error('Blad w zaladowaniu zdjecia'));
//     })
    
//   })
// }


// let currentImg;

// CreateImage('img/img-1.jpg')
// .then(img =>{
//   currentImg = img;
//   console.log('image 1 loaded');
//   return licznik(2);
// }).then(()=>{
//   currentImg.style.display = 'none';
//  return CreateImage('img/img-2.jpg')
  
// }).then((img)=>{
//   currentImg = img;
//   console.log('image 2 loaded');
//   return licznik(2);
// }).then(()=>{
//   currentImg.style.display = 'none';
//   return CreateImage('img/img-3.jpg')
  
// }).then((img)=>{
//   currentImg = img;
//   console.log('image 3 loaded');
//   return licznik(2);
// }).then(()=>{
//   currentImg.style.display = 'none';
//   return CreateImage('img/img-1.jpg')
// }).then((img)=>{
//   currentImg = img;
//   console.log('image 1 loaded again');
//   return licznik(2);
// }).then(()=>{
//   currentImg.style.display='none';
// })

const getPosition = function(){
  return new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(resolve,reject)  
    // (position =>resolve(position),err=>reject(err));
  })
}

const whereAMi = async function(country){
  
try{
  const pos = await getPosition()
  const {latitude:lat , longitude:lng} = (pos.coords);
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo =await resGeo.json();
  console.log(dataGeo);
  const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`)
  const data = await res.json();
  renderCountry(data[0])
}catch(err){
console.error(err);

  }

}
whereAMi()
whereAMi()
whereAMi()
console.log('pierwsze');

// try{
//   let y = 1;
//   const x = 2;
//   y=3;
// }catch(err){
//   alert(err.message)
// }