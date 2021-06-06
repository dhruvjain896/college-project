"use script";
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
const dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// const SubTopics = document.getElementsByClassName("dropdown-container");

// const init = function () {
//   for (let i = 0; i < SubTopics.length; i++) {
//     SubTopics[i].classList.add("hidden");

//     document
//       .getElementsByClassName("subtopicVideo")
//       .getElementById()
//       [i].classList.add("hidden");
//   }
// };

// for (let i = 0; i < SubTopics.length; i++) {
//   preciseTopics = SubTopics[i].getElementsByTagName("A");
//   for (let j = 0; j < preciseTopics.length; i++) {
//     preciseTopics.addEventListener("click", function () {
//       init();
//       document.getElementById(`video${i + 1}`).classList.remove("hidden");
//       document.getElementById(`video${i + 1}`)[j].classList.remove("hidden");
//     });
//   }
// }

const SubTopics = document.querySelector(".main");

const html = document.querySelector("#html");
const css = document.querySelector("#css");
const javascript = document.querySelector("#javascript");
const nodejs = document.querySelector("#nodejs");
const django = document.querySelector("#django");
const mern = document.querySelector("#mern");
const flask = document.querySelector("#flask");

const flutter = document.querySelector("#flutter");
const java = document.querySelector("#java");
const kotlin = document.querySelector("#Kotlin");
const swift = document.querySelector("#swift");
const androidStudio = document.querySelector("#androidStudio");

const cpp = document.querySelector("#cpp");
const algorithms = document.querySelector("#algorithms");
const hashing = document.querySelector("#hashing");
const greedy = document.querySelector("#greedy");
const dynamicProgramming = document.querySelector("#dynamicProgramming");

const array = document.querySelector("#array");
const linkedList = document.querySelector("#linkedList");
const trees = document.querySelector("#trees");
const tries = document.querySelector("#tries");

const chash = document.querySelector("#chash");
const unreal = document.querySelector("#unreal");
const unity = document.querySelector("#unity");
const pygame = document.querySelector("#pygame");

const html1 = document.querySelector("#html1");
const css1 = document.querySelector("#css1");
const javascript1 = document.querySelector("#javascript1");
const bootstrap = document.querySelector("#bootstrap");
const jquery = document.querySelector("#jquery");
const sass = document.querySelector("#sass");
const react = document.querySelector("#react");

const penetrationTesting = document.querySelector("#penetrationTesting");
const kaliLinux = document.querySelector("#kaliLinux");
const computerNetworking = document.querySelector("#computerNetworking");
const sqlInjection = document.querySelector("#sqlInjection");

const sql = document.querySelector("#sql");
const databaseSystems = document.querySelector("#databaseSystems");
const mysql = document.querySelector("#mysql");
const postgreSql = document.querySelector("#postgreSql");
const nosql = document.querySelector("#nosql");

const statistics = document.querySelector("#statistics");
const python = document.querySelector("#python");
const numpy = document.querySelector("#numpy");
const pandas = document.querySelector("#pandas");
const dataVisualization = document.querySelector("#dataVisualization");

const scikitLearn = document.querySelector("#scikitLearn");
const tensorFlow = document.querySelector("#tensorFlow");
const xgboost = document.querySelector("#xgboost");
const keras = document.querySelector("#keras");
const pyspark = document.querySelector("#pyspark");

const video0 = document.querySelector("#video0");
const video1 = document.querySelector("#video1");
const video2 = document.querySelector("#video2");
const video3 = document.querySelector("#video3");
const video4 = document.querySelector("#video4");
const video5 = document.querySelector("#video5");
const video6 = document.querySelector("#video6");
const video7 = document.querySelector("#video7");
const video8 = document.querySelector("#video8");
const video9 = document.querySelector("#video9");
const video10 = document.querySelector("#video10");

const init = function () {
  video0.classList.add("hidden");
  video1.classList.add("hidden");
  video2.classList.add("hidden");
  video3.classList.add("hidden");
  video4.classList.add("hidden");
  video5.classList.add("hidden");
  video6.classList.add("hidden");
  video7.classList.add("hidden");
  video8.classList.add("hidden");
  video9.classList.add("hidden");
  video10.classList.add("hidden");

  html.classList.add("hidden");
  css.classList.add("hidden");
  javascript.classList.add("hidden");
  nodejs.classList.add("hidden");
  django.classList.add("hidden");
  mern.classList.add("hidden");
  flask.classList.add("hidden");
  flutter.classList.add("hidden");
  java.classList.add("hidden");
  kotlin.classList.add("hidden");
  swift.classList.add("hidden");
  androidStudio.classList.add("hidden");
  cpp.classList.add("hidden");
  algorithms.classList.add("hidden");
  hashing.classList.add("hidden");
  greedy.classList.add("hidden");
  dynamicProgramming.classList.add("hidden");
  array.classList.add("hidden");
  linkedList.classList.add("hidden");
  trees.classList.add("hidden");
  tries.classList.add("hidden");
  chash.classList.add("hidden");
  unreal.classList.add("hidden");
  unity.classList.add("hidden");
  pygame.classList.add("hidden");
  html1.classList.add("hidden");
  css1.classList.add("hidden");
  javascript1.classList.add("hidden");
  bootstrap.classList.add("hidden");
  jquery.classList.add("hidden");
  sass.classList.add("hidden");
  react.classList.add("hidden");
  penetrationTesting.classList.add("hidden");
  kaliLinux.classList.add("hidden");
  computerNetworking.classList.add("hidden");
  sqlInjection.classList.add("hidden");
  sql.classList.add("hidden");
  databaseSystems.classList.add("hidden");
  mysql.classList.add("hidden");
  postgreSql.classList.add("hidden");
  nosql.classList.add("hidden");
  statistics.classList.add("hidden");
  python.classList.add("hidden");
  numpy.classList.add("hidden");
  pandas.classList.add("hidden");
  dataVisualization.classList.add("hidden");
  scikitLearn.classList.add("hidden");
  tensorFlow.classList.add("hidden");
  xgboost.classList.add("hidden");
  keras.classList.add("hidden");
  pyspark.classList.add("hidden");
};

function info(text) {
  if (text === "HTML") {
    init();
    video1.classList.remove("hidden");
    html.classList.remove("hidden");
  }
  if (text === "CSS") {
    init();
    video1.classList.remove("hidden");
    css.classList.remove("hidden");
  }
  if (text === "JavaScript") {
    init();
    video1.classList.remove("hidden");
    javascript.classList.remove("hidden");
  }
  if (text === "Node.js") {
    init();
    video1.classList.remove("hidden");
    nodejs.classList.remove("hidden");
  }
  if (text === "Django") {
    init();
    video1.classList.remove("hidden");
    django.classList.remove("hidden");
  }
  if (text === "MERN") {
    init();
    video1.classList.remove("hidden");
    mern.classList.remove("hidden");
  }
  if (text === "Flask") {
    init();
    video1.classList.remove("hidden");
    flask.classList.remove("hidden");
  }

  if (text === "Flutter") {
    init();
    video2.classList.remove("hidden");
    flutter.classList.remove("hidden");
  }
  if (text === "Java") {
    init();
    video2.classList.remove("hidden");
    java.classList.remove("hidden");
  }
  if (text === "Kotlin") {
    init();
    video2.classList.remove("hidden");
    kotlin.classList.remove("hidden");
  }
  if (text === "Swift") {
    init();
    video2.classList.remove("hidden");
    swift.classList.remove("hidden");
  }
  if (text === "Android Studio") {
    init();
    video2.classList.remove("hidden");
    androidStudio.classList.remove("hidden");
  }

  if (text === "C++") {
    init();
    video3.classList.remove("hidden");
    cpp.classList.remove("hidden");
  }
  if (text === "Algorithms") {
    init();
    video3.classList.remove("hidden");
    algorithms.classList.remove("hidden");
  }
  if (text === "Hashing") {
    init();
    video3.classList.remove("hidden");
    hashing.classList.remove("hidden");
  }
  if (text === "Greedy Technique") {
    init();
    video3.classList.remove("hidden");
    greedy.classList.remove("hidden");
  }
  if (text === "Dynamic Programming") {
    init();
    video3.classList.remove("hidden");
    dynamicProgramming.classList.remove("hidden");
  }

  if (text === "Arrays") {
    init();
    video4.classList.remove("hidden");
    array.classList.remove("hidden");
  }
  if (text === "Linked List") {
    init();
    video4.classList.remove("hidden");
    linkedList.classList.remove("hidden");
  }
  if (text === "Trees") {
    init();
    video4.classList.remove("hidden");
    trees.classList.remove("hidden");
  }
  if (text === "Trie") {
    init();
    video4.classList.remove("hidden");
    tries.classList.remove("hidden");
  }

  if (text === "C#") {
    init();
    video5.classList.remove("hidden");
    chash.classList.remove("hidden");
  }
  if (text === "Unreal Engine") {
    init();
    video5.classList.remove("hidden");
    unreal.classList.remove("hidden");
  }
  if (text === "Unity") {
    init();
    video5.classList.remove("hidden");
    unity.classList.remove("hidden");
  }
  if (text === "Pygame") {
    init();
    video5.classList.remove("hidden");
    pygame.classList.remove("hidden");
  }

  if (text === "HTML5") {
    init();
    video6.classList.remove("hidden");
    html1.classList.remove("hidden");
  }
  if (text === "CSS3") {
    init();
    video6.classList.remove("hidden");
    css1.classList.remove("hidden");
  }
  if (text === "JavaScript (ES6+)") {
    init();
    video6.classList.remove("hidden");
    javascript1.classList.remove("hidden");
  }
  if (text === "Bootstrap") {
    init();
    video6.classList.remove("hidden");
    bootstrap.classList.remove("hidden");
  }
  if (text === "jQuery") {
    init();
    video6.classList.remove("hidden");
    jquery.classList.remove("hidden");
  }
  if (text === "SASS") {
    init();
    video6.classList.remove("hidden");
    sass.classList.remove("hidden");
  }
  if (text === "React") {
    init();
    video6.classList.remove("hidden");
    react.classList.remove("hidden");
  }

  if (text === "Penetration Testing") {
    init();
    video7.classList.remove("hidden");
    penetrationTesting.classList.remove("hidden");
  }
  if (text === "Kali Linux") {
    init();
    video7.classList.remove("hidden");
    kaliLinux.classList.remove("hidden");
  }
  if (text === "Computer Networking") {
    init();
    video7.classList.remove("hidden");
    computerNetworking.classList.remove("hidden");
  }
  if (text === "SQL Injection") {
    init();
    video7.classList.remove("hidden");
    sqlInjection.classList.remove("hidden");
  }

  if (text === "SQL") {
    init();
    video8.classList.remove("hidden");
    sql.classList.remove("hidden");
  }
  if (text === "DataBase Systems") {
    init();
    video8.classList.remove("hidden");
    databaseSystems.classList.remove("hidden");
  }
  if (text === "MySQL") {
    init();
    video8.classList.remove("hidden");
    mysql.classList.remove("hidden");
  }
  if (text === "Postgre SQL") {
    init();
    video8.classList.remove("hidden");
    postgreSql.classList.remove("hidden");
  }
  if (text === "NoSQL") {
    init();
    video8.classList.remove("hidden");
    nosql.classList.remove("hidden");
  }

  if (text === "Statistics") {
    init();
    video9.classList.remove("hidden");
    statistics.classList.remove("hidden");
  }
  if (text === "Python") {
    init();
    video9.classList.remove("hidden");
    python.classList.remove("hidden");
  }
  if (text === "NumPy") {
    init();
    video9.classList.remove("hidden");
    numpy.classList.remove("hidden");
  }
  if (text === "Pandas") {
    init();
    video9.classList.remove("hidden");
    pandas.classList.remove("hidden");
  }
  if (text === "Data Visualization") {
    init();
    video9.classList.remove("hidden");
    dataVisualization.classList.remove("hidden");
  }

  if (text === "Scikit-learn") {
    init();
    video10.classList.remove("hidden");
    scikitLearn.classList.remove("hidden");
  }
  if (text === "Tensor Flow") {
    init();
    video10.classList.remove("hidden");
    tensorFlow.classList.remove("hidden");
  }
  if (text === "XGBoost") {
    init();
    video10.classList.remove("hidden");
    xgboost.classList.remove("hidden");
  }
  if (text === "Keras") {
    init();
    video10.classList.remove("hidden");
    keras.classList.remove("hidden");
  }
  if (text === "PySpark") {
    init();
    video10.classList.remove("hidden");
    pyspark.classList.remove("hidden");
  }
}

const btn = document.getElementsByClassName("dropdown-container");

// for (let i = 0; i < btn.length; i++) {
//   const preciseTopics = btn[i].getElementsByTagName("A");
//   for (let j = 0; j < preciseTopics.length; j++) {
//     preciseTopics[j].addEventListener("click", function () {
//       const text = preciseTopics[j].textContent;
//       info(text);
//       console.log(text);
//     });
//   }
// }

for (let i = 1; i <= 51; i++) {
  const links = document.getElementById(`h${i}`);
  links.addEventListener("click", function () {
    info(links.textContent);
  });
}

// document.getElementById("h1").addEventListener("click", function () {
//   SubTopics.classList.add("hidden");
//   SubTopics.classList.remove("hidden");
//   html.classList.remove("hidden");
// });

// document.getElementById("h2").addEventListener("click", function () {
//   SubTopics.classList.add("hidden");
//   SubTopics.classList.remove("hidden");
//   css.classList.remove("hidden");
// });
