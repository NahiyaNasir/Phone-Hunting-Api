const  loadPhone = async( searchText,isShowAll)=>{
        const res= await fetch(`
        https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        const data= await res.json()
        const phones=data.data
        displayPhone(phones,isShowAll)

      //  console.log(phones)
}

// 1. display the phones through loop
const displayPhone=(phones,isShowAll)=>{
   //console.log(phones)
   const phoneContainer=document.getElementById('phone-container')
   //display all the buttons if cards are more than 12
   const showAllButtons=document.getElementById('show-all-buttons')
      if(phones.length>12 && !isShowAll){
        showAllButtons.classList.remove('hidden')


      }else{
        showAllButtons.classList.add('hidden')
      }

        console.log(isShowAll, 'is show')
         //display  first 12 if not show all 
         if( !isShowAll){
         phones=phones.slice(0,12)}
   //clear phone container before adding new card
   phoneContainer.textContent=''
   phones.forEach(phone => {
   // console.log(phone)
     //2. create div
     const phoneCard=document.createElement('div')
     phoneCard.classList=`card w-96  bg-slate-400 shadow-x`
     phoneCard.innerHTML=`
     <figure class="px-10 pt-10">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                     
                      <div class="card-actions">
                        <button  onclick  ="handelShowDetails('${phone.slug}') 
                       "
                       
                        class="btn btn-primary">Shoe All Details</button>
                      </div>
                    </div>
                  </div>
     
     `
//3. append
      phoneContainer.appendChild(phoneCard)
   });
toggleLoadingSpinner(false)
}
 
//handel scarch
 const   handelSearch = (isShowAll)=>{
  //console.log('search')
  toggleLoadingSpinner(true)
  const searchFill=document.getElementById('search-fill')
  const searchText=searchFill.value
  if(searchText===!searchText){
    alert('search not found')
  }
     loadPhone(searchText, isShowAll)
 // console.log(searchText)
}
//spinner show
const toggleLoadingSpinner=(isToggled)=>{
    const loadingSpiner=document.getElementById('loading-spinner')
    if(isToggled){
        loadingSpiner.classList.remove('hidden')
    }else{
        loadingSpiner.classList.add('hidden')
    }
   
}
 //  show all buttons 
  const handelShoeAll=()=>{
    handelSearch(true)
  }
  //show details
  const handelShowDetails=async (id)=>{
  //  console.log('is clecked', id)
    //load data single 
    const res=await fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
const data= await  res.json()
  // console.log(data)
  const phone= data.data
  showPhoneDetails(phone)
  }
  //show phone details
   const showPhoneDetails=(phone)=>{
    console.log(phone)
    const phoneName=document.getElementById('phone-name')
    phoneName.innerText=phone.name
     const showDetailContainer =document.getElementById('show-detail-container')
 showDetailContainer.innerHTML=`
 <img src="${phone.image}" alt="" class="rounded-xl  bg-teal-600" />
 <p class="text-xl"><span> Storage:</span>${phone?.mainFeatures?.storage }</p>

 <p class="text-xl"><span> Release Date:</span>${phone?.others?.releaseDate || 'Not Found'}</p>
 <p class="text-xl"><span> GPS:</span>${phone?.others?.GPS||'No GPS' }</p>



 `

    show_detail_modal.showModal()
   }

  //show detail model

  /* const showModel=(phone)=>{
   //console.log(phone)
*/
//loadPhone()