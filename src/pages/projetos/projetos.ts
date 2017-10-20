import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {
  projetos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public projetosService: ProjetosServiceProvider) {
    this.projetos = projetosService.getProjetos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetosPage');
  }

}
