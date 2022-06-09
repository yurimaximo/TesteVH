import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { retry } from 'rxjs';
import { __values } from 'tslib';


@Component({
  selector: 'app-selecao-modalidade',
  templateUrl: './selecao-modalidade.component.html',
  styleUrls: ['./selecao-modalidade.component.css']
})
export class SelecaoModalidadeComponent  {
  a:string = '';
rotaGraduacao: string='/graduacao'
rotaPosGraduacao:string ='/pos-graduacao'

  @ViewChild('graduacao')
  graduacao!: ElementRef; 

  @ViewChild('posGraduacao')
  posGraduacao!: ElementRef; 


  constructor() {
    myForm: FormGroup;

 }

     modal2():void{
    this.a =this.posGraduacao.nativeElement.value
    
      }

     modal1():void{
      this.a =this.graduacao.nativeElement.value
    
      }

      selecionar():void{
       switch (this.a) {
         case '/graduacao':
        

            window.open('http://localhost:4200'+this.graduacao.nativeElement.value,"_self")
            
       
           break;

           case '/pos-graduacao':
        

            window.open('http://localhost:4200'+this.posGraduacao.nativeElement.value,"_self")
            
       
           break;
       
         
       }
      }
    }
        
        
        



 





