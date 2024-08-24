function generateCompliment() {
    const compliments = {
        "Ushalatha Sannegowda": "Are you a land broker, because I want to sell the whole plot in my heart to you!",
        "Yaser Ahmed": "Good friends don't let you do stupid things... alone, but our creativity is off the charts!",
        "James Selvaraj": "You are a natural leader!",
        "Varsha Nanjunda": "Your positivity is contagious!",
        "Isaiah Hanok": "You have an incredible work ethic!",
        "Shalini Ayyaswamy": "Please don't laugh, Better Luck Next Time 👋",
        "Jayashree Etteari": "You have an amazing smile and a heart of gold.",
        "Manisha Das": "Are you an astronaut? Because to us, you’re out of this world!",
        "Arthi Bhat": "Let’s play a game! If I win, you take me out. If you win, I take you out.",
        "Thanuja Shetty": "Is your dad a baker? Because you're a honey cake! Excuse me, but I think you dropped something: my jaw.",
        "Navya CK": "Are you a fire? Because you’re melting everyone's heart.",
        "Zubair Khan": "True friends don't judge each other. They judge other people together.",
        "Ramya Renukaradhya": "Let me guess three things about you: You’re really funny, really cute, and really in need of a date Friday night?",
        "Priya Srinivas": "Do you have a map? People keep getting lost in your eyes.",
        "Yamuna Kemparaju": "Is your name Google? Because you have everything people have been searching for.",
        "Ramya": "Are you a magician? Because whenever someone looks at you, everyone else disappears.",
        "Chaithra Rajesh": "Do you believe in love at first sight, or should we walk by again?",
        "Hemalatha Bolugouni": "If you were a vegetable, you'd be a cute-cumber.",
        "Pavitra Raju": "Do you have a Band-Aid? People just scraped their knee falling for you.",
        "Shafiya Saba": "Are you a camera? Because every time we look at you, we smile.",
        "Teju Devaraju": "Is your name Wi-Fi? Because I'm really feeling a strong connection.",
        "Navitha Vallem": "4+4=8 but you+me=fate",
         "Meghana Nagaraj":"You're looking a little sick, you must be suffering from lack of Vitamin Me.",
        "Liza Lazar" : "A good friend will help you move. But a best friend will help to move your dead body.",
        "Shalini Suresh" : "We're not just friends; we're each other's personal comedians.",
        "Megha Arunachalachari":"A good friend will bail you out of jail. A best friend will be sitting next to you saying, 'Damn, that was fun.'" ,
        
    };

    const name = document.getElementById("nameInput").value;
    const compliment = compliments[name] || "Please enter your full name (e.g., David Billa)";
    document.getElementById("output").textContent = `${name}! ${compliment}`;
}
