import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

import "normalize.css";
import "./common.scss";

import banner from "./sections/banner.hbs"
import about from "./sections/about.hbs"
import motivation from "./sections/motivation.hbs"
import traectories from "./sections/traectories.hbs"
import description from "./sections/description.hbs"
import team from "./sections/team.hbs"
import facts from "./sections/facts.hbs"
import events from "./sections/events.hbs"
import timetable from "./sections/timetable.hbs"
import contacts from "./sections/contacts.hbs"
import footer from "./sections/footer.hbs"


document.addEventListener("DOMContentLoaded", function () {

  var div = document.createElement('div');
  div.id = "root";

  div.innerHTML += banner({ id: "banner" });
  div.innerHTML += about({ id: "about" });
  div.innerHTML += motivation({ id: "motivation" });
  div.innerHTML += traectories({ id: "traectories", traectories: traectoriesContent });
  div.innerHTML += description({ id: "description", descriptions: descriptionsContent });
  div.innerHTML += team({ id: "team", members: teamMembers });
  div.innerHTML += facts({ id: "facts" });
  div.innerHTML += events({ id: "events", events: eventsContent });
  div.innerHTML += timetable({ id: "timetable" });
  div.innerHTML += contacts({ id: "contacts" });
  div.innerHTML += footer({ id: "footer" });


  document.body.appendChild(div);

  const swiper = new Swiper(".events-container", {
    slidesPerView: 'auto',
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

const eventsContent = [
  { name: "Открытые массовые тренировки", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Онлайн-марафоны ЗОЖ", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Зарядка «Первомай»", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Большие гонки УрФУ", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Форум «Мы за здоровый образ жизни»", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
]

const teamMembers = [
  {
    name: "Judy Smith", role: "Personal trainer",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Selena Kyle", role: "Fitness instructor",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Alica Meadow", role: "Personal trainer",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
]

const descriptionsContent = [
  {
    name: "Тренировки", id: "trainings", image: "https://dummyimage.com/600x800/e66161/ffffff",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repellat voluptate quasi officia accusamus rem assumenda quo, vel id dicta!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quo!"
    ], isActive: true
  },
  {
    name: "Питание", id: "eat", image: "https://dummyimage.com/600x800/126161/ffffff",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repellat voluptate quasi officia accusamus rem assumenda quo, vel id dicta!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quo!"
    ], isActive: false
  },
  {
    name: "Здоровье/красота", id: "beauty", image: "https://dummyimage.com/600x800/e61261/ffffff",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repellat voluptate quasi officia accusamus rem assumenda quo, vel id dicta!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quo!"
    ], isActive: false
  },
  {
    name: "Мотивация/психология", id: "motivation", image: "https://dummyimage.com/600x800/e66112/ffffff",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repellat voluptate quasi officia accusamus rem assumenda quo, vel id dicta!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quo!"
    ], isActive: false
  },
  {
    name: "Мастер-классы", id: "masterclass", image: "https://dummyimage.com/600x800/166261/ffffff",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem repellat voluptate quasi officia accusamus rem assumenda quo, vel id dicta!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quo!"
    ], isActive: false
  },
]

const traectoriesContent = [
  {
    name: "Тренировки", id: "trainings",
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde alias velit id aperiam nulla quasi eligendi quod voluptatem placeat impedit ex blanditiis, esse aut beatae sit? Corrupti, sapiente deserunt!"], isActive: true
  },
  {
    name: "Лекции и вебинары", id: "lections-webinars",
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde alias velit id aperiam nulla quasi eligendi quod voluptatem placeat impedit ex blanditiis, esse aut beatae sit? Corrupti, sapiente deserunt!"], isActive: false
  },
  {
    name: "Проведение зарядок", id: "power-up",
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde alias velit id aperiam nulla quasi eligendi quod voluptatem placeat impedit ex blanditiis, esse aut beatae sit? Corrupti, sapiente deserunt!"], isActive: false
  },
  {
    name: "Всеросийская деятельность", id: "russia-activity",
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde alias velit id aperiam nulla quasi eligendi quod voluptatem placeat impedit ex blanditiis, esse aut beatae sit? Corrupti, sapiente deserunt!"], isActive: false
  },
  {
    name: "Международная деятельность", id: "world-activity",
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde alias velit id aperiam nulla quasi eligendi quod voluptatem placeat impedit ex blanditiis, esse aut beatae sit? Corrupti, sapiente deserunt!"], isActive: false
  },
  {
    name: "Сотрудничество", id: "partnership",
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde alias velit id aperiam nulla quasi eligendi quod voluptatem placeat impedit ex blanditiis, esse aut beatae sit? Corrupti, sapiente deserunt!"], isActive: false
  },
]