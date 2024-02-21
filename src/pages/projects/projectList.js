import smartPrescriptionPhoto from "../../assets/images/Smart Prescription.png";
import loginPagePhoto from "../../assets/images/prescription-loginpage.PNG";
import PrescriptionDashboard from "../../assets/images/prescription-dashboard.PNG";
import PrescriptionWebsite from "../../assets/images/prescription-website.PNG";
import PrescriptionAppointment from "../../assets/images/prescription-appintment.PNG";
import postDashboard from "../../assets/images/pos-dashboard.PNG";
import posAllFood from "../../assets/images/pos-allfood.PNG";
import DailySalesReport from "../../assets/images/Daily Sales Report.PNG";
import SmartTutor from "../../assets/images/smart_tutor.PNG";
import TutorRequestForm from "../../assets/images/tutor_request_form.PNG";
import TutorLogin from "../../assets/images/smart_tutor_login.PNG";
import HangManGame from "../../assets/images/Hangman-game.PNG";
import HangManGame2 from "../../assets/images/hang-man-game-2.PNG";
import HangManGame3 from "../../assets/images/hang-man-game-3.PNG";
import weatherApp1 from "../../assets/images/waether-app-1.PNG";
import weatherApp2 from "../../assets/images/waether-app-2.PNG";
import weatherApp3 from "../../assets/images/waether-app-3.PNG";
import tikTaKToe from "../../assets/images/tic-tac-toe-game.PNG";
import tikTaKToe1 from "../../assets/images/tic-tac-toe-game-1.PNG";
import tikTaKToe2 from "../../assets/images/tic-tac-toe-game-2.PNG";
import SmartHotel1 from "../../assets/images/smart-hotel-1.PNG";
import SmartHotel2 from "../../assets/images/smart-hotel-2.PNG";
import SmartHotel3 from "../../assets/images/smart-hotel-3.PNG";
export const projectList = [
  {
    id: 1,
    name: "DocRx",
    image: smartPrescriptionPhoto,
    description:
      "DocRx is an Smart Prescription and online Appointment scheduling web application.",
    imageGroups: [
      PrescriptionWebsite,
      loginPagePhoto,
      PrescriptionDashboard,
      PrescriptionAppointment,
    ],
    technology: ["HTML, CSS, JavaScript, JQuery,PHP, MySQL"],
    live: "https://smartprescription.hishabkitab.com/",
  },
  {
    id: 2,
    name: "R-POS",
    image: postDashboard,
    description:
      "A Restaurant POS System is a specialized software application designed to streamline and enhance the daily operations of a restaurant. It serves as a centralized hub for managing various tasks, including order processing, menu customization, table management, inventory control, billing, and payment processing. The system provides restaurant owners and staff with the tools to improve efficiency, accuracy, and overall customer experience. With features like real-time reporting and analytics, the POS system empowers businesses to make data-driven decisions, optimize inventory, and elevate service standards. Whether it's a small cafe or a high-end restaurant, a Restaurant POS System is a fundamental tool for modernizing and optimizing restaurant management.",
    imageGroups: [postDashboard, posAllFood, DailySalesReport],
    technology: ["ReactJS, ExpressJS, NodeJS, MongoDB"],
    live: "",
  },
  {
    id: 3,
    name: "Smart Tutor",
    image: SmartTutor,
    description:
      "Welcome to Smart Tutor, an innovative online platform designed to redefine the way students connect with qualified tutors. Smart Tutor is not just a tutoring service; it's an immersive learning experience tailored for the modern age.",
    imageGroups: [SmartTutor, TutorRequestForm, TutorLogin],
    technology: ["ReactJS, ExpressJS, NodeJS, MongoDB"],
    live: "",
  },
  {
    id: 4,
    name: "Hang Man Game",
    image: HangManGame,
    description:
      "Step into the world of wordplay and suspense with the Hangman Game, a classic yet timeless pastime that challenges your vocabulary and wit. Whether you're a wordsmith or just love a good guessing game, Hangman brings together fun and learning in an interactive experience.",
    imageGroups: [HangManGame, HangManGame2, HangManGame3],
    technology: ["ReactJS"],
    live: "https://rabby-shek.github.io/hangman_game/",
  },
  {
    id: 5,
    name: "Weather app",
    image: weatherApp1,
    description:
      " ReactJS Weather App—an intuitive and dynamic tool designed to keep you informed about the ever-changing atmospheric conditions. Seamlessly blending functionality with an elegant user interface, this app transforms the way you experience weather updates.",
    imageGroups: [weatherApp1, weatherApp2, weatherApp3],
    technology: ["ReactJS"],
    live: "https://rabby-shek.github.io/react-weather-app/",
  },
  {
    id: 6,
    name: "Tic Tac Toe Game",
    image: tikTaKToe,
    description:
      " Dive into the nostalgic world of Tic Tac Toe, a game that has stood the test of time as the quintessential challenge of strategy and wit. From pencil and paper to interactive digital platforms, Tic Tac Toe remains a beloved pastime, captivating players young and old with its simple rules and endless possibilities.",
    imageGroups: [tikTaKToe, tikTaKToe1, tikTaKToe2],
    technology: ["ReactJS"],
    live: "https://rabby-shek.github.io/tiktactoe/",
  },
  {
    id: 7,
    name: "Smart Hotel",
    image: SmartHotel1,
    description:
      "Welcome to the future of seamless hotel operations with our advanced Hotel Management System. Designed to cater to the intricate needs of the hospitality industry, our system brings efficiency, accuracy, and enhanced guest experiences to the forefront.",
    imageGroups: [SmartHotel1, SmartHotel2, SmartHotel3],
    technology: ["HTML,CSS, JavaScript, Jquery, MySQL"],
    live: "https://smarthotel.hishabkitab.com/",
  },
];
