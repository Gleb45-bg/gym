(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new Swiper(".program-swiper",{direction:"horizontal",loop:!0,spaceBetween:15,slidesPerView:"auto",navigation:{nextEl:".program-slider-right",prevEl:".program-slider-left"}});document.querySelector(".burger-trigger").addEventListener("click",()=>{document.querySelector(".burger-drop").classList.toggle("active")});document.querySelector(".burger-close").addEventListener("click",()=>{document.querySelector(".burger-drop").classList.remove("active")});new Swiper(".comment-swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".comment-swiper-btn-next"}});let r="month";function n(){r=="month"?(document.querySelector(".month").classList.toggle("active"),document.querySelector(".pricing-package-group-month").classList.toggle("active"),document.querySelector(".pricing-package-group-year").classList.remove("active"),document.querySelector(".year").classList.remove("active")):(document.querySelector(".month").classList.remove("active"),document.querySelector(".pricing-package-group-month").classList.remove("active"),document.querySelector(".pricing-package-group-year").classList.toggle("active"),document.querySelector(".year").classList.toggle("active")),a()}function a(){document.querySelector(".month").addEventListener("click",()=>{r="month",r=="month"?(document.querySelector(".month").classList.toggle("active"),document.querySelector(".pricing-package-group-month").classList.toggle("active"),document.querySelector(".pricing-package-group-year").classList.remove("active"),document.querySelector(".year").classList.remove("active")):(document.querySelector(".month").classList.remove("active"),document.querySelector(".pricing-package-group-month").classList.remove("active"),document.querySelector(".pricing-package-group-year").classList.toggle("active"),document.querySelector(".year").classList.toggle("active"))}),document.querySelector(".year").addEventListener("click",()=>{r="year",r=="month"?(document.querySelector(".month").classList.toggle("active"),document.querySelector(".pricing-package-group-month").classList.toggle("active"),document.querySelector(".pricing-package-group-year").classList.remove("active"),document.querySelector(".year").classList.remove("active")):(document.querySelector(".month").classList.remove("active"),document.querySelector(".pricing-package-group-month").classList.remove("active"),document.querySelector(".pricing-package-group-year").classList.toggle("active"),document.querySelector(".year").classList.toggle("active"))})}n();
