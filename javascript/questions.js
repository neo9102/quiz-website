// Array of questions grouped by category (15 questions each)

const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "Technology",
    questions: [
      {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: 1,
      },
      {
        question: "What technology is used in wireless charging?",
        options: ["Bluetooth", "NFC", "USB-C", "Inductive charging"],
        correctAnswer: 3,
      },
      {
        question: "Which company developed the Android operating system?",
        options: ["Microsoft", "Google", "Apple", "Amazon"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is used for managing databases?",
        options: ["JavaScript", "MySQL", "HTML", " C++"],
        correctAnswer: 1,
      },
      {
        question: "Which company created the video game console, Xbox??",
        options: ["Sony", "Microsoft", "Nintendo", "Sega"],
        correctAnswer: 1,
      },
      {
        question: "What is the main purpose of an API (Application Programming Interface)?",
        options: ["To store data", "To run algorithms", "To enable software applications to communicate", "To manage databases"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is an open-source operating system?",
        options: ["Windows", "macOS", "Linux", "iOS"],
        correctAnswer: 2,
      },
      {
        question: "What does the Bluetooth technology primarily use to connect devices?",
        options: ["Infrared signals", "Radio waves", " Wi-Fi", "Optical signals"],
        correctAnswer: 1,
      },
      {
        question: "What is the function of a DNS server in networking?",
        options: ["Encrypt data", "Convert domain names to IP addresses", "Store files", "Manage user authentication"],
        correctAnswer: 1,
      },
      {
        question: "What is the name of the first artificial satellite launched into space?",
        options: ["Apollo 11", "Hubble", "Sputnik 1", "Voyager 1"],
        correctAnswer: 2,
      },
      {
        question: "Which of these is an example of a cloud storage service?",
        options: ["Photoshop", "Dropbox", "PowerPoint", "Outlook"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest social media platform by user count?",
        options: ["Twitter", "TikTok", "Instagram", "Facebook"],
        correctAnswer: 3,
      },
      {
        question: "Which programming language is primarily used for iOS app development?",
        options: ["Swift", "Python", "Java", "C++"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is an example of a digital currency?",
        options: ["Silver", "Stock Market", "Ethereum", "Bitcoin"],
        correctAnswer: 3,
      },
      {
        question: "What is the full form of URL?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Unified Resource Locator", "Uniform Retrieval Locator"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "Sports",
    questions: [
      {
        question: "Who was the first Indian to win an individual Olympic gold medal?",
        options: ["Abhinav Bindra", "Leander Paes", "Karnam Malleswari", "Rajyavardhan Rathore"],
        correctAnswer: 0,
      },
      {
        question: " Who is known as the Flying Sikh of India?",
        options: ["Sachin Tendulkar", "Abhinav Bindra", "Milkha Singh", "P. T. Usha"],
        correctAnswer: 2,
      },
      {
        question: "Which Indian footballer has won the Arjuna Award and is the all-time top scorer for the Indian national team?",
        options: ["Bhaichung Bhutia", "Gurpreet Singh Sandhu", "Sunil Chhetri", "Sandesh Jhingan"],
        correctAnswer: 2,
      },
      {
        question: "Which Indian cricketer is known as the Master Blaster?",
        options: ["Rahul Dravid", "MS Dhoni", "Kapil Dev", "Sachin Tendulkar"],
        correctAnswer: 3,
      },
      {
        question: "The Ranji Trophy is associated with which sport?",
        options: ["Football", "Cricket ", "Hockey", "Badminton"],
        correctAnswer: 1,
      },
      {
        question: "Who holds the record for the most Grand Slam titles in men’s tennis (as of 2024)?",
        options: ["Rafael Nadal", "Novak Djokovic", "Roger Federer", " Pete Sampras"],
        correctAnswer: 1,
      },
      {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", " Argentina", "Brazil ", " Italy"],
        correctAnswer: 2,
      },
      {
        question: "Who is the all-time top scorer in international football?",
        options: [" Lionel Messi", "Ali Daei", "Cristiano Ronaldo", "Pelé"],
        correctAnswer: 2,
      },
      {
        question: "The term hat-trick originated in which sport?",
        options: ["Cricket", "Football", "Hockey", "Baseball"],
        correctAnswer: 0,
      },
      {
        question: "What does VAR stand for in football?",
        options: ["Verified Action Replay", "Video Analysis Review", "Video Assistant Referee", "Virtual Automatic Referee"],
        correctAnswer: 2,
      },
      {
        question: "Who is the only player to have won the Ballon d'Or 8 times (as of 2023)?",
        options: [" Cristiano Ronaldo", "Luka Modrić", "Lionel Messi ", "Zinedine Zidane"],
        correctAnswer: 2,
      },
      {
        question: "Which team won the 2022 UEFA Champions League?",
        options: ["PSG", "Manchester City", "Real Madrid", "Bayern Munich"],
        correctAnswer: 2,
      },
      {
        question: "What is the standard number of players on a volleyball team on the court?",
        options: ["9", "7", "8", "6"],
        correctAnswer: 3,
      },
      {
        question: "Who is the youngest Formula 1 World Champion?",
        options: ["Lewis Hamilton", "Fernando Alonso", "Sebastian Vettel", "Max Verstappen"],
        correctAnswer: 2,
      },
      {
        question: "Which country has hosted the Olympic Games the most times?",
        options: ["China", "Germany", "USA ", "France"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "Entertainment",
    questions: [
      {
        question: "Who won the Academy Award for Best Actor in 2022?",
        options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
        correctAnswer: 1,
      },
      {
        question: " Which movie won the National Award for Best Film in 2023?",
        options: ["The Kashmir Files", "RRR", "Brahmastra", "Drishyam 2"],
        correctAnswer: 0,
      },
      {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who is the director of Lagaan??",
        options: ["Karan Johar", " Ashutosh Gowariker", "Sanjay Leela Bhansali", " Rakesh Roshan"],
        correctAnswer: 1,
      },
      {
        question: "Who played the character of Hermione Granger in the Harry Potter film series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the movie 'Inception'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "What is the name of Rajinikanth’s character in Enthiran?",
        options: ["Dr. Vaseegaran", "Shankar", "Raghavan", "Aditya"],
        correctAnswer: 0,
      },
      {
        question: "Which actor starred as The Witcher in the Netflix series?",
        options: ["Jason Momoa", "Chris Hemsworth", "Henry Cavill", "Tom Hardy"],
        correctAnswer: 2,
      },
      {
        question: "In which movie did Heath Ledger portray the Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "What year did the movie 'The Matrix' release?",
        options: ["1997", "1998", "2000", "1999"],
        correctAnswer: 3,
      },
      {
        question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
    ],
  },
];
