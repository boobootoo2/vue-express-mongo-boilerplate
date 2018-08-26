<template lang="pug">
	.container
		gallery(:images="images" :index="index" @close="index = null")
		div(class="image"
		v-for="(image, imageIndex) in images"
		:key="imageIndex"
		@click="index = imageIndex"
		:style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }")



</template>

<script>
    import VueGallery from 'vue-gallery';

    import Service from "../../core/service";

    export default {
        data: function() {
            return {
                images: [
                    "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0789.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0791.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0792.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0793.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0794.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0795.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0796.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0798.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0799.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0800.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0801.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0804.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0806.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0808.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0810.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0811.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0812.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0816.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0821.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0824.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0825.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0827.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0829.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0831.JPG", "http://www.shultzexpeditions.org/Brodheads%202014/slides/DSCF0832.JPG"
                ],
                index: null
            };
        },

        components: {
            'gallery': VueGallery
        },
    };
</script>

<style lang="scss" scoped>
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }
</style>