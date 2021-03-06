const packages = [
    {
        place: "Cox's Bazar",
        img: "https://bangladeshpost.net/webroot/uploads/featureimage/2019-07/5d2f42508e23f.jpg",
        duration: "3 night 2 days",
        person: 1,
        totalFiveStarHotel: 12,
        detail: "Cox's Bazar sea beach is the longest sea beach in the world.",
        budget: 6000
    },
    {
        place: "Kuakata",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Kuakata_beach.jpg",
        duration: "5 night 3 days",
        person: 1,
        totalFiveStarHotel: 5,
        detail: "Kuakata is a town in southern Bangladesh known for its panoramic sea beach.",
        budget: 4000
    },
    {
        place: "Keokradong",
        img: "https://ruchiexplorelimitless.com/images/blog/1592076406.jpg",
        duration: "3 night 2 days",
        person: 1,
        totalFiveStarHotel: 3,
        detail: "Keokradong is a peak located in Bandarban, Bangladesh, with an elevation of 986 metres.",
        budget: 5500
    },
    {
        place: "Sundarban",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg",
        duration: "5 night 3 days",
        person: 1,
        totalFiveStarHotel: 4,
        detail: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.",
        budget: 7000
    },
    {
        place: "Srimangal",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Tea_Garden_Srimongol_Sylhet_Bangladesh_2.JPG",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 15,
        detail: "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.",
        budget: 2000
    },
    {
        place: "Rangamati",
        img: "https://itravelbd.com/wp-content/uploads/2018/11/rangamati.jpg",
        duration: "3 night 2 days",
        person: 1,
        totalFiveStarHotel: 8,
        detail: "Rangamati is the administrative headquarters of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh.",
        budget: 5000
    },
    {
        place: "St. Martin I-land",
        img: "https://www.daily-bangladesh.com/media/imgAll/2019March/xcv-1904231550.jpg",
        duration: "3 night 2 days",
        person: 1,
        totalFiveStarHotel: 9,
        detail: "St. Martin's Island is a small island in the northeastern part of the Bay of Bengal",
        budget: 8000
    },
    {
        place: "Panam City",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/96/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%93_%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BE%E0%A6%AE_%E0%A6%A8%E0%A6%97%E0%A6%B0_%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%A4%E0%A6%A8_%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%AA%E0%A6%A8%E0%A6%BE-2.jpg",
        duration: "1 day",
        person: 1,
        totalFiveStarHotel: 6,
        detail: "Panam City was an ancient city, the archaeological ruins of which is situated at Sonargaon",
        budget: 1500
    },
    {
        place: "Nilgiri",
        img: "https://dailyasianage.com/library/2019/12/09/1575920575_6.jpg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 10,
        detail: "Nilgiri is a collection of multiple variable sizes hill area in Bandarban. Bandarban itself is a hill district in Banglades.",
        budget: 4000
    },
    {
        place: "Sajek",
        img: "https://porzoton.com/wp-content/uploads/2020/12/Sajek-valley-covered-with-white-clouds.jpg",
        duration: "3 night 2 days",
        person: 1,
        totalFiveStarHotel: 17,
        detail: "Sajek is a union located in the north of Chittagong Hill Tracts. It's under Baghaichori Upazila in Rangamati hill district",
        budget: 6000
    },
    {
        place: "Ratargul",
        img: "https://www.travelmate.com.bd/wp-content/uploads/2019/07/Ratargul-2.jpg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 7,
        detail: "Ratargul Swamp Forest is a freshwater swamp forest located in Gowain River, Fatehpur Union, Gowainghat, Sylhet, Bangladesh.",
        budget: 4500
    },
    {
        place: "Floating Guava Market",
        img: "https://porzoton.com/wp-content/uploads/2021/01/floating-guava-market.jpg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 2,
        detail: "The 200-year-old floating market at Bhimruli in Jhalakathi has become a tourist spot. Guava floating market is a unique market.",
        budget: 3000
    },
    {
        place: "Nafakhum",
        img: "https://touristbd.com/wp-content/uploads/2020/09/120022144_4425049200901950_388043837018724573_o-compressed-1536x1024.jpg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 4,
        detail: "Nafa-khum is a waterfall in Bangladesh on the Remaikree River, a tributary of the Sangu River.",
        budget: 5000
    },
    {
        place: "Debotakhum",
        img: "https://bn.wikipedia.org/wiki/%E0%A6%9A%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%B0:%E0%A6%A6%E0%A7%87%E0%A6%AC%E0%A6%A4%E0%A6%BE%E0%A6%96%E0%A7%81%E0%A6%AE.jpg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 3,
        detail: "Debotakhum is situated in Roangchhari upazila of Bandarban. Debotakhum's trail is as beautiful as it is terrifying.",
        budget: 4500
    },
    {
        place: "Paharpur",
        img: "http://2.bp.blogspot.com/-XyBsBrnIAlI/UTkXjPBn-sI/AAAAAAAAJCI/Dd1HFQ-sIDk/s1600/Paharpur_Naogaon.JPG",
        duration: "3 night 2 days",
        person: 1,
        totalFiveStarHotel: 12,
        detail: "Paharpur is the most impressive archeological site of Bangladesh which is known as Sompuri Maharabihara",
        budget: 5500
    },
    {
        place: "Lalbag Fort",
        img: "https://dailyasianage.com/library/2018/01/25/1516877813_8.jpg",
        duration: "1 days",
        person: 1,
        totalFiveStarHotel: 12,
        detail: "Lalbag Fort or Aurangabad is another most famous historical place in Bangladesh. It is situated beside the Buriganga River.",
        budget: 4000
    },
    {
        place: "Chandranath Hill",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/View_from_the_Chandranath_Hill_%2843493660582%29.jpg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 2,
        detail: "Chandranath Hill is the eastern part of the Himalayas separated from the Himalayas. ",
        budget: 2000
    },
    {
        place: "Guliakhali Sea Beach",
        img:"http://tourvaley.com/images/thumbs/000/0001480_guliakhali-sea-beach.jpeg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 2,
        detail: "Guliakhali sea beach (also known as Muradpur beach) is located at Muradpur, Sitakunda in Chittagong Division, Bangladesh.",
        budget: 2000
    },
    {
        place: "Moinamoti",
        img: "chokhkhuleybangladesh.com/images/mainamati-a.jpg",
        duration: "3 night 2 days",
        person: 1,
        totalFiveStarHotel: 5,
        detail: "Moinamoti is an isolated low, dimpled range of hills, dotted with more than 50 ancient Buddhist",
        budget: 2500
    },
    {
        place: "Nikli Haor",
        img: "https://touristbd.com/wp-content/uploads/2020/11/ppppp.png",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 3,
        detail: "Nikli is an upazila of Kishoreganj District in the Division of Dhaka, Bangladesh.",
        budget: 2000
    },
    {
        place: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hanging_Bridge%2C_Kaptai_Lake.jpg",
        duration: "2 night 1 days",
        person: 1,
        totalFiveStarHotel: 9,
        detail: "Kaptai Lake is the largest lake in Bangladesh. It is located in the Kaptai Upazila under Rangamati District.",
        budget: 3000
    }
]