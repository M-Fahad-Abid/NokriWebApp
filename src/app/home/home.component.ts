import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Page1Component } from "../Pages/Page1/page1/page1.component";
import { Page2Component } from "../Pages/Page2/page2/page2.component";
import { Page3Component } from "../Pages/Page3/page3/page3.component";
import { Page4Component } from "../Pages/Page4/page4/page4.component";
import { Page5Component } from "../Pages/Page5/page5/page5.component";
import { Page6Component } from "../Pages/page6/page6/page6.component";
import { Page7Component } from "../Pages/page7/page7/page7.component";
import { Page8Component } from "../Pages/page8/page8/page8.component";
import { Page9Component } from "../Pages/Page9/page9/page9.component";
import { Page10Component } from "../Pages/Page10/page10/page10.component";
import { FooterComponent } from "../footer/footer.component";



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        NavbarComponent,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        FlexLayoutModule,
        MatAutocompleteModule,
        Page1Component,
        Page2Component,
        Page3Component,
        Page4Component,
        Page5Component,
        Page6Component,
        Page7Component,
        Page8Component,
        Page9Component,
        Page10Component,
        FooterComponent
    ]
})
export class HomeComponent {}

