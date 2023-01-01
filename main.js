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
headerContainer.appendChild(aboutMeContainer);

const aboutMeTitle = document.createElement('h1');
aboutMeTitle.classList.add('section-title');
aboutMeTitle.append('About me');
aboutMeContainer.appendChild(aboutMeTitle);

const aboutMeText = document.createElement('div');
aboutMeText.append(
	'Self-taught web developer, living in NYC. When I am not working on a new project, you can catch me on the beach in Thailand or hanging out in a chic cocktail bar on the Lower East Side!'
);
aboutMeContainer.appendChild(aboutMeText);

const aboutMeFooter = document.createElement('div');
aboutMeFooter.classList.add('about-me-footer');
aboutMeContainer.appendChild(aboutMeFooter);

const aboutMeGithub = document.createElement('img');
aboutMeGithub.src = './icons/github.svg';
aboutMeGithub.classList.add('about-me-svg');
aboutMeGithub.setAttribute('href', 'https://github.com/hankfontaine/');
aboutMeFooter.appendChild(aboutMeGithub);

const aboutMeLinkedin = document.createElement('img');
aboutMeLinkedin.src = './icons/linkedin.svg';
aboutMeLinkedin.classList.add('about-me-svg');
aboutMeLinkedin.append('LI');
aboutMeFooter.appendChild(aboutMeLinkedin);

const aboutMeTwitter = document.createElement('img');
aboutMeTwitter.src = './icons/twitter.svg';
aboutMeTwitter.classList.add('about-me-svg');
aboutMeTwitter.append('TW');
aboutMeFooter.appendChild(aboutMeTwitter);

/////////////////////////////////////////////////////////////
//////////////////// MAIN COMPONENTS ////////////////////////
/////////////////////////////////////////////////////////////

const main = document.createElement('main');
body.appendChild(main);

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
main.appendChild(mainContainer);

const myProjectsTitle = document.createElement('h1');
myProjectsTitle.classList.add('section-title');
myProjectsTitle.append('My Projects');
mainContainer.appendChild(myProjectsTitle);

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
