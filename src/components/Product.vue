<template>
  <!--Product-->
  <section id="popular-product">

      <!--Heading-->
      <div class="product-heading">
        <h3>Popular Product</h3>
        <span>All</span>
      </div>

      <!--product-box-container-->
      <div class="product-container">
        <!--box-->
        <div class="product-box shadow" v-for="(product, index) in products" :key="product._id">
            <img :src="product.image" alt=""  >
            <router-link :to="{name: 'showProduct', params:{id: product._id}}" class="text-decoration-none">
            <strong>{{ product.name }}</strong>
            </router-link>

            <!--<span class="quantity">1KG</span>-->
            <span class="price">{{ product.price }} VND</span>
            <!---cart-btn-->
            <button type="submit" class="cart-btn"  name="add_to_cart">Add to cart</button>
        </div>
      </div>
  </section>
  

</template>
<script>
export default {
  props: {
    products: { type: Array, default: [] },
  },
  methods: {
    
    // mouseEnter(event) {
    //   event.target.closest('.product-card').classList.add('hovered');
    // },
    // mouseLeave(event) {
    //   event.target.closest('.product-card').classList.remove('hovered');
    // },
  },
};


</script>
<style>
#popular-product{
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 50px auto;
}
.product-heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product-heading span{
    color: #a7a7a7;
    font-weight: 400;
    letter-spacing: 1px;
}

/*popular product*/
#popular-product{
    margin: 80px auto;
}

.product-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:30px;
    margin: 40px 0px;
    
}
.product-box{
    width: 100%;
    border: 1px solid #eeeeee;
    background: #ffffff;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
}
.product-box img{
    width: 90%;
    height: 180px;
    object-fit: contain;
    object-position: center;
    margin: auto;
}
.product-box strong{
    color: #202020;
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-weight: 500;
    
}
.product-box .price{
    margin-top: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #393939;
}

.product-box .cart-btn{
    width: 100%;
    height: 40px;
    background-color: #ecf7ee;
    color: #4eb060;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    transition: all ease 0.3s;
    border: 2px solid #e7e7e7;

}
.product-box .cart-btn i{
    margin-right: 10px;
}
.product-box .cart-btn:hover{
    background-color: #4eb060;
    color: #fff;
    transition: all ease 0.3s;
}


</style>






<!-- <template>
  <div>
    <h4 class="pt-3">Product News</h4>
    <hr class="mb-4">
    <div id="product-list" class="row row-cols-1 row-cols-md-4">
      <div class="col mb-4" v-for="(product, index) in products" :key="product._id">
        <div class="card h-100 product-card" @mouseenter="mouseEnter" @mouseleave="mouseLeave">

          <img class="card-img-top bg-custom product-image" :src="product.image" alt="Product Image">

          <div class="card-body">
            <router-link :to="{name: 'showProduct', params:{id: product._id}}">
              <h5 class="card-title">{{ product.name }}</h5>
            </router-link>
            <p class="card-text">{{ product.price }}</p>
            <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->

<!-- <script>
export default {
  props: {
    products: { type: Array, default: [] },
  },
  methods: {
    addToCart(product) { -->
      // Thêm logic xử lý khi thêm sản phẩm vào giỏ hàng ở đây
    <!-- },
    mouseEnter(event) {
      event.target.closest('.product-card').classList.add('hovered');
    },
    mouseLeave(event) {
      event.target.closest('.product-card').classList.remove('hovered');
    },
  },
};
</script> -->

<!-- <style>
#product-list .card {
  border: 1px solid #ccc;
  border-radius: 8px;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  color: #777;
}

.btn-dark {
  width: 100%;
} -->

/* .product-card.hovered {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
} */

<!-- .product-image {
  transition: transform 0.3s ease;
}

.product-card.hovered .product-image {
  transform: scale(1.05);
} -->
/* Thêm CSS mới để định dạng màu nền */
<!-- .bg-custom {
  background-color: white; /* Thay đổi màu nền tùy ý */
}
</style> -->