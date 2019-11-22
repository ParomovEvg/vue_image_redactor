Vue.component("third-step",{
    template:`
    <div class="frame-wrap third" id="">
        <p class="step">2/3</p>
        <p class="title">Выберите рамку для открытки</p>
        <div class="frame-container">
                <div v-for="photo in this.photosArr" class="frame-img">
                    <img :key="photo.src" :data-url="photo.dataUrl" :src="photo.src" :alt="photo.alt" />
                </div>
        </div>
        <button @click="toStep(3)" class="step-btn">Продолжить</button>
    </div>
  `,
    data() {
        return {
            photosArr: photos
        }
    },
    methods:{
        toStep(value){
            this.$emit('set:step', value)
        },

    },


});