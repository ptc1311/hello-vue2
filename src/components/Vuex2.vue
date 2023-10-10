<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h2>{{ message }}</h2>
        <ul v-for="(user, index) in users" :key="index">
            <li>{{ user.id }}, {{ user.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name : "Vuex-vue2",
    data() {
        return {
            msg : "hello111"
        }
    },
    computed:{
        ...mapState({
            message: state=>state.msg,
            users: state=>state.userList
        })
        /*
        message() {
            return this.$store.state.msg;
        },
        users() {
            return this.$store.state.userList;
        }
        */
    }
}
</script>

