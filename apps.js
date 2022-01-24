
const add_product = document.getElementById('add_product');
const plist = document.getElementById('plist');
const  add_box = document.querySelector('.product-add-box');
const finish = document.getElementById('finish')
const product = document.getElementById('product');



add_product.addEventListener('click',function(){

    add_box.style.display = 'block';
})


finish.addEventListener('click', function(){
    add_box.style.display = 'none';
})

product.addEventListener('submit',function(e){
  e.preventDefault();

  let name =this.querySelector('input[name="name"]').value;
  let price =this.querySelector('input[name="price"]').value;
  let sale =this.querySelector('input[name="sale_price"]').value;
  let photo =this.querySelector('input[name="photo"]').value;

   let product_arr;

   if(dataGet('products') ){
    product_arr = dataGet('products');
   }else{
    product_arr =[];
   }

   product_arr.push({
       
    name    : name,
    price   :price,
    sale    :sale,
    photo   :photo 

   });

   dataSend('products', product_arr);

   allproduct();


})



  
  allproduct();

  function allproduct(){

    
  let all_products = dataGet('products');
  let data ='';
  all_products.map(pdata => {

   data += `
    
    <div class="col-md-3 my-3">
					<div class="card">
						<img class="card-image" src="${pdata.photo}" alt="">
						<div class="card-body">
							<h3>${pdata.name}</h3>
							<p> <span class="regular-price">$200</span>  <span class="sale-price">$200</span> </p>
		
							<br>
							<button class="btn btn-success">Add to cart</button>
						</div>
					</div>
				</div>


    
    `;
 });

       plist.innerHTML = data; 
  }
 

