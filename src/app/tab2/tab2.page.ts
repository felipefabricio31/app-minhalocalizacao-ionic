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

  public clima: Clima;
  private latitude: number;
  private longitude: number;

  constructor(
    private climaService: ClimaService,
    public geolocation: Geolocation) { }

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
      .subscribe(resposta => {
        //Retorno da API
      }, err => {
        console.log(err);
      });
  }
}
