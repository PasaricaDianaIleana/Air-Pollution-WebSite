import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';
import Draggable from 'gsap/Draggable'
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger,Draggable);
    this.ScrollTriggers();
  }
  ScrollTriggers(){
    document.querySelectorAll(".panels").forEach(panels =>{
      const scrollPanel=gsap.timeline({
      scrollTrigger:{
        trigger:panels,//elem care declanseaza efectul
        pin:true,
        toggleActions: "restart play none reverse",
        start: "bottom bottom", //efectul porneste de la sfarsit
            
            markers: false,
            scrub: 1,
            pinSpacing:false,
      }
      });
      scrollPanel.from(panels,{y: 0, opacity: 50, xProcent: 100 });
    })
  }
  accordionItems = [
    { title: 'Dioxid de Carbon',Sanatate: 'Este un gaz toxic, în concentrații mari fiind letal (la concentrații de aproximativ 100 mg/m3) prin reducerea capacitații de transport a oxigenului în sânge, cu consecințe asupra sistemului respirator și a sistemului cardiovascular.La concentrații relativ scăzute:afecteză sistemul nervos central,slăbeşte pulsul inimii, micșorând astfel volumul de sânge distribuit în organism,poate cauza dificultăți respiratorii și dureri în piept persoanelor cu boli cardiovasculare.',Mediu:'Emisiile de CO contribuie la formarea  ozon.CO2 si Ozonul sunt gaze cu efect de seră care contribuie la incalzirea globala.' },
    { title: 'Dioxid de azot', Sanatate: 'Dioxidul de azot este un gaz foarte toxic atât pentru oameni cât și pentru animale.Dioxidul de azot este cunoscut ca fiind un gaz foarte toxic atât pentru oameni cât și pentru animale ',Mediu:'Expunerea la acest poluant produce vătămarea serioasă a vegetației prin albirea sau moartea țesuturilor plantelor, reducerea ritmului de creștere a acestora.Expunerea la oxizii de azot poate provoca boli pulmonare animalelor, care seamănă cu emfizemul pulmonal, iar expunerea la dioxidul de azot poate reduce imunitatea animalelor provocând boli precum pneumonia şi gripă.'  },
    { title: 'Ozon', Sanatate: 'Expunerea la ozon reduce funcția pulmonară și provoacă simptome respiratorii, precum tuse și dificultăți de respirație. Expunerea la ozon agravează, de asemenea, astmul și bolile pulmonare, cum ar fi emfizemul. Expunerea la ozon poate crește, de asemenea, riscul de mortalitate prematură din cauze respiratorii.',Mediu:'Ozonul dăunează vegetației prin  reducerea fotosintezei, scăderea randamentelor culturilor. Deteriorarea cu ozon a plantelor poate modifica structura ecosistemului, reduce biodiversitatea și reduce consumul de CO2 de către plante. Ozonul este, de asemenea, un gaz cu efect de seră care contribuie la încălzirea atmosferei.' },
    { title: 'Dioxid de sulf',  Sanatate: 'Expunerea la o concentrație mare de dioxid de sulf, pe o perioadă scurtă de timp, poate provocă dificultăți respiratorii severe. Sunt afectate în special persoanele cu astm, copiii, vârstnicii și persoanele cu boli cronice ale căilor respiratorii.Expunerea la o concentrație redusă de dioxid de sulf, pe termen lung poate avea ca efect infecții ale tractului respirator.',Mediu:'Dioxidul de sulf afectează vizibil multe specii de plante, efectul negativ asupra structurii și țesuturilor acestora fiind sesizabil cu ochiul liber.În atmosferă, contribuie la acidifierea precipitațiilor, cu efecte toxice asupra vegetației și solului.' },
    { title: 'Oxizi de azot și sulf',  Sanatate: 'content 2',Mediu:'content1'},
    { title: 'Particulele PM25 si Pm10', Sanatate: 'Expunerile la PM, în special particulele fine denumite PM2.5, pot provoca efecte dăunătoare asupra sistemului cardiovascular, inclusiv atacuri de cord și accidente vasculare cerebrale si in anumite cazuri Aceste efecte pot duce la moarte prematură. Expunerile la PM sunt, de asemenea, legate de efecte respiratorii dăunătoare, inclusiv atacuri de astm.',Mediu:'Particulele PM2.5 sunt principala cauză a vizibilității reduse.PM poate fi, de asemenea, transportat pe distanțe mari de vânt și se așează pe soluri sau ape de suprafață.Acestea pot provoca:schimbarea echilibrului nutrienților în apele de coastă și bazinele hidrografice mari; epuizarea nutrienților din sol; deteriorarea pădurilor si schimbarea echilibrului nutrienților în apele de coastă și bazinele hidrografice mari; epuizarea nutrienților din sol; deteriorarea pădurilor'},
    { title: 'Compuși organici volatili', Sanatate: 'Expunerea la acesti poluanti poate provoca:iritarea ochilor, nasului și gâtului,deteriorarea ficatului, rinichilor și sistemului nervos central,cancer',Mediu:'Contribuie la incalzirea globala'},
    { title: 'Plumb', Sanatate: 'În funcție de nivelul de expunere, plumbul poate afecta sistemul nervos în curs de dezvoltare al copiilor, rezultând  deficite de învățare și probleme de comportament.Expunerea pe termen lung  poate afecta negativ sistemul nervos, funcția renală, sistemul imunitar si sistemul cardiovascular.',Mediu:'Cantitățile ridicate de plumb acumulate în soluri și corpuri de apă dulce pot duce la scăderea ritmului de creștere și reproducere la plante și animale'},
  

  ];
}