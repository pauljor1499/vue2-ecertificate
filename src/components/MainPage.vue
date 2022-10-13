<template>
    <div class="main-content">
        <div class="content-templates">
            <div class="item" v-for="(item, index) in templates" :key="index">
                <img :src="item.photo" alt="" />
            </div>
        </div>

        <div class="content-workspace">
            <div class="workspace-header">asdada</div>
            <div class="workspace-body">dadads</div>
        </div>
    </div>
</template>

<script>
import { MainPageService } from "@/api/MainPageData.js";

export default {
    data() {
        return {
            templates: MainPageService.prototype.getAllTemplates(),
        };
    },
};
</script>

<style scoped>
.main-content {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
}

.content-templates {
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 10px;
    background-color: #1f2937;
    overflow-y: scroll;
}

.item {
    width: 100%;
    height: 100%;
}

.item img:hover {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 4px solid #11a0ff;
}

.item img {
    width: 100%;
    height: 100%;
    border: 4px solid #1f2937;
}

.content-workspace {
    flex: 5;
    border: 1px solid red;
}

.workspace-header {
    border: 1px solid red;
}

.workspace-body {
    border: 1px solid red;
}
</style>
