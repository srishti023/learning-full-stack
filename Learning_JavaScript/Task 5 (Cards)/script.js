const users = [
    {
      fullName: "Aarav Mehta",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      profession: "Software Developer",
      description: "Aarav is a backend developer who loves building scalable systems junior developers.",
      tags: ["coding", "backend", "tech", "javascript"]
    },
    {
      fullName: "Sanya Kapoor",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      profession: "UI/UX Designer",
      description: "Sanya focuses on creating smooth user experiences and visually appealing interfaces.",
      tags: ["design", "figma", "ux", "creativity"]
    },
    {
      fullName: "Ritvik Sharma",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      profession: "Content Creator",
      description: "Ritvik creates lifestyle and travel content, collaborating with multiple digital brands.",
      tags: ["travel", "content", "vlog", "socialmedia"]
    },
    {
      fullName: "Ishika Verma",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      profession: "Photographer",
      description: "Ishika specializes in portrait photography and helps brands tell stories visually.",
      tags: ["camera", "portraits", "editing", "art"]
    },
    {
      fullName: "Kabir Malhotra",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      profession: "Fitness Coach",
      description: "Kabir trains clients online and offline, focusing on strength training and discipline.",
      tags: ["fitness", "gym", "health", "motivation"]
    }
  ];

  let sum = "";
  users.forEach(function(elem){
    sum = sum+`<div class="card">
    <img src="${elem.image}" alt="">
    <h3 class="full-name">${elem.fullName}</h3>
    <h2>${elem.profession}</h2>
    <p>${elem.description}</p>
</div>`
  })

  let main = document.querySelector("main")

  main.innerHTML = sum