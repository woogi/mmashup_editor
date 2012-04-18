 var sampleServiceCategories=JSON.parse('[ {"title":"복합센서",\
		     							"triggers":[\
		     							{"title":"온도감지",\
		     							"uri":"meter/thermometer/temp/",\
		     							"arguments":[ {"key":"30C<=","description":"섭씨 30도 이상 일때"},\
		     										{"key":"20C<=","description":"섭씨 20도 이상 일때"},\
		     										{"key":"10C<=","description":"섭씨 10도 이상 일때"},\
		     										{"key":"0C<=","description":"섭씨 0도 이상 일때"},\
		     										{"key":"0C>","description":"섭씨 0도 미만 일때"},\
		     										{"key":"-10C>","description":"섭씨 -10도 미만 일때"}\
		     										]\
		     							},\
		     							{"title":"습도감지",\
		     							"uri":"meter/hygrometer/humidity/",\
		     							"arguments":[ {"key":"50%<=","description":"습도 50% 이상 일때"},\
		     										{"key":"40%<=","description":"습도 40% 이상 일때"},\
		     										{"key":"30%<=","description":"습도 30% 이상 일때"},\
		     									    {"key":"20%>=","description":"습도 20% 이상 일때"},\
				 							  		{"key":"10%<=","description":"습도 10% 이상 일때"}\
				 							]\
				 						}\
			 						]\
			 						},\
			 						{	"title":"난방 controller",\
							 			"actions":[\
							 			{"title":"희망 온도 제어" , \
							 			"uri": "meter/themometer/temp/"	,\
							 			"arguments":[{"key":"27C","description":"27도로조정"},	\
							 						{"key":"25C","description":"25도로 조정"},\
							 						{"key":"20C","description":"20도로 조정"}\
							 						]\
										},\
							 			{"title":"전원 제어" ,	\
							 			"uri":"controller/heater/power/",\
							 			"arguments":[\
							 						{"key":"on","description":"난방 켜기"},\
							 						{"key":"off","description":"난방 끄기"}\
							 						]\
										}\
									]\
									}\
								]' );