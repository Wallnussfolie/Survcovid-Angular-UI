import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventDefinitionService } from '../../../services/event-definition.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event = {
    shortTitle: '',
    description: '',
    gameEventDefinitionType: 'GENERIC_EVENT'
  };
  choices = [];
  requirements = [];
  events = {};

  constructor(private service: EventDefinitionService, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents()
  {
    this.service.listEventDefinitions().subscribe(
      data => { this.events = data},
      err => console.log(err),
      () => console.log('events loaded')
      );
  }

  createChoice()
  {
    this.choices.push({data: "", description: "", id: -1});
  }

  delChoice(i)
  {
    this.choices.splice(i, 1);
  }

  createRequirement()
  {
    this.requirements.push({
      eventDefinition: "",
      type: "HAS_HAPPENED"
    })
  }

  changeEvent(event, i)
  {
    this.requirements[i].eventDefinition = event;
    console.log(this.requirements);
  }

  changeChoice(choice, i)
  {
    if (choice == null)
    {
      this.requirements[i].gameEventChoiceId = null;
    }
    this.requirements[i].choice = choice;
    console.log(this.requirements);
  }

  delRequirement(i)
  {
    this.requirements.splice(i, 1);
  }

  onSubmit()
  {
    this.service.createEventDefinition(
    {
      gameEventDefinitionDTO: this.event,
      choicesDTOs: this.choices,
      requirementDTOList: this.requirements
    }
      ).subscribe(
        data => {
          this.router.navigate(['/admin/events/'])
        },
        err => console.log(err),
        () => console.log('event saved')
      );
  }

}
