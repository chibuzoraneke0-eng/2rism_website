const menuButton = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closebutton = document.getElementById("closeBtn");
const destinationDisplay = document.getElementById("destinations");
const hotelsDisplay = document.getElementById("Hotels")
const tips_adviceDisplay = document.getElementById("Tips_advice")
const activitiesDiv = document.querySelector(".activities-div")

menuButton.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(0%)";
});

closebutton.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(-100%)";
});

const popular_destinations = [
  {
    title: "Big Sur",
    subtitle: "Carlifornia, USA",
    image: "images/big.png",
  },

  {
    title: "Prescott",
    subtitle: "Arizona, USA",
    image: "images/arizona.png",
  },

  {
    title: "Fort Mayers",
    subtitle: "Florida, USA",
    image: "images/fort.png",
  },

  {
    title: "Tucson",
    subtitle: "Arizona, USA",
    image: "images/tucson.png",
  },

  {
    title: "St. Joseph",
    subtitle: "Michigan, USA",
    image: "images/st.png",
  },

  {
    title: "Madrid",
    subtitle: "Spain",
    image: "images/madrid.png",
  },
];

const Hotels_and_Resturants = [
  {
    title: "Monastero Santa Rosa Hotel",
    subtitle: "Salerno, Italy",
    image: "images/rosa.png",
    rating: 5
  },

  {
    title: "Grand Hotel Tremezzo",
    subtitle: "Lake Coma, Italy",
    image: "images/lake.png",
    rating: 5
  },

  {
    title: "The Oberoi Udaivilas, Udaipur",
    subtitle: "Udaipur, India",
    image: "images/img9.png",
    rating: 5
  },

  {
    title: "AKA Beverly Hills",
    subtitle: "Los Angeles, United States",
    image: "images/img10.png",
    rating: 5
  },
];

const Travel_Tips_and_advice = [
  {
    image: "images/img11.png",
  },

  {
    image: "images/img12.png",
  },
];

const Activities = [
  {
    title: "Sailing",
    image: "images/sailing.jpg",
  },

  {
    title: "Climbing",
    image: "images/climbing.jpg",
  },

  {
    title: "Skiing",
    image: "images/skiing.jpg",
  },

  {
    title: "Hiking",
    image: "images/hiking.jpg",
  },
];



destinationDisplay.innerHTML = popular_destinations
    .slice(0, 6)
    .map(d => `
<div class="destination_card" >
<img src="${d.image}" alt="${d.name} image" />
<h4> ${d.title} </h4>
<h5> ${d.subtitle} </h5>
</div>
    `).join(" ")




hotelsDisplay.innerHTML = Hotels_and_Resturants
.slice(0, 4)
.map(d => `
    <div class="destination_card" >
<img src="${d.image}" alt="${d.title} image" />
<h4> ${d.title} </h4>
<h5> ${d.subtitle} </h5>

${Array.from({ length: d.rating}, (_, index) => (
`
<span key={index}>
<i class="bi bi-star-fill"></i>
 </span>`
)).join("")}
</div>

</div>
    `).join(" ")


    activitiesDiv.innerHTML = Activities
    .slice(0, 4)
    .map(d => {
      return `
        <div class="activity_card">
          <img src="${d.image}" alt="${d.title} image" />
          <h4>${d.title}</h4>
        </div>
      `;
    }).join(" ");