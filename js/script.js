 // Initialize and add the map
 function initMap() {
  // console.log(2222);
// The location of Uluru
const uluru = { lat: 37.2469623, lng: 67.2449081 };
const uluru1 = { lat: 41.2825125, lng: 69.1392796 };
const uluru2 = { lat: 40.8447646, lng: 59.103389 };
const uluru3 = { lat: 30.048749, lng: 60.3197225 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: uluru,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
  position: uluru,
  map: map,
  title: "Click to zoom",
});

const marker1 = new google.maps.Marker({
  position: uluru1,
  map: map,
  title: "Click to zoom",
});

const marker2 = new google.maps.Marker({
  position: uluru2,
  map: map,
  title: "Click to zoom",
});

const marker3 = new google.maps.Marker({
  position: uluru3,
  map: map,
  title: "Click to zoom",
});
marker.addListener("click", () => {
  map.setZoom(8);
  map.setCenter(marker.getPosition());
});
}

/* navbar sticky - open */

window.addEventListener('scroll', function(){
  var headerContent = document.querySelector(".header_top");
  headerContent.classList.toggle("sticky",window.scrollY > 0);
})

/* navbar sticky - close */

/* humburger menu - JS open*/
const menuBtn = document.querySelector(".menu_btn");
let menuOpen = false;
var x = document.getElementsByTagName("BODY")[0];

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    x.style.overflow = 'hidden';
  }
  else{
    menuBtn.classList.remove('open');
    menuOpen = false;
    x.style.overflow = 'visible';
  }
});
/* humburger menu - JS close*/