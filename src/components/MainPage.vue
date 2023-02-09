<template>
    <div class="main-content">
        <div class="content-templates">
            <div class="item" v-for="(item, index) in templates" :key="index">
                <img
                    :src="item.photo"
                    alt=""
                    @click="setBackgroundImage(item.photo)"
                />
            </div>
        </div>
        <div class="content-workspace">
            <v-row dense class="workspace-header">
                <v-col cols="6">
                    <v-text-field
                        v-model="title"
                        label="Enter your title here"
                        solo
                        flat
                        dense
                        outlined
                        hide-details
                    />
                </v-col>
                <v-col cols="2">
                    <v-btn color="primary" outlined @click="saveToPDF()">
                        <v-icon>mdi-export</v-icon> Export
                    </v-btn>
                </v-col>
            </v-row>
            <div class="workspace-body">
                <div class="body-canvas">
                    <div class="canvas-content" ref="toPDF">
                        <img class="background-image" :src="background" />
                        <div class="text-content">
                            <div class="content-title">
                                {{ title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MainPageService } from "@/api/MainPageData.js";

export default {
    data() {
        return {
            templates: MainPageService.prototype.getAllTemplates(),
            title: "Certificate of Completion",
            background: null,
        };
    },

    methods: {
        saveToPDF() {
            const html = this.$refs.toPDF;
            MainPageService.prototype.printToPDF(html);
        },

        setBackgroundImage(background) {
            this.background = background;
        },
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 5;
}

.workspace-header {
    width: 100%;
    padding: 1% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
}

.workspace-body {
    width: 100%;
    height: 100%;
    padding: 5%;
}

.body-canvas {
    width: 80%;
    height: 100%;
    margin: auto;
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.05);
}

.canvas-content {
    position: relative;
    width: 100%;
    height: 100%;
}

.background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.text-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 5%;
}

.content-title {
    width: 80%;
    margin: auto;
    font-size: 2.5rem;
    line-height: 0.9;
    font-family: "Bitter", serif;
    text-align: center;

    /* font-family: "Poppins", sans-serif; */
    /* font-family: "Lobster", cursive; */
}
</style>
