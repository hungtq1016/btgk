<template>
    <div class="container">
        <form @submit.prevent="submit">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input v-model="form.name" class="input" type="text" placeholder="Text input" v>
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <input v-model="form.desc" class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" >Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
            <div>{{form.name}}</div>
        </form>
    </div>
</template>

<script >
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { APIURL } from "../constant";
export default {
    data() {
        return {
            form: {
                name: "",
                desc: "",
            },
        };
    },
    method:{
        async submit() {
            const { name, desc } = this.form;
            if (!name || !desc) {
                alert("Enter all fields to submit");
                return;
            }   
            await axios.post(`${APIURL}/products`, this.form);

        },
    }
}
</script>

<style lang="scss" scoped>

</style>