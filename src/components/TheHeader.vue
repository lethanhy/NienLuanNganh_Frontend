
<template>
    <nav class="header navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand fs-3 ml-3" href="#" style="color:coral; font-family: Roboto">JEWELRY STORE</a>
    <!-- <img src="" alt="logo" style="height: 50px; width: 80px;"> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Trang Chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products/" class="nav-link">Sản Phẩm</router-link>
          </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        
        
      </ul>
      <ul  class="navbar-nav ms-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
            <router-link to="/register" class="btn btn-outline-light btn-register">Đăng Ký</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="btn btn-outline-light btn-login">Đăng Nhập</router-link>
          </li> -->

        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Tài khoản</a></li>
            <li><a class="dropdown-item" href="#"><router-link to="/orders">Lịch sử đặt hàng</router-link></a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
          </ul>
        </li>
        <li class="nav-item">
            <router-link to="/carts" class="nav-link">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
        </li>


      </ul>
      
      
    </div>
  </div>
</nav>
</template>

<style>
.header {
  background-color: rgb(227, 225, 221);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
}

.navbar-brand img {
  max-height: 40px;
}

.navbar-nav .nav-link {
  color: black !important;
}

.navbar-nav .nav-link:hover {
  color: #ffc107 !important;
}

.navbar-toggler-icon {
  color: black;
}

.nav-item {
  margin-right: 15px;
}

.nav-item:last-child {
  margin-right: 0;
}
/* Style for shopping cart icon */
.navbar-nav .fa-shopping-cart {
  color: rgb(237, 122, 80);
  font-size: 1.5rem;
}


.nav-item .btn {
  margin-right: 5px;
}

.btn-register {
  background-color: #ffc107;
  color: white;
}

.btn-register:hover {
  background-color: #ffa000;
}

.btn-login {
  background-color: #007bff;
  color: white;
}

.btn-login:hover {
  background-color: #0056b3;
}

@media (max-width: 991px) {
  .navbar-nav {
    margin-left: auto;
  }

  .navbar-nav .nav-link {
    padding: 10px; /* Adjust padding for collapsed menu links */
  }

  .navbar-nav .fa-shopping-cart {
    font-size: 1.25rem; /* Adjust font size for shopping cart icon */
  }

}
</style>
<!-- <style>
.navbar .navbar-nav .nav-item a{
    padding: 15px;
}
.navbar .navbar-nav .nav-but{
    padding: 5px;
}
.header {
  background:white;
}
</style> -->