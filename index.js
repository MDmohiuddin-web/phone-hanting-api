const loadphone=async (searchtext,isshowall) =>
{
    const  response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`);
    const data=await response.json();  
    const phone=data.data;
    //  console.log(phone);
    displayphone(phone,isshowall);
}


const displayphone=(phone,isshowall) =>{
    // console.log(phone);
    //get the eliment holder div 1
    const phonecontiner=document.getElementById('phone-continar');
   
    //clear out old data
    phonecontiner.textContent="";
    const showallcontainer=document.getElementById('show-all-container');
    if(phone.length>10 && !isshowall){
        showallcontainer.classList.remove('hidden');
    }
else{
    showallcontainer.classList.add('hidden');
}
console.log('is show  all',isshowall);
    //show only first 10 phone if not  showing all
   if(!isshowall){
    phone=phone.slice(0,10);
   }
   



    phone.forEach(phone => {
        console.log(phone)
        //create div 2
        const phonecard=document.createElement("div");
        phonecard.classList=`card max-w-96 m-auto py-10 bg-gray-200 my-5 shadow-xl`;
       //setinner html 3
        phonecard.innerHTML=`
         <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions flex justify-center">
                        <button onclick="showdetels('${phone.slug}')" class="btn btn-primary ">Show betels</button>
                      </div>
                    </div>
        
        `;

        //apend child 4
     phonecontiner.appendChild(phonecard);

    });

    // hide loding spinar
    toggellodingspinar(false);

}
const showdetels = async (id) =>{
    console.log('clicked on show detals ',id); 

    // lode singel dala
    const  response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  
   
    const data = await response.json();  
   const phone =data.data;
    showphonedetels(phone)
    
}

const showphonedetels = (phone) =>{

    console.log(phone);

    const phone_name=document.getElementById('phone-name');
    phone_name.innerText=phone.name;


    const showdetelscontiner=document.getElementById('showdetelscontiner');
    showdetelscontiner.innerHTML=`
    
    <img src="${phone.image}" alt="">
    <p> <span>storage:</span>${phone?.
        mainFeatures?.storage}</p>
  
   <p> <span>memory:</span>${phone?.
    mainFeatures?.memory}</p>
  
   <p> <span>reles date:</span>${phone?.releaseDate}</p>
   <p> <span>brand:</span>${phone.brand}</p>
    
    `;

    show_my_modal.showModal();
}



const handel=(isshowall)=>{
    toggellodingspinar(true);
   const searchfild=document.getElementById('search-fild')
    const searchtext=searchfild.value;
    console.log(searchtext);
    loadphone(searchtext,isshowall);
}
const toggellodingspinar=(isloding)=>{
    const lodingspinar=document.getElementById('loding-spinar');
    // lodingspinar.classList.remove('hidden');

    if (isloding){
        lodingspinar.classList.remove( 'hidden');
    }
    else{
         lodingspinar.classList.add( 'hidden');
    }
}





// handel show all
const swhoall=() => {
handel(true);
}



loadphone('apple');