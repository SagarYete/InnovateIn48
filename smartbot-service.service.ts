import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmartbotServiceService {

  constructor(private http : HttpClient) {}

  public getResponse(query: string){
    switch (query)
    {
      case 'Hello': return String("Hello");
      case 'How are you?': return String("Fine! Thank you!");
      default: return String("Sorry! could you please say again ?");
    }
  }
}
