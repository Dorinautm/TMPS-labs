import { Genre } from './genre';

export class Fantasy implements Genre{
    public givePlot():string{
        return "Fantastic elements have been added to the plot";
    }
}