<template lang="pug">
	.container
		h2.title {{ "Demo" | i18n }}

		h3 {{ count }}
		button.button.success(@click="inc")
			span.icon
				i.fa.fa-arrow-up
			span {{ "Increment" | i18n }}
		br
		br
		button.button.warning(@click="dec")
			span
				i.fa.fa-arrow-up
			span {{ "Decrement" | i18n }}
		gallery(:images="images" :index="index" @close="index = null")
		div(class="image"
			v-for="(image, imageIndex) in images"
			:key="imageIndex"
			@click="index = imageIndex"
			:style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }")



</template>

<script>
    import {
        mapActions,
        mapGetters
    } from "vuex";

    import VueGallery from 'vue-gallery';

    import Service from "../../core/service";

    export default {
        data: function() {
            return {
                images: [
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff',
                ],
                index: null
            };
        },

        components: {
            'gallery': VueGallery
        },

        /**
         * Computed getters
         */
        computed: mapGetters("counter", [
            "count"
        ]),

        /**
         * Page methods
         */
        methods: {
            /**
             * Actions from store
             */
            ...mapActions("counter", [
                "getValue",
                "increment",
                "decrement",
                "changedValue"
            ]),

            /**
             * Increment counter
             */
            inc() {
                this.increment();
            },

            /**
             * Decrement counter
             */
            dec() {
                this.decrement();
            }
        },

        /**
         * Socket handlers. Every property is an event handler
         */
        socket: {

            prefix: "/counter/",

            //namespace: "/counter",

            events: {
                /**
                 * Counter value is changed
                 * @param  {Number} msg Value of counter
                 */
                changed(res) {
                    console.log("Counter changed to " + res.data + (res.user ? " by " + res.user.fullName : ""));
                    this.changedValue(res.data);
                }
            }
        },

        created() {
            this.$service = new Service("counter", this);

            // Get the latest value of counter
            this.getValue();
        }
    };
</script>

<style lang="scss" scoped>

</style>