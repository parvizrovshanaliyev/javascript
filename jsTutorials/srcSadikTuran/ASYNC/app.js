/*
* What is asynchronous Javascript ?
* 
* 
* ** Single Thread Model
* Umumilikde deyek ki elimizde uc eded gorulmeli task var,
* application icerisinde gorulecek olan bu tasklar ardicil sekilde
* biri bitdikden sonra digeri ucun her hansisa bir fealiiyet baslayir,
* bu da o demekdir ki, bir birinci task bitenedek app-de basqa task yerine
* yetire bilmirik her sey birinci taskin bitmesini gozleyir.
* 
* ** Multi Thread Model
* Yene uc eded task var sadece bu sefer prosessor birinci taskin
* bitmesini gozlemir ve paralel sekilde cavab vere bileceyi diger 
* tasklari-da tamamlamaga baslayir.
* 
* 
* -- Callback
* -- Promise
* -- Async/Await
* 
* */


/*
* Ajax & XHR Object
* 
* Client ---HttpRequest  ----> Server
*        <---HttpResponse ----
* 
* 0: request not initialized
* 1: server connection established
* 2: request received
* 3: processing request
* 4: request finished and response is ready
* 
* 
* status 
* 200 : OK
* 403 : Forbidden
* 404 : Not Found
* 
* */

const xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){

    //4: request finished and response is ready
    if(xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else if(xhr.status===404){
            console.log('not found');
        }
    }
}

/*
* Method : GET
* URL: msg.txt
* ASYNC : default false 
* */
xhr.open('GET','msg.txt',true);
xhr.send();