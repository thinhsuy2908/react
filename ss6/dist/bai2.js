class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Parttime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttime = new ParttimeJob(80);
const fulltime = new FulltimeJob();
parttime.printType();
console.log(`Lương: ${parttime.calculateSalary()} VND`);
fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary()} VND`);
