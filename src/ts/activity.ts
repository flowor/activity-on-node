
export class Activity {

    _title: string;
    _description: string;
    _duration: number;
    _immediatePredecessors: Array<Activity>;
    _immediateSuccessors: Array<Activity>;

    /**
     * Constructor
     */
    constructor (title: string, description: string, duration: number) {
        this._title = title;
        this._description = description;
        this._duration = duration;
        this._immediatePredecessors = new Array();
        this._immediateSuccessors = new Array();
    }

    getTitle() {
        return this._title;
    }

    getDescription() {
        return this._description;
    }

    getDuration() {
        return this._duration;
    }

    getImmediatePredecessors() {
        return this._immediatePredecessors;
    }

    getImmediateSuccessors() {
        return this._immediateSuccessors;
    }


    getPredecessorCount() {
        return this._immediatePredecessors.length;
    }

    getSuccessorCount() {
        return this._immediateSuccessors.length;
    }

    addImmediatePredecessor (activity: Activity) {
        activity._immediateSuccessors.push(this);
        this._immediatePredecessors.push(activity);
        return this._immediatePredecessors;
    }

    /**
     * early start time of activity A based on the early finish times of all immediate predecessors.
     * @param activity activity to get early start of
     */
     getEarlyStart (): number {
        if (this.getPredecessorCount() === 0)
            return 0;
       
        let predecessorsEf = this.getImmediatePredecessors().map(a => a.getEarlyFinish());
        let maxEf = Math.max(...predecessorsEf);

        // Another way to do the above but less clear
        // let predecessorWithMaxEf = activity.getImmediatePredecessors().reduce((p, c) => this.getEarlyFinish(p) > this.getEarlyFinish(c) ? p : c);

        return maxEf;
        
    }
    
    /**
     * early finish time of activity A, which is constrained by its early start time. 
     * @param activity activity to get early finish of
     */
    getEarlyFinish (): number {
        return this.getEarlyStart() + this.getDuration();
    }
    
    /**
     * late start time of activity A, which is constrained by its late finish time.
     * @param activity activity to get late start of
     */
    getLateStart (): number {
        if (this.getPredecessorCount() === 0)
            return this.getEarlyStart();

        return this.getLateFinish() - this.getDuration();
    }

    /**
     * late finish time of activity A without delaying the late start time of all immediate successors. 
     * @param activity activity to get late finish of
     */
    getLateFinish (): number {
        if (this.getSuccessorCount() === 0)
            return this.getEarlyFinish();

        let successorLS = this.getImmediateSuccessors().map(a => a.getLateStart());
        let maxLs = Math.min(...successorLS);

        return maxLs;
    }

    getSlack (): number {
        return this.getLateStart() - this.getEarlyStart();
    }

}