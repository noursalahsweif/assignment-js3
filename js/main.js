var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteurl");

    var siteCon = [];



    // local storage

    if(localStorage.getItem("sites") != null){
        siteCon = JSON.parse( localStorage.getItem("sites") )
        display();
    }






    // add function ( submit button )






function addsite(){
    var site = {
        name: siteNameInput.value,
        url: siteUrlInput.value
    }
    
    checkname();
    checkurl();
    
    if (siteNameInput.value == "" || siteUrlInput.value == ""){
        window.alert("please enter a name and url")
    }
    else{
        siteCon.push(site);
    localStorage.setItem( "sites" ,JSON.stringify(siteCon));
    // console.log(siteCon);
    display();
    clear();
    }

    

}



// function to check if the siteurl include "https" or not



function checkurl(){
    
    if (siteUrlInput.value.toLocaleLowerCase().includes("https")){
        console.log(1);
    }
    else{
        window.alert("please enter a valid url")
        clear();
    }
    
}



// function to check if the bookmark name is already exist



function checkname(){
    
    for(var i = 0 ; i < siteCon.length ; i++){
        if(siteNameInput.value == siteCon[i].name){
            window.alert("please enter a non existed name ") ;
            clear();
        }
    }
    
}



// clear form function



function clear(){
    siteNameInput.value ="";
    siteUrlInput.value ="";
}




    // display function 





function display(){

    var cartona= "";

    for (var i = 0 ; i < siteCon.length ; i++){
        cartona += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${siteCon[i].name}</td>
                        <td><button class="btn btn-info" id="visit" onclick="visitSite(${i})"><span><i class="fa-regular fa-eye"></i></span>visit </button></td>
                        <td><button class="btn btn-danger" onclick="deleteSite(${i})"><span><i class="fa-solid fa-trash"></i></span> delete</button></td>
                    </tr>`
    }


    document.getElementById("bodydata").innerHTML = cartona;

}




// visit function ( visit butoon )







function visitSite(term){

    window.location.href= siteCon[term].url;


}




// delete function ( delete butoon )







function deleteSite(item){
    
    siteCon.splice(item , 1);
    localStorage.setItem( "sites" ,JSON.stringify(siteCon));
    display();

}
