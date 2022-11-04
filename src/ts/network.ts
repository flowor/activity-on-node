import { Activity } from "./activity";

export class Network {
  /**
   * Instance Variables
   */

  _activities: Array<Activity>;
  _size: number;

  /**
   * Constructor
   */
  constructor() {
    this._activities = new Array();
    this._size = 0;
  }

  /* Return the size of this container */
  size() {
    return this._size;
  }

  /* Return true if and only if this container has no Elements */
  isEmpty() {
    return this._size === 0;
  }

  insertActivity(activity: Activity) {
    this._activities.push(activity);
    this._size++;
    return this._activities;
  }

  removeActivity(activity: Activity) {
    let targetIndex: number;

    targetIndex = this._activities.indexOf(activity);
    if (targetIndex < 0) {
      throw new Error("Activity does not exist in this Network.");
    } else {
      this._activities.splice(targetIndex, 1);
      this._size--;
    }
  }

  getProjectCompetionTime(): number {
    // Max [EF(all ending activities)]
    let endingActivities = this._activities
      .filter((a) => a.getSuccessorCount() === 0)
      .map((a) => a.getEarlyFinish());
    let maxEf = Math.max(...endingActivities);

    return maxEf;
  }
}
