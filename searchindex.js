// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Home.html", "Untitled Page", "FANCET 11  Test Your Knowledge of Sports Here & Play Contest to Win Upto Rs 100000 in Just Few Moments  Vs  Vs  Vs  Vs  Vs  Vs  Navigate  Support Us  Follow Us  About Us  Copyright © 2020 FANCET 11 Pvt.Ltd  All Rights Reserved   Days,  Hours,  Minutes,  Seconds   ", "");
   this[database_length++] = new SearchPage("How-to-Play.html", "Untitled Page", "FANCET 11  How to Play  Copyright © 2020 FANCET 11 Pvt.Ltd  All Rights Reserved   Navigate  Support Us  Follow Us  About Us   ", "");
   this[database_length++] = new SearchPage("About-FANCET11.html", "Untitled Page", "FANCET 11  About FANCET 11  Copyright © 2020 FANCET 11 Pvt.Ltd  All Rights Reserved   Navigate  Support Us  Follow Us  About Us  MEET THE TEAM   ", "");
   this[database_length++] = new SearchPage("page2.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("Log-In.html", "Untitled Page", "FANCET 11  FANCET 11 Log In Page  Don't Have an Account   ", "");
   this[database_length++] = new SearchPage("page4.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("page5.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("page6.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("page7.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("page8.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("Sign-Up.html", "Untitled Page", "FANCET 11  FANCET 11 Sign Up Page  Allready Have an Account   ", "");
   return this;
}
