 var sampleServiceCatalog=JSON.parse('[ {"title":"복합센서",\
		     							"triggers":[\
		     							{"title":"온도감지",\
		     							"uri":"meter/thermometer/temp/",\
		     							"arguments":[\
		     										{"key":"30C<=","description":"섭씨 30도 이상 일때"},\
		     										{"key":"25C<=","description":"섭씨 25도 이상 일때"},\
		     										{"key":"25C>","description":"섭씨 25도 미만 일때"},\
		     										{"key":"20C<=","description":"섭씨 20도 이상 일때"},\
		     										{"key":"20C>","description":"섭씨 20도 미만 일때"},\
		     										{"key":"10C<=","description":"섭씨 10도 이상 일때"},\
		     										{"key":"10C>","description":"섭씨 10도 미만 일때"},\
		     										{"key":"0C<=","description":"섭씨 0도 이상 일때"},\
		     										{"key":"0C>","description":"섭씨 0도 미만 일때"},\
		     										{"key":"-10C>","description":"섭씨 -10도 미만 일때"}\
		     										]\
		     							},\
		     							{"title":"습도감지",\
		     							"uri":"meter/hygrometer/humidity/",\
		     							"arguments":[\
		     										{"key":"70%<=","description":"습도 70% 이상 일때"},\
		     										{"key":"50%<=","description":"습도 50% 이상 일때"},\
		     										{"key":"50%>","description":"습도 50% 미만 일때"},\
		     										{"key":"40%<=","description":"습도 40% 이상 일때"},\
		     										{"key":"40%>","description":"습도 40% 미만 일때"},\
		     										{"key":"30%<=","description":"습도 30% 이상 일때"},\
		     										{"key":"30%>","description":"습도 30% 미만 일때"},\
		     									    {"key":"20%<=","description":"습도 20% 이상 일때"},\
		     									    {"key":"20%>","description":"습도 20% 미만 일때"},\
				 							  		{"key":"10%>","description":"습도 10% 미만 일때"}\
				 							]\
				 						}\
			 						],\
			 						"actions":[]\
			 						},\
			 						{	"title":"히터",\
			 							"triggers":[],\
							 			"actions":[\
							 			{"title":"난방 세기 제어" , \
							 			"uri": "controller/heater/temp/"	,\
							 			"arguments":[\
							 						{"key":"high","description":"난방 강도 강으로 조정"},	\
							 						{"key":"medium","description":"난방 강도 중으로 조정"},	\
							 						{"key":"low","description":"난방 강도 약으로 조정"}\
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
									,{	"title":"가습기 ",\
			 							"triggers":[],\
							 			"actions":[\
							 			{"title":"전원 제어" ,	\
							 			"uri":"controller/humidifier/power/",\
							 			"arguments":[\
							 						{"key":"on","description":"가습기 켜기"},\
							 						{"key":"off","description":"가습기 끄기"}\
							 						]\
										}\
									]\
									}\
								]' );