<script setup lang="ts">
// import { ref } from "vue";
import Bell from "@iconify-icons/ep/bell";

// const noticesNum = ref(0);
</script>

<template>
  <el-dropdown trigger="click" placement="bottom-end">
    <span class="dropdown-badge navbar-bg-hover select-none">
      <el-badge :max="99">
        <span class="header-notice-icon">
          <IconifyIconOffline :icon="Bell" />
        </span>
      </el-badge>
    </span>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.dropdown-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 48px;
  cursor: pointer;

  .header-notice-icon {
    font-size: 18px;
  }
}

.dropdown-tabs {
  .noticeList-container {
    padding: 15px 24px 0;
  }

  :deep(.el-tabs__header) {
    margin: 0;
  }

  :deep(.el-tabs__nav-wrap)::after {
    height: 1px;
  }

  :deep(.el-tabs__nav-wrap) {
    padding: 0 36px;
  }
}
</style>
