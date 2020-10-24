import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imagem = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/eb/ebe5b449693920720363c59447f4ef8582c65f53_full.jpg';
  public exibe = null;
  public descricao = 'Disciplinas de Programação';
  public usuario = 'Gabriel Andrade';
  public profissao = 'Aluno';
  public lista = [

    {
      id: '1',
      year: '2007',
      cert: 'Django'
    },

    {
      id: '2',
      year: '2007',
      cert: 'Python'
    },

    {
      id: '3',
      year: '2007',
      cert: 'Starts'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil() {
    this.exibe = true;
  }
  public ocultaPerfil() {
    this.exibe = false;
  }

}
