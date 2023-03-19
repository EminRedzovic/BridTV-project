let video;
let head = document.getElementById("head");
const prikazi = (video) => {
  for (let i = 0; i < video.length; i++) {
    let podaci = video[i];
    let ime = "header" + i;
    const header = document.createElement("header");
    header.className = ime;

    const p = document.createElement("p");
    p.textContent = podaci.name;

    const iframe = document.createElement("iframe");
    iframe.src = podaci.source.ld;

    const image = document.createElement("img");
    image.src = podaci.image;
    image.style.display = "none";

    header.appendChild(p);
    header.appendChild(iframe);
    head.appendChild(header);
  }
};
fetch("https://services.brid.tv/services/get/latest/26456/0/1/25/0.json", {})
  .then((response) => response.json())
  .then((data) => {
    video = data.Video;
    prikazi(video);
    element = document.querySelector("button");
    console.log(element);
  });
let FOTO = document.getElementById("FOTO");
let VIDEO = document.getElementById("VIDEO");
let name1;
let name2;
FOTO.onclick = () => {
  for (let i = 0; i < video.length; i++) {
    name1 = "header" + i;
    const header = document.querySelector("." + name1);
    const iframe = header.querySelector("iframe");
    const image = document.createElement("img");
    image.src = video[i].image;
    iframe.replaceWith(image);
  }
};
VIDEO.onclick = () => {
  for (let i = 0; i < video.length; i++) {
    name2 = "header" + i;
    const header = document.querySelector("." + name2);
    const image = header.querySelector("img");
    const iframe = document.createElement("iframe");
    iframe.src = video[i].source.ld;
    image.replaceWith(iframe);
  }
};
