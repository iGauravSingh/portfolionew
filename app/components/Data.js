
import bakeonn from './assets/bakeonn.png'
import eventonn from './assets/eventonn.png'
import treckonn from './assets/treckonn.png'
import travel from './assets/travel.png'
import notes from './assets/notes.png'
import shop from './assets/shop.png'
import weather from './assets/weather.png'




export const projectData = [
    {id: 1, name: 'Bakeonn' , description: 'Front end for bakery shop app. Uses react context.' , image: bakeonn , stack: ['nextjs','tailwind'] , link: 'https://bakeonn.vercel.app/', type: 'frontend'},
    {id: 2, name: 'Eventonn' , description: 'Fullstack Event Booking app. Uses react context and nextjs for frontend and node express and mongodb for backend.' , image: eventonn , stack: ['nextjs','tailwind','express','mongodb','node'] , link: 'https://eventonnfrontend.vercel.app/', type: 'fullstack'},
    {id: 3, name: 'Eventonn Mobile' , description: 'Mobile version for Event booking app uses React Native for front end and node express and mongodb for backend.' , image: eventonn , stack: ['react native', 'node', 'express', 'mongodb'] , link: '', type: 'fullstack'},
    {id: 4, name: 'Treckonn' , description: 'Front end for Treck booking app' , image: treckonn , stack: ['nextjs', 'tailwind'] , link: 'https://trekonn.onrender.com/', type: 'frontend'},
    {id: 5, name: 'Travel' , description: 'Fullstack Mern App with Authentication and image upload feature for writing travel blog' , image: travel , stack: ['react','node', 'express','mongodb'] , link: 'https://travelblog-4nb3.onrender.com/', type: 'fullstack'},
    {id: 6, name: 'Shop' , description: 'Fullstack app for shoping website with Authentication and Authorization' , image: shop , stack: ['react','redux','node','express','mongodb'] , link: 'https://mernshop-mcfm.onrender.com/', type: 'fullstack'},
    {id: 7, name: 'Weather' , description: 'Front end of weather showing app uses OpenWeather api' , image: weather , stack: ['react'] , link: 'https://weather-app-eo7c.onrender.com/', type: 'frontend'},
    {id: 8, name: 'Notes' , description: 'Frontend of notes taking app' , image: notes , stack: ['react'] , link: 'https://notessimple.onrender.com/', type: 'frontend'},
]

export const resumeData = [
    {id:1 , work: 'worked as IoT and Embedded Trainer'},
    {id: 2, education: 'Birla Institute of Applied Sciences'},
    {id: 3, skills: ['html','css','javascript','react','tailwind','typescript','redux','node','express','mongobd']}
]
    