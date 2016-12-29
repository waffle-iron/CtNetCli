import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";

import { Skill } from '../skills/skill.model';
import { Job } from '../jobs/job.model';
import { JobRole } from '../jobs/job-role.model';
import 'rxjs/add/operator/map';
import { JobsService } from '../jobs/jobs.service';
import { SkillsService } from '../skills/skills.service';

@Component({
    selector: 'ctnet-portfolio',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
    name: string = "About Me";
    skills: Array<Skill>;
    jobs: Array<Job>;
    error: any;
    constructor(http: Http, private params: ActivatedRoute, private jobsService: JobsService, private skillsService: SkillsService) {
    }
    getJobs(): void {
        this.jobsService
        .getJobs()
        .then(jobs => this.jobs = jobs)
        .catch(error => this.error = error);
    }
    getSkills(): void {
        this.skillsService
        .getSkills()
        .then(skills => this.skills = skills)
        .catch(error => this.error = error);
    }
    ngOnInit(): void {
        this.getJobs();
        this.getSkills();
    }
}