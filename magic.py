import csv

# List of dictionaries with museum details
museums = [
    {"Number": 1, "Name": "Bapu Museum", "CityTown": "Vijayawada", "StateTerritory": "Andhra Pradesh", "YearEstablished": 1887},
    {"Number": 2, "Name": "Bhagwan Mahavir Government Museum", "CityTown": "Kadapa", "StateTerritory": "Andhra Pradesh", "YearEstablished": 1982},
    {"Number": 3, "Name": "Chandavaram Buddhist site", "CityTown": "Chandavaram, Prakasam district", "StateTerritory": "Andhra Pradesh", "YearEstablished": 1980},
    {"Number": 4, "Name": "Kursura Submarine Museum", "CityTown": "Visakhapatnam", "StateTerritory": "Andhra Pradesh", "YearEstablished": 2002},
    {"Number": 5, "Name": "Telugu Samskruthika Niketanam", "CityTown": "Visakhapatnam", "StateTerritory": "Andhra Pradesh", "YearEstablished": 2015},
    {"Number": 6, "Name": "TU 142 Aircraft Museum", "CityTown": "Visakhapatnam", "StateTerritory": "Andhra Pradesh", "YearEstablished": 2017},
    {"Number": 7, "Name": "Victory at Sea War memorial", "CityTown": "Visakhapatnam", "StateTerritory": "Andhra Pradesh", "YearEstablished": 1971},
    {"Number": 8, "Name": "Visakha Museum", "CityTown": "Visakhapatnam", "StateTerritory": "Andhra Pradesh", "YearEstablished": 1991},
    {"Number": 9, "Name": "Jawaharlal Nehru Museum", "CityTown": "Itanagar", "StateTerritory": "Arunachal Pradesh", "YearEstablished": 1980},
    {"Number": 10, "Name": "Shankardev Kalakshetra", "CityTown": "Guwahati", "StateTerritory": "Assam", "YearEstablished": 2024},
    {"Number": 11, "Name": "Assam State Museum", "CityTown": "Guwahati", "StateTerritory": "Assam", "YearEstablished": 1940},
    {"Number": 12, "Name": "Mayong Central Museum and Emporium", "CityTown": "Mayong", "StateTerritory": "Assam", "YearEstablished": 2002},
    {"Number": 13, "Name": "Bhartiya Nritya Kala Mandir", "CityTown": "Patna", "StateTerritory": "Bihar", "YearEstablished": 1963},
    {"Number": 14, "Name": "Bihar Museum", "CityTown": "Patna", "StateTerritory": "Bihar", "YearEstablished": 2015},
    {"Number": 15, "Name": "Jalan Museum", "CityTown": "Patna", "StateTerritory": "Bihar", "YearEstablished": 1919},
    {"Number": 16, "Name": "Patna Museum", "CityTown": "Patna", "StateTerritory": "Bihar", "YearEstablished": 1917},
    {"Number": 17, "Name": "Chandradhari Museum", "CityTown": "Darbhanga", "StateTerritory": "Bihar", "YearEstablished": 1957},
    {"Number": 18, "Name": "Rajendra Smriti Sangrahalaya", "CityTown": "Patna", "StateTerritory": "Bihar", "YearEstablished": 1963},
    {"Number": 19, "Name": "Shrikrishna Science Centre", "CityTown": "Patna", "StateTerritory": "Bihar", "YearEstablished": 1978},
    {"Number": 20, "Name": "Gandhi Sangrahalaya", "CityTown": "Patna", "StateTerritory": "Bihar", "YearEstablished": 1967},
    {"Number": 21, "Name": "Government Museum and Art Gallery", "CityTown": "Chandigarh", "StateTerritory": "Chandigarh", "YearEstablished": 1968},
    {"Number": 22, "Name": "Goa Chitra Museum", "CityTown": "Benaulim", "StateTerritory": "Goa", "YearEstablished": 2010},
    {"Number": 23, "Name": "Big Foot Museum", "CityTown": "Loutolim", "StateTerritory": "Goa", "YearEstablished": None},
    {"Number": 24, "Name": "Ashvek Vintage World", "CityTown": "Nuvem", "StateTerritory": "Goa", "YearEstablished": 2004},
    {"Number": 25, "Name": "Archaeological Museum and Portrait Gallery", "CityTown": "Old Goa", "StateTerritory": "Goa", "YearEstablished": None},
    {"Number": 26, "Name": "Museum of Christian Art", "CityTown": "Old Goa", "StateTerritory": "Goa", "YearEstablished": None},
    {"Number": 27, "Name": "Goa Science Centre", "CityTown": "Panaji", "StateTerritory": "Goa", "YearEstablished": None},
    {"Number": 28, "Name": "Goa State Museum", "CityTown": "Panaji", "StateTerritory": "Goa", "YearEstablished": 1977},
    {"Number": 29, "Name": "Museum of Goa", "CityTown": "Pilerne", "StateTerritory": "Goa", "YearEstablished": 2015},
    {"Number": 30, "Name": "Naval Aviation Museum (India)", "CityTown": "Vasco da Gama", "StateTerritory": "Goa", "YearEstablished": 1998},
    {"Number": 31, "Name": "Calico Museum of Textiles", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": 1949},
    {"Number": 32, "Name": "Conflictorium", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": 2013},
    {"Number": 33, "Name": "Gandhi Smarak Sangrahalaya", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": None},
    {"Number": 34, "Name": "Gujarat Science City", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": None},
    {"Number": 35, "Name": "Lalbhai Dalpatbhai Museum", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": 1984},
    {"Number": 36, "Name": "Sardar Vallabhbhai Patel National Memorial", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": 1980},
    {"Number": 37, "Name": "Sanskar Kendra", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": 1954},
    {"Number": 38, "Name": "Swaminarayan Museum", "CityTown": "Ahmedabad", "StateTerritory": "Gujarat", "YearEstablished": 2011},
    {"Number": 39, "Name": "Baroda Museum & Picture Gallery", "CityTown": "Vadodara", "StateTerritory": "Gujarat", "YearEstablished": 1894},
    {"Number": 40, "Name": "Maharaja Fateh Singh Museum", "CityTown": "Vadodara", "StateTerritory": "Gujarat", "YearEstablished": None},
    {"Number": 41, "Name": "Kirti Mandir", "CityTown": "Porbandar", "StateTerritory": "Gujarat", "YearEstablished": None},
    {"Number": 42, "Name": "Watson Museum", "CityTown": "Rajkot", "StateTerritory": "Gujarat", "YearEstablished": 1888},
    {"Number": 43, "Name": "Kaba Gandhi No Delo", "CityTown": "Rajkot", "StateTerritory": "Gujarat", "YearEstablished": None},
    {"Number": 44, "Name": "Kutch Museum", "CityTown": "Bhuj", "StateTerritory": "Gujarat", "YearEstablished": 1877},
    {"Number": 45, "Name": "Aina Mahal", "CityTown": "Bhuj", "StateTerritory": "Gujarat", "YearEstablished": None},
    {"Number": 46, "Name": "Prag Mahal", "CityTown": "Bhuj", "StateTerritory": "Gujarat", "YearEstablished": None},
    {"Number": 47, "Name": "Smritivan Earthquake Memorial and Museum", "CityTown": "Bhuj", "StateTerritory": "Gujarat", "YearEstablished": 2022},
    {"Number": 48, "Name": "City Palace Museum", "CityTown": "Udaipur", "StateTerritory": "Rajasthan", "YearEstablished": None},
    {"Number": 49, "Name": "Archaeological Museum, Thrissur", "CityTown": "Thrissur", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 50, "Name": "Mural Art Museum", "CityTown": "Thrissur", "StateTerritory": "Kerala", "YearEstablished": None},
    
    {"Number": 51, "Name": "Vallathol Museum", "CityTown": "Thrissur", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 52, "Name": "Vaidyaratnam Ayurveda Museum", "CityTown": "Thrissur", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 53, "Name": "Indo-Portuguese Museum", "CityTown": "Kochi", "StateTerritory": "Kerala", "YearEstablished": 1910},
    {"Number": 54, "Name": "Kerala Soil Museum", "CityTown": "Thiruvananthapuram", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 55, "Name": "Arakkal Museum", "CityTown": "Ayikkara", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 56, "Name": "Teak Museum", "CityTown": "Nilambur", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 57, "Name": "8 Point Art Cafe", "CityTown": "Kollam", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 58, "Name": "Sardar Vallabhbhai Patel Police Museum", "CityTown": "Kollam", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 59, "Name": "Pazhassi Raja Archaeological Museum", "CityTown": "Kozhikode", "StateTerritory": "Kerala", "YearEstablished": 1976},
    {"Number": 60, "Name": "Krishnapuram Palace", "CityTown": "Kayamkulam", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 61, "Name": "Indian Business Museum", "CityTown": "Kozhikode", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 62, "Name": "Museum of Kerala History", "CityTown": "Kochi", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 63, "Name": "Napier Museum", "CityTown": "Thiruvananthapuram", "StateTerritory": "Kerala", "YearEstablished": 1857},
    {"Number": 64, "Name": "Keralam - Museum of History and Heritage", "CityTown": "Thiruvananthapuram", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 65, "Name": "Kerala Science and Technology Museum", "CityTown": "Thiruvananthapuram", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 66, "Name": "Wayanad Heritage Museum", "CityTown": "Ambalavayal", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 67, "Name": "Hill Palace", "CityTown": "Thrippunithura", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 68, "Name": "Revi Karunakaran Memorial Museum", "CityTown": "Alappuzha", "StateTerritory": "Kerala", "YearEstablished": None},
    {"Number": 69, "Name": "Munshi Aziz Bhat Museum of Central Asian and Kargil Trade Artefacts", "CityTown": "Kargil", "StateTerritory": "Ladakh", "YearEstablished": 2004},
    {"Number": 70, "Name": "Indore Museum", "CityTown": "Indore", "StateTerritory": "Madhya Pradesh", "YearEstablished": 1929},
    {"Number": 71, "Name": "Bharat Bhavan", "CityTown": "Bhopal", "StateTerritory": "Madhya Pradesh", "YearEstablished": 1982},
    {"Number": 72, "Name": "Museum of Mankind (Manav Sangrahalaya)", "CityTown": "Bhopal", "StateTerritory": "Madhya Pradesh", "YearEstablished": 1977},
    {"Number": 73, "Name": "State Museum, Bhopal", "CityTown": "Bhopal", "StateTerritory": "Madhya Pradesh", "YearEstablished": 1903},
    {"Number": 74, "Name": "Tribal Museum Bhopal", "CityTown": "Bhopal", "StateTerritory": "Madhya Pradesh", "YearEstablished": 2013},
    {"Number": 75, "Name": "Regional Museum of Natural History, Bhopal", "CityTown": "Bhopal", "StateTerritory": "Madhya Pradesh", "YearEstablished": 1997},
    {"Number": 76, "Name": "Regional Science Centre, Bhopal", "CityTown": "Bhopal", "StateTerritory": "Madhya Pradesh", "YearEstablished": 1995},
    {"Number": 77, "Name": "Maharaja Chhatrasal Museum", "CityTown": "Dhubela", "StateTerritory": "Madhya Pradesh", "YearEstablished": None},
    {"Number": 78, "Name": "Gujari Mahal Archaeological Museum", "CityTown": "Gwalior", "StateTerritory": "Madhya Pradesh", "YearEstablished": None},
    {"Number": 79, "Name": "Sanchi Archaeological Museum", "CityTown": "Sanchi", "StateTerritory": "Madhya Pradesh", "YearEstablished": 1919},
    {"Number": 80, "Name": "Vidisha Museum", "CityTown": "Vidisha", "StateTerritory": "Madhya Pradesh", "YearEstablished": None},
    {"Number": 81, "Name": "Bhau Daji Lad Museum", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 1872},
    {"Number": 82, "Name": "National Gallery of Modern Art, Mumbai", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 1996},
    {"Number": 83, "Name": "Mani Bhavan", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 84, "Name": "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 1922},
    {"Number": 85, "Name": "Nehru Science Centre", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 86, "Name": "Cowasji Jehangir Hall", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 1996},
    {"Number": 87, "Name": "INS Vikrant", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 1943},
    {"Number": 88, "Name": "Nagpur Central Museum", "CityTown": "Nagpur", "StateTerritory": "Maharashtra", "YearEstablished": 1863},
    {"Number": 89, "Name": "Ballard Bunder Gatehouse", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 1920},
    {"Number": 90, "Name": "Piramal Museum of Art", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 2016},
    {"Number": 91, "Name": "Joshi's Museum of Miniature Railway", "CityTown": "Pune", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 92, "Name": "Mahatma Phule Museum", "CityTown": "Pune", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 93, "Name": "Raja Dinkar Kelkar Museum", "CityTown": "Pune", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 94, "Name": "Antarang – Sex Health Information Art Gallery", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 95, "Name": "Cavalry Tank Museum, Ahmednagar", "CityTown": "Ahmednagar", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 96, "Name": "Indian Institute for Research in Numismatic Studies", "CityTown": "Nashik", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 97, "Name": "Siddhagiri Gramjivan Museum (Kaneri Math)", "CityTown": "Kolhapur", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 98, "Name": "Chhatrapati Shivaji Maharaj Museum of Indian History", "CityTown": "Pune", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 99, "Name": "Raman Science Centre", "CityTown": "Nagpur", "StateTerritory": "Maharashtra", "YearEstablished": None},
    {"Number": 100, "Name": "Shree Chhatrapati Shahu Museum", "CityTown": "Kolhapur", "StateTerritory": "Maharashtra", "YearEstablished": None},
    
    {"Number": 101, "Name": "Sarmaya Arts Foundation", "CityTown": "Mumbai", "StateTerritory": "Maharashtra", "YearEstablished": 2015},
    {"Number": 102, "Name": "Pragati Aerospace Museum", "CityTown": "Ozar", "StateTerritory": "Maharashtra", "YearEstablished": 2001},
    {"Number": 103, "Name": "Archaeological Museum, Kangla", "CityTown": "Imphal", "StateTerritory": "Manipur", "YearEstablished": 2017},
    {"Number": 104, "Name": "Hijagang", "CityTown": "Imphal", "StateTerritory": "Manipur", "YearEstablished": 2013},
    {"Number": 105, "Name": "Imphal Peace Museum", "CityTown": "Imphal", "StateTerritory": "Manipur", "YearEstablished": 2019},
    {"Number": 106, "Name": "Indian National Army War Museum (INA War Museum)", "CityTown": "Moirang", "StateTerritory": "Manipur", "YearEstablished": 1985},
    {"Number": 107, "Name": "Kangla Memento Museum", "CityTown": "Imphal", "StateTerritory": "Manipur", "YearEstablished": 2018},
    {"Number": 108, "Name": "Kangla Museum", "CityTown": "Imphal", "StateTerritory": "Manipur", "YearEstablished": None},
    {"Number": 109, "Name": "Loktak Folklore Museum", "CityTown": "Thanga", "StateTerritory": "Manipur", "YearEstablished": 2016},
    {"Number": 110, "Name": "Manipur State Museum", "CityTown": "Imphal", "StateTerritory": "Manipur", "YearEstablished": 1969},
    {"Number": 111, "Name": "Sekta Archaeological Living Museum", "CityTown": "Sekta", "StateTerritory": "Manipur", "YearEstablished": 1991},
    {"Number": 112, "Name": "Mizoram State Museum", "CityTown": "Aizawl", "StateTerritory": "Mizoram", "YearEstablished": None},
    {"Number": 113, "Name": "Nagaland State Museum", "CityTown": "Kohima", "StateTerritory": "Nagaland", "YearEstablished": 1970},
    {"Number": 114, "Name": "National Museum", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": 1949},
    {"Number": 115, "Name": "Sanskriti Kendra Museum", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 116, "Name": "National Science Centre", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 117, "Name": "National Handicrafts and Handlooms Museum", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 118, "Name": "Kiran Nadar Museum of Art", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": 2010},
    {"Number": 119, "Name": "Eternal Gandhi Multimedia Museum", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 120, "Name": "Indian Air Force Museum, Palam", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 121, "Name": "Madame Tussauds Delhi", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 122, "Name": "National Museum of Natural History", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 123, "Name": "National Rail Museum", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": 1977},
    {"Number": 124, "Name": "National Gallery of Modern Art", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": 1954},
    {"Number": 125, "Name": "Teen Murti Bhavan", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": 1930},
    {"Number": 126, "Name": "Gandhi Smriti", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 127, "Name": "Nehru Memorial Museum & Library", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": 1964},
    {"Number": 128, "Name": "Shankar's International Dolls Museum", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": None},
    {"Number": 129, "Name": "Sulabh International Museum of Toilets", "CityTown": "Delhi", "StateTerritory": "National Capital Territory of Delhi", "YearEstablished": 1992},
    {"Number": 130, "Name": "Birla Academy of Art and Culture", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 131, "Name": "Marble Palace", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 132, "Name": "National Library of India", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1836},
    {"Number": 133, "Name": "Rabindra Bharati Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1961},
    {"Number": 134, "Name": "Victoria Memorial", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1921},
    {"Number": 135, "Name": "Indian Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1814},
    {"Number": 136, "Name": "Nehru Children's Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1972},
    {"Number": 137, "Name": "State Archaeological Museum, Kolkata", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1962},
    {"Number": 138, "Name": "Sabarna Sangrahashala", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 2001},
    {"Number": 139, "Name": "Ashutosh Museum of Indian Art", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 140, "Name": "Pareshnath Jain Temple", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1867},
    {"Number": 141, "Name": "Tipu Sultan Shahi Masjid", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1832},
    {"Number": 142, "Name": "Raj Bhavan", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1803},
    {"Number": 143, "Name": "Alipore Zoological Gardens", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1876},
    {"Number": 144, "Name": "Science City Kolkata", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1997},
    {"Number": 145, "Name": "Birla Industrial & Technological Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 146, "Name": "Acharya Bhavan", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 147, "Name": "Town Hall", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1814},
    {"Number": 148, "Name": "Gurusaday Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 149, "Name": "Mother's Wax Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 2014},
    {"Number": 150, "Name": "Sundarban National Park", "CityTown": "Sundarbans", "StateTerritory": "West Bengal", "YearEstablished": 1984},

    {"Number": 151, "Name": "Jawahar Kala Kendra", "CityTown": "Jaipur", "StateTerritory": "Rajasthan", "YearEstablished": None},
    {"Number": 152, "Name": "Albert Hall Museum", "CityTown": "Jaipur", "StateTerritory": "Rajasthan", "YearEstablished": 1887},
    {"Number": 153, "Name": "City Palace, Jaipur", "CityTown": "Jaipur", "StateTerritory": "Rajasthan", "YearEstablished": None},
    {"Number": 154, "Name": "City Palace, Udaipur", "CityTown": "Udaipur", "StateTerritory": "Rajasthan", "YearEstablished": None},
    {"Number": 155, "Name": "Umaid Bhawan Palace", "CityTown": "Jodhpur", "StateTerritory": "Rajasthan", "YearEstablished": None},
    {"Number": 156, "Name": "Jaisalmer War Museum", "CityTown": "Jaisalmer", "StateTerritory": "Rajasthan", "YearEstablished": None},
    {"Number": 157, "Name": "Vintage and Classic Car Museum", "CityTown": "Udaipur", "StateTerritory": "Rajasthan", "YearEstablished": 2000},
    {"Number": 158, "Name": "Rajiv Gandhi Regional Museum of Natural History", "CityTown": "Sawai Madhopur", "StateTerritory": "Rajasthan", "YearEstablished": 2007},
    {"Number": 159, "Name": "Sardar Government Museum", "CityTown": "Jodhpur", "StateTerritory": "Rajasthan", "YearEstablished": 1936},
    {"Number": 160, "Name": "Namgyal Institute of Tibetology", "CityTown": "Gangtok", "StateTerritory": "Sikkim", "YearEstablished": None},
    {"Number": 161, "Name": "Chennai Railway Museum", "CityTown": "Chennai", "StateTerritory": "Tamil Nadu", "YearEstablished": 2002},
    {"Number": 162, "Name": "Government Museum, Chennai", "CityTown": "Chennai", "StateTerritory": "Tamil Nadu", "YearEstablished": 1851},
    {"Number": 163, "Name": "Vivekanandar Illam", "CityTown": "Chennai", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 164, "Name": "Gandhi Memorial Museum", "CityTown": "Madurai", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 165, "Name": "Gass Forest Museum", "CityTown": "Coimbatore", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 166, "Name": "Saraswathi Mahal Library", "CityTown": "Thanjavur", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 167, "Name": "Government Museum", "CityTown": "Cuddalore", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 168, "Name": "Government Museum, Karur", "CityTown": "Karur", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 169, "Name": "Government Museum, Pudukkottai", "CityTown": "Pudukkottai", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 170, "Name": "Government Museum, Tiruchirappalli", "CityTown": "Tiruchirappalli", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 171, "Name": "Railway Heritage Centre", "CityTown": "Tiruchirappalli", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 172, "Name": "Mahakavi Bharathi Memorial Library", "CityTown": "Erode", "StateTerritory": "Tamil Nadu", "YearEstablished": None},
    {"Number": 173, "Name": "Alampur Museum", "CityTown": "Alampur", "StateTerritory": "Telangana", "YearEstablished": None},
    {"Number": 174, "Name": "Birla Science Museum", "CityTown": "Hyderabad", "StateTerritory": "Telangana", "YearEstablished": None},
    {"Number": 175, "Name": "City Museum", "CityTown": "Hyderabad", "StateTerritory": "Telangana", "YearEstablished": None},
    {"Number": 176, "Name": "Jagdish and Kamla Mittal Museum of Indian Art", "CityTown": "Hyderabad", "StateTerritory": "Telangana", "YearEstablished": 1976},
    {"Number": 177, "Name": "Nizam Museum", "CityTown": "Hyderabad", "StateTerritory": "Telangana", "YearEstablished": 2000},
    {"Number": 178, "Name": "Khazana Building Museum", "CityTown": "Hyderabad", "StateTerritory": "Telangana", "YearEstablished": None},
    {"Number": 179, "Name": "Salar Jung Museum", "CityTown": "Hyderabad", "StateTerritory": "Telangana", "YearEstablished": 1951},
    {"Number": 180, "Name": "Telangana State Archaeology Museum", "CityTown": "Hyderabad", "StateTerritory": "Telangana", "YearEstablished": 1930},
    {"Number": 181, "Name": "Warangal Museum", "CityTown": "Warangal", "StateTerritory": "Telangana", "YearEstablished": None},
    {"Number": 182, "Name": "Tripura State Museum", "CityTown": "Agartala", "StateTerritory": "Tripura", "YearEstablished": 1970},
    {"Number": 183, "Name": "State Museum, Lucknow", "CityTown": "Lucknow", "StateTerritory": "Uttar Pradesh", "YearEstablished": 1863},
    {"Number": 184, "Name": "Allahabad Museum", "CityTown": "Allahabad", "StateTerritory": "Uttar Pradesh", "YearEstablished": 1931},
    {"Number": 185, "Name": "Kanpur Sangrahalaya", "CityTown": "Kanpur", "StateTerritory": "Uttar Pradesh", "YearEstablished": 1999},
    {"Number": 186, "Name": "Government Museum, Mathura", "CityTown": "Mathura", "StateTerritory": "Uttar Pradesh", "YearEstablished": 1874},
    {"Number": 187, "Name": "Sarnath Museum", "CityTown": "Sarnath", "StateTerritory": "Uttar Pradesh", "YearEstablished": 1910},
    {"Number": 188, "Name": "Rashtriya Dalit Prerna Sthal and Green Garden", "CityTown": "Noida", "StateTerritory": "Uttar Pradesh", "YearEstablished": None},
    {"Number": 189, "Name": "Ibn Sina Academy of Medieval Medicine and Sciences", "CityTown": "Aligarh", "StateTerritory": "Uttar Pradesh", "YearEstablished": None},
    {"Number": 190, "Name": "Swaraj Bhavan (old Anand Bhavan)", "CityTown": "Allahabad", "StateTerritory": "Uttar Pradesh", "YearEstablished": None},
    {"Number": 191, "Name": "Indian Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1814},
    {"Number": 192, "Name": "Victoria Memorial", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1921},
    {"Number": 193, "Name": "Asutosh Museum of Indian Art", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 194, "Name": "State Archaeological Gallery", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1962},
    {"Number": 195, "Name": "Sabarna Sangrahashala", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 196, "Name": "Kolkata Museum of Modern Art", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 197, "Name": "Gurusaday Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1961},
    {"Number": 198, "Name": "Marble Palace", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 199, "Name": "Ramkrishna Mission Institute of Culture", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 200, "Name": "Birla Industrial and Technological Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": 1959},
    
    {"Number": 201, "Name": "Metcalfe Hall", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 202, "Name": "Kolkata Town Hall", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 203, "Name": "Fort William", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 204, "Name": "Jorasanko Thakur Bari", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 205, "Name": "Academy of Fine Arts", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 206, "Name": "Kolkata Rail Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 207, "Name": "Currency Building", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 208, "Name": "Mother's Wax Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 209, "Name": "Asutosh Museum of Indian Art", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 210, "Name": "Fanattic Sports Museum", "CityTown": "Kolkata", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 211, "Name": "Malda Museum", "CityTown": "Malda", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 212, "Name": "Rabindra Museum", "CityTown": "Mungpoo", "StateTerritory": "West Bengal", "YearEstablished": None},
    {"Number": 213, "Name": "Hazarduari Palace Museum", "CityTown": "Murshidabad", "StateTerritory": "West Bengal", "YearEstablished": None}
]

# Define the CSV file name
csv_file = "museums.csv"

# Open the CSV file in write mode
with open(csv_file, mode='w', newline='') as file:
    # Create a DictWriter object
    writer = csv.DictWriter(file, fieldnames=["Number","Name", "CityTown", "StateTerritory", "YearEstablished"])
    
    # Write the header
    writer.writeheader()
    
    # Write the rows
    writer.writerows(museums)

print(f"CSV file '{csv_file}' created successfully.")