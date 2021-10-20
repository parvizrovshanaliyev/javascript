/*
* asagidaki numumede ts-de teyin edilen deyisken tipi evvelden number
* oldugundan sonrada string bir deyer assign eden zaman compile-time error-la
* qarsilasiriq , buradanda ts-in typechecker oldugunun ferqine vara bilerik,
* 
* ~ npx types.ts // bu ts file eger trasnpile etsek js-e console-da 
* error-u gosterecek ancaq js-e transpile olunacagindan problem olmadan cevrilme
* yerine yetirilir cunki js-de evvelden number olan bir deyisen sonradan basqa tip-de
* deyer qebul ede bilmekdedir. Bunun kimi hall ise development vaxti bir cox xetalara yol aca
* bilir.
* */


let number=5;
// number='a'; // compile-time error

/*
* a deyisenin : number tipinde olacagini evvelceden teyin edirik.
* */

let a:number;

a=5;
// a='a';
// a=true;

let b: string;
let c: boolean=true;
let d: any;// her hansisa tip qebul ede bilir
let e: number[]=[1,23,2];
let f: Array<number>=[1,1,3,1,1];
let g: any[]=[1,"a",true];
let h:[string,number,boolean]=["a",5,false] // tuple

const creditPayment=0;
const transferPayment=1;
const eftPayment=2;

enum Payment
{
    creditPayment=0,//0
    transferPayment=1,//1
    eftPayment=2//2
}

let credit=Payment.creditPayment;
let transfer=Payment.transferPayment;
let eft=Payment.eftPayment;


/*
*  Type assertions // type convention
* */

let message; // bu formada any olaraq her hansisa bir tip qebul ede bilir
message='Hello world';
/*
* burada .length stringin ozelliyi oldugundan ve teyin edilen zaman string
* tip qeyd edilmediyinden string-e cevrilmelidir.
* 
* casting
* */
let count=(<string>message.length); // v1
let length1=(message as string).length; // v2

/*
* functions
*  argumentlerinin tipi verilmezse yeni asagidaki kimi
* getAVG(a,b,c) bu halda biz ferqli tip gondersek runtime vaxti error cixacaq,
* bu problemin qarshisini almaq ucun function qebul etdiyi argumentler ucun evvelceden
* tip teyin edilmelidir.
* 
* getAVG(a : number,b:number,c:number)
* 
* getAVG(a : number,b:number,c:number) : string function geriye dondereceyi tipi bu formada qeyd edirik.
* deyer dondermezse : void deye qey ede bilerik.
* */

function getAVG(a : number,b:number,c:number):string{
    const result=(a+b+c)/3;
    
    return 'result :' + result;
}

getAVG(10,20,30);


// c parametrinin optional oldugunu qeyd edirik
function getAVG2(a : number,b:number,c?:number):string{
    
    let total=a+b;
    let count=2;
    if(typeof c!=='undefined'){
        total+=c;
        count++;
    }
    const result=total/count;
    return 'result :' + result;
}


// rest param number arr foramsinda istenilen qeder arrgument qebul edir.
function getAVG3(...a:number[]):string{

    let total=0;
    let count=0;
    for (let i=0;i<a.length;i++){
        total+=a[i];
        count++;
    }
    const result=total/count;
    return 'result :' + result;
}

// modern js arrow function
const getAVG4= (...a:number[]) : string => {

    let total=0;
    let count=0;
    for (let i=0;i<a.length;i++){
        total+=a[i];
        count++;
    }
    const result=total/count;
    return 'result :' + result;
}


