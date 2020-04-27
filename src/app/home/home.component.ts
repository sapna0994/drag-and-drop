import { Component, OnInit,  ViewChild, TemplateRef, AfterViewInit, ViewContainerRef, OnDestroy} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy  {
  @ViewChild(TemplateRef) dialogTemplate: TemplateRef<any>;
  private overlayRef: OverlayRef;
  private portal: TemplatePortal;
  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
  ) {}
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  movies1 = [
    {
      title: 'Episode I - The Phantom Menace',
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
    },
    {
      title: 'Episode II - Attack of the Clones',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
    },
    {
      title: 'Episode III - Revenge of the Sith',
      poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
    },
    {
      title: 'Episode IV - A New Hope',
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
    },
    {
      title: 'Episode V - The Empire Strikes Back',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
    },
    {
      title: 'Episode VI - Return of the Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
    },
    {
      title: 'Episode VII - The Force Awakens',
      poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
    },
    {
      title: 'Episode VIII - The Last Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
    },
    {
      title: 'Episode IX – The Rise of Skywalker',
      poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg'
    }
  ];
  movies2 = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];
  all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  even = [10];
  items = [
    {value: 'I can be dragged', disabled: false},
    {value: 'I cannot be dragged', disabled: true},
    {value: 'I can also be dragged', disabled: false}
  ];
  items1 = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];

  basket = [
    'Oranges',
    'Bananas',
    'Cucumbers'
  ];
  dragPosition = {x: 0, y: 0};

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  transfer(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  preview(event: CdkDragDrop<{title: string, poster: string}[]>) {
    moveItemInArray(this.movies1, event.previousIndex, event.currentIndex);
  }
  placeholder(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies2, event.previousIndex, event.currentIndex);
  }
  listOrientation(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
  controlNumber(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
  disableDrag(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  disableSorting(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  changePosition() {
    this.dragPosition = {x: this.dragPosition.x + 50, y: this.dragPosition.y + 50};
  }
    ngAfterViewInit() {
      this.portal = new TemplatePortal(this.dialogTemplate, this.viewContainerRef);
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
        hasBackdrop: true
      });
      this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
    }
    ngOnDestroy() {
      this.overlayRef.dispose();
    }
    openDialog() {
      this.overlayRef.attach(this.portal);
    }
    ngOnInit() {
    }
}
