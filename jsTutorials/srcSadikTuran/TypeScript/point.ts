/*
* Interfaces , Class
* 
* Interfaces- ts-de istifade edilen interfaceler diger dillerde oldugu kimi,
* esasen scheme rolu oynayir ve eyni scheme-i uygun class-lara tetbiq ede bilerik,
* hemcinin es5-de interface anlayisi olmadigindan eger ts file-ni trasnpile etsek
* js file-da bununla bagli hecne yaranmir bunun ucun class-a implemetasiya olmalidir.
* 
* */
export interface Point {
    x: number,
    y: number
}