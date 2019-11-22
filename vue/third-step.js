Vue.component("third-step",{
    template:`
    <div class="frame-wrap third" id="third">
        <p class="step">2/3</p>
        <p class="title">Выберите рамку для открытки</p>
        <div v-show="!frameUrl" class="frame-container">
                <div v-for="photo in this.photosArr" class="frame-img">
                    <img @click="shoosFrame(photo.src)" :key="photo.src" :data-url="photo.dataUrl" :src="photo.src" :alt="photo.alt" />
                </div>
        </div>
        <div v-show="frameUrl" class="">
            <div @click="shoosFrame('')">X</div>
            <div v-show="frameUrl" class="canvas-wrapper">
                <canvas class="canvas-style" style="width:100%; height: 100%;" ref="canvas"></canvas>
            </div>
        </div>
        <button @click="toStep(3)" class="step-btn">Продолжить</button>
    </div>
  `,

    data() {
        return {
            photosArr: photos,
            image: this.userImage,
            frameUrl: "",
            ctx:""

        }
    },
    props:["userImage"],
    methods:{
        toStep(value){
            this.$emit('set:step', value)
        },
        shoosFrame(url){
            this.frameUrl = url;
        },
        drawImage(){
            const userImg = new Image();
            const frameImg = new Image();

            userImg.src = this.image;
            frameImg.src = this.frameUrl;

            frameImg.onload = ()=>{
                this.ctx.drawImage(userImg, 0 , 0);
                this.ctx.drawImage(frameImg, 0, 0, 100, 100);
            }


        }
    },
    updated(){
        if(this.image && this.frameUrl){

            this.drawImage();

        }
    },
    computed:{

    },
    mounted(){
        this.ctx = this.$refs.canvas.getContext('2d');;
    },





});