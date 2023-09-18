import { createContext ,useState} from "react"


export const Store=createContext()
function Datacompo(props){
    const [data]=useState([{
        id:1,
        name:"Pathaan",
        catageory:"bolly",
        heading:"Pathaan movie review: Shah Rukh Khan, and Bollywood, are back with this patriotic spy thriller",
        imgstore:"https://www.koimoi.com/wp-content/new-galleries/2022/12/pathan-cast-fee-revealed-deepika-padukone-shah-rukh-khan-john-abraham-takes-home-massive-paycheck-001.jpg",
        details:"Pathaan movie review: Shah Rukh Khan and Deepika Padukone-starrer has finally got what’s needed in a spy thriller -- non-stop action, glamorous leads, the guy who can save the world, a high-octane set piece, and an emo line at a time.",
        level:"top",
        indetaildata:"Watch the Official Trailer from the Hindi movie 'Pathaan' starring Shah Rukh Khan, Deepika Padukone, and John Abraham. 'Pathaan' is directed by Siddharth Anand, produced by Aditya Chopra, and co-produced by Akshaye Widhani. The music of the film 'Pathaan' is given by Vishal and Sheykhar, the lyrics are written by Kumaar, the dialogues are by Abbas Tyrewala and the story is by Siddharth Anand. The screenplay of Shah Rukh Khan starrer 'Pathaan' is by Shridhar Raghavan and the film is edited by Aarif Sheikh. Choreography is done by Vaibhavi Merchant and Bosco-Caesar. Background music is given by Sanchit Balhara and Ankit Balhara while action direction is done by Casey O’Neill, Craig Macrae, and Sunil Rodrigues. Shah Rukh Khan, Deepika Padukone, and John Abraham starrer 'Pathaan' is all set to release in theaters on 25 January 2023. To know more about the 'Pathaan' Trailer watch the video"
    },
    {
        id:2,
        name:"Gadar 2",
        catageory:"bolly",
        heading:"Gadar 2 box office collection Day 33: Sunny Deol’s film sees a gradual decline after Jawan’s release",
        details:" Gadar 2 box office collection Day 33: Gadar 2 created quite a rage at the box office, breaking many records when it hit cinema halls on August 11. However, in its fifth week, the sequel of Gadar is encountering fierce competition from Shah Rukh Khan’s Jawan.",
        level:"top",
        imgstore:"https://m.media-amazon.com/images/M/MV5BZGEzMDJjNGUtYTFhZi00MDgyLWIzMzYtMzcwMDQyZjcyNGY1XkEyXkFqcGdeQXVyNTcwNTM5ODI@._V1_.jpg",
        indetaildata:"The sequel struggles to leave you emotionally charged. Gadar 2 tries to cash in on the nostalgia factor, filmy dialoguebaazi and slowmo action scenes, without a story or purpose that can hold it all together. Sakeena's father Ashraf Ali (Amrish Puri) is no more."
    },
    {
        id:3,
        name:"jawan",
        catageory:"bolly",
        heading:"Jawan box office collection Day 6: Shah Rukh Khan’s film to soon cross Rs 600 cr mark worldwide",
        imgstore:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?fit=1200%2C700&ssl=1",
        details:"Jawan box office collection Day 6: Jawan will soon zoom past the Rs 600 crore mark at the global box office as the film's worldwide collection is now at Rs 574.89 crore.",
        level:"top",
        indetaildata:"A masked vigilante (Shah Rukh Khan), sets out to accelerate some right societal changes, in his own ways. He along with his army of super heroic women, work towards enabling justice by taking on a dangerous arms dealer Kali (Vijay Sethupathi)."

    },
    {
        id:4,
        name:"Adipurush",
        catageory:"bolly",
        heading:" Ramanand Sagar's son Prem Sagar reacts to Prabhas' Adipurush, ",
        imgstore:"https://images.indianexpress.com/2023/06/Adipurush-3.jpg",
        details:"Directed by Om Raut, 'Adipurush' is a mythological film based on Hindu epic Ramayana. ",
        level:"medium",
        indetaildata:"its 'tapori' dialogues by Hanuman and Saif Ali Khan's Ravana as a dreaded villain.It stars Prabhas in the role of Raghava, Kriti Sanon as Janaki, Sunny Singh as Lakshmana, Devdatta Nage as Bajrang and Saif Ali Khan as the antagonist Lankesh. The film is mounted on a grand budget of Rs 500 crore and is heavy on VFX. 'Adipurush' is expected to have a grand opening at the box office since the advance booking numbers looked promising. Paying an ode to Lord Hanuman, theatre owners have been asked to leave one seat empty during every screening. The excitement for 'Adipurush' is at its peak and the film will have early morning shows in Telangana starting at 4 AM. ‘Adipurush’ will be released today in Hindi, Tamil, Telugu, Kannada and Malayalam. Follow this live blog for all the latest updates on ‘Adipurush’, box office figures, new stories and much more. To tell the country’s most revered good vs evil tale, as old as the hills to the contemporary audience, without sounding archaic is no mean task. When the content has generational awareness, novel storytelling can be its only differentiator. Raut goes the Marvel way to draw in the younger crowd as his film rides high on action-adventure over ethos."

    },
    {
        id:5,
        name:"Rocky Aur Rani Kii Prem Kahaani",
        catageory:"bolly",
        heading:"At heart, 'Rocky Aur Rani Kii Prem Kahaani' is an entertaining and sweet love story",
        imgstore:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/rocky-aur-rani-kii-prem-kahaani-movie-review-2.jpg",
        details:" Opposites attract, and a loud and colourful Punjabi boy, Rocky, and a well-educated Bengali television news anchor, Rani, fall in love. ",
        level:"medium",
        indetaildata:"Flamboyant Punjabi Rocky and intellectual Bengali journalist Rani fall in love despite their differences. After facing family opposition, they decide to live with each other's families for three months before getting married.As their families oppose the relationship, they devise a plan—to live in each other’s homes for three months before taking the relationship to the next level."

    },
    {
        id:6,
        name:"the kerala story",
        catageory:"bolly",
        heading:"The Kerala Story’ Movie Review: Adah Sharma’s Film Is A Fantastic Guide On What Not To Do When Someone’s Brainwashing You",
        imgstore:"https://c.ndtvimg.com/2023-05/m2ksa0l8_the-kerala-story-movie-poster_625x300_03_May_23.jpg",
        details:"Adah Sharma, Yogita Bihani, Sonia Balani and Siddhi Idnani starrer ‘The Kerala Story’ has been the talk of the town for quite some time. ",
        level:"medium",
        indetaildata:"Is the movie worth your time? Or can you simply skip it? Read the full movie review to find out.A converted Muslim woman narrates her ordeal of how she once wanted to become a nurse but was brainwashed and manipulated by religious vanguards, turned into an ISIS terrorist and sent on her way to Syria. She tells her ordeal after she landed in an Afghanistan jail. Not just her, a few of her friends also faced similar ordeals from religious xenophobics, and all faced different fates. While one committed suicide, one was raped brutally and continually that too when she was unconscious. Will there be justice for these women? Will the lead character be able to absolve herself from the crimes that are being labelled against her name? Will she be able to get back to India ever again? Will her family ever be happy? Well, for all that you’ll have to watch the movie."

    },
    {
        id:7,
        name:"OMG 2",
        catageory:"bolly",
        heading:"Actor Yami Gautam expressed her excitement as 'OMG 2''s box office collection crossed Rupees 120 crore. ",
        imgstore:"https://assets-in.bmscdn.com/discovery-catalog/events/et00361712-nldzfskgwv-landscape.jpg",
        details:"A diehard bhakt of Lord Shiva, Kanti Sharan Mudgal (Pankaj Tripathi) is forced to question his own thoughts and societal norms on morality",
        level:"medium", 
        indetaildata:"Once the video goes viral, the school expels Vivek (a brilliant Aarush Varma) to salvage its image and reputation. Ashamed of his son’s vulgar act and fearing the public outrage, Kanti decides to flee with his family to an undisclosed location. His son’s suicide attempts and declining mental health owing to humiliation and bullying, compel him to open his eyes and question his own understanding of being a parent and an adult."


    },
    {
        id:8,
        name:"Kisi Ka Bhai Kisi Ki Jaan",
        catageory:"bolly",
        heading:"Kiska Bhai Kisi Ki Jaan Movie Box Office Collection The film was released in India on April 21 and earned over Rs 100 crore at the box office.",
        imgstore:"https://www.pinkvilla.com/images/2023-03/kisi-ka-bhai-kisi-ki-jaan_88431-l_727x409.jpg",
        details:"After Kisi Ka Bhai Kisi Ki Jaan flops, trade expert says Salman Khan ‘needs reality check’",
        level:"medium",
        indetaildata:"It is a larger-than-life actioner with brutal violence and tons of drama. Kisi Ka Bhai Kisi Ki Jaan story: Bhaijaan (Salman Khan) is committed to living his life as a bachelor so that he can take care of his three younger bhais. But when a beautiful woman walks into his life things take an unexpected turn"

    },
    {
        id:9,
        name:"Tu Jhoothi Main Makkaar",
        catageory:"bolly",
        heading:"Tu Jhoothi Main Makkaar: In Luv Ranjan’s film, everyone talks endlessly, but nobody communicates",
        imgstore:"https://images.indianexpress.com/2023/03/tu-jhoothi-main-makkar.jpg",
        details:"Post Credits Scene: Luv Ranjan's new film, starring Shraddha Kapoor and Ranbir Kapoor, goes to unbelievable lengths to keep its characters in the dark",
        level:"maintop1",
        indetaildata:"During the climactic dash to the airport in director Luv Ranjan’s new film, Tu Jhoothi Main Makkaar — now out on Netflix after a Rs 145 crore theatrical run — Dimple Kapadia’s character forbids her son, played by Ranbir Kapoor, from simply calling up the girl that he loves, played by Shraddha Kapoor, and stopping her from boarding a flight to London. Mickey, whose real name I’m embarrassed to report is Rohan, has just realised that letting Tinni go would be the biggest mistake of his life. And so, he has gathered his entire family — including parents, sister, niece, grandmother — and raced off to the airport to stop her."

    },
    {
        id:10,
        name:"Dream Girl 2",
        catageory:"bolly",
        heading:"Dream Girl 2 box office collection: Ayushmann Khurrana earns his fourth 100 crore film!",
        imgstore:"https://namaskarbhaarat.com/wp-content/uploads/2023/08/xconvert.com-2023-08-19T124326.364.webp",
        details:"Ananya Panday is celebrating her first box office century with 'Dream Girl 2'. The actress took to X (formerly called Twitter) to thank her fans.",
        level:"medium",
        indetaildata:"Aanya Panday has worked in a host of films including 'Liger', 'Student of the Year 2', 'Pati Patni Aur Woh', etc. However, it's the first time that she has scored a century with the recently released film, 'Dream Girl 2'. The actress is on cloud nine as she took to X, formerly called Twitter, to thank her fans and followers for their love as her film crossed the Rs 100-crore mark at the box office"

    },
    {
        id:71,
        name:"Dream Girl 2",
        catageory:"bolly",
        heading:"Dream Girl 2 box office collection: Ayushmann Khurrana earns his fourth 100 crore film!",
        imgstore:"https://namaskarbhaarat.com/wp-content/uploads/2023/08/xconvert.com-2023-08-19T124326.364.webp",
        details:"Ananya Panday is celebrating her first box office century with 'Dream Girl 2'. The actress took to X (formerly called Twitter) to thank her fans.",
        level:"top",
        indetaildata:"Aanya Panday has worked in a host of films including 'Liger', 'Student of the Year 2', 'Pati Patni Aur Woh', etc. However, it's the first time that she has scored a century with the recently released film, 'Dream Girl 2'. The actress is on cloud nine as she took to X, formerly called Twitter, to thank her fans and followers for their love as her film crossed the Rs 100-crore mark at the box office"

    },
    //technoligies
    
    
    {
        id:11,
        name:"Artificial intelligence",
        catageory:"tech",
        heading:"Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals",
        imgstore:"https://www.igmguru.com/blog/wp-content/uploads/2020/10/machine-learning-1-900x579.jpg",
        details:" It is also the field of study in computer science that develops and studies intelligent machines. AI may also refer to the machines themselves.",
        level:"medium",
        indetaildata:"AI technology is widely used throughout industry, government and science. Some high-profile applications are: advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI art), and competing at the highest level in strategic games"
    },
    {
        id:12,
        name:"Internet of things",
        catageory:"tech",
        heading:"the Internet of Things, or IoT. The Internet of Things is the future",
        imgstore:"https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202011/MIT-Tiny-AI-01_0.jpg?itok=chf7f8K1",
        details:"Technology today is evolving at a rapid pace, enabling faster change and progress, causing an acceleration of the rate of change",
        level:"medium",
        indetaildata:" it is not only technology trends and emerging technologies that are evolving, a lot more has changed this year due to the outbreak of COVID-19 making IT professionals realize that their role will not stay the same in the contactless world tomorrow. And an IT professional in 2023-24 will constantly be learning, unlearning, and relearning"
    },
    {
        id:13,
        name:"Cybersecurity",
        catageory:"tech",
        heading:"Cybersecurity refers to the practices and technologies used to protect computer systems, networks",
        imgstore:"https://img.freepik.com/premium-photo/technology-security-concept-safety-digital-protection-system_142243-71.jpg",
        details:"Organizations are pursuing innovation and transforming their businesses to drive growth and competitive advantage, yet are challenged by securing identities, data, and workloads across the hybrid cloud.",
        level:"medium",
        indetaildata:"IBM Security Services is a trusted partner — delivering advisory, integration and managed security services, to offensive and defensive capabilities, we combine a global team of experts with proprietary and partner technology to co-create tailored security programs to provide vulnerability management and transform security into a business enabler."
    },
    {
        id:14,
        name:"Quantum computing",
        catageory:"tech",
        heading:"A quantum computer is a computer that exploits quantum mechanical phenomena",
        imgstore:"https://www.stevenvanbelleghem.com/wp-content/uploads/2020/02/QuantumComputing-750x450-1.jpg",
        details:"At small scales, physical matter exhibits properties of both particles and waves, and quantum computing leverages this behavior, specifically quantum superposition and entanglement, using specialized hardware that supports the preparation and manipulation of quantum states.",
        level:"medium",
        indetaildata:"Classical physics cannot explain the operation of these quantum devices, and a scalable quantum computer could perform some calculations exponentially faster than any modern classical computer. "
    },
    {
        id:15,
        name:"Machine learning",
        catageory:"tech",
        heading:"Machine learning is an umbrella term for solving problems for which development of algorithms by human programmers",
        imgstore:"https://thumbs.dreamstime.com/b/machine-learning-hand-robot-touching-binary-data-futuristic-artificial-intelligence-ai-deep-brain-representing-algorithm-154741982.jpg",
        details:"Machine learning (ML) is a subset of AI that involves the use of algorithms and statistical models to enable computers to learn and improve their performance",
        level:"medium",
        indetaildata:"In simple words, Machine Learning is a method of data analysis that gives automated freedom to an analytical model building. It is a vital branch of Artificial"
    },
    {
        id:16,
        name:"Computing",
        catageory:"tech",
        heading:"Computing is any goal-oriented activity requiring, benefiting from",
        imgstore:"https://img.freepik.com/premium-photo/3d-cloud-computing-hosting-technology-with-electronic-devices_843415-75.jpg",
        details:"creating computing machinery. It includes the study and experimentation of algorithmic processes, and development of both hardware and software.",
        level:"medium",
        indetaildata:"For this reason, edge computing can be used to process time-sensitive data in remote locations with limited or no connectivity to a centralized location."
    },
    {
        id:72,
        name:"Computing",
        catageory:"tech",
        heading:"Computing is any goal-oriented activity requiring, benefiting from",
        imgstore:"https://img.freepik.com/premium-photo/3d-cloud-computing-hosting-technology-with-electronic-devices_843415-75.jpg",
        details:"creating computing machinery. It includes the study and experimentation of algorithmic processes, and development of both hardware and software.",
        level:"maintop2",
        indetaildata:"For this reason, edge computing can be used to process time-sensitive data in remote locations with limited or no connectivity to a centralized location."
    },
    {
        id:17,
        name:"Automation",
        catageory:"tech",
        heading:"Automation describes a wide range of technologies that reduce human intervention in processes",
        imgstore:"https://st4.depositphotos.com/10325516/29147/i/450/depositphotos_291472282-stock-photo-cyborg-hand-with-hud.jpg",
        details:"Like AI and Machine Learning, Robotic Process Automation, or RPA, is another technology that is automating jobs. ",
        level:"top",
        indetaildata:"Robotic Process Automation (RPA). Like AI and VR/MR, Robotics technology is being developed for a wide range of applications, including manufacturing "
    },
    {
        id:18,
        name:"Data science",
        catageory:"tech",
        heading:"Data science is an interdisciplinary academic field that uses statistics, scientific computing",
        imgstore:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMWULqHklNaPuqGhygTAvHeAPxQZX6dwT8_aWWvvM&s",
        details:"No wonder why Data Science makes it to this list of trending technologies. The rapid increase in data has made data science an attractive career choice.",
        level:"top",
        indetaildata:"Skills such as Artificial Intelligence, Machine Learning, Robotics, Data Science, Blockchain, Fullstack web development, and Cyber Security are in great demand"
    },
    {
        id:19,
        name:"Cloud computing",
        catageory:"tech",
        heading:"Cloud computing is the on-demand availability of computer system resources",
        imgstore:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373-503_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3abf0dc0e6efd774794c70d3b44c7819",
        details:"In the past ten years, cloud computing has experienced one of the fastest growth rates of any technology. ",
        level:"top",
        indetaildata:"Cloud computing has become an essential aspect of modern IT infrastructure, with businesses and individuals utilizing cloud services for their data storage"
    },
    {
        id:20,
        name:"DevOps",
        catageory:"tech",
        heading:"DevOps is a methodology in the software development and IT industry",
        imgstore:"https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
        details:"A few companies that are on a hiring spree for DevOps engineers include Amazon, Netflix, Target, Walmart, Meta, Etsy, and Adobe. ",
        level:"top",
        indetaildata:"DevOps is a methodology that brings together software development and IT operations. Its goal is to shorten the software development life cycle and provide high ..."
    },
    {
        id:21,
        name:"Avengers: Endgame",
        catageory:"holly",
        heading:"Avengers Endgame makes history in India, sells 1 million advance tickets with up to 18 tickets going per second ",
        imgstore:"https://c.ndtvimg.com/2019-04/2rpnoa2g_avengers-review-facebook_625x300_26_April_19.jpg",
        details:"Marvel fans are finding themselves in a virtual queue to grab tickets for the highly anticipated superhero film Avengers: Endgame. BookMyShow has witnessed a record advance ticket sale with one million tickets sold in just over a day.",
        level:"medium",
        indetaildata:"vengers: Endgame is the 22nd film from the Marvel Cinematic Universe, the latest after Captain Marvel, which released last month. The film stars Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson and Brie Larson, amongst others."

    },
    {
        id:22,
        name:"Avengers: Infinity War",
        catageory:"holly",
        heading:"It was the fourth film and the first superhero film to gross over $2 billion worldwide, breaking numerous box office records, and becoming the highest-grossing ",
        imgstore:"https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/15/Pictures/_4fe71636-5808-11e8-b87b-3dd7d8bd63e9.png",
        details:"The film was announced in October 2014 as Avengers: Infinity War – Part 1. The Russo brothers came on board to direct in April 2015, and a month later Markus and McFeely signed on to write the script for the film,",
        level:"medium",
        indetaildata:"which draws inspiration from Jim Starlin's 1991 comic book The Infinity Gauntlet and Jonathan Hickman's 2013 comic book Infinity. In 2016, Marvel shortened the title to Avengers: Infinity War. Filming began in January 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, with a large cast consisting mostly of actors reprising their roles from previous MCU films, including Brolin as Thanos. The production lasted until July 2017, shooting back-to-back with a direct sequel, Avengers: Endgame (2019). Additional filming took place in Scotland, the Downtown Atlanta area, and New York City. With an estimated budget of $325–400 million, the film is one of the most expensive films ever made."

    },
    {
        id:23,
        name:"Top Gun: Maverick",
        catageory:"holly",
        heading:"Top Gun: Maverick, directed by Joseph Kosinski, is predicted to be the highest-grossing film of 2022",
        imgstore:"https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2022/05/wallpapersden.com_top-gun-maverick-hd-tom-cruise-movie_3418x1479.jpg?fit=3418%2C1479&ssl=1",
        details:"Tom Cruise's latest blockbuster film has broken box office records across America. The movie Top Gun: Maverick was shown in the biggest ever number of North American movie theatres",
        level:"medium",
        indetaildata:"The movie magazine Variety reported that 4,732 cinemas in the USA and Canada showed Maverick. This makes it the widest release of all time. The movie also broke another record. It is the best Memorial Day opening film in history."

    },
    {
        id:24,
        name:"Black Panther",
        catageory:"holly",
        heading:"Black Panther movie breaks box office records",
        imgstore:"https://images.alphacoders.com/902/902378.jpg",
        details:"The new superhero movie Black Panther is breaking box office records. It is the highest moneymaking debut ever for a February film. Disney, the movie's maker, estimated that the film has earned over $361 million in its first three days",
        level:"medium",
        indetaildata:"The opening was the fifth highest-earning film ever. The movie has been helped by great reviews from critics. The movie review site Rotten Tomatoes gave it a 97 per cent rating. It is very rare for any movie to get such a high score. The Los Angeles Times newspaper compared Black Panther to a Star Wars movie. It said Black Panther fever took over Los Angeles. It added: The film opened to the kind of fervor typically reserved for the latest offering in the Star Wars franchise."

    },
    {
        id:25,
        name:"Mission: Impossible - Fallout",
        catageory:"holly",
        heading:"Mission: Impossible - Fallout to have terrifying stunts by tom cruise",
        imgstore:"https://m.media-amazon.com/images/M/MV5BMjMzNjU5NTYxNF5BMl5BanBnXkFtZTgwOTI3MTE3NDM@._V1_.jpg",
        details:"Some franchises just can’t help themselves when it comes to bringing characters back from the dead (I’m looking at you Fast & Furious), but for the most part, the dead stay dead on Mission: Impossible.",
        level:"medium",
        indetaildata:"However, that doesn’t mean that characters can’t return in other ways, and Christopher McQuarrie told the Empire Spoiler Podcast (via ComicBook.com) that he was considering bringing back Alec Baldwin for Mission: Impossible – Dead Reckoning Part One."

    },
    {
        id:26,
        name:"Tenet",
        catageory:"holly",
        heading:"Trippiest Scenes In The New Christopher Nolan Movie, Ranked",
        imgstore:"https://media.comicbook.com/2020/09/tenet-spoilers-title-names-meaning-explained-sator-square-1235855.jpeg?auto=webp",
        details:"Tenet is a 2020 science fiction action thriller film written and directed by Christopher Nolan, who also produced it with his wife Emma Thomas. A co-production between the United Kingdom and the United States",
        level:"medium",
        indetaildata:" it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh. The film follows a former CIA agent who is recruited into a secretive organization called Tenet who can reverse the flow of time and is trying to prevent an attack from the future that threatens to annihilate the present world."

    },
    {
        id:73,
        name:"Tenet",
        catageory:"holly",
        heading:"Trippiest Scenes In The New Christopher Nolan Movie, Ranked",
        imgstore:"https://media.comicbook.com/2020/09/tenet-spoilers-title-names-meaning-explained-sator-square-1235855.jpeg?auto=webp",
        details:"Tenet is a 2020 science fiction action thriller film written and directed by Christopher Nolan, who also produced it with his wife Emma Thomas. A co-production between the United Kingdom and the United States",
        level:"maintop3",
        indetaildata:" it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh. The film follows a former CIA agent who is recruited into a secretive organization called Tenet who can reverse the flow of time and is trying to prevent an attack from the future that threatens to annihilate the present world."

    },
    {
        id:27,
        name:"John Wick: Chapter 4",
        catageory:"holly",
        heading:"Her's your perfect weekend watch-make way for 2023's biggest action film",
        imgstore:"https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg",
        details:"The fourth installment of the John Wick saga (JW4) is the longest in the franchise at 2 hours and 49 minutes but also most riveting in terms of cinematic experience.",
        level:"top",
        indetaildata:"It all started with a widowed former assassin seeking revenge for the death of his beagle Daisy — a gift from his wife — in the first John Wick movie."

    },
    {
        id:28,
        name:"Jurassic World Dominion",
        catageory:"holly",
        heading:"This year's box office witnessed several records being made and broken across the globe.",
        imgstore:"https://dx35vtwkllhj9.cloudfront.net/universalstudios/jurassic-world-dominion/images/regions/us/header.jpg",
        details:"Directed by Colin Trevorrow, Jurassic World Dominion stars Chris Pratt, Bryce Dallas Howard and Laura Dern. Prime Video will stream the film from October 17 in six languages including English, Hindi, Tamil, Telugu, Kannada and Malayalam",
        level:"top",
        indetaildata:"We want to make a big splash and we want people to think that this is the coolest movie they’ve seen in years, says Chris Pratt about The Tomorrow War, which debuts on Amazon Prime Video on Friday."

    },
    {
        id:29,
        name:"Spider-Man: Far From Home",
        catageory:"holly",
        heading:"Spider-Man Far From Home: Good and bad",
        imgstore:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2Fdf-15250_rv2-2000.jpg&q=60",
        details:"In Spider-Man: Far From Home, Peter Parker/Spider-Man goes on a vacation to Europe with his classmates.",
        level:"top",
        indetaildata:"Their vacation is interrupted by monsters who take the form of elements, thus called the Elementals. Nick Fury, also in Europe, enlists the help of Peter to defeat them."

    },
    {
        id:30,
        name:"Captain Marvel",
        catageory:"holly",
        heading:"The Marvels trailer: New MCU movie promises Brie Larson, brilliant space action and Bollywood-style song-and-dance",
        imgstore:"https://c.ndtvimg.com/2019-03/t615884g_captain-marvel-facebook-_625x300_07_March_19.jpg",
        details:"Marvel has debuted the first trailer for its upcoming superhero team-up movie The Marvels, which stars Brie Larson, Teyonah Parris and Iman Vellani as Carol Danvers, Monica Rambeau and Kamala Khan, respectively",
        level:"top",
        indetaildata:"In the film, all three superheroes discover that their powers have become intertwined and interchangeable after the villainous Dar-Benn puts a ‘spell’ on them."

    },

    {
        id :31,
        name:"Pilates",
        catageory:"fitness",
        heading:"Pilates is a type of mind-body exercise developed in the early 20th century",
        imgstore:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/pilates-machine-reformer-1296x728-header.jpg?w=1155&h=1528",
        details:"by German physical trainer Joseph Pilates, after whom it was named. Pilates called his method Contrology",
        level:"medium",
        indetaildata:"It is practiced worldwide, especially in countries such as Australia, Canada, South Korea, the United States and the United Kingdom"

    },
    {
        id :32,
        name:"Kickboxing",
        catageory:"fitness",
        heading:"Kickboxing works your core, legs, and specifically your obliques to newfound glory by pumping",
        imgstore:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKA7Fo1lFlo0TeR1hRWVIwhwl7rzfez2W_A&usqp=CAU",
        details:"Kickboxing is a full-contact combat sport and a form of boxing based on punching and kicking. The fight takes place in a boxing ring",
        level:"medium",
        indetaildata:"Kickboxing works your upper body and core without a lot of impact to your legs"

    },
    {
        id :33,
        name:"Pushups",
        catageory:"fitness",
        heading:"The push-up is a common calisthenics exercise beginning from the prone position.",
        imgstore:" https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/16:9/w_2560%2Cc_limit/Pushup.jpg",
        details:"By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids",
        level:"medium",
        indetaildata:"Pushups. Drop and give me 20! Pushups are one of the most basic yet effective bodyweight moves you can perform because of the number of muscles"

    },
    {
        id :34,
        name:"Squats",
        catageory:"fitness",
        heading:"A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
        imgstore:"https://blog.nasm.org/hubfs/biomechanics-of-squat-1.jpg",
        details:"During the descent, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up",
        level:"medium",
        indetaildata:"Squats. The traditional squat is an important exercise because it targets the muscles in your lower body, such as your glutes, quads, hamstrings, abdominals "

    },
    {
        id :35,
        name:"Lunge",
        catageory:"fitness",
        heading:"A lunge can refer to any position of the human body ",
        imgstore:"https://fitbod.me/wp-content/uploads/2022/11/Lunge-Variations.jpg",
        details:"where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind",
        level:"medium",
        indetaildata:"Front lunges, back lunges, and even side-to-side lunges are an excellent exercise for targeting the large muscles of the lower body. For an advanced movement"

    },
    {
        id :36,
        name:"Plank",
        catageory:"fitness",
        heading:"The plank is an isometric core strength exercise that involves maintaining a position",
        imgstore:"https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png?crop=0.668xw:1.00xh;0.117xw,0&resize=1200:*",
        details:"similar to a push-up for the maximum possible time.",
        level:"medium",
        indetaildata:"Planks are an effective way to target both your abdominal muscles and your whole body. Planking stabilizes your core without straining your back the way situps ..."

    },
    {
        id :74,
        name:"Plank",
        catageory:"fitness",
        heading:"The plank is an isometric core strength exercise that involves maintaining a position",
        imgstore:"https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png?crop=0.668xw:1.00xh;0.117xw,0&resize=1200:*",
        details:"similar to a push-up for the maximum possible time.",
        level:"maintop4",
        indetaildata:"Planks are an effective way to target both your abdominal muscles and your whole body. Planking stabilizes your core without straining your back the way situps ..."

    },
    {
        id :37,
        name:"Jump rope",
        catageory:"fitness",
        heading:"A skipping rope or jump rope is a tool used in the sport of skipping/jump rope",
        imgstore:"https://media.istockphoto.com/id/187124659/photo/diverse-group-of-elementary-children-jumping-rope.jpg?s=612x612&w=0&k=20&c=SSWwxz3Vw7291aXGQBteSYKXvA8fHyFGfCUttDqar20=",
        details:"where one or more participants jump over a rope swung so that it passes under their feet and over their heads",
        level:"medium",
        indetaildata:"If the last time you held a jump rope was in grade school, it's time to get back into the swing of things. This calorie-busting workout can burn up to 318"

    },
    {
        id :38,
        name:"Burpee",
        catageory:"fitness",
        heading:"The burpee, a squat thrust with an additional stand between repetitions",
        imgstore:"https://www.mensjournal.com/.image/t_share/MTk2MTM2Njg2NjY2NTg5MzI5/1380-burpee.jpg",
        details:"Burpees are a great way to burn calories, shed fat, and help in building muscle,” White explains. “More specifically, burpees are great for burning belly fat",
        level:"medium",
        indetaildata:"For example, go for high knees and burpees if you want to tone your lower body. But you need to keep in mind that exercising and dieting are not the only ways "

    },
    {
        id :39,
        name:"Bent-over row",
        catageory:"fitness",
        heading:"A bent-over row is a weight training exercise that targets a variety of back muscles.",
        imgstore:"https://mobilephysiotherapyclinic.in/wp-content/uploads/2022/01/Barbell-bent-over-row.jpg",
        details:"Which ones are targeted varies on form. The bent over row is often used for both bodybuilding and powerlifting.",
        level:"medium",
        indetaildata:"Elevated Plank Row. You've probably done plenty of bent-over rows and bench rows in your life, so why not give a new variation a try that "

    },
    {
        id :40,
        name:"Russian twist",
        catageory:"fitness",
        heading:"The Russian twist is a simple abdominal exercise for working the core, shoulders, and hips",
        imgstore:"https://hips.hearstapps.com/hmg-prod/images/rtwist1-jpg-1570636420.jpg?resize=980:*",
        details:"It is typically performed in repetitive sets and tones the core muscles via a twisting motion focused around the abdomen.",
        level:"medium",
        indetaildata:"The Russian twist is a great addition to any core workout. The twisting motion works your obliques, so you're activating multiple core muscles at once, "

    },
    {
        id :51,
        name:"Pull-up",
        catageory:"fitness",
        heading:"A pull-up is an upper-body strength exercise.",
        imgstore:"https://hips.hearstapps.com/hmg-prod/images/mh0418-fit-pul-01-1558551798.jpg?crop=0.749xw:1.00xh;0.251xw,0&resize=1200:*",
        details:"The pull-up is a closed-chain movement where the body is suspended by the hands, gripping a bar or other implement at a distance typically wider than shoulder-width, and pulled up",
        level:"medium",
        indetaildata:"ull-ups focus on several muscle groups that burn more calories as multiple muscles like biceps, triceps, back and core are working together."

    },
    {
        id :52,
        name:"Kettlebell swing",
        catageory:"fitness",
        heading:"Kettlebell swing is a basic ballistic exercise used to train the posterior chain in a manner similar to broad jumping",
        imgstore:"https://i.ytimg.com/vi/mKDIuUbH94Q/maxresdefault.jpg",
        details:" It involves moving the bell in a pendulum motion from between the knees to anywhere between eye level to fully overhead and can be performed either two-handed or using one hand",
        level:"medium",
        indetaildata:" love the two-handed kettlebell swing because it is an exercise that builds total-body strength and also improves your cardiovascular fitness,"

    },
    {
        id :53,
        name:"Deadlift",
        catageory:"fitness",
        heading:"The deadlift is a weight training exercise in which a loaded barbell or bar ",
        imgstore:"https://www.shape.com/thmb/TDOFpB64QaVjoBWz82A7c7vomT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guide-to-Deadlifts-GettyImages-1368073669-9492fe76328041169af7baf93afe1bc5.jpg",
        details:"The deadlift is a great exercise because it helps strengthen the core, back, shoulders, arm muscles, as well as your glutes, quads, hamstrings and calves",
        level:"medium",
        indetaildata:"the deadlift is a great cornerstone for any fitness plan. 2. Back squat. 15 best exercises squat."

    },
    {
        id :54,
        name:"Jump squat",
        catageory:"fitness",
        heading:"Split Squat jump ... Step one foot backward and sink into a deep lunge, with your rear knee lightly touching the floor",
        imgstore:"https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/222acb6e-9728-4328-9cdb-40d9d7b87769/everything-you-need-to-know-about-jump-squats.jpg",
        details:"Squat jumps are a way to increase the exercise intensity while working the glutes, quadriceps, hamstrings, and calves. ",
        level:"medium",
        indetaildata:"4. Squat Jump + Mountain Climbers. How to do it: 2 squat jumps. 4 mountain climbers is 1 rep"

    },
    {
        id :55,
        name:"Single leg deadlift",
        catageory:"fitness",
        heading:"The single-leg deadlift has all the advantages of the Romanian deadlift",
        imgstore:"https://www.focusfitness.net/stock-photos/wp-content/uploads/edd/2017/07/Man-doing-single-leg-deadlift.jpg",
        details:"upported Single-Leg Deadlift · Start standing on left leg with a weight in right hand, palm facing toward thigh and left arm by side. · Step right leg a few feet .",
        level:"top",
        indetaildata:"Single-Leg Deadlift. Image no longer available. How to: Start standing with feet together and arms by sides. With control, tilt torso forward while lifting left "

    },
    {
        id :56,
        name:"Interval training",
        catageory:"fitness",
        heading:"Interval training is an effective weight loss strategy",
        imgstore:"",
        details:"Interval training is a type of training exercise that involves a series of high-intensity workouts interspersed with rest or relief periods.",
        level:"top",
        indetaildata:"Interval training. Whether you're a beginner or an exercise veteran, a walker or an aerobic dancer, adding interval training to your cardiovascular workout"

    },
    {
        id :57,
        name:"Aerobics",
        catageory:"fitness",
        heading:"Aerobic exercise (cardio). Often called cardio or endurance activities",
        imgstore:"https://img.freepik.com/free-photo/smiley-people-having-fun-zumba-class_23-2149074870.jpg?w=2000",
        details:"Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness",
        level:"top",
        indetaildata:"Aerobic Exercises; 2. Skipping or Jumping Rope; 3. Planks. Plank Exercise ... Cardio exercise along with weight training (at least twice a week) along"

    },
    {
        id :58,
        name:"Dumbbell rows",
        catageory:"fitness",
        heading:"Dumbbell rows can strengthen the back and increase muscle growth.",
        imgstore:"https://barbend.com/wp-content/uploads/2019/05/BarBend-Feature-Image-1200-x-675-2021-04-19T161959.146.jpg",
        details:"Dumbbell rows. Not only will these make your back look killer in that dress, but dumbbell rows are also another compound exercise that strengthens multiple ",
        level:"top",
        indetaildata:"Dumbbell rows (using a gallon milk jug or another weight): 10 each arm. Plank: 15 seconds; Jumping Jacks: 30 reps. We also turned it into a fun infographic"

    },
    {
        id :59,
        name:"Jumping jack",
        catageory:"fitness",
        heading:"Jumping jacks are a beginner cardiovascular exercise ",
        imgstore:"https://redefiningstrength.com/wp-content/uploads/2015/11/15-jumping-jack-variations.jpg",
        details:"A jumping jack, also known as a star jump and called a side-straddle hop in the US military, is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going overhead",
        level:"top",
        indetaildata:"Jumping jacks: 50 reps(pull your shoulder blades back, extend arms and really focus on the movement); Bodyweight Squats: 20 reps; Lunges: 5 reps each leg; Hip "

    },
    {
        id :60,
        name:"Bench press",
        catageory:"fitness",
        heading:"The bench press, or chest press, is a weight training exercise",
        imgstore:"https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-bench-press-benefits-1024x576.jpg",
        details:"Bench Press · This hypertrophy method means you're more focused on building muscle than pressing max weight, so keep your butt on the bench, with your feet flat",
        level:"top",
        indetaildata:"One of the “Big 3” weightlifting exercises, the barbell bench press is one of the best upper body exercises for overall strength. You'll hit main muscles "

    },
    {
        id :41,
        name:"Buttered popcorn, United States",
        catageory:"food",
        heading:"Corn – the workhorse of the industrial world – is best",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170203114735-popcorn.jpg?q=w_3000,h_1954,x_0,y_0,c_fill/w_1280",
        details:"when its sweet variety is fried up with lashings of butter till it bursts and then snarfed in greasy fistfuls while watching Netflix late at night.",
        level:"medium",
        indetaildata:"Taking a love of popcorn to a new level."

    },
    {
        id :42,
        name:"Masala dosa, India",
        catageory:"food",
        heading:"A crispy, rice-batter crepe encases a spicy mix of mashed potato",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170302114154-masala-dosa.jpg?q=w_2592,h_1944,x_0,y_0,c_fill/w_1280",
        details:"which is then dipped in coconut chutney, pickles, tomato-and-lentil-based sauces and other condiments.",
        level:"medium",
        indetaildata:" It’s a fantastic breakfast food that’ll keep you going till lunch, when you’ll probably come back for another."

    },
    {
        id :43,
        name:"Potato chips, United Kingdom",
        catageory:"food",
        heading:"It’s unclear when and where the potato chip was born",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170203151518-crisps.jpg?q=w_2048,h_1368,x_0,y_0,c_fill/w_1280",
        details:"US legend has it that they were invented in New York in 1853, but the earliest known recipe for “Potatoes Fried in Slices or Shavings” appears in a bestselling 1817 cookbook by Englishman William Kitchiner.",
        level:"medium",
        indetaildata:"Whatever the case, they’re now one of the world’s most child-friendly and best foods. But think of them this way – if a single chip cost, say, $5, it’d be a far greater (and more popular) delicacy than caviar, a prize worth fighting wars over."

    },
    {
        id :44,
        name:"Seafood paella, Spain",
        catageory:"food",
        heading:"The sea is lapping just by your feet",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170206165040-dubai-michelin-dining-boca.jpg?q=w_2700,h_1800,x_0,y_0,c_fill/w_1280",
        details:" a warm breeze whips the tablecloth around your legs and a steamy pan of paella sits in front of you.",
        level:"medium",
        indetaildata:"Shrimp, lobster, mussels and cuttlefish combine with white rice and various herbs, oil and salt in this Valencian dish to send you immediately into holiday mode. Though if you have it in Spain, you’re probably there already."

    },
    {
        id :45,
        name:"Som tam, Thailand",
        catageory:"food",
        heading:"To prepare Thailand’s most famous salad, pound garlic and chilies with a mortar and pestle",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170302150230-som-tam.jpg?q=w_2048,h_1536,x_0,y_0,c_fill/w_1280",
        details:"Toss in tamarind juice, fish sauce, peanuts, dried shrimp, tomatoes, lime juice, sugar cane paste, string beans and a handful of grated green papaya.",
        level:"medium",
        indetaildata:" Grab a side of sticky rice. Variations include those made with crab (som tam boo) and fermented fish sauce (som tam plah lah), but none matches the flavor and simple beauty of the original."

    },
    {
        id :46,
        name:"Chicken rice, Singapore",
        catageory:"food",
        heading:"Often called the “national dish” of Singapore,",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170302150650-chicken-rice-singapore.jpg?q=w_2048,h_1353,x_0,y_0,c_fill/w_1280",
        details:"this steamed or boiled chicken is served atop fragrant oily rice, with sliced cucumber as the token vegetable. Variants include roasted chicken or soy sauce chicken",
        level:"medium",
        indetaildata:" However it’s prepared, it’s one of Singapore’s best foods. The dipping sauces – premium dark soy sauce, chili with garlic and pounded ginger – give it that little extra oomph to ensure whenever you’re not actually in Singapore eating chicken rice, you’re thinking of it"

    },
    {
        id :47,
        name:"Poutine, Canada",
        catageory:"food",
        heading:"French fries smothered in cheese curds and brown gravy",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/160516104039-ottawa-poutinefest-special-gourmet-poutine.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280",
        details:"Sounds kind of disgusting, looks even worse, but engulfs the mouth in a saucy, cheesy, fried-potato mix that’ll have you fighting over the last dollop",
        level:"medium",
        indetaildata:"Our Canadian friends insist it’s best enjoyed at 3 a.m. after “several” beers."

    },
    {
        id :48,
        name:"Tacos, Mexico",
        catageory:"food",
        heading:"A fresh, handmade tortilla stuffed with small chunks of grilled beef",
        imgstore:"https://static01.nyt.com/images/2022/01/24/dining/24rest-taqueria-14/merlin_200679501_6109dd30-bc35-4774-a1fc-7f3bef74475a-mediumSquareAt3X.jpg",
        details:"rubbed in oil and sea salt then covered with guacamole, salsa, onions, cilantro or anything else you want – perfect for breakfast,lunch or dinner.",
        level:"medium",
        indetaildata:"This is the reason no visitor leaves Mexico weighing less than when they arrived."

    },
    {
        id :49,
        name:"Buttered toast with Marmite, UK",
        catageory:"food",
        heading:"anything buttered is probably going to taste great",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170302142757-buttered-toast-with-marmite.jpg?q=w_2533,h_1632,x_0,y_0,c_fill/w_1280",
        details:"but there’s something about this tangy, salty, sour, love-it-or-hate-it yeast extract that turns a piece of grilled bread into a reason to go on living. ",
        level:"medium",
        indetaildata:"For extra yum (or yuck) factor, add a layer of marmalade."

    },
    {
        id :50,
        name:"Stinky tofu, Southeast Asia",
        catageory:"food",
        heading:"Nothing really prepares you for the stench of one of the strangest dishes on Earth",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170302143134-tofu.jpg?q=w_2832,h_2128,x_0,y_0,c_fill/w_1280",
        details:"Like durian, smelly tofu is one of Southeast Asia’s most iconic foods. ",
        level:"medium",
        indetaildata:"The odor of fermenting tofu is so overpowering many aren’t able to shake off the memory for months. So is the legendarily divine taste really worth the effort? Sure it is."

    },
    {
        id :61,
        name:" Marzipan, Germany",
        catageory:"food",
        heading:"Don’t be fooled by cheap imitations, which use soy paste or almond essence",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170302151449-marzipan-germany.jpg?q=w_2048,h_1370,x_0,y_0,c_fill/w_1280",
        details:"The real stuff, which uses nothing but ground almonds with sugar, is so good, you’ll eat a whole bar of it, feel sick,",
        level:"maintop5",
        indetaildata:"and still find yourself toying with the wrapper on bar number two."

    },
    {
        id :62,
        name:"Ketchup, United States",
        catageory:"food",
        heading:"If Malcolm Gladwell says it’s a perfect food",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/160516162817-condiments-ketchup.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280",
        details:"then it’s a perfect food. Let’s face it, anything that can convince 2-year-olds to eat their carrots rather than spitting them",
        level:"top",
        indetaildata:"onto the floor is worthy of not just a “delicious” title, but a “miracle of persuasion” title, too."

    },
    {
        id :63,
        name:"French toast, Hong Kong",
        catageory:"food",
        heading:"Unlike its more restrained Sunday brunch counterpart",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170302151812-french-toast-hong-kong.jpg?q=w_2048,h_1365,x_0,y_0,c_fill/w_1280",
        details:"Hong Kong-style French toast is like a deep-fried hug. Two pieces of toast are slathered with peanut butter or kaya jam, soaked in egg batter, fried in butter and served with still more butter and lots of syrup",
        level:"top",
        indetaildata:"A Hong Kong best food, best enjoyed before cholesterol checks."
        
    },
    {
        id :64,
        name:"Chicken parm, Australia",
        catageory:"food",
        heading:"Melted Parmesan and mozzarella cheese, and a peppery, garlicky tomato",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170920150817-chicken-parm.jpg?q=w_4752,h_3168,x_0,y_0,c_fill/w_1280",
        details:" sauce drizzled over the top of a chicken fillet – Aussie pub-goers claim this ostensibly Italian dish as their own. Since they make it so well, there’s no point in arguing.",
        level:"top",
        indetaildata:" sauce drizzled over the top of a chicken fillet – Aussie pub-goers claim this ostensibly Italian dish as their own. Since they make it so well, there’s no point in arguing."

    },
    {
        id :65,
        name:"Hummus, Middle East",
        catageory:"food",
        heading:"This humble Middle Eastern spread",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170209172755-hummus.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280",
        details:"made with chickpeas, garlic, lemon juice and tahini has become a fridge staple all around the world.",
        level:"top",
        indetaildata:"This tangy treat tastes good as a dip, with breads, with meats, with vegetables, beans or – hear us out – on a Marmite rice cake."

    },
    {
        id :66,
        name:"Chili crab, Singapore",
        catageory:"food",
        heading:"You can’t visit Singapore without trying its spicy, sloppy, meaty specialty",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170306145913-singapore-chili-crab.jpg?q=w_3872,h_2364,x_0,y_0,c_fill/w_1280",
        details:"While there are dozens of ways to prepare crab (with black pepper, salted egg yolk, cheese-baked, et cetera) chili crab remains the local bestseller",
        level:"top",
        indetaildata:"Spicy chili-tomato gravy tends to splatter, which is why you need to mop everything up with mini mantou buns."

    },
    {
        id :67,
        name:" Fish ‘n’ chips, United Kingdom",
        catageory:"food",
        heading:"Anything that’s been around since the 1860s can’t be doing much wrong.",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170124150418-18-fish-and-chips.jpg?q=w_3000,h_1995,x_0,y_0,c_fill/w_1280",
        details:"The staple of the Victorian British working class is a crunchy-outside, soft-inside dish of simple, un-adorned fundamentals.",
        level:"medium",
        indetaildata:"The staple of the Victorian British working class is a crunchy-outside, soft-inside dish of simple, un-adorned fundamentals."

    },
    {
        id :68,
        name:"Goi cuon (summer roll), Vietnam",
        catageory:"food",
        heading:"his snack made from pork, shrimp, herbs, rice vermicelli and other ingredients",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170306134418-goi-cuon.jpg?q=w_4183,h_2788,x_0,y_0,c_fill/w_1280",
        details:"wrapped in rice paper is served at room temperature. It’s “meat light,” with the flavors of refreshing herbs erupting in your mouth.",
        level:"top",
        indetaildata:"Dipped in a slightly sweet Vietnamese sauce laced with ground peanuts, it’s wholesome, easy and the very definition of “moreish.”"

    },
    {
        id :69,
        name:"Lechón, Philippines",
        catageory:"food",
        heading:"A Filipino national dish, lechón is a whole young pig slow-roasted over charcoal",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170306153423-lechon.jpg?q=w_2240,h_1488,x_0,y_0,c_fill/w_1280",
        details:"for several hours. The process makes for tender meat and crispy skin. It’s prepared on special occasions throughout the year.",
        level:"medium",
        indetaildata:"for several hours. The process makes for tender meat and crispy skin. It’s prepared on special occasions throughout the year."

    },
    {
        id :70,
        name:"Fajitas, Mexico",
        catageory:"food",
        heading:"This assembly kit of a dining experience is a thrill to DIY enthusiasts everywhere",
        imgstore:"https://media.cnn.com/api/v1/images/stellar/prod/170203151539-fajitas.jpg?q=w_1024,h_683,x_0,y_0,c_fill/w_1280",
        details:"1: Behold the meat sizzling on a fiery griddle. Step 2: Along with the meat, throw side servings of capsicum, onion, guacamole, sour cream and salsa into a warm, flour tortilla. ",
        level:"top",
        indetaildata:"Step 3: Promise all within hearing range that you’ll have “just one more.” Step 4: Repeat."

    },


])

return(
    <>
    <Store.Provider value={[data]}>
        {props.children}
    </Store.Provider>
    </>
)


}

export default Datacompo