import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

import "normalize.css";
import "./common.scss";

import header from "./components/header.hbs"

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

  div.innerHTML += header();

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

  document.querySelectorAll(".mobile-navigation__inner a").forEach(item => item.addEventListener("click", function(e) {
    document.querySelector("#mobile-navigation").classList.remove("show");
  }))

  document.querySelector(".mobile-navigation__inner").addEventListener("click", function(e) {
    e.stopPropagation();
  })
  document.querySelector(".mobile-navigation").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#mobile-navigation").classList.remove("show");
  })

  document.querySelectorAll(".nav-open").forEach(function (item) {
    item.addEventListener("click", function() {
      document.querySelector("#mobile-navigation").classList.add("show")
    });
  })

  document.querySelectorAll(".nav-close").forEach(function (item) {
    item.addEventListener("click", function() {
      document.querySelector("#mobile-navigation").classList.remove("show")
    });
  })

  let prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    const currentScrollPos = window.pageYOffset;
    if (Math.abs(prevScrollpos - currentScrollPos) < 100) return;

    if (prevScrollpos < currentScrollPos) {
      if (header.classList.contains("show")) header.classList.remove("show");
    } else {
      if (!header.classList.contains("show")) header.classList.add("show");
    }
    prevScrollpos = currentScrollPos;

  })

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
  { name: "Массовые онлайн - марафоны ЗОЖ", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Акции за Здоровый образ жизни «Будь В Тонусе!»", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Зарядки «Первомай»", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Гонка Героев от студенческих отрядов", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Большие гонки УрФУ", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Фитнес - университет", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Кандидатская спартакиада", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "ЗарЯдки с Молодой Гвардией", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Зарядки с Олимпийскими чемпионами и известными спортсменами города", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "ЗарЯдки ко Всемирному Фестивалю Молодежи и Студентов 2017", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Открытие Лиги Студенческих клубов в Екатеринбурге", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Фестиваль Достижений Лиги Студенческих Клубов", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Форум «МЫ За здоровый образ жизни!» в рамках VII Всероссийского Фестиваля «Организация работы с молодежью»", photo: "https://dummyimage.com/400x400/e66161/ffffff" },
  { name: "Благотворительная акция для детей из детского дома « Полевской No 1 »", photo: "https://dummyimage.com/400x400/e66161/ffffff" },

]

const teamMembers = [
  {
    name: "Анастасия Гурьянова", role: "Идейный вдохновитель и основатель проекта В Тонусе! Наставник направления: “Спорт&питание”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Анастасия Савастьянова", role: "Наставник направления: “психология & мотивация”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Валентина Юдина", role: "Наставник направления “красота & здоровье”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Анастасия Самсонова", role: "Наставник направления “мастер классы от стилистики до этикета”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Екатерина Химич", role: "Наставник направления",
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
      "Курс тренировок из 3 уровней:",
      "LEVEL 1(начальный уровень = 20 минут)",
      "LEVEL 2(средний уровень = 25 минут)",
      "LEVEL 3(продвинутый уровень = 30 минут)",
      "+ каждодневная зарядка",
      "+ растяжка",

    ], isActive: true
  },
  {
    name: "Питание", id: "eat", image: "https://dummyimage.com/600x800/126161/ffffff",
    description: [
      "3 программы питания:",
      "На похудение до 5 кг",
      "На похудение до 10-15 кг",
      "На похудение до 15-20 кг",
      "+ 3 вебинара + 3 прямых эфира",
    ], isActive: false
  },
  {
    name: "Здоровье/красота", id: "beauty", image: "https://dummyimage.com/600x800/e61261/ffffff",
    description: [
      "1-уход за лицом и телом",
      "2-уход за волосами",
      "3-мастер класс «Дневной и вечерний макияж для себя»",
      "4-фейсбилдинг",
      "+ Вебинар с косметологом"
    ], isActive: false
  },
  {
    name: "Мотивация/психология", id: "motivation", image: "https://dummyimage.com/600x800/e66112/ffffff",
    description: [
      "Мотивационная поддержка и психологический настрой на достижение результата ",
      "Команда единомышленников",
      "Ежедневные лайфхаки и работа над собой совместно с коучем",
      "+ 3 вебинара + 3 прямых эфира",
    ], isActive: false
  },
  {
    name: "Мастер-классы", id: "masterclass", image: "https://dummyimage.com/600x800/166261/ffffff",
    description: [
      "По стилю (Прямые эфиры со стилистом)",
      "Личному бренду,",
      "Духовному и творческому развитию",
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