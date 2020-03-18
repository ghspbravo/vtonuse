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
  // div.innerHTML += motivation({ id: "motivation" });
  div.innerHTML += traectories({ id: "traectories", traectories: traectoriesContent });
  div.innerHTML += description({ id: "description", descriptions: descriptionsContent });
  div.innerHTML += team({ id: "team", members: teamMembers });
  div.innerHTML += facts({ id: "facts" });
  div.innerHTML += events({ id: "events", events: eventsContent });
  div.innerHTML += timetable({ id: "timetable" });
  div.innerHTML += contacts({ id: "contacts" });
  div.innerHTML += footer({ id: "footer" });


  document.body.appendChild(div);

  document.querySelectorAll(".mobile-navigation__inner a").forEach(item => item.addEventListener("click", function (e) {
    document.querySelector("#mobile-navigation").classList.remove("show");
  }))

  document.querySelector(".mobile-navigation__inner").addEventListener("click", function (e) {
    e.stopPropagation();
  })
  document.querySelector(".mobile-navigation").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#mobile-navigation").classList.remove("show");
  })

  document.querySelectorAll(".nav-open").forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelector("#mobile-navigation").classList.add("show")
    });
  })

  document.querySelectorAll(".nav-close").forEach(function (item) {
    item.addEventListener("click", function () {
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
    name: "Анастасия Гурьянова", role: "Идейный вдохновитель и основатель проекта В Тонусе! Куратор направления: “Спорт & Питание”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Анастасия Савастьянова", role: "Наставник направления: “Психология & Мотивация”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Анастасия Самсонова", role: "Куратор направления “Мастер классы Soft Skills”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Валентина Юдина", role: "Куратор направления “Красота & Здоровье”",
    photo: "https://dummyimage.com/600x800/e66161/ffffff",
    socials: [
      { name: "FB.", link: "https://www.facebook.com" },
      { name: "INST.", link: "https://www.instagram.com" },
      { name: "TW.", link: "https://www.twitter.com" },
    ]
  },
  {
    name: "Екатерина Химич", role: "Куратор направления SMM и продвижение",
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
      "",

    ], isActive: true
  },
  {
    name: "Питание", id: "eat", image: "https://dummyimage.com/600x800/126161/ffffff",
    description: [
      "Программа питания на 3 недели",
      "4 вебинара от специалиста высшей категории: врача-диетолога",
    ], isActive: false
  },
  {
    name: "Здоровье/красота", id: "beauty", image: "https://dummyimage.com/600x800/e61261/ffffff",
    description: [
      "Мастер-классы «Дневной и вечерний макияж для себя»; «Уход за волосами»; «Прически и локоны»",
      'Beauty-завтраки: Разбор косметических средств',
      '2 Вебинара с профессиональным косметологом (Уход за лицом и телом; Фейсбилдинг)',
    ], isActive: false
  },
  {
    name: "Мотивация/психология", id: "motivation", image: "https://dummyimage.com/600x800/e66112/ffffff",
    description: [
      "Мотивационная поддержка и психологический настрой на достижение результата ",
      "Ежедневные лайфхаки и работа над собой совместно с коучем",
      "4 вебинара с профессиональным психологом",
    ], isActive: false
  },
  {
    name: "Мастер-классы", id: "masterclass", image: "https://dummyimage.com/600x800/166261/ffffff",
    description: [
      "Речь и актерское мастерство",
      "Выбор своего стиля и разбор гардероба",
      "Дефиле и фотопозирование",
      "Этикет и этика      ",
    ], isActive: false
  },
]

const traectoriesContent = [
  {
    name: "Тренировки", id: "trainings",
    description: ["FUNCTIONAL & POWER TRAINING", "BODY BALANCE", "STRETCH", "PILATES", "РАСПИСАНИЕ", "АДРЕС"], isActive: true
  },
  {
    name: "Лекции и вебинары", id: "lections-webinars",
    description: ["Образовательная программа, включающая лекции, коворкинги, мастер-классы по основам здорового образа жизни"], isActive: false
  },
  {
    name: "Корпоративные Зарядки", id: "power-up",
    description: ["Организация массовых акций и спортивных мероприятий"], isActive: false
  },
  {
    name: "Онлайн-марафоны", id: "online-maraphons",
    description: ["Полное преображение"], isActive: false
  },
  {
    name: "Всеросийская деятельность", id: "russia-activity",
    description: ["Всероссийский онлайн-марафон В Тонусе! 25 городов-участников",
      "Всероссийский форум:«Мы за здоровый образ жизни!»",
      "География форума:13 Городов - участников:Екатеринбург; Москва; Ярославль; Кемерово; Архангельск; Ростов- на - Дону; Ижевск; Саратов; Омск; Пермь; Курган; Новосибирск; Барнаул"], isActive: false
  },
  {
    name: "Международная деятельность", id: "world-activity",
    description: ["Первый Всемирный молодежный фестиваль по Целям устойчивого развития ООН в Королевстве Бахрейн",
      "Японо-Российский форум в г. Токио и г. Мацумото. Секция по Целям устойчивого развития ООН.",
      "XIX Всемирный Фестиваль Молодежи и студентов в Сочи",
      "Чемпионат мира по футболу 2018:  проведение фитнес-активностей и зарядок для 17.000 болельщиков FIFA FAN FEST"
    ], isActive: false
  },
  {
    name: "Сотрудничество", id: "partnership",
    description: ["vtonuse.ekb@mail.ru. Тел. 89122742446"], isActive: false
  },
]