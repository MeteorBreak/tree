// src/plugins/navigation.ts
import type { App } from 'vue';
import { Router } from 'vue-router';

// 定义插件逻辑
export default {
    install(app: App, router: Router) {
        // 挂载全局方法 $navigateTo
        app.config.globalProperties.$navigateTo = (path: string) => {
        router.push(path);
        };
    }
};