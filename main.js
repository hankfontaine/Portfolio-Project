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

const aboutMeGithub = document.createElement('a');
aboutMeGithub.setAttribute('href', 'https://github.com/hankfontaine/');
aboutMeGithub.setAttribute('target', '_blank');
aboutMeGithub.classList.add('about-me-svg');
aboutMeGithub.classList.add('about-me-github');
aboutMeFooter.appendChild(aboutMeGithub);

const aboutMeLinkedin = document.createElement('a');
aboutMeLinkedin.setAttribute(
	'href',
	'https://www.linkedin.com/in/hank-mcgill-999750184/'
);
aboutMeLinkedin.setAttribute('target', '_blank');
aboutMeLinkedin.classList.add('about-me-svg');
aboutMeLinkedin.classList.add('about-me-linkedin');
aboutMeFooter.appendChild(aboutMeLinkedin);

const aboutMeTwitter = document.createElement('a');
aboutMeTwitter.setAttribute('href', 'https://www.twitter.com/hankfontaine/');
aboutMeTwitter.setAttribute('target', '_blank');
aboutMeTwitter.classList.add('about-me-svg');
aboutMeTwitter.classList.add('about-me-twitter');
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
myProjectsTitle.append('My work');
mainContainer.appendChild(myProjectsTitle);

const projectList = document.createElement('ul');
projectList.classList.add('project-list');
mainContainer.appendChild(projectList);

for (let i = 0; i < 6; i++) {
	let project = document.createElement('li');
	project.classList.add('project-container');
	projectList.appendChild(project);

	const projectScreenshot = document.createElement('div');
	projectScreenshot.classList.add('project-screenshot');
	projectScreenshot.append('screenshot of project');
	project.appendChild(projectScreenshot);

	const projectDescContainer = document.createElement('div');
	projectDescContainer.classList.add('project-desc-container');
	project.appendChild(projectDescContainer);

	const projectHeader = document.createElement('div');
	projectHeader.classList.add('project-header');
	projectDescContainer.appendChild(projectHeader);

	const projectTitle = document.createElement('h4');
	projectTitle.append('Project name');
	projectHeader.appendChild(projectTitle);

	const projectGithub = document.createElement('a');
	projectGithub.setAttribute('href', 'https://github.com/hankfontaine/');
	projectGithub.setAttribute('target', '_blank');
	projectGithub.classList.add('about-me-svg');
	projectGithub.classList.add('about-me-github');
	projectHeader.appendChild(projectGithub);

	const projectLive = document.createElement('a');
	projectLive.setAttribute('href', 'https://github.com/hankfontaine/');
	projectLive.setAttribute('target', '_blank');
	projectLive.classList.add('about-me-svg');
	projectLive.classList.add('about-me-github');
	projectHeader.appendChild(projectLive);

	const projectDesc = document.createElement('div');
	projectDesc.append(
		'Short description of the project.  Just a couple sentences will do.'
	);
	projectDescContainer.appendChild(projectDesc);
}

/////////////////////////////////////////////////////////////
///////////////////// FOOTER COMPONENTS /////////////////////
/////////////////////////////////////////////////////////////

const footer = document.createElement('footer');
body.appendChild(footer);

const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');
footer.appendChild(footerContainer);

const footerContactContainer = document.createElement('div');
footerContactContainer.classList.add('footer-contact-container');
footerContainer.appendChild(footerContactContainer);

const contactMeTitle = document.createElement('h1');
contactMeTitle.classList.add('section-title');
contactMeTitle.classList.add('footer-text');
contactMeTitle.append('Contact me');
footerContactContainer.appendChild(contactMeTitle);

const contactMeBio = document.createElement('h3');
contactMeBio.append(
	'Please get in touch if you think our work could be mutually beneficial!'
);
contactMeBio.classList.add('footer-text');
footerContactContainer.appendChild(contactMeBio);

const contactMeAddress = document.createElement('h3');
contactMeAddress.append('314 S 4th St Brooklyn NY 11211');
contactMeAddress.classList.add('footer-text');
footerContactContainer.appendChild(contactMeAddress);

const contactMePhone = document.createElement('h3');
contactMePhone.append('805-210-0238');
contactMePhone.classList.add('footer-text');
footerContactContainer.appendChild(contactMePhone);

const contactMeEmail = document.createElement('h3');
contactMeEmail.append('henrymcgill@gmail.com');
contactMeEmail.classList.add('footer-text');
footerContactContainer.appendChild(contactMeEmail);

const footerLinks = document.createElement('div');
footerLinks.classList.add('footer-links');
footerLinks.classList.add('footer-text');
footerContactContainer.appendChild(footerLinks);

const footerGithub = document.createElement('a');
footerGithub.setAttribute('href', 'https://github.com/hankfontaine/');
footerGithub.setAttribute('target', '_blank');
footerGithub.classList.add('about-me-svg');
footerGithub.classList.add('about-me-github');
footerGithub.classList.add('footer-svg');
footerLinks.appendChild(footerGithub);

const footerLinkedin = document.createElement('a');
footerLinkedin.setAttribute(
	'href',
	'https://www.linkedin.com/in/hank-mcgill-999750184/'
);
footerLinkedin.setAttribute('target', '_blank');
footerLinkedin.classList.add('about-me-svg');
footerLinkedin.classList.add('about-me-linkedin');
footerLinkedin.classList.add('footer-svg');
footerLinks.appendChild(footerLinkedin);

const footerTwitter = document.createElement('a');
footerTwitter.setAttribute('href', 'https://www.twitter.com/hankfontaine/');
footerTwitter.setAttribute('target', '_blank');
footerTwitter.classList.add('about-me-svg');
footerTwitter.classList.add('about-me-twitter');
footerTwitter.classList.add('footer-svg');
footerLinks.appendChild(footerTwitter);

const footerImgContainer = document.createElement('div');
footerImgContainer.classList.add('header-img-container');
footerContainer.appendChild(footerImgContainer);

const footerImg = document.createElement('img');
footerImg.src = './images/profile-pic-wide.jpg';
footerImg.classList.add('header-img');
footerImgContainer.appendChild(footerImg);
