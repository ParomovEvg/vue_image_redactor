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
		<div class="frame-wrap first">
			<div class="frame-steps">
				<div class="frame-wrap-img">
					<span class="number">1</span>
					<img src="<?php echo get_template_directory_uri() ?>/assets/img/frame-1.svg" alt="Снежинка">
					<p>Загрузите фотографию</p>
				</div>
				<div class="frame-wrap-img">
					<span class="number">2</span>
					<img src="<?php echo get_template_directory_uri() ?>/assets/img/frame-2.svg" alt="Снежинка">
					<p>Выберите рамку для открытки</p>
				</div>
				<div class="frame-wrap-img">
					<span class="number">3</span>
					<img src="<?php echo get_template_directory_uri() ?>/assets/img/frame-3.svg" alt="Снежинка">
					<p>Скачайте открытку и отправьте другу</p>
				</div>
			</div>
			<button id="first-step" class="step-btn">сделать открытку</button>
		</div>
		<div class="frame-wrap second" id="second">
			<p class="step">1/3</p>
			<p class="title">Загрузите фотографию</p>
			<p class="file-text">Загрузите или перетащите в эту область файл в формате jpg или png весом не более 5 мб:</p>
			<form>
				<label>
					<span><input id="files" type="file" name="your-file-photo" size="40" class="reg-file" accept=".jpg,.png,"></span>
				</label>
			</form>
			<div id="img-preview"><div id="close-icon"></div></div>
			<button id="" class="step-btn">Продолжить</button>
		</div>
		<div class="frame-wrap third" id="third">
			<p class="step">2/3</p>
			<p class="title">Выберите рамку для открытки</p>
			<div class="frame-container">
				<?php $gal = get_field('frame-gallery'); $i = 0; foreach( $gal as $image ): ?>
					<div class="frame-img"><img data-url="<?php if($i == 6){ echo esc_url($image['sizes']['frame-complete']); } ?>" src="<?php echo esc_url($image['sizes']['frame']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" /></div>
		        <?php $i++; endforeach;  ?>
			</div>
			<button id="" class="step-btn">Продолжить</button>
		</div>
		<div class="frame-wrap fourth" id="fourth">
			<p class="step">3/3</p>
			<p class="title">Готово! Скачайте открытку и отправьте другу</p>
			<div class="frame-complete-img"><img class="frame-complete hidden" alt="Открытка"><img class="frame-complete-2 hidden" alt="Открытка"></div>
			<a id="fourth-step" class="step-btn">Скачать открытку</a>
			<div id="previewImage" style="display: none;"></div>
		</div>

		<p class="subtitle"><?php echo the_field('subtitle2'); ?></p>
		<div class="frame-complete-box">
			<?php $gal = get_field('frame-gallery'); foreach( $gal as $image ): ?>
	            <a href="<?php echo esc_url($image['url']); ?>" rel="fancybox"><img src="<?php echo esc_url($image['sizes']['frame']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" /></a>
	        <?php endforeach;  ?>
		</div>
	</div>
</section>

<section class="master master-2">
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