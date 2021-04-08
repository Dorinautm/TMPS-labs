import { Genre } from './genre';

export class Horror implements Genre{
    public givePlot():string{
        return "Horror elements have been added to the plot";
    }
}