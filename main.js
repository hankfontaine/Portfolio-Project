const body = document.querySelector('body');

/////////////////////////////////////////////////////////////
//////////////////// HEADER COMPONENTS //////////////////////
/////////////////////////////////////////////////////////////

const header = document.createElement('header');
body.appendChild(header);

const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');
header.appendChild(headerContainer);

const headerImgContainer = document.createElement('div');
headerImgContainer.classList.add('header-img-container');
headerContainer.appendChild(headerImgContainer);

const headerImg = document.createElement('img');
headerImg.src = './images/profile-pic-wide.jpg';
headerImg.classList.add('header-img');
headerImgContainer.appendChild(headerImg);

const headerText = document.createElement('div');
headerText.append('Hank McGill');
headerText.classList.add('header-text');
headerImgContainer.appendChild(headerText);

const aboutMeContainer = document.createElement('div');
aboutMeContainer.classList.add('about-me-container');
header.appendChild(aboutMeContainer);

const aboutMeTitle = document.createElement('h1');
aboutMeTitle.classList.add('section-title');
aboutMeTitle.append('About me');
aboutMeContainer.appendChild(aboutMeTitle);

// const aboutMeText = document.createElement('div');
// aboutMeText.append(
// 	'Self-taught web developer, living in NYC. When I am not working on a new project, you can catch me on the beach in Thailand or hanging out in a chic cocktail bar on the Lower East Side!'
// );
// aboutMeContainer.appendChild(aboutMeText);

// const aboutMeFooter = document.createElement('div');
// aboutMeFooter.classList.add('about-me-footer');
// aboutMeContainer.appendChild(aboutMeFooter);

// const aboutMeGithub = document.createElement('a');
// aboutMeGithub.setAttribute('href', 'https://github.com/hankfontaine/');
// aboutMeGithub.setAttribute('target', '_blank');
// aboutMeGithub.classList.add('about-me-svg');
// aboutMeGithub.classList.add('about-me-github');
// aboutMeFooter.appendChild(aboutMeGithub);

// const aboutMeLinkedin = document.createElement('a');
// aboutMeLinkedin.setAttribute(
// 	'href',
// 	'https://www.linkedin.com/in/hank-mcgill-999750184/'
// );
// aboutMeLinkedin.setAttribute('target', '_blank');
// aboutMeLinkedin.classList.add('about-me-svg');
// aboutMeLinkedin.classList.add('about-me-linkedin');
// aboutMeFooter.appendChild(aboutMeLinkedin);

// const aboutMeTwitter = document.createElement('a');
// aboutMeTwitter.setAttribute('href', 'https://www.twitter.com/hankfontaine/');
// aboutMeTwitter.setAttribute('target', '_blank');
// aboutMeTwitter.classList.add('about-me-svg');
// aboutMeTwitter.classList.add('about-me-twitter');
// aboutMeFooter.appendChild(aboutMeTwitter);

/////////////////////////////////////////////////////////////
//////////////////// MAIN COMPONENTS ////////////////////////
/////////////////////////////////////////////////////////////

// const main = document.createElement('main');
// body.appendChild(main);

// const mainContainer = document.createElement('div');
// mainContainer.classList.add('main-container');
// main.appendChild(mainContainer);

// const myProjectsTitle = document.createElement('h1');
// myProjectsTitle.classList.add('section-title');
// myProjectsTitle.append('My work');
// mainContainer.appendChild(myProjectsTitle);

// const projectList = document.createElement('ul');
// projectList.classList.add('project-list');
// main.appendChild(projectList);

// for (let i = 0; i < 1; i++) {
// 	let div = document.createElement('li');
// 	div.classList.add('project-container');
// 	div.append('test');

// 	projectList.appendChild(div);
// }
/////////////////////////////////////////////////////////////
///////////////////// FOOTER COMPONENTS /////////////////////
/////////////////////////////////////////////////////////////

// const footer = document.createElement('footer');
// footer.append('CONTACT ME');
// footer.append('name');
// footer.append('address');
// footer.append('phone');
// footer.append('email');
// footer.append('links');
// body.appendChild(footer);

// const footerContainer = document.createElement('div');
// footerContainer.classList.add('footer-container');
// footerContainer.append('footer');
// footer.appendChild(footerContainer);

// const footerImgContainer = document.createElement('div');
// footerImgContainer.classList.add('footer-img-container');
// footerContainer.appendChild(footerImgContainer);

// needs to be updated to include right specs

// const footerImg = document.createElement('img');
// footerImg.src = './images/profile-pic-wide.jpg';
// footerImg.classList.add('footer-img');
// footerImgContainer.appendChild(footerImg);

// const footerText = document.createElement('div');
// footerText.append('Hank McGill');
// footerText.classList.add('footer-text');
// footerImgContainer.appendChild(footerText);
