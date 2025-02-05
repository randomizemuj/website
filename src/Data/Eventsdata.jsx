const events = [
  {
    id: "1",
    title: "EP Workshop",
    date: "5 Dec 2024",
    description:
      "Randomize hosted an engaging session focused on the 1st Year EP syllabus, offering in-depth explanations, practice questions, and interactive doubt-solving to help students prepare effectively for their MTE.",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912586/Website/Events/Ep-workshop_llvcui.jpg",
  },
  {
    id: "2",
    title: "Web Dev Workshop - Part 2",
    description:
      "Level up your web dev game! Dive deeper into JavaScript, learn the tricks of creating interactive websites, and take home skills that'll make your portfolio pop. Let’s code something amazing together!",
    date: "20th Nov 2024",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912591/Website/Events/WebDevWS-2_zzidyh.png",
  },
  {
    id: "3",
    title: "Hello World 2.O",
    date: "16-17 Oct 2024",
    description:
      'RANDOMIZE is back with our most anticipated and flagship event "HELLO WORLD!" Buckle up for a two-day of fun and exploration in the amazing universe of Computer Science!',
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912595/Website/Events/hello-world-2024_cahxla.png",
  },
  {
    id: "4",
    title: "Freshman Meetup",
    date: "8 Oct 2024",
    description:
      "The RANDOMIZE Freshman Meetup brought together first-year students for an evening filled with laughter, engaging conversations, and valuable insights. Attendees connected with their peers, got answers to their questions, and learned from their seniors, all while enjoying the vibrant and welcoming atmosphere.",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912589/Website/Events/freshman-meetup_eorghl.png",
  },
  {
    id: "5",
    title: "Web Dev Workshop",
    date: "1 Sept 2024",
    description:
      "Whether you're a beginner or have some coding experience, this hands-on session will help you design and code your own personalized portfolio website from scratch. Our experienced developers will guide you through every step! No prerequisites—just bring your thirst for knowledge and creativity!",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912587/Website/Events/WebDevWS-1_srdxwm.jpg",
  },
  {
    id: "6",
    title: "Panel Talk with a Googler",
    date: "14 April 2024",
    description:
      "Randomize(); is hosting an exclusive panel talk event this weekend with a distinguished industry expert. Details-Speaker: Kalyan Kumar Dubey, an employee at Google and a 5-star Coder on CodeChef. Topic: Gain insights and strategies to enhance coding skills, and understand the work environment at Google. This is an opportunity to learn from an experienced professional at Google, get your questions answered, and improve your coding abilities.",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737915875/Website/Events/googler_mke1bd.jpg",
  },
  {
    id: "7",
    title: "Building a Neural Network from Scratch",
    description:
      "This is a slightly advanced workshop focused on building neural networks from the ground up. Participants should have a foundational understanding of linear algebra, calculus, and Python programming. The workshop will likely cover key concepts such as network architecture, activation functions, backpropagation, and optimization algorithms. It offers a practical, hands-on approach to understanding the inner workings of neural networks.",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912597/Website/Events/ANN_Class_bjcrhy.png",
    date: "10th Feb, 2024",
  },
  {
    id: "8",
    title: "Git Workshop",
    date: "3 Feb 2024",
    description:
      "Randomize is conducting a session to teach Git and GitHub from scratch, which are essential skills for developers and enthusiasts. This workshop is ideal for anyone looking to start with version control.",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912590/Website/Events/GitHub_Workshop_ttcyex.png",
  },
  {
    id: "9",
    title: "The Fest",
    date: "19 Jan 2024",
    description:
      "Randomize(); is organizing a 3-Day Technological Festival called 'The Fest' from 19th to 21st January. Events include: 1) The Hackathon (19th Jan 9PM - 21st Jan Morning), a 36-hour duration challenge. 2) The Cryptic Hunt (20th Jan 10AM onwards). 3) The Ideathon (20th Jan 2PM), where participants pitch ideas (tech or otherwise) for funding, mentorship, and incubation. 4) The Bollywood DJ Night (21st Jan 5PM).",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737914588/Website/Events/fest_mbjr9x.jpg",
  },
  {
    id: "10",
    title: "DSA Workshop",
    description:
      "Got DSA on your mind? Join us for a packed session that covers all the essentials for your 2nd Year MTE. From sample problems to live doubt clearing, we've got your back!",
    date: "3rd and 4th Oct 2023",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912593/Website/Events/dsaWs_ej95bv.png",
  },
  {
    id: "11",
    title: "Hello World",
    date: "13 Sept 2023",
    description:
      "Learn about various topics at the upcoming two-day event on 13th and 14th September 2023. Topics include: Graphic Design + UI/UX, Generative AI + Fundamentals of AI, DSA + Competitive Programming, Full Stack Development + App Development, and an Introduction to Decentralized Technologies (blockchain, Web3, NFTs, Crypto).",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912586/Website/Events/hello-world_bh9wc9.jpg",
  },
  {
    id: "12",
    title: "Competitive Programming Workshop",
    date: "9 Sept 2023",
    description:
      "A 2-hour session where we'll tackle a programming problem, break it down, discuss approaches, solve with flowcharts and logic, and then code it. No prior programming knowledge required.",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912586/Website/Events/cp-workshop_gheuws.jpg",
  },

  {
    id: "13",
    title: "Freshman Meetup 2023",
    description:
      "Are you a freshman? Come hang out with us! We'll help you navigate college life and share our insider tips. This is your chance to ask anything, meet your seniors, and have some fun along the way.",
    date: "28th Aug 2023",
    image:
      "https://res.cloudinary.com/randomize/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1737912595/Website/Events/freshman-meetup-2023_usdi5k.png",
  },
];

export default events;
