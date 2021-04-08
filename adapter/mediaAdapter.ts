import iPlayer from "./iPlayer";
import Video from "./video";
import File from "./file";

export default class MediaAdapter implements iPlayer{
    private readonly _mediaPlayer : Video = new Video();
    playAudio(file, name: string, audioTrack:string ): void {
        this._mediaPlayer.playMedia(name, file.videoTrack, file.audioTrack);
    }
}
