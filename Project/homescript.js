"use strict";

const contentType = document.querySelector(".topics");
const webdev = document.querySelector(".Web-developement");
const mobiledev = document.querySelector(".Mobile-App-developement");
const comptcode = document.querySelector(".Competitive-coding");
const ds = document.querySelector(".Data-structures");
const gamedev = document.querySelector(".Game-developement");
const frontend = document.querySelector(".Front-end");
const cyber = document.querySelector(".Cyber-security");
const dbms = document.querySelector(".dbms");
const datasci = document.querySelector(".Data-science");
const ml = document.querySelector(".Machine-learning");

const init = function () {
  document.getElementById("content0").classList.add("hidden");
  document.getElementById("content1").classList.add("hidden");
  document.getElementById("content2").classList.add("hidden");
  document.getElementById("content3").classList.add("hidden");
  document.getElementById("content4").classList.add("hidden");
  document.getElementById("content5").classList.add("hidden");
  document.getElementById("content6").classList.add("hidden");
  document.getElementById("content7").classList.add("hidden");
  document.getElementById("content8").classList.add("hidden");
  document.getElementById("content9").classList.add("hidden");
  document.getElementById("content10").classList.add("hidden");
};

contentType.addEventListener("click", function () {
  init();
  document.getElementById("content0").classList.remove("hidden");
});

webdev.addEventListener("click", function () {
  init();
  document.getElementById("content1").classList.remove("hidden");
});

mobiledev.addEventListener("click", function () {
  init();
  document.getElementById("content2").classList.remove("hidden");
});

comptcode.addEventListener("click", function () {
  init();
  document.getElementById("content3").classList.remove("hidden");
});

ds.addEventListener("click", function () {
  init();
  document.getElementById("content4").classList.remove("hidden");
});

gamedev.addEventListener("click", function () {
  init();
  document.getElementById("content5").classList.remove("hidden");
});

frontend.addEventListener("click", function () {
  init();
  document.getElementById("content6").classList.remove("hidden");
});

cyber.addEventListener("click", function () {
  init();
  document.getElementById("content7").classList.remove("hidden");
});

dbms.addEventListener("click", function () {
  init();
  document.getElementById("content8").classList.remove("hidden");
});

datasci.addEventListener("click", function () {
  init();
  document.getElementById("content9").classList.remove("hidden");
});

ml.addEventListener("click", function () {
  init();
  document.getElementById("content10").classList.remove("hidden");
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".login");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector(".login").classList.add("hidden");
  document.querySelector(".fa-user").classList.remove("hidden");
};

btnsOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
