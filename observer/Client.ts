interface iJobPlatform {

    registerObserver(seeker: Observer): void;

    removeObserver(seeker: Observer): void;

    notifyObservers(): void;
}

class HeadHunter implements iJobPlatform {

    private _jobs: String[];
    private _seekers: JobSeeker[];
    private _headHunterName: string;

    constructor(headHunterName:string){
        this._jobs = [];
        this._seekers = [];
        this._headHunterName = headHunterName;
    }

    public registerObserver(seeker: JobSeeker): void {
        this._seekers.push(seeker);
        console.log('The JobPlatform attached a seeker: ' + seeker._name);
    }

    public removeObserver(seeker: JobSeeker): void {
        const observerIndex = this._seekers.indexOf(seeker);
        this._seekers.splice(observerIndex, 1);
        console.log();
        console.log('The JobPlatform detached a seeker.' + seeker._name);
    }
    public notifyObservers(): void {
        console.log('The JobPlatform notifies seekers...');
        for (const seeker of this._seekers) {
            seeker.update();
        }
    }
    public addJob(job: String): void {
        this._jobs.push(job);
        console.log();
        console.log(`${this._headHunterName} added this job: ${job}`);
        console.log();
        this.notifyObservers();
    }
    public getJob(){
        const lastJob = this._jobs[this._jobs.length - 1];
        return lastJob;
    }
}

interface Observer {
    update(): void;
}

class JobSeeker implements Observer {

    public _name:string;
    private _headHunter: HeadHunter;

    constructor(name:string, headHunter:HeadHunter){
        this._name = name;
        this._headHunter = headHunter;
    }

    public update(): void {
        const jobTitle = this._headHunter.getJob();
        console.log(this._name + ' has been notified of new job : ' + jobTitle);  
    }
}


const headHunter1 = new HeadHunter("Orange");
const headHunter2 = new HeadHunter("Unifun");

const seeker1 = new JobSeeker("Joe", headHunter1);
headHunter1.registerObserver(seeker1);

const seeker2 = new JobSeeker("Mike", headHunter2);
headHunter2.registerObserver(seeker2);

headHunter1.addJob("Web Developer");
console.log("***************************");
headHunter1.addJob("PHP Developer");

headHunter1.removeObserver(seeker1);

headHunter2.addJob("Tester");
console.log("***************************");
headHunter2.addJob("Project Manager");
