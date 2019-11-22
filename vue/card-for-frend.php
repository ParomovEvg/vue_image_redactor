<div id ="card_for_frend">
    <first-step v-if="step===0" v-on:set:step="toStep($event)"></first-step>
    <second-step v-if="step===1" v-on:set:image="setImage($event)" v-on:set:step="toStep($event)"></second-step>
    <third-step :user-image="userImage" v-if="step===2" v-on:set:step="toStep($event)"></third-step>
    <fourth-step v-if="step===3" v-on:set:step="toStep($event)"></fourth-step>
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
        padding-top: 71.25%;
        position: relative;
    }
#third .canvas-style{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>