<template>
    <div class="container">
      <div class="row mt-3 mb-3">
        <div class="col-lg-4 bg-light m-auto rounded">
          <h2 class="text-center pt-3">Đăng Nhập</h2>
          <form @submit.prevent="loginUser">
            <div class="mb-3">
              <label class="form-label">Username</label>
              <input type="text" class="form-control" v-model="user.username">
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" v-model="user.password">
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary center">Submit</button>
              <p class="text-center">
                Already Have an Account? <router-link to="/register/">Register</router-link>
              </p>
              
            </div>
          </form>
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UserService from '@/services/user.service'; // Import your UserService
  import { useRouter } from 'vue-router';

  export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      message: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await UserService.login(this.user);
        if (response.status === 200) {
          this.message = 'Đăng nhập thành công!';
          // Redirect to the desired route after successful login
          const router = useRouter();
          router.push('/');
        } else {
          this.message = 'Tên đăng nhập hoặc mật khẩu không đúng.';
        }
      } catch (error) {
        // console.error(error);
        this.message = 'Đăng nhập thất bại. Vui lòng thử lại sau.';
      }
    },
  },
};
</script>
<!-- 

<template>

    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-4 bg-light m-auto rounded">
                <h2 class="text-center pt-3">Đăng Nhập</h2>
                <form :user="user" @submit.user="addUser">
                    <div class="mb-3">
                        <label class="form-label">username</label>
                        <input type="text" class="form-control" >
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control ">
                    </div>
                    <div class="d-grid">
                    <button type="submit" class="btn btn-primary center" >Submit</button>
                    <p class="text-center">
                        Already Have an Account ? <router-link to="/dangky"></router-link>

                    </p>
                    </div>
                </form>
                <p>{{ message }}</p>
            </div>
        </div>
    </div>

    
</template>
<script>
    export default {
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                user: {},
                message: "",

            };
        },
        methods: {
            async addUser(data) {
                try {
                    await UserService.create(data);
                    console.log('thành công');

                } catch (error) {
                    console.log(error);
                }
            }
        }


    }
</script> -->