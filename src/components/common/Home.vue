<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{ 'content-collapse': $store.state.home.isCollapse }">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="$store.state.home.tagList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";

import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        vHead,
        vSidebar,
        vTags
    }
})
export default class Home extends Vue {}
</script>
