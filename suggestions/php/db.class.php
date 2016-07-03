<?php
	include_once 'config.php';
	class DB{
		protected $mysqli;
		function __construct()
		{
			$this->mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
		}
		function insert($query, $encodingClient, $encodingConnection, $encodingResults){
			mysqli_query($this->mysqli, "SET character_set_client='$encodingClient'");
			mysqli_query($this->mysqli, "SET character_set_connection='$encodingConnection'");
			mysqli_query($this->mysqli, "SET character_set_results='$encodingResults'");			
			mysqli_query($this->mysqli,$query);
		}
		function select($query, $encoding){
				$this->mysqli->query("SET NAMES '$encoding'");
				return $this->mysqli->query($query);
		}
		function getSuggestions($keyword){
			// $patterns = array('/\s+/', '/"+/', '/%+/');
			// $replace = array('');
			// $keyword = preg_replace($patterns, $replace, $keyword);
			if($keyword != "")
				$query = "SELECT * FROM clients 
									WHERE f_ex LIKE\"".$keyword."%\" 
									OR i_ex LIKE\"".$keyword."%\" 
									OR o_ex LIKE\"".$keyword."%\" 
									OR fio_ex LIKE\"".$keyword."%\" 
									OR io_ex LIKE\"".$keyword."%\" 
									OR iin_ex LIKE\"".$keyword."%\"";
			else
				$query = "SELECT * FROM clients WHERE f_ex=\"\" OR WHERE iin_ex=\"\"";
			$output = "<response>";
			$result = $this->mysqli->query($query);
			if($result->num_rows) {
				while ($row = $result->fetch_array(MYSQLI_ASSOC))
				{
					$output .= "<id>".$row['id']."</id>";
					$output .= "<fio>".$row['f_ex']." ".$row['i_ex']." ".$row['o_ex']."</fio>";
					
					if (empty($row['iin_ex'])) {
						$output .= "<iin>ОТСУТСТВУЕТ</iin>";
					} else {
						$output .= "<iin>".$row['iin_ex']."</iin>";
					}
				}
			}
			$output .= '</response>';
			return $output;
		}
		function __destruct()
		{
			$this->mysqli->close();
		}
	}
?>