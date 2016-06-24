<!doctype html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Портфолио | Владислав Ширяев</title>
	<link rel="stylesheet" href="css/main.css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,300,700,800,400italic,600italic,700italic,300italic&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>
<!--<meta http-equiv="X-UA-Compatible" content="IE=edge">  -->
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
<!--<meta name="description" content="Hover Effect Ideas: Inspiration for subtle hover effects" />
	<meta name="keywords" content="hover effect, inspiration, grid, thumbnail, transition, subtle, web design" />
	<meta name="author" content="Codrops" /> -->
<!--<link rel="shortcut icon" href="../favicon.ico"> -->
	<link href='http://fonts.googleapis.com/css?family=Raleway:400,800,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="css/set1.css" />
	<link rel="stylesheet" type="text/css" href="css/fonts.css" />
	<script src="js/jquery.js"></script>	
	<script src="js/tabs.js"></script>
	<!--[if lt IE 9]>
     <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body onload="tads_switch(1)">
	
	<nav>
		<a class="select" href="#" onclick="tads_switch(1)">Мои работы</a>
		<a href="#" onclick="tads_switch(2)">Обо мне</a>
		<a href="#" onclick="tads_switch(3)">Контакты</a>
		<a href="/blog/">Блог</a>
		<a href="/mark/">Заказ-Оценка</a>
	</nav>


	<header>Владислав Ширяев</header>


	<section id="section1">

		<div class="name">Мои работы</div>

		<div class="container">	
			<div class="content">
				<div class="grid">
					<figure class="effect-honey">
						<img src="img/3.png" alt="img04"/>
						<figcaption>
							<h2>Пустая <span>ячейка</span> <i>:(</i></h2>
							<a href="#">Подробнее</a>
						</figcaption>			
					</figure>
					<figure class="effect-honey">
						<img src="img/4.png" alt="img04"/>
						<figcaption>
							<h2>Агентство недвижимости <span id="anexpert">Эксперт</span> <i> (сайт под ключ)</i></h2>
							<a href="http://anexpert.kz">Подробнее</a>
						</figcaption>			
					</figure>
					<!-- 
					<figure class="effect-honey">
						<img src="img/3.png" alt="img04"/>
						<figcaption>
							<h2>Пустая <span>ячейка</span> <i>:(</i></h2>
							<a href="#">Подробнее</a>
						</figcaption>			
					</figure>
					<figure class="effect-honey">
						<img src="img/3.png" alt="img04"/>
						<figcaption>
							<h2>Пустая <span>ячейка</span> <i>:(</i></h2>
							<a href="#">Подробнее</a>
						</figcaption>			
					</figure>
					<figure class="effect-honey">
						<img src="img/3.png" alt="img04"/>
						<figcaption>
							<h2>Пустая <span>ячейка</span> <i>:(</i></h2>
							<a href="#">Подробнее</a>
						</figcaption>			
					</figure>	 -->							
				</div>				
			</div>			
		</div><!-- /container -->		

		<script>
			// For Demo purposes only (show hover effect on mobile devices)
			[].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
				el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
			} );
		</script>

	</section>

	<section id="section2">

		<div class="name">Обо мне</div>

		<br>		

		<p>Меня зовут <em>Ширяев Владислав Александрович</em>.
		Имею <em>степень бакалавра</em> по специальности "<em>Вычислительная техника и программное обеспечение</em>".
		Обучение проходил в Карагадндинском Государственном Техническом Университете.</p>
		<p>Работаю со скиптовым языком программирования <em>PHP</em>. 
		Также имею опыт работы с <em>JavaScript</em>, <em>JQuery</em>, <em>CSS</em>, <em>CSS3</em>, <em>HTML</em>, <em>HTML5</em>.</p>
		<br>
		<p>Резюме - <a class="download_link" href="/Резюме_Ширяев.docx"><em>ссылка на скачивание</em></a></p>







		

		
	</section>

	<section id="section3">

		<div class="name">Контакты</div>

		<br>

		<table>
			<tr>
				<td class="td_left">Телефон:</td>
				<td class="td_rigth"><em>8 (701) 302-93-35</em></td>
			</tr>
			<tr>
				<td class="td_left">Почта:</td>
				<td class="td_rigth"><em>s_vadian@mail.ru</em></td>
			</tr>
			<tr>
				<td class="td_left">Скайп:</td>
				<td class="td_rigth"><em>v.l.a.d.i.k12</em></td>
			</tr>
			<tr>
				<td class="td_left">ВК:</td>
				<td class="td_rigth"><em>vk.com/s.vadian</em></td>
			</tr>
		</table>


	
		

		
	</section>

</body>
</html>