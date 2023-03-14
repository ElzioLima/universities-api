import { Job, RecurrenceRule, scheduleJob } from 'node-schedule';

export class JobScheduler {
  private static instance: JobScheduler 
  private readonly jobs: Map<string, Job> = new Map();

  constructor(){}

  static getInstance (): JobScheduler {
    if (this.instance === undefined) this.instance = new JobScheduler()
    return this.instance
  }

  scheduleJob(name: string, rule: string | Date | RecurrenceRule, callback: () => void): void {
    const job = scheduleJob(name, rule, callback);
    if (job) {
      this.jobs.set(name, job);
    }
  }
}