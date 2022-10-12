<template>
    <div class="container-fluid bg-secondary my-5">
        <div class="row justify-content-md-center py-5 px-xl-5">
            <div class="col-md-6 col-12 py-5">
                <div class="text-center mb-2 pb-2">
                    <h2 class="section-title px-5 mb-3"><span class="bg-secondary px-2">Nhận Thông Tin Khuyến Mãi</span></h2>
                    <p>Liên hệ ngay để nhận thông tin ưu đãi cực hấp dẫn</p>
                </div>
                <form @submit.prevent="submit">
                    <div class="input-group">
                        <input type="email" class="form-control border-white p-4" placeholder="Nhập email tại đây" v-model="form.email" required>
                        <div class="input-group-append">
                            <!-- <button class="btn btn-primary px-4">Đăng Ký</button> -->
                            <input type="submit" class="btn btn-primary px-4" value="Đăng Ký"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
</template>

<script>
import swal from 'sweetalert';
import axios from "axios";
import {APIURL} from '../../constant';
    export default {
        data(){
            return{
                form:{email:""}
            }
        },
        methods: {
            async submit() {
                await axios.post(`${APIURL}/emails`, this.form);
                swal("Thành Công", "Cảm ơn bạn đã đăng ký", "success");
                this.form.email = null;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>