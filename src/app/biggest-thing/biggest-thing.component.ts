import { Component, OnInit } from '@angular/core';
import {THINGS} from '../mock-thing'

@Component({
  selector: 'app-biggest-thing',
  templateUrl: './biggest-thing.component.html',
  styleUrls: ['./biggest-thing.component.css']
})
export class BiggestThingComponent implements OnInit {

  biggest:string='';
  biggestimg:string='';
  biggest2:string='';
  biggestimg2:string='';
  biggest3:string='';
  biggestimg3:string='';

  constructor() { }

  ngOnInit(): void {
  }
  select1(){
    this.biggest="В Белоруссии построен самый большой в мире самосвал – машина под названием БелАЗ-75710 способна перевозить до 450 тонн! По данным агентства БЕЛТА представители БелАЗа уже готовят документы для фиксации рекорда в Книге Гиннесса.";
    this.biggestimg='./assets/img/big1.jpg';
  }

  select2(){
    this.biggest2="Ан-225 «Мрия» – самый большой и по размерам, и по грузоподъемности самолет в мире за всю историю авиации.";
    this.biggestimg2='./assets/img/big2.jpg';
  }

  select3(){
    this.biggest3="Представлено описание самого большого корабля в мире по длине - нефтяного танкера Knock Nevis (длина 458,45). Из существующих и действующих на данный момент самым большим кораблем мира согласно [2 - Википедия] является контейнеровоз Barzan c длинной 400 метров.";
    this.biggestimg3='./assets/img/big3.jpg';
  }

}
