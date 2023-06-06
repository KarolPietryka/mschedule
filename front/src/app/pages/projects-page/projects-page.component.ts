import { Component, OnInit } from '@angular/core';
import { SquareStoryLineComponentPair } from 'src/app/model/page-components/suqre-component-pair.model';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPage implements OnInit {

  content: SquareStoryLineComponentPair[][] = [
    [
      {
        imgUrl: '../../../assets/projects/protfolio_2.png',
        title:"mschedule (Portfolio Website)",
        desc: "The website that you are looking at, is a full-stack, responsive personal portfolio web application built using Angular for the frontend and Node.js for the backend. The Angular application is structured using modular components and services that promote reusability and separation of concerns. The UI is designed to be intuitive and user-friendly, utilizing Material Design components to provide a modern look and feel. It features a dynamic navbar, a customizable avatar, and descriptive content cards. Backend operations are handled with Node.js, focusing on RESTful principles to manage requests and responses. This allows the application to maintain a high degree of flexibility and scalability, catering to future growth and additional features.",
        avatarImageUrl: '../../../assets/projects/github-thumbnail.png',
        url: "https://github.com/KarolPietryka/mschedule"
      },
      {
        imgUrl: '../../../assets/projects/leetcode.png',
        title:"LeetCode | CCI | Dojo",
        desc: " I launched the Dojo project to strengthen my proficiency in data structures and algorithms. I later extended my practice to LeetCode, tackling complex programming challenges that honed my problem-solving skills and command over algorithmic efficiency. In tandem, I developed the CCI project to gain hands-on experience with Hibernate, Test-Driven Development (TDD), and Java Persistence API (JPA), enhancing my proficiency in the Java ecosystem.",
        avatarImageUrl: "../../../assets/projects/github-thumbnail.png",
        url: "https://github.com/KarolPietryka/dojo"
      }
    ],
    [
      {
        imgUrl: '../../../assets/projects/patom.png',
        title:"Patom",
        desc: "The ECM (Enterprise Content Management) project, based on Alfresco, is an automated solution tailored for the agricultural industry's document processing needs. This all-encompassing system introduces dedicated forms and a versatile HTML workshop feature for customizing printable forms, complemented by an HTML to PDF transformer to streamline document management. This system employs a robust technology stack, including the Spring framework, Kotlinx serializers, and the wkhtmltopdf library, which operates as a process invoked from Java code within a containerized environment. The application is completely dockerized, promoting seamless automation of document workflows and digitization of traditional farming processes.",
        avatarImageUrl: '../../../assets/projects/github-thumbnail.png',
        url: "https://github.com/KarolPietryka/patom"
      },
      {
        imgUrl: '../../../assets/projects/oca.png',
        title:"Java SE 8 Programmer",
        desc: " I launched the Dojo project to strengthen my proficiency in data structures and algorithms. I later extended my practice to LeetCode, tackling complex programming challenges that honed my problem-solving skills and command over algorithmic efficiency. In tandem, I developed the CCI project to gain hands-on experience with Hibernate, Test-Driven Development (TDD), and Java Persistence API (JPA), enhancing my proficiency in the Java ecosystem.",
        avatarImageUrl: "../../../assets/projects/oca_thumb.png",
        url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D6FAD93B67B81F54E9D147556054C19A82092D8A374086320D378F7C6A913B67"
      }
    ],
    [
      {
        imgUrl: '../../../assets/projects/organ.gif',
        title:"Organ App",
        desc: "Welcome to the inception of my coding journey - my first Java project. Today, when I look back at the code of this humble JFrame-based desktop application, I can feel the pain just right behind my eyes. Back then, however, it felt like a grand achievement, a sign of triumph over the labyrinth of code and compilation errors. The process involved leveraging basic Java techniques and technologies to create a journal application that allows users to save their entries directly on their machines. Even though it might appear rudimentary now, this project served as the stepping stone that launched my programming voyage. While it may not be the magnum opus in my portfolio, it holds a special place in my heart as I reflect on the strides I've made since those early coding endeavors. And the cherry on top? The gif you see alongside this text. That's the digital birth certificate of my journey into the world of Java. The journey of a thousand lines of code begins with a single keystroke.",
        avatarImageUrl: '../../../assets/projects/github-thumbnail.png',
        url: "https://github.com/KarolPietryka/OrganApp"
      }
    ]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
