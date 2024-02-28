const  loadPhone = async( searchText)=>{
        const res= await fetch(`
        https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        const data= await res.json()
        const phones=data.data
        displayPhone(phones)
      //  console.log(phones)
}


const displayPhone=(phones)=>{
   //console.log(phones)
   const phoneContainer=document.getElementById('phone-container')
   phoneContainer.textContent=''
   phones.forEach(phone => {
     console.log(phone)
     const phoneCard=document.createElement('div')
     phoneCard.classList=`card w-96  bg-white shadow-x`
     phoneCard.innerHTML=`
     <figure class="px-10 pt-10">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
     
     `

      phoneContainer.appendChild(phoneCard)
   });
}
 
//handel scarch
 const   handelSearch = ()=>{
  console.log('search')
  const searchFill=document.getElementById('search-fill')
  const searchText=searchFill.value
     loadPhone(searchText)
 // console.log(searchText)
}
//loadPhone()