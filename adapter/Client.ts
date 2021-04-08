import Audio from "./audio";
import File from "./file";
import iPlayer from "./iPlayer";
import MediaAdapter from "./mediaAdapter";

let audio1 : File = new File("audio1", "song1", "not supported");
let video1 : File = new File("video1", "song1", "someVideo");

let audio : iPlayer = new Audio();
let video : iPlayer = new MediaAdapter();

audio.playAudio(audio1, audio1.name, audio1.audioTrack);
video.playAudio(video1, video1.name, video1.audioTrack);