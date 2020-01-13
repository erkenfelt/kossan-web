<?php
 
	header('Content-type: application/json');
	function create_safe_data($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
	}	
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$from_name = create_safe_data($request->name);
	$from_email = create_safe_data($request->email);
	$child_name = create_safe_data($request->childName);
	$birth_year = create_safe_data($request->birthYear);
	$when_to_start = create_safe_data($request->whenToStart);
	$message = create_safe_data($request->message);
 
	$to_email = 'koansvarig@kossan.net';
 
	$website = 'Kossan';
	$email_subject = "$website: Ny intresseanmälan från $from_name";
 
	$contact = "<p><strong>Namn:</strong> $from_name</p>
							<p><strong>E-post:</strong> $from_email</p>
							<p><strong>Barnets namn:</strong> $child_name</p>
							<p><strong>Födelseår:</strong> $birth_year</p>
							<p><strong>Vill börja:</strong> $when_to_start</p>
							";
	$content = "<p>$message</p>"; 
	$to_email_body = '<html><body>';
	$to_email_body .= "$contact $content";
	$to_email_body .= '</body></html>';
	
	$from_email_body = '<html><body>';
	$from_email_body .= "<h2>Tack för din intresseanmälan!</h2>";
	$from_email_body .= "<p>Vi har nu mottagit din intresseanmälan och återkommer så snart som möjligt.</p>";
	$from_email_body .= "<p>Bästa hälsningar<br>";
	$from_email_body .= "Köansvarig på Kossan</p>";
	$from_email_body .= "<br><br>";
	$from_email_body .= "<p><i>Din intresseanmälan:</i></p>";
	$from_email_body .= "$contact $content";
	$from_email_body .= '</body></html>';
 
	$to_headers = "MIME-Version: 1.0\r\n";
	$to_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$to_headers .= "From: intresseanmalan@kossanlund.se\n";
	$to_headers .= "Reply-To: $from_email";

	$from_headers = "MIME-Version: 1.0\r\n";
	$from_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$from_headers .= "From: intresseanmalan@kossanlund.se\n";
	$from_headers .= "Reply-To: koansvarig@kossan.net";
 
	if(
		mail($to_email, $email_subject, $to_email_body, $to_headers) &&
		mail($from_email,'Din intresseanmälan är mottagen', $from_email_body, $from_headers)
	) {
		$response_array['status'] = 'success';
		$response_array['from'] = $from_email;
		echo json_encode($response_array);
		header($response_array);
		return $response_array;
	}
 
	$response_array['status'] = 'failed';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	header($response_array);
	return $response_array;
?>