Vue.component("third-step",{
    template:`
    <div class="frame-wrap third" id="third">
        <p class="step">2/3</p>
        <p class="title">Выберите рамку для открытки</p>
        <div class="frame-container">
                <div v-for="(photo, i) in this.photosArr" :class="{active:i === isShoos}" class="frame-img">
                    <img @click="shoosFrame(i)" :key="photo.src" :data-url="photo.dataUrl" :src="photo.src" :alt="photo.alt" />
                </div>
        </div>
        <div v-show="ready" class="">
            <div ref="wrapper" v-show="ready" class="canvas-wrapper">
                <canvas height="500" width="500" id ='c'  class="canvas-style" ref="canvas"></canvas>
            </div>
        </div>
        <button @click="toStep(3)"  class="step-btn">Продолжить</button>
    </div>
  `,


    data() {
        return {
            photosArr: photos,
            frameImg: undefined,
            userImg: undefined,
            canvas: undefined,
            ready: false,
            isShoos: undefined,
        }
    },
    props:["userImage"],
    methods:{
        toStep(value){
            this.$emit("set:dataurl", this.canvas.toDataURL())
            this.$emit('set:step', value);
        },
        shoosFrame(i){
            this.isShoos = i;
            this.ready = false;
            const url = this.photosArr[i].src;
            const frameImg = new Image();
            frameImg.src = url;
            this.frameImg = frameImg;
            frameImg.onload = ()=>{
                this.ready = true;
            }
        },
        resetFrame(){
            this.frameImg = undefined;
            this.ready = false;
            if(this.canvas){
                this.canvas.remove(this.canvas.getActiveObject());
                this.canvas = undefined;
            }
        },
        culcSize(){
                let parent = this.$refs.wrapper;
                let w = parent.clientWidth;
                console.dir(parent.clientWidth);
                const aspect = 0.7125;

                w = w > 616 ? 616 : w;

                return {
                    width : w ,
                    height : w * aspect
                }

        },
    },
    updated(){
        if(this.ready){
            let canvas ;
            let size;
            if(this.canvas){
                size = this.culcSize();
                this.canvas.clear()
                canvas = this.canvas
            } else {
                size = this.culcSize();
                canvas = new fabric.Canvas(this.$refs.canvas,{
                    ...size,
                    selectionColor: 'blue',
                    selectionLineWidth: 4
                });
            }

            this.canvas = canvas;

            canvas.selection = false;
            const userImg = new fabric.Image(this.userImg, {
                left: 0,
                top: 0,
            });
            userImg.set('selectable', true);
            const frameImg = new fabric.Image(this.frameImg, {
                left: 0,
                top: 0,
                selectable: false,
                ...size,
            });

            canvas.upperCanvasEl.onmouseover = () => {
                console.log(0.3)
                frameImg.opacity = 0.3;
                canvas.setOverlayImage(frameImg, canvas.renderAll.bind(canvas));
            };
            canvas.upperCanvasEl.onmouseleave = () => {
                console.log(1)
                frameImg.opacity = 1;
                canvas.setOverlayImage(frameImg, canvas.renderAll.bind(canvas));
            };
            canvas.add(userImg);
            canvas.setOverlayImage(frameImg, canvas.renderAll.bind(canvas));
        }

    },
    mounted(){
        const userImg = new Image();
        userImg.src = this.userImage;
        this.userImg = userImg;
    },
});