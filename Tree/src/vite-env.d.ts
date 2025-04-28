/// <reference types="vite/client" />
import { Router } from 'vue-router';

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $navigateTo: (path: string) => void; // 声明全局方法类型
    $router: Router; // 确保 $router 类型已声明（如果未通过其他方式声明）
  }
}