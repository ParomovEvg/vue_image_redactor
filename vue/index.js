// import Vue from 'vue'


let app = new Vue({
  el: '#card_for_frend',
  data:{
    step: 1,
    userImage: "",
    readyImage:"",
  },
  methods:{
    toStep(value){
      this.step = value
    },
    setImage(value){
      this.userImage = value
    },
    getImageData(){
      console.dir(this.$refs.third);
      return this.$refs.third.$refs.canvas.toDataURL();
    },
    setReadyImage(value){
      this.readyImage = value
    }

  },

  updated() {
    console.log(this.$refs)
  }
});






