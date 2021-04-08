import iPlayer from "./iPlayer";
import File from "./file";

export default class Audio implements iPlayer{
    playAudio(file:File, name:string, audioTrack:string): void {
        console.log("Playing audio content: " + name + " from an mp3 file, audiotrack: " +audioTrack);
    }

}