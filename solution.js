function solve() {
   // const name = document.querySelector("#add-new > input[type=text]:nth-child(2)");
   // const quantity = document.querySelector("#add-new > input[type=text]:nth-child(3)");
   // const price = document.querySelector("#add-new > input[type=text]:nth-child(4)");

   const [availPrd, namePrd, quantityPrd, pricePrd] = Array.from(document.querySelectorAll('input'));
   const listPrd = document.querySelector("#products > ul");
   const myPrd = document.querySelector("#myProducts > ul");
   let totalPrice = document.getElementsByTagName('h1')[1];

   const addBtn = document.getElementsByTagName('button')[1];
   const filterBtn = document.getElementsByTagName('button')[0];
   const buyBtn = document.getElementsByTagName('button')[2];
   
   // console.log();
   
   let totalSum = 0;
   addBtn.addEventListener('click', function(e){
      e.preventDefault();

      const name = namePrd.value;
      let quantity = Number(quantityPrd.value);
      const price = Number(pricePrd.value)

      const li = document.createElement('li');
      const sp = document.createElement('span');
      const str = document.createElement('strong');
      const div = document.createElement('div');
      const innerStr = document.createElement('strong');
      const innerBth = document.createElement('button');

      sp.textContent = `${name}`;
      str.textContent = `Available: ${quantity}`;
      innerStr.textContent = `${price.toFixed(2)}`; // may be toFixed(2)
      innerBth.textContent = "Add to Client's List";

      listPrd.appendChild(li);
      li.appendChild(sp);
      li.appendChild(str);
      li.appendChild(div);
      div.appendChild(innerStr);


      innerBth.addEventListener('click', function(e) {
         
         const li = document.createElement('li');
         const strong = document.createElement('strong');

         li.textContent = `${name}`;
         strong.textContent = `${price.toFixed(2)}`;

         myPrd.appendChild(li);
         li.appendChild(strong);

         totalSum += price;
         quantity -= 1;
         str.textContent = '';
         str.textContent = `Available: ${quantity}`;
         totalPrice.textContent = `Total Price: ${totalSum.toFixed(2)}`

         if(quantity<=0){
            this.parentNode.parentNode.parentNode
            .removeChild(this.parentNode.parentNode);
         }
      });

      div.appendChild(innerBth);


   });

   //filter function
   filterBtn.addEventListener('click', function(e){
      let keyFilter = availPrd.value;
      let allProducts = Array.from(document.querySelectorAll("#products ul"));
      
      
      //for(let i =0; i< allProducts.children; i++){
      for(let prd of Array.from(allProducts.children)){
         //let currentPrd = allProducts[i];       
         if(!prd.children[0].innerHTML.toLowerCase.includes(keyFilter.toLowerCase())){
         //if(!currentPrd.innerHTML.toLowerCase.includes(keyFilter.toLowerCase())){
            prd.style.display = "none"
			} else {
				prd.style.display = "block"
         }
      }
      
   });

   buyBtn.addEventListener('click',function(){
      totalPrice.textContent = `Total Price: 0.00`;
      myPrd.textContent = '';
      
   });
}