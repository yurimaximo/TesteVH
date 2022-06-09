import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation,Pagination  } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-pos-graduacao',
  template: `
  <div class="animate__animated animate__fadeInUp">
  <sub>cursos de</sub>
    <h2>
      Pós-Graduação
    </h2>
  </div>
  
  
  <swiper
    [slidesPerView]="4"
    [spaceBetween]="20" 
    [freeMode]="true"
    [centeredSlides]="false"
    [pagination]="{
      clickable: true
    }"
    class="mySwiper animate__animated animate__fadeInLeft">
    <ng-template swiperSlide>
      <div class="card" style="width: 400px height:280px;">
        <img
        src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Marketing</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div></ng-template
    ><ng-template swiperSlide><div class="card" style="width: 400px height:280px;">
        <img
        src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80"  
        class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Gestão de Projetos</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div></ng-template
    ><ng-template swiperSlide>
      <div class="card" style="width: 400px height:280px;">
        <img
          src="https://images.unsplash.com/photo-1643199319409-84b7066f45b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Engenharia Eletrica</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </ng-template
    ><ng-template swiperSlide>
    <div class="card" style="width: 400px height:280px;">
        <img
        src="https://images.unsplash.com/photo-1621606677061-ec5eda5c04e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
           
        class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Gestão de Pessoal</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>  
    </ng-template>
    <ng-template swiperSlide>
    <div class="card" style="width: 400px height:280px;">
        <img
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Engenharia de software</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>  
  </ng-template>
  <ng-template swiperSlide>
    <div class="card" style="width: 400px height:280px;">
        <img
          src="https://images.unsplash.com/photo-1528802704307-fb7d0f29ad0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGV4ZXJjaXNlJTIwc2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Educação Física Escolar</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>  
  </ng-template>
  <ng-template swiperSlide>
    <div class="card" style="width: 400px height:280px;">
        <img
          src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Direito do Consumidor</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>  
  </ng-template>
 

    
  </swiper>`,
  styleUrls: ['./pos-graduacao.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PosGraduacaoComponent  {
}
