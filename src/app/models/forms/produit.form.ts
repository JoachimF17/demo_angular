import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export const PRODUIT_INSERT_FORM = {
    'marque': [undefined, [Validators.required, Validators.maxLength(30), atLeastTwoLetters]],
    'modele': [undefined, [Validators.minLength(1), Validators.maxLength(30)]],
    'prix': [0, [Validators.required, Validators.min(0), testValidateur(3)]],
    'stock': [1, [Validators.min(1), Validators.max(100), pair]],
    'enVente': [true]
  };

  function pair(control: AbstractControl): ValidationErrors | null{
    if(!control.value || control.value % 2 == 0)
        return null;
    
    return{
        pair: {
            'message': 'doit etre pair'
        }
    }
  }

  function osef(param: number){
    function pairInt(control: AbstractControl): ValidationErrors | null{
        if(!control.value || control.value % param == 0)
            return null;
        
        return{
            pair: {
                'message': 'doit etre pair'
            }
        }
    }

    return pairInt;
  }

  function atLeastTwoLetters(control: AbstractControl): ValidationErrors | null{
    let marque = control.value;

    if(typeof marque === 'string' && marque.length >= 2)
        return null;

    return{
        atLeastTwoLetters: {
            'marque': marque,
            'message': 'au moins 2 caracteres'
        }
    }
  }

  export function sameTwoLetters(control: AbstractControl): ValidationErrors | null{
    let marque = control.value.marque;
    let modele = control.value.modele;

    if(typeof marque === 'string' && typeof modele === 'string' && marque.length >= 2 
    && modele.length >= 2 && marque.substring(0, 2) === modele.substring(0, 2))
        return null;
    
    return{
        sameTwoLetters: {
            'marque': marque,
            'modele': modele,
            'message': 'le modele et la marque doivent commencer par les 2 memes lettres'
        }
    }
  }

  export function priceDoubleStock(control: AbstractControl): ValidationErrors | null{
    let prix = control.value.prix;
    let stock = control.value.stock;

    if(prix >= 2*stock)
        return null;
    
    return{
        priceDoubleStock: {
            'prix': prix,
            'stock': stock,
            'message': 'le prix doit etre le double du stock'
        }
    }
  }

  function validateurMultiple(param: number): ValidatorFn{
    return (control: AbstractControl) => {
        if(control.value % param === 0)
            return null;
        
        return{
            testValidateur:{
                'parametre': param,
                'valeur': control.value,
                'message': 'doit etre un multiple de '+param
            }
        }
    }
  }

  function testValidateur(div: number): ValidationErrors | null{
    return validateurMultiple(div);
  }