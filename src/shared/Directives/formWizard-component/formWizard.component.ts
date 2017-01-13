import { Component, QueryList, ContentChildren, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { FormWizardStepComponent } from '../formWizardStep - component/formWizardStep.component';
import { ComponentBase } from '../componentBase';
import { IWizardNextEventArgs } from './IWizardNextEventArgs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ced-form-wizard',
  templateUrl: 'formWizard.component.html',
  styleUrls: ['formWizard.component.scss']
})
export class FormWizardComponent extends ComponentBase implements AfterContentInit{
  private currentStep: number = 0;
  private nextSub: Subscription;
  private finishSub: Subscription;
  private isNextDisabled: boolean;
  private isFinishDisabled: boolean;

  @ContentChildren(FormWizardStepComponent) steps: QueryList<FormWizardStepComponent>;
  @ViewChild('nextButton') nextButton: ElementRef;

  constructor() {
    super();
    this.isNextDisabled = true;
    this.isFinishDisabled = true;
  }

  ngAfterContentInit() {
    let first = this.steps.first;
    this.subscribeNextAndFinish(first);
    first.isStepActive = true;
  }

  private onPrevious() {
    let stepsArray = this.steps.toArray();
    let current: FormWizardStepComponent = stepsArray[this.currentStep];
    this.currentStep--;

    if (this.currentStep < 0)
      this.currentStep = 0;
    let next: FormWizardStepComponent = stepsArray[this.currentStep];

    this.subscribeNextAndFinish(next);
    current.isStepActive = false;
    next.isStepActive = true;

  }

  private onNext() {
    if (this.currentStep >= this.steps.length){
      this.isNextDisabled = true;
      this.isFinishDisabled = true;
      return;
    }
    let stepsArray = this.steps.toArray();
    let current: FormWizardStepComponent = stepsArray[this.currentStep];
    this.currentStep++;
    let next: FormWizardStepComponent = stepsArray[this.currentStep];


    if(current) {
      current.onNext();
      current.isStepActive = false;
    }

    if(next) {
      this.subscribeNextAndFinish(next);
      next.isStepActive = true;
    }

  }

  private onFinish() {
    if(this.nextSub) this.nextSub.unsubscribe();
    if(this.finishSub) this.finishSub.unsubscribe();

    let last = this.steps.last;
    last.onFinish();
    last.isStepActive = false;
  }

  private subscribeNextAndFinish(step: FormWizardStepComponent) {
    if(!step)
      return;

    if (this.nextSub) {
      this.nextSub.unsubscribe();
    }

    this.nextSub = step.isNextEnabled
      .subscribe(value => this.isNextDisabled = !value);

    if (this.finishSub)
      this.finishSub.unsubscribe();

    this.finishSub = step.isNextEnabled
      .subscribe(value => this.isFinishDisabled = !value);
  }

}
