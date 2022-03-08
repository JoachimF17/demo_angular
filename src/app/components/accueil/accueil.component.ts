import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  loginForm: FormGroup;

  constructor(builder: FormBuilder, private service: ConnexionService) {
    this.loginForm = builder.group({
      username: [],
      password: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.service.connect(this.loginForm.value)){
      alert('vous etes connecte');
    }else{
      alert('username ou password invalide');
    }
  }

}
