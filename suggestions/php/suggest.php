<?php
	if(ob_get_length()) ob_clean();
	//headers are sent to prevent browsers from caching
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT' ); 
	header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . 'GMT'); 
	header('Cache-Control: no-cache, must-revalidate'); 
	header('Pragma: no-cache');
	header('Content-Type: text/xml');
	// send the results to the client
	$keyword = $_GET['keyword'];
	include_once 'db.class.php';
	$db = new DB();
	echo $db->getSuggestions($keyword);
?>