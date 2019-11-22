// import Vue from 'vue'


let app = new Vue({
  el: '#card_for_frend',
  data:{
    step: 1,
    userImage: "",
  },
  methods:{
    toStep(value){
      this.step = value
    },
    setImage(value){
      this.userImage = value
    }
  }
});






