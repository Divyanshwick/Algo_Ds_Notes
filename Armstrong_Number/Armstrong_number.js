/*A positive integer of n digits is called an Armstrong number of order n (order is number of digits) if
abcd... = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + .... */
<html>
	<head>
		<script>
	                //Function to check if the number is armstrong or not
			function Armstrong()
			{
				var flag1,num,c=0,rem=0,sum=0,flag2;
				num = Number(document.getElementById("N").value);

				flag1 = num;
	        //To calculate the order of the number
                while(flag1 > 0)
                {
                    flag1=parseInt(flag1/10);
                    c++;
                }
                flag2=num;
				while(num > 0)
				{
					rem = num%10;
					sum = sum +Math.pow(rem,c);
					num = parseInt(num/10);
				}

				if(sum == flag2)
				{
					window.alert("The entered number is Armstrong");
				}
				else
				{
					window.alert("The entered number is not Armstrong");
				}
			}
		</script>
	</head>
	<body>
		<br>
		<h1 style="text-align:center;">Whether a number is Armstrong or not</h1>
		<p style="text-align:center;">Enter The Number :<input type="text" name="n" id = "N"></p>
		<hr color="cyan">
		<br>
		<center><button onClick="Armstrong()">CHECK</button> </center>
    </body>
    </html>
/*Enter the number:8208
  The entered number is Armstrong*/
