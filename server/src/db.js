const trips = [
    {
      "destination": "Moon",
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384.400 km",
      "duration": "3 days",
      "src": "moon.png",
      "alt": "Moon",
      "id": "1",
      "tripCategoryId":"2"
    },
    {
      "destination": "Mars",
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Mars has the largest canyon in our solar system, Valles Marineris.",
      "distance": "225 mil.Km",
      "duration": "9 months",
      "src": "mars.png",
      "alt": "Mars",
      "id": "2",
      "tripCategoryId":"1"
    },
    {
      "destination": "Europa",
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 Mil.Km",
      "duration": "3 years",
      "src": "europa.png",
      "alt": "Europa",
      "id": "3",
      "tripCategoryId":"2"
    },
    {
      "destination": "Jupiter",
      "description": " Jupiter is certainly the biggest kid on the block in our Solar System. It is named after the Roman king of the gods for good reason. It’s the largest planet in the solar system and has more moons than any other planet. But that’s not all...",
      "distance": "588 Mil.Km",
      "duration": "4 years",
      "src": "jupiter.png",
      "alt": "Jupiter",
      "id":"4",
      "tripCategoryId":"1"
    }
  ]

  const blogs = [
    {
      "title": "First Station is ISS",
      "date": "2021.01.30.",
      "small": " It’s in low-Earth orbit, this means that even though it is in space ..",
      "body": "1. First Station is International Space Station, which is in low-Earth orbit. This means that even though it is in space it is still subject to Earth’s gravity and is falling back to Earth, but it is traveling at such speed (approx. 17,500 mile per hour) that it is actually falling around Earth.  It is typically 250 miles above the Earth’s surface, and because the Earth is rotating beneath it, every time the ISS orbits the Earth it is over a different part of the Earth’s surface, and it passes over 90% of the Earth’s population.  This means the astronauts on board have an ever changing and very spectacular view, and have taken millions of photos.",
      "author": "Tom Shelley",
      "read": "read more",
      "value": 5,
      "id": "1",
      "userId":"1"
    },
    {
      "title": "Food preparation",
      "date": "2021.08.22.",
      "small": " Everyone’s gotta eat! And just like on Earth meal times in space are a time to catch-up and socialize. ",
      "author": "Elizabeth Smith",
      "body": "Everyone’s gotta eat! And just like on Earth meal times in space are a time to catch-up and socialize. The ISS galley has an array of food from the different countries that make up the ISS partnership so all tastes can be catered for. However in weightlessness there is no natural convection, meaning food must be heated in a slightly different way, either with hot water or using a forced air convention oven.Recent experiments have successfully grown mixed greens like lettuce and cabbage in space. While these are not yet available for astronauts to eat, they will be in the future.",
      "read": "read more",
      "value": 4,
      "id": "2",
      "userId":"2"
    },
    {
      "title": "A Day in the Life of a Private Astronaut part 1",
      "date": "2021.01.30.",
      "small": " A small group of lucky (and very successful) people have launched to the International Space Station (ISS) on flights arranged by Space Adventures.",
      "body": "Morning routine: Time on the ISS is set to UTC (Coordinated Universal Time) and the day begins around 6:00 a.m. And just like on Earth, everyone starts the day getting cleaned-up and refreshed. Being in a weightless environment there are no such thing as running water from a faucet or a nice warm shower, so you must make do with a lot of wet towels and no-rinse shampoo.",
      "author": "Phillip Kovalsky",
      "read": "read more",
      "value": 4,
      "id": "3",
      "userId":"3"
    },
    {
      "title": "Season’s Greetings 2022",
      "date": "2022.01.15.",
      "small": "I think many of us will be glad to see the end of 2021 and will welcome 2022 with open arms.",
      "body": "I think many of us will be glad to see the end of 2021 and will welcome 2022 with open arms.  But before we do, I thought it was worth looking back at some of 2020’s significant achievements in the field of space exploration – completed despite the global pandemic – as well as some of our favorite photographs of Earth taken by astronauts onboard the International Space Station.The Space Adventures’ team wishes you the best for 2021!  We have an exciting year ahead as we prepare for two clients to fly on the Soyuz to the International Space Station in December, and we’ll be sure to keep you posted of their progress. And please remember we are here to help you realize your own dreams of flying to space, so never hesitate to reach out – it’s never too early to start the conversation!",
      "author": "Cori Meyen",
      "read": "read more",
      "value": 5,
      "id": "4",
      "userId":"4"
    },
  ]

  const tripCategories = [
      {
          id:"1",
          name: "Planets"
      },
      {
          id:"2",
          name: "Moons"
      },


  ]

  const users = [
    {
      "id": "1",
      "name": "Tom Shelley",
      "email": "tom.shelley@gmail.com",
      "age": 25,
      "reviewId":"1",
      "blogId":"1"
    },
    {
      "id": "2",
      "name": "Elizabeth Smith",
      "email": "elizabeth.smith@gmail.com",
      "age": 32,
      "reviewId":"2",
      "blogId":"2"
   },
    {
      "id": "3",
      "name": "Phillip Kovalsky",
      "email": "phillip.kovalsky@gmail.com",
      "age": 35,
      "reviewId":"3",
      "blogId":"3"
    },
    {
      "id": "4",
      "name": "Cori Meyen",
      "email": "cory.meyeny@gmail.com",
      "age": 45,
      "reviewId":"4",
      "blogId":"4"
    }
  ];

  const reviews = [
    {
      "id": "1",
      "date":"2021-12-01",
      "title": "Absolute the best!",
      "comment": "It was the best experience ever in my life! Don't miss it!",
      "rating":5,
      "tripId":"1",
      "userId":"1"
    },
    {
      "id": "2",
      "date":"2021-12-21",
      "title": "Totally average",
      "comment": "I expected something more, good but nothing special.",
      "rating":3,
      "tripId":"2",
      "userId":"2"
    },
    {
      "id": "3",
      "date":"2022-02-11",
      "title": "Deffinetly Yes!",
      "comment": "Biggest adventure I have ever had! I felt 100% safe, not boring at all!",
      "rating":5,
      "tripId":"3",
      "userId":"3"
    },
    {
      "id": "4",
      "date":"2022-06-05",
      "title": "Worth its price",
      "comment": "Expensive but you will never forget!",
      "rating":4,
      "tripId":"4",
      "userId":"4"
    }
  ];


  exports.db = {
    trips,
    blogs,
    tripCategories, 
    users,
    reviews
}