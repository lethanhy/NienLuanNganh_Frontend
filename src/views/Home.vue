<template>
    <!--anh-->
    <!-- <div class="about-product container pt-5 d-flex justify-content-around ">
        <div class="">
            <img src="../assets/anh-1.png" class="rounded-circle" alt="">
            <h4 class="text-center pt-4">Hoa Tai</h4>
        </div>
        <div>
            <img src="../assets/anh-2.png" class="rounded-circle" alt="">
            <h4 class="text-center pt-4">Lắc Tay</h4>
        </div>
        <div>
            <img src="../assets/anh-3.png" class="rounded-circle" alt="">
            <h4 class="text-center pt-4">Nhẫn</h4>
        </div>
        <div>
            <img src="../assets/anh-4.png" class="rounded-circle" alt="">
            <h4 class="text-center pt-4">Dây Chuyền</h4>
        </div>
        <div>
            <img src="../assets/anh-4.png" class="rounded-circle" alt="">
            <h4 class="text-center pt-4">Dây Chuyền</h4>
        </div>
       
    </div> -->

    <!--body-->
    <section id="about" class="about section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img src="../assets/poster-2.jpg" alt="" class="img-fluid">
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>We provide best quality <br> service ever</h2>
                <p>The lorem ipsum gets its name from the Latin phrase 
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
                  which translates to “Nor is there anyone who loves or pursues or 
                  desires to obtain pain of itself, because it is pain.
                  which translates to “Nor is there anyone who loves or pursues or 
                  desires to obtain pain of itself, because it is pain.
                  which translates to “Nor is there anyone who loves or pursues or 
                  desires to obtain pain of itself, because it is pain.</p>
                  <a href="#" class="btn btn-warning">Xem Ngay</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!--body-->
      <section id="about" class="about section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>We provide best quality <br> service ever</h2>
                <p>The lorem ipsum gets its name from the Latin phrase 
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
                  which translates to “Nor is there anyone who loves or pursues or 
                  desires to obtain pain of itself, because it is pain.
                  which translates to “Nor is there anyone who loves or pursues or 
                  desires to obtain pain of itself, because it is pain.
                  which translates to “Nor is there anyone who loves or pursues or 
                  desires to obtain pain of itself, because it is pain.</p>
                  <a href="#" class="btn btn-warning">Xem Ngay</a>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img src="../assets/cc3cc1164e1ff34ff6e46501dffd4c7e.jpg" alt="" class="img-fluid" >
              </div>
            </div>
          </div>
        </div>
      </section>

      <Product :products="products"/>
</template>

<script>
import Product from "../components/Product.vue";
import productService from "@/services/product.service";

export default{
    components: {
        Product,
    },
    data() {
      return {
        products: [],
      }

    },
    created() {
      this.retrieveProducts();
    },
    methods: {
      goToAddUser() {
        this.$router.push({ name: "user.add" });
      },
      async retrieveProducts() {
            try {
                this.products = await productService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

    }

}
</script>

<style>
/* *{
    font-family: montsrrat;

} */
body{
    background: f1fbff;
}
.header{
  background: #F0EBD2;
}
.section-padding{
    padding: 20px 0;
}
#about{
  background-color:#F3F2EB ;
}



.about-product img{
  background-color:#EEECE2;
  width: 150px;
}

</style>