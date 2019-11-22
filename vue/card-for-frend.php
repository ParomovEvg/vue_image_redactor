<div id ="card_for_frend">
    <first-step v-if="step===0" v-on:set:step="toStep($event)"></first-step>
    <second-step v-if="step===1" v-on:set:image="setImage($event)" v-on:set:step="toStep($event)"></second-step>
    <third-step ref="third" v-on:set:dataurl="setReadyImage($event)" :user-image="userImage" v-if="step===2" v-on:set:step="toStep($event)"></third-step>
    <fourth-step :ready-image="readyImage" v-if="step===3" v-on:set:step="toStep($event)"></fourth-step>
</div>
<script>

    let pathToTemplate = "<?php echo get_template_directory_uri() ?>"

    let photos = [
        
        <?php $gal = get_field('frame-gallery'); $i = 0; foreach( $gal as $image ): ?>
            {
                dataUrl: "<?php if($i == 6){ echo esc_url($image['sizes']['frame-complete']); } ?>",
                src: "<?php echo esc_url($image['sizes']['frame']); ?>",
                alt: "<?php echo esc_attr($image['alt']); ?>",
            },
        <?php $i++; endforeach;  ?>


    ]


</script>
<style>
    #third .canvas-wrapper{
        width:100%;
        position: relative;
        display: flex;
        justify-content: center;
        margin: 30px auto;
    }
    .reset-frame{
        padding-left: 25px;
        padding-right: 25px;
        height: 40px;
        background: transparent;
        color:#ff182f;
        border: 1px solid #ff182f;
        border-radius: 25px;
        text-transform: uppercase;
        font-family: CocosignumMaiuscoletto;
        display: block;
        font-size: 12px;
        cursor: pointer;
    }
#third .canvas-style{
margin: 0 auto;
    width:auto;
    height: auto;



}
</style>