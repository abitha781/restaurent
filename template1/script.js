// function validateLogin() {
//     let user = document.getElementById("username").value.trim();
//     let pass = document.getElementById("password").value.trim();
//     let errorMsg = document.getElementById("error");

//     errorMsg.textContent = ""; 
   
//     if (user==="" || pass==="") {
//         errorMsg.textContent = "Fill this field";
//     } 
//     else if(user.length < 3){
//         errorMsg.textContent = "Username must be at least 3 characters long.";
//     }
//     else if (pass.length < 6) {
//         errorMsg.textContent = "Password must be at least 6 characters long.";
//     } 
//     else {
       
//         sessionStorage.setItem("successMessage", "✅ Login Successful!");
//         window.location.href = "index.html";
//     }
//      window.location.href = "login.html";
// }


function login() {
      let user = document.getElementById("username").value;
      let pass = document.getElementById("password").value;
      let error = document.getElementById("errorMsg");
      errorMsg.textContent = ""; 

      // if(user === "" || pass === "") {
      //   error.innerText = "⚠ Please fill all fields!";
      // } else {
      //   // Redirect to home page
      //   window.location.href = "index.html";
      // }
      // window.location.href = "login.html";
      if (user==="" || pass==="") {
        errorMsg.textContent = "Fill this field";
    } 
    else if(user.length < 3){
        errorMsg.textContent = "Username must be at least 3 characters long.";
    }
    else if (pass.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters long.";
    } 
    else {
         sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("successMessage", " Login Successful!");
        window.location.href = "index.html";
    }

    }
    //  window.location.href = "login.html";

    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      window.location.href = "login.html"; 
  }

  
  let msg = sessionStorage.getItem("successMessage");
  if(msg){
    document.getElementById("successMsg").innerText = msg;
    sessionStorage.removeItem("successMessage");
  }








window.addEventListener('scroll', function() {
        let aboutImg = document.querySelector('.about-img');
        let position = aboutImg.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if(position < screenPosition) {
            aboutImg.classList.add('show');
        }
    });


    const testimonials = [
        {
            text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
            name: "Sara Wilsson",
            role: "Designer",
             img: "https://i.pravatar.cc/150?img=47"
        },
        {
            text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            name: "John Smith",
            role: "Developer",
             img: "https://i.pravatar.cc/150?img=12"
        },
        {
            text: "Fugiat illum ullamco minim tempor enim labore duis veniam dolor irure amet noster irure amet veniam fugiat minim elit esse cillum.",
            name: "Anna Brown",
            role: "Manager",
             img: "https://i.pravatar.cc/150?img=24"
        }
    ];

    let currentIndex = 0;
    const testimonialContainer = document.getElementById("testimonial");
    const dotsContainer = document.getElementById("dots");

    function renderTestimonial(index) {
        testimonialContainer.innerHTML = `
            <div class="testimonial-text">
                <p>“ ${testimonials[index].text} ”</p>
                <h3>${testimonials[index].name}</h3>
                <span>${testimonials[index].role}</span>
                <div class="stars">★★★★★</div>
            </div>
            <div class="testimonial-img">
                <img src="${testimonials[index].img}" alt="${testimonials[index].name}">
            </div>
        `;
        updateDots();
    }

    function updateDots() {
        dotsContainer.innerHTML = "";
        testimonials.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === currentIndex) dot.classList.add("active-dot");
            dot.addEventListener("click", () => {
                currentIndex = i;
                renderTestimonial(currentIndex);
            });
            dotsContainer.appendChild(dot);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        renderTestimonial(currentIndex);
    }

    setInterval(autoSlide, 4000);
    renderTestimonial(currentIndex);


    document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        document.getElementById('service-title').textContent = this.dataset.title;
        document.getElementById('service-text').textContent = this.dataset.text;
        let img = document.getElementById('service-img');
        img.src = this.dataset.img;
        img.style.animation = "none";
        setTimeout(() => img.style.animation = "fadeIn 0.5s ease-in-out", 10);
    });
});



 function filterMenu(category) {
        let items = document.querySelectorAll('.menu-item');
        let buttons = document.querySelectorAll('.menu-filter button');

        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active to clicked button
        event.target.classList.add('active');

        // Show/Hide items
        items.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }

    // By default show starters
    filterMenu('starters');


//     function filterMenu(category, btn) {
//     let items = document.querySelectorAll('.menu-item');
//     let buttons = document.querySelectorAll('.menu-filter button');
//     let title = document.getElementById('menu-title');

   
//     buttons.forEach(b => b.classList.remove('active'));

    
//     btn.classList.add('active');

    
//     title.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    
//     items.forEach(item => {
//         if (item.classList.contains(category)) {
//             item.classList.add('show');
//         } else {
//             item.classList.remove('show');
//         }
//     });
// }


// filterMenu('starters', document.querySelector('.menu-filter button'));

const carousel = document.querySelector('#cardCarousel');
  new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: 'carousel'
  });




  function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let date = document.getElementById("date").value.trim();
  let time = document.getElementById("time").value.trim();
  let messageDiv = document.getElementById("message");

  if (name && email && phone && date && time) {
    messageDiv.style.display = "block";
    messageDiv.className = "message success";
    messageDiv.innerText = "✅ Booking Successful! Thank you for booking with us.";
  } else {
    messageDiv.style.display = "block";
    messageDiv.className = "message error";
    messageDiv.innerText = "❌ Error: Please fill in all fields!";
  }
}



function validateContact() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("messageBox").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name && email && subject && message) {
    formMessage.style.display = "block";
    formMessage.className = "message success";
    formMessage.innerText = "✅ Message Sent Successfully! We will get back to you soon.";
  } else {
    formMessage.style.display = "block";
    formMessage.className = "message error";
    formMessage.innerText = "❌ Please fill in all fields before sending your message.";
  }
}