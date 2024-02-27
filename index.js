const loadphone=async () =>
{
    const  response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data=await response.json();  
    const phone=data.data;
    //  console.log(phone);
    displayphone(phone);
}


const displayphone=phone =>{
    // console.log(phone);
    //get the eliment holder div 1
    const phonecontiner=document.getElementById('phone-continar');
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
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        
        `;

        //apend child 4
     phonecontiner.appendChild(phonecard);
    });
   

}

loadphone( );