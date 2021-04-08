export default class File{
    public name : string;
    public audioTrack : string;
    public videoTrack : string;
    constructor(name:string, audioTrack:string, videoTrack:string){
        this.name = name;
        this.audioTrack = audioTrack;
        this.videoTrack = videoTrack;
    }
}