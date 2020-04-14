import { Component } from "@angular/core";

@Component({
  selector: 'app-student',
  templateUrl: 'student.component.html'
})

export class AppStudent{
  titlePage: string = 'Jr. Kindergarden Class of 2020';
  studentAge: number = 4;
  students: any[] = [
    {
      name: 'John Smith',
      age: 4,
      hobbies: 'sports',
      favouriteFood: `John loves <strong>ice cream</strong>.`
    },
    {
      name: 'ML Carpenter',
      age: 5,
      hobbies: 'crafts',
      favouriteFood: `ML loves <strong>tofu</strong>.`
    },
    {
      name: 'Maggie Joe',
      age: 6,
      hobbies: 'reading',
      favouriteFood: ` Maggie loves <strong>brocolli</strong>.`
    },
    {
      name: 'Pam Baker',
      age: 4,
      hobbies: 'dancing',
      favouriteFood: `Pam loves <strong>orange juice</strong>.`
    },
    {
      name: 'Jefferson Hills',
      age: 5,
      hobbies: 'hockey',
      favouriteFood: `Jefferson loves <strong>burgers</strong>.`
    },
    {
      name: 'Carmen Santiago',
      age: 6,
      hobbies: 'painting',
      favouriteFood: `Carmen loves <strong>fries</strong>.`
    },
    {
      name: 'Will Jay',
      age: 4,
      hobbies: 'dancing',
      favouriteFood: `Will loves <strong>pizza</strong>.`

    },
    {
      name: 'Kate Smith',
      age: 5,
      hobbies: 'painting',
      favouriteFood: ` Kate loves <strong>strawberry smoothies</strong>.`
    }
  ];
}