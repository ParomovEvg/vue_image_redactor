Vue.component("fourth-step",{
    template:`
    <div class="frame-wrap fourth" id="fourth">
        <p class="step">3/3</p>
        <p class="title">Готово! Скачайте открытку и отправьте другу</p>
        <div class="frame-complete-img"><img class="frame-complete hidden" alt="Открытка"><img class="frame-complete-2 hidden" alt="Открытка"></div>
        <a id="fourth-step" class="step-btn">Скачать открытку</a>
        <div id="previewImage" style="display: none;"></div>
    </div>
  `,
    methods:{
        toStep(value){
            this.$emit('set:step', value)
        }
    }
});


