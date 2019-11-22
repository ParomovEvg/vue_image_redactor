Vue.component("first-step",{
    template:`
     <div class="frame-wrap first" >
        <div class="frame-steps">
            <div class="frame-wrap-img">
                <span class="number">1</span>
                <img src="${pathToTemplate}/assets/img/frame-1.svg" alt="Снежинка">
                <p>Загрузите фотографию</p>
            </div>
            <div class="frame-wrap-img">
                <span class="number">2</span>
                <img src="${pathToTemplate}/assets/img/frame-2.svg" alt="Снежинка">
                <p>Выберите рамку для открытки</p>
            </div>
            <div class="frame-wrap-img">
                <span class="number">3</span>
                <img src="${pathToTemplate}/assets/img/frame-3.svg" alt="Снежинка">
                <p>Скачайте открытку и отправьте другу</p>
            </div>
        </div>
        <button @click="toStep(1)" id="first-step" class="step-btn">сделать открытку</button>
    </div>
  `,
    methods:{
        toStep(value){
            this.$emit('set:step', value)
        }
    }
});