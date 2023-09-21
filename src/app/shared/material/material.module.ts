import { NgModule } from "@angular/core";
import {MatListModule}  from "@angular/material/list";
import {MatIconModule}  from "@angular/material/icon";
import {MatInputModule}  from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';






const material: any[]  = [MatListModule,MatIconModule,MatInputModule,MatButtonModule]

@NgModule({
    imports: [...material],
    exports : [...material]
})

export class MaterailModule{}