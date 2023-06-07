import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.scss']
})
export class CareerPage implements OnInit {
  events: any[];

  ngOnInit() {
    this.events = [
        { status: 'Project Lead - Automating Invoice Processing & Stakeholder Collaboration', date: '07/2022', icon: 'pi pi-circle-on',
        value:"Currently leading the development of a project focused on automating invoice processing. I have performed the execution of production deployment, working closely with business stakeholders to interpret and implement their needs."},
        { status: 'Architect - Designed Fintech Microservices Infrastructure & Managed Integrations', date: '01/2022', icon: 'pi pi-circle-on',
        value:"Designed a microservices-based architecture for a new fintech project. Incorporated synchronous and asynchronous communication using REST API and RabbitMQ, built the foundational components, and developed the IT infrastructure for large-scale development set to start in July. Managed integrations of the client's external services with the developed project."},
        { status: 'Software Developer - Business Process Implementation', date: '09/2021', icon: 'pi pi-circle-on',
        value:"Implemented a business process using Camunda and developed key features for several projects."},
      { status: 'Project Lead - Full Lifecycle Management with Activiti Tool', date: '07/2021', icon: 'pi pi-circle-on',
        value:"Led a project from inception to deployment utilizing the Activiti workflow and BPM tool."},
      { status: 'Software Developer - Project Migration & Kotlin/Java Development', date: '12/2020', icon: 'pi pi-circle-on',
        value:"Transitioned to another. Participated in the migration of a large, production-operating project to a new framework version. Developed several other projects across various industry fields using Kotlin and Java. Worked with PostgreSQL for database operations, utilized Angular & TypeScript on the frontend, and facilitated communication between microservices-based Docker containers and the frontend by building a REST API."},
      { status: 'Junior Developer - Maintenance Lead for Alfresco Platform', date: '05/2020', icon: 'pi pi-circle-on',  
        value: "Led a maintenance-phase project, developing both on the frontend and the backend on the CMS & ECM Alfresco platform"
      },
      { status: 'Junior Frontend Developer - Hands on the board', date: '01/2020', icon: 'pi pi-circle-on',
        value : "Initiated my role by familiarizing myself with the work environment and working on JavaScript, Java, and Freemarker in a maintenance-phase project. I also gained hands-on experience with the Spring framework."          
      },
      { status: 'Junior Dynamics Developer - SAF-T Parser Development & Efficiency Enhancement', date: '06/2017', icon: 'pi pi-circle-on',
        value: "During my studies, I got my first job with minimal experience in low-level languages. My first task was developing a SAF-T parser, which taught me the importance of clear code. By automating parts of the process, I enhanced efficiency and assisted with tax compliance. This job served as a key learning experience in my professional journey.",
      }
    ];

  }

}
