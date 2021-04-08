import File from "./file";

export default interface iPlayer{
    playAudio(file:File, name:string, audioTrack:string) : void;
}