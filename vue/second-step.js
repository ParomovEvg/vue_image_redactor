Vue.component("second-step",{
    template:`
    <div class="frame-wrap second" :class="{highlight: isHighlight}" ref="second" id="second">
        <p class="step">1/3</p>
        <p class="title">Загрузите фотографию</p>
        <p class="file-text">Загрузите или перетащите в эту область файл в формате jpg или png весом не более 5 мб:</p>
        <form v-show="!image">
            <label>
                <span><input ref="imgInput" @change="imageInputHandler" id="files" type="file" name="your-file-photo" size="40" class="reg-file" accept=".jpg,.png,"></span>
            </label>
        </form>
        <div id="img-preview">
            <img v-if="image" :src="image" alt="">
            <div v-if="image" @click="resetImage" style="display: block" id="close-icon"></div>
        </div>
        <button @click="toStep(2)" class="step-btn">Продолжить</button>
    </div>
  `,
    data(){
        return {
            isHighlight:false,
            image:undefined,
        }
    },
    methods:{
        toStep(value){
            this.$emit('set:step', value)
        },
        initDragAndDrop(dropArea){
            ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	            dropArea.addEventListener(eventName, preventDefaults, false)
	        });
            ;['dragenter', 'dragover'].forEach(eventName => {
                dropArea.addEventListener(eventName, ()=> this.highlight(), false)
            })
            ;['dragleave', 'drop'].forEach(eventName => {
                dropArea.addEventListener(eventName,()=> this.unhighlight() , false)
            });
            dropArea.addEventListener('drop', (e)=>{
                const dt = e.dataTransfer;
                const files = dt.files;
                const filesCopy = [...files];
                // files.forEach(uploadFile);
                filesCopy.forEach((file)=>{
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        console.log(reader.result)
                        this.image = reader.result;
                    }
                })
            }, false);
        },
        imageInputHandler(){
            const files = this.$refs.imgInput.files;
            const filesCopy = [...files];
            filesCopy.forEach((file)=>{
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    console.log(reader.result);
                    this.image = reader.result;
                }
            })
        },
        highlight() {
            this.isHighlight = true;
        },
        unhighlight() {
            this.isHighlight = false;
        },
        resetImage(){
            this.image = undefined;
            this.$refs.imgInput.value = ""
        },

    },
    mounted:function () {
        this.initDragAndDrop(this.$refs.second);

    }
});


function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
};
//
// function initDragAndDrop() {
//   var dropArea = document.getElementById('second')
//     ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
// 	  dropArea.addEventListener(eventName, preventDefaults, false)
// 	});
// 	function preventDefaults (e) {
// 	  e.preventDefault()
// 	  e.stopPropagation()
// 	}
//
// 	;['dragenter', 'dragover'].forEach(eventName => {
// 	  dropArea.addEventListener(eventName, highlight, false)
// 	})
// 	;['dragleave', 'drop'].forEach(eventName => {
// 	  dropArea.addEventListener(eventName, unhighlight, false)
// 	})
// 	function highlight(e) {
// 	  dropArea.classList.add('highlight')
// 	}
// 	function unhighlight(e) {
// 	  dropArea.classList.remove('highlight')
// 	}
// 	dropArea.addEventListener('drop', handleDrop, false)
// 	function handleDrop(e) {
// 	  var dt = e.dataTransfer
// 	  var files = dt.files
// 	  handleFiles(files)
// 	}
// 	function handleFiles(files) {
// 	  files = [...files];
// 	  // files.forEach(uploadFile);
// 	  files.forEach(previewFile);
//
// 	}
	// function uploadFile(file) {
	//   var url = 'http://newyear/card-for-friend/'
	//   var formData = new FormData()
	//   formData.append('file', file)
	//   fetch(url, {
	//     method: 'POST',
	//     body: formData
	//   })
	//   .then(() => { })
	//   .catch(() => { })
	// }
	// function previewFile(file) {
	//   var reader = new FileReader()
	//   reader.readAsDataURL(file)
	//   reader.onloadend = function() {
	//   	jQuery('.second label').css('display', 'none');
	//   	jQuery('#close-icon').css('display', 'block');
	//   	jQuery('#second .step-btn').attr('id', 'second-step');
	//     var img = document.createElement('img')
	//     img.src = reader.result
	//     document.getElementById('img-preview').appendChild(img)
	//   }
	// }
	// function handleFileSelect(evt) {
	//     var files = evt.target.files;
    //
	//     for (var i = 0, f; f = files[i]; i++) {
    //
    //
	//       if (!f.type.match('image.*')) {
	//         continue;
	//       }
    //
	//       var reader = new FileReader();
    //
    //
	//       reader.onload = (function(theFile) {
	//         return function(e) {
    //
	//           jQuery('.second label').css('display', 'none');
	//           jQuery('#close-icon').css('display', 'block');
	//           jQuery('#second .step-btn').attr('id', 'second-step');
	//           var span = document.createElement('span');
	//           span.innerHTML = ['<img class="thumb" src="', e.target.result,
	//                             '" title="', escape(theFile.name), '"/>'].join('');
	//           document.getElementById('img-preview').insertBefore(span, null);
	//         };
	//       })(f);
    //
    //
	//       reader.readAsDataURL(f);
	//     }
	// }
	// document.getElementById('files').addEventListener('change', handleFileSelect, false);

	// jQuery(document).on('click', '#close-icon', function(){
	// 	jQuery('.second label').css('display', 'flex');
	// 	jQuery(this).css('display', 'none');
	// 	jQuery('#files').val('');
	// 	jQuery('#second .step-btn').attr('id', '');
	// 	jQuery('#img-preview span, #img-preview img').remove();
	// });
  //
	// jQuery('.frame-img').on('click', function(){
	// 	jQuery('.frame-img').removeClass('active');
	// 	jQuery(this).addClass('active');
	// 	jQuery('#third .step-btn').attr('id', 'third-step');
	// })
  //
	// jQuery(document).on('click', '#third-step', merge);
  //
	// function merge() {
	// 	jQuery('.frame-complete').removeClass('hidden').attr('src', jQuery('.frame-img.active img').attr('data-url'));
	//     jQuery('.frame-complete-2').removeClass('hidden').attr('src', jQuery('#img-preview img').attr('src'));
  //       //jQuery('#fourth-step').attr('href', jQuery('.frame-img.active img').attr('data-url'));
	// }
  //
  //
  //   jQuery(document).on('click', '#second-step', function(){
  //
  // var canvas = document.getElementById('canvas'),
  // 	ctx = canvas.getContext('2d'),
  //     imageObj1 = new Image(),
  //     imageObj2 = new Image();
  //     ctx.canvas.width = window.innerWidth;
  //     ctx.canvas.height = window.innerHeight;
  // 	imageObj1.src = jQuery('.frame-complete').attr('src');
  //     imageObj1.onload = function() {
  //     ctx.globalAlpha = 1;
  //     ctx.drawImage(imageObj1, 0, 0, window.innerWidth, window.innerHeight);
  //     imageObj2.src = jQuery('.frame-complete-2').attr('src');;
  //     imageObj2.onload = function() {
  //       ctx.globalAlpha = 1;
  //       ctx.drawImage(imageObj2, 590, 184, 690, 350);
  //       var dt = canvas.toDataURL('image/jpeg');
  // 	  jQuery('#fourth-step').attr('href', dt);
  //     }
  //
  // };
  //
  // var element = jQuery("h2");
  //       var getCanvas;
  //
  //       html2canvas(element[0], {
  //       	allowTaint: true,
  //           onrendered: function (canvas) {
  //               jQuery("#previewImage").append(canvas);
  //               getCanvas = canvas;
  //           },
  //           useCORS: true
  //       }).then(function(canvas) {
  //     jQuery("#previewImage").append(canvas)
  // });
  //
  //       var imgageData = getCanvas.toDataURL("image/png");
  //
  //       var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
  //       jQuery('#fourth-step').attr('download', 'Image.png').attr('href', newData);
  //
  //
  // });
// }


