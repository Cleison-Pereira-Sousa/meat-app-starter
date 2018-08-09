import { Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

export class ErrorHandler{
    static handlerError(error: Response) {
        let errorMessage: string;
        if (error instanceof Response) {
            errorMessage = `Error ${error.status} ao acessar  a URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error;
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}