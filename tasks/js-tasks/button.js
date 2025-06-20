function val(){
    let value=document.querySelector('.js-follow-btn');
    if(value.innerText==="Follow"){
        value.innerText="followed";
    }
    else{
        value.innerText="unfollow";
    }
    
}