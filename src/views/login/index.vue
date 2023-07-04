<script setup lang="ts">
import { useRouter } from "vue-router";
import { useLayout } from "@/layout/hooks/useLayout";
import { useUserStoreHook } from "@/store/modules/user";
import { initRouter, getTopMenu } from "@/router/utils";
import { reactive, ref } from "vue";
import { getCopywriting } from "@/api/index";

defineOptions({ name: "Login" });
const router = useRouter();

const { initStorage } = useLayout();
initStorage();

const ruleForm = reactive({
  username: "admin",
  password: "admin123"
});

const onLogin = async () => {
  useUserStoreHook()
    .loginByUsername({ username: ruleForm.username, password: "admin123" })
    .then(res => {
      if (res.success) {
        // 获取后端路由
        initRouter().then(() => {
          router.push(getTopMenu(true).path);
        });
      }
    });
};
// 获取文案
const Copywriting = ref<string>("");
async function getCopywrit() {
  const res: any = await getCopywriting();
  Copywriting.value = res.hitokoto;
}
// 倒计时进入页面
const countdownTile = ref<number>(5);
function countdown() {
  setTimeout(() => {
    countdownTile.value--;
    if (countdownTile.value) {
      countdown();
    } else {
      // onLogin();
    }
  }, 1000);
}
getCopywrit();
countdown();
</script>

<template>
  <div class="firing-container">
    <div class="countdown-title">{{ countdownTile }}</div>
    <div class="title">一个简单的导航</div>
    <div class="con">
      <p class="line">{{ Copywriting }}</p>
    </div>
    <div class="btn-box">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow" />
        </span>
        <span class="button-text" @click="onLogin()"> enter </span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.firing-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../../assets/login/hemo.jpg");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
}
.countdown-title {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 99;
  border-radius: 50px;
  background-color: #1e2732;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-weight: boldz;
}
.title {
  margin-top: 20%;
  color: #fff;
  font-size: 3.5em;
  line-height: 1.2;
  background-image: -webkit-linear-gradient(
    left,
    blue,
    #66ffff 10%,
    #cc00ff 20%,
    #cc00cc 30%,
    #ccccff 40%,
    #00ffff 50%,
    #ccccff 60%,
    #cc00cc 70%,
    #cc00ff 80%,
    #66ffff 90%,
    blue 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 4s linear infinite;
}
@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.con {
  margin: 2rem;
}
.line {
  letter-spacing: 0.1em;
  border-right: 2px solid #fff;
  font-size: 200%; /* 字体大小 */
  text-align: center; /* 文字横向居中 */
  white-space: nowrap; /* 文字不换行 */
  overflow: hidden; /* 多余的文字内容隐藏 */
}
/* 边框闪烁动画 模拟指针闪烁 */
@keyframes broders {
  from {
    border-right-color: #fff;
  }
  to {
    border-right-color: #fff;
  }
}
/* 容器宽的改变动画 */
@keyframes widths {
  from {
    width: 0;
  }
  to {
    width: 100%;
  } /* 也可以是固定宽 */
}
.line {
  color: #fff;
  border-right: 2px solid #fff;
  font-size: 200%; /* 字体大小 */
  text-align: center; /* 文字横向居中 */
  white-space: nowrap; /* 文字不换行 */
  overflow: hidden; /* 多余的文字内容隐藏 */
  animation: borders 0.7s infinite normal, widths 2s steps(13); /* 重点 steps() */
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
button.learn-more {
  width: 12rem;
  height: auto;
}
button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #1e2732;
  border-radius: 1.625rem;
}
button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}
button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
button:hover .circle {
  width: 100%;
}
button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}
button:hover .button-text {
  color: #fff;
}

// @supports (display: grid) {
//   body {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 0.625rem;
//     grid-template-areas: ". main main ." ". main main .";
//   }

//   #container {
//     grid-area: main;
//     align-self: center;
//     justify-self: center;
//   }
// }
</style>
