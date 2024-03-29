<template>
    <div class="tags" v-if="showTags">
        <ul>
            <li
                class="tags-li"
                v-for="(item, index) in tagsList"
                :class="{ active: isActive(item.path) }"
                :key="index"
            >
                <router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
                <span class="tags-li-icon" @click="closeTags(index)">
                    <i class="el-icon-close"></i>
                </span>
            </li>
        </ul>
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Route } from 'vue-router';
import {ITags,HomeModule} from '@/store/module/Home'

@Component
export default class Tags extends Vue {
    private tagsList: ITags[] = [];

    isActive(path: string) {
        return path === this.$route.fullPath;
    }
    // 关闭单个标签
    closeTags(index: number) {
        const arr: any[] = this.tagsList.splice(index, 1);
        const delItem: { path: string } = arr[0];
        const item: any = this.tagsList[index]
            ? this.tagsList[index]
            : this.tagsList[index - 1];
        if (item) {
            delItem.path === this.$route.fullPath &&
                this.$router.push(item.path);
        } else {
            this.$router.push("/");
        }
    }

    // 关闭全部标签
    closeAll() {
        this.tagsList = [];
        this.$router.push("/");
    }
    // 关闭其他标签
    closeOther() {
        const curItem = this.tagsList.filter((item: ITags) => {
            return item.path === this.$route.fullPath;
        });
        this.tagsList = curItem;
    }
    // 设置标签
    setTags(route: Route) {
        const isExist = this.tagsList.some(item => {
            return item.path === route.fullPath;
        });
        if (!isExist) {
            if (this.tagsList.length >= 8) {
                this.tagsList.shift();
            }
            this.tagsList.push({
                title: route.meta.title,
                path: route.fullPath,
                name: route.matched[1].components.default.name as string
            });
        }
        HomeModule.tags(this.tagsList);
    }

    handleTags(command: string) {
        command === "other" ? this.closeOther() : this.closeAll();
    }
    @Watch("$route")
    onRouterChg(newValue: Route, oldValue: Route) {
        this.setTags(newValue);
    }
    get showTags() {
        return this.tagsList.length > 0;
    }
    created() {
        this.setTags(this.$route);
    }
}
</script>

<style>
.tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;
}

.tags ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

.tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
    background: #f8f8f8;
}

.tags-li.active {
    color: #fff;
}

.tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
}

.tags-li.active .tags-li-title {
    color: #fff;
}

.tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
}
</style>
