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
    image: "Images/big.jpg",
  },

  {
    title: "Prescott",
    subtitle: "Arizona, USA",
    image: "Images/arizona.jpg",
  },

  {
    title: "Fort Mayers",
    subtitle: "Florida, USA",
    image: "Images/fort.jpg",
  },

  {
    title: "Tucson",
    subtitle: "Arizona, USA",
    image: "Images/tucson.jpg",
  },

  {
    title: "St. Joseph",
    subtitle: "Michigan, USA",
    image: "Images/st.jpg",
  },

  {
    title: "Madrid",
    subtitle: "Spain",
    image: "Images/madrid.jpg",
  },
];

const Hotels_and_Resturants = [
  {
    title: "Monastero Santa Rosa Hotel",
    subtitle: "Salerno, Italy",
    image: "Images/rosa.jpg",
    rating: 5
  },

  {
    title: "Grand Hotel Tremezzo",
    subtitle: "Lake Coma, Italy",
    image: "Images/lake.jpg",
    rating: 5
  },

  {
    title: "The Oberoi Udaivilas, Udaipur",
    subtitle: "Udaipur, India",
    image: "Images/img9.jpg",
    rating: 5
  },

  {
    title: "AKA Beverly Hills",
    subtitle: "Los Angeles, United States",
    image: "Images/img10.jpg",
    rating: 5
  },
];

const Travel_Tips_and_advice = [
  {
    image: "Images/img11.jpg",
  },

  {
    image: "Images/img12.jpg",
  },
];

const Activities = [
  {
    title: "Sailing",
    image: "Images/sailing.jpg",
  },

  {
    title: "Climbing",
    image: "Images/climbing.jpg",
  },

  {
    title: "Skiing",
    image: "Images/skiing.jpg",
  },

  {
    title: "Hiking",
    image: "Images/hiking.jpg",
  },
];



destinationDisplay.innerHTML = popular_destinations
    .slice(0, 6)
    .map(d => `
<div class="destination_card" >
<img src="${d.image}" alt="${d.name} Images" />
<h4> ${d.title} </h4>
<h5> ${d.subtitle} </h5>
</div>
    `).join(" ")




hotelsDisplay.innerHTML = Hotels_and_Resturants
.slice(0, 4)
.map(d => `
    <div class="destination_card" >
<img src="${d.image}" alt="${d.title} Images" />
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
          <img src="${d.image}" alt="${d.title} Images" />
          <h4>${d.title}</h4>
        </div>
      `;
    }).join(" ");