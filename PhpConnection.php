<?php
$servername = "localhost";
$username = "Mark";
$password = "zR9*CNhxtx";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
