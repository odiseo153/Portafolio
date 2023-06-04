import React from 'react';
import style from '../style/index.module.css';

export default function About() {
  return (
    <div id={style.todo}>
      <div className="card" id={style.central}>
        <h1>Odiseo Esmerlin Rincon Sanchez</h1>
        <h4>Web Development</h4>
        <div className="card-body" id='texto'>
          <p id='pr' className="card-text">Hi, I'm a web developer with experience in programming languages ​​like HTML, CSS, JavaScript, React, C# Web Api, Asp.Net, nodejs, and developing web applications on multiple platforms. I have a solid understanding of web design principles and development best practices, having worked on projects from the planning phase through deployment and maintenance. I am passionate about creating effective and engaging web experiences for users, and am constantly updating myself on the latest technologies and trends in the field of web development to improve my skills and knowledge.</p>
        </div>
      </div>
      <div id={style.cubos}>
        <div id={style.cubo}>
          <img src='https://th.bing.com/th/id/R.cd7bb6bec60f6799aa174b4e07b92ea4?rik=BHSaQZLldSrFEg&riu=http%3a%2f%2fpewlehh.com%2fimages%2freact.png&ehk=YveCdhSmivB2dp1byBMJFp7rWw3vDbrzY%2bp2FBLI3Zs%3d&risl=&pid=ImgRaw&r=0' alt='react' />
        </div>
        <div id={style.cubo1}>
          <img src='https://th.bing.com/th/id/OIP.Tf4BFI6846neirVSebC0vAHaEi?pid=ImgDet&rs=1' alt='nodejs' />
        </div>
        <div id={style.cubo2}>
          <img src='https://img2.gratispng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg' alt='C#' />
        </div>
      </div>
    </div>
  );
}
