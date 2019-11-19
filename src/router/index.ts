import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/dashboard"
        },
        {
            path: "/",
            component: () => import("../components/common/Home.vue"),
            meta: { title: "自述文件" },
            children: [
                {
                    path: "/dashboard",
                    component: () => import("../components/page/Dashboard.vue"),
                    meta: { title: "系统首页" }
                }, {
                    path: "/table",
                    component: () => import("../components/page/BaseTable.vue"),
                    meta: { title: "基础表格" }
                }, {
                    path: "/tabs",
                    component: () => import("../components/page/Tabs.vue"),
                    meta: { title: "tab选项卡" }
                }, {
                    path: "/form",
                    component: () => import("../components/page/BaseForm.vue"),
                    meta: { title: "基本表单" }
                }, {
                    path: "/editor",
                    component: () => import("../components/page/VueEditor.vue"),
                    meta: { title: "富文本编辑器" }
                }, {
                    path: "/markdown",
                    component: () => import("../components/page/Markdown.vue"),
                    meta: { title: "markdown编辑器" }
                }, {
                    path: "/upload",
                    component: () => import("../components/page/Upload.vue"),
                    meta: { title: "文件上传" }
                }, {
                    path: "/charts",
                    component: () => import("../components/page/BaseCharts.vue"),
                    meta: { title: "schart图表" }
                }, {
                    path: "/drag",
                    component: () => import("../components/page/DragList.vue"),
                    meta: { title: "拖拽列表" }
                }, {
                    path: "/dialog",
                    component: () => import("../components/page/DragDialog.vue"),
                    meta: { title: "拖拽弹框" }
                }, {
                    path: "/i18n",
                    component: () => import("../components/page/I18n.vue"),
                    meta: { title: "国际化" }
                }, {
                    path: "/permission",
                    component: () => import("../components/page/Permission.vue"),
                    meta: { title: "权限测试", permission: true }
                }, {
                    path: "/404",
                    component: () => import("../components/page/404.vue"),
                    meta: { title: "404" }
                }, {
                    path: "/403",
                    component: () => import("../components/page/403.vue"),
                    meta: { title: "403" }
                }
            ]
        }, {
            path: "/login",
            component: () => import("../components/page/Login.vue"),
            meta: { title: "登录" }
        }, {
            path: "*",
            redirect: "/404"
        }
    ]
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
});

export default router
