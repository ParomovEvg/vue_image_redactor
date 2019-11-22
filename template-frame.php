<?php
	// Template name: Открытка для друга
get_header();
global $wonser_options;
?>

<section class="frame-sect">
	<!-- <img src="<?php echo get_template_directory_uri() ?>/assets/img/snowflake.png" alt="Снежинка" class="img-2 animated">
	<img src="<?php echo get_template_directory_uri() ?>/assets/img/snowflake.png" alt="Снежинка" class="img-1 animated"> -->
	<div class="container">
		<!-- <img src="<?php echo get_template_directory_uri() ?>/assets/img/snowflake.png" alt="Снежинка" class="img-4 animated">
		<img src="<?php echo get_template_directory_uri() ?>/assets/img/snowflake.png" alt="Снежинка" class="img-3 animated">
		<img src="<?php echo get_template_directory_uri() ?>/assets/img/snowflake.png" alt="Снежинка" class="img-5 animated"> -->
		<h2><?php echo the_field('title'); ?></h2>
		<p class="subtitle"><?php echo the_field('subtitle'); ?></p>

        <?php require_once "vue/card-for-frend.php";?>

		<p class="subtitle"><?php echo the_field('subtitle2'); ?></p>
		<div class="frame-complete-box">
			<?php $gal = get_field('frame-gallery'); foreach( $gal as $image ): ?>
	            <a href="<?php echo esc_url($image['url']); ?>" rel="fancybox"><img src="<?php echo esc_url($image['sizes']['frame']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" /></a>
	        <?php endforeach;  ?>
		</div>
	</div>
</section>

<section  class="master master-2">
	<div class="container">
		<img src="<?php echo get_template_directory_uri() ?>/assets/img/snowflake.png" alt="Снежинка" class="img-4 animated">
		<img src="<?php echo get_template_directory_uri() ?>/assets/img/snowflake.png" alt="Снежинка" class="img-3 animated">
		<h2><?php echo $wonser_options['master-title']; ?></h2>
		<p class="subtitle"><?php echo $wonser_options['master-subtitle']; ?></p>
		<div class="links-wrap">
			<?php
				$slider = $wonser_options['master-items'];
				foreach ($slider as $slide) { ?>
				<a href="<?php echo $slide['url']; ?>">
					<span class="img-wrap"><img src="<?php echo $slide['image']; ?>" alt="img"></span>
					<p><?php echo $slide['title']; ?></p>
				</a>
			<?php } ?>
		</div>
	</div>
	<div class="master-slider">

		<?php
		    $myGalleryIDs = explode(',', $wonser_options['master-gallery']);
		    foreach($myGalleryIDs as $myPhotoID): ?>
		        <a href="<?php $img = wp_get_attachment_image_src( $myPhotoID, 'large'); echo $img[0]; ?>" rel="fancybox-4">
		            <img src="<?php $img = wp_get_attachment_image_src( $myPhotoID, 'arhive'); echo $img[0];?>" alt="">
			    </a>
		<?php endforeach; ?>


	</div>
	
</section>
<?php
get_footer();
?>

