import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ClimaService } from '../clima.service';
import { Clima } from '../Clima'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [ClimaService]
})
export class Tab2Page {

  public clima = new Clima();
  private latitude: number;
  private longitude: number;
  public id: number;
  //public nomeCidade: string;
  //public temperatura: number;
  //public estado: string; //state
  //public pais: string; //country - País da cidade.

  constructor(
    public climaService: ClimaService,
    public geolocation: Geolocation
    ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude

      this.getClima()
    });
  }

  getClima() {

    this.climaService.getClima2()
      .subscribe(resp => {
        //Retorno da API
        console.log(resp);

        this.clima.nomeCidade = resp.name;
        this.clima.estado = resp.state;
        this.clima.temperature = resp.data[0].temperature.temperature;
        this.clima.dataBr = resp.data[0].date_br.date_br;
        this.clima.dataEua = resp.data[0].date.date;
        
        //
        /****
         * Dados de chuva.
         * ******/
        this.clima.precipitacaoMilimetros = resp.data[0].rain.precipitation;
        
        /****
         * Dados de vento
         * ******/
        this.clima.precipitacaoMilimetros = resp.data[0].wind.precipitation;
        //Intensidade do vento em km/h.
        this.clima.velocidade = resp.data[0].wind.velocity;
        //Direção do vento.
        this.clima.direcao = resp.data[0].wind.direction;
        //Direção do vento em graus.
        this.clima.direcaoGraus = resp.data[0].wind.directiondegrees;
        //Rajada do vento em km/h.
        this.clima.RajadaVento = resp.data[0].wind.gust;


        console.log(this.clima.direcao)
        console.log(this.clima.direcaoGraus)
        //console.log(this.clima.temperature)
        //console.log(this.clima.dataBr)
      }, err => {
        console.log(err);
      });
  }
}
