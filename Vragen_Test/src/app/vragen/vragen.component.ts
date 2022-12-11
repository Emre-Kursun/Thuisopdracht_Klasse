import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-vragen',
  templateUrl: './vragen.component.html',
  styleUrls: ['./vragen.component.css']
})
export class VragenComponent implements OnInit {

  newObject = {
    option: '',
    price: ''
  };

  public questionList : any = [];
  public currentQuestion: number = 0;
  gekozenKeuze :any [] = [];
  nietGekozenKeuze: any [] = [];
  public currentIndex: any = 0;
  public lastIndex: any = 0;
  zijnKeuzesAf : boolean = false;
  public selectedItem :any = false;
  public totaleKost: number = 0;
  public finaleKost: number = 0;
  public budgetRound: number = 0;
  public budget: number = 0;
  budgetCorrect: boolean;
  
  
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }

  AddtoArray(option:any,price:any,item){
    if(this.selectedItem.id === option.id){
      this.newObject = {
        option: option,
        price: price
      };
      this.gekozenKeuze[this.currentIndex] = this.newObject
      this.selectedItem = item;   

      this.totaleKost= this.gekozenKeuze.reduce((prev,next)=>prev+next.price,0);
     this.finaleKost = Math.round(this.totaleKost * 100) / 100;
     this.budgetRound = 560 - this.finaleKost 
     this.budget = Math.round(this.budgetRound * 100) / 100;
     if(this.budget > 0){
      this.budgetCorrect = true
     }
     else{
      this.budgetCorrect = false
     }
     
    }

    else if(this.selectedItem.id === option.id){
      this.gekozenKeuze[this.currentIndex] = option; 
      this.currentIndex++;
      this.gekozenKeuze[this.currentIndex] = price; 
      this.currentIndex++;
    }

    else{
      this.selectedItem = option
      this.AddtoArray(option,price,item)
    }  
}
  nextQuestion() {
    this.currentQuestion++;
    this.selectedItem = false;
    if(this.currentIndex === this.lastIndex){
    this.currentIndex+=1;
    this.lastIndex+=1;
    }
    else{
      this.currentIndex+=2;
    }
  }
  previousQuestion() {
    this.currentQuestion--;
    this.currentIndex-=1;
    this.selectedItem = false;
    console.log(this.currentIndex)
  }

  endQuestion(){
    this.zijnKeuzesAf = true;
  }

  resetKeuze(){
    this.zijnKeuzesAf = false;
  }

  onKeypress(event:any) {
   console.log(event)
  }

}
