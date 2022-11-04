# Activity On Node Diagram
Use to generate AON network representations

## Details
Input activities, predecessors, and durations to generate activity on node network diagram and calculate:
- ES(a) = early start time of activity A based on the early finish times of all immediate predecessors. 
- EF(a) = early finish time of activity A, which is constrained by its early start time. 
- LS(a) = late start time of activity A, which is constrained by its late finish time. 
- LF(a) = late finish time of activity A without delaying the late start time of all immediate successors. 

## Getting Started

Visit the live [demo](http://)

### Run locally
```
npm install
npm start
```
Server running at http://localhost:1234