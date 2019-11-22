Vue.component("fourth-step",{
    template:`
    <div class="frame-wrap fourth" ref="header" id="fourth">
        <p class="step">3/3</p>
        <p class="title">Готово! Скачайте открытку и отправьте другу</p>
        <div v-show="readyImage" style="display: block" class="frame-complete-img"><img :src="readyImage" class="frame-complete " alt="Открытка"><img class="frame-complete-2 hidden" alt="Открытка"></div>
        <a id="fourth-step" :href="readyImage" download class="step-btn">Скачать открытку</a>
    </div>
  `,
    props:['readyImage'],

    methods:{
        toStep(value){
            this.$emit('set:step', value)
        },
        getImage(){
            const img = new Image()
            img.src = this.readyImage;

            return img
        }
    },
    updated(){
      console.log(this.getImageData);

    },
    mounted(){
        window.scrollTo({
            top: getCoords(this.$refs.header).top,
            behavior: "smooth"
        });
    },

});


function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}

