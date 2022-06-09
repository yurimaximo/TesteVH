
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation,Pagination  } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-graduacao',
  template: `
<head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
  </head>
<body>
  

  <div class="animate__animated animate__fadeInUp">
    <sub>cursos de</sub>
    <h2>
      Graduação
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
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Direito</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div></ng-template
    ><ng-template swiperSlide><div class="card" style="width: 400px height:280px;">
        <img
          src="https://images.unsplash.com/photo-1600493033157-eed3fbe95d96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWF0aGVtYXRpY3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Ciências Contábeis</h5>
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
          src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Administração</h5>
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
          src="https://images.unsplash.com/photo-1646666478087-9cb25250dbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Ciência da Computação</h5>
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
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Engenharia Civil</h5>
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
          src="https://images.unsplash.com/photo-1622030411594-c282a63aa1bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Logística</h5>
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
          src="https://images.unsplash.com/photo-1525571453712-090270b8354f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Pedagogia</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>  
  </ng-template>
 

    
  </swiper></body>`,
  styleUrls: ['./graduacao.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GraduacaoComponent {}
