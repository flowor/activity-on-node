import { Activity } from "./activity";
import { Network } from "./network";

let network = new Network();

let activityA = new Activity("A", "Decide topic and scope", 1);
let activityB = new Activity("B", "Collect Data", 2);
let activityC = new Activity("C", "Search the Internet", 3);
let activityD = new Activity("D", "Write the report", 5);

network.insertActivity(activityA);
network.insertActivity(activityB);
network.insertActivity(activityC);
network.insertActivity(activityD);

activityB.addImmediatePredecessor(activityA);
activityC.addImmediatePredecessor(activityA);
activityD.addImmediatePredecessor(activityB);
activityD.addImmediatePredecessor(activityC);
