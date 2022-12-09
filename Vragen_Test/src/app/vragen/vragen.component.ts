import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-vragen',
  templateUrl: './vragen.component.html',
  styleUrls: ['./vragen.component.css']
})
export class VragenComponent implements OnInit {

  public questionList : any = [];
  public currentQuestion: number = 0;
  
  objects=[{
    id:1,
  },
  {
    id:2,
  },]

  public selectedItem :any = {};
  setItem(item){
  if(this.selectedItem.id === item.id){
     this.selectedItem = {};
  } else{
  this.selectedItem = item
  }
}
  

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

  nextQuestion() {
    this.currentQuestion++;
    this.selectedItem = false;
  }
  previousQuestion() {
    this.currentQuestion--;
  }

}
