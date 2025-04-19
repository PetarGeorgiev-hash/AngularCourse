import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string
  enteredTitle = "";
  enteredSummray = "";
  enteredDate = "";
  private taskService = inject(TasksService)

  @Output() close = new EventEmitter<void>();
  onCancel(){
  this.close.emit();
 }

 @Output() add = new EventEmitter<NewTask>()
 onSubmit(){
   this.taskService.addTask(
    {
      title: this.enteredTitle,
      summary: this.enteredSummray,
      date: this.enteredDate,
    },
    this.userId
  )
  this.close.emit();
 }
}
