#define TEMP_SENSOR 0


 

void setup() {

  Serial.begin(9600);

}

 

int signalVoltage, celsiusTemp;

 

void loop() {

  signalVoltage = analogRead(TEMP_SENSOR);

  celsiusTemp = (5 * signalVoltage * 100) / 1024;
  if( celsiusTemp < 0 ){
    celsiusTemp=celsiusTemp * -1;
    }
   
  Serial.println(celsiusTemp);

  
  

  delay(500);

}
