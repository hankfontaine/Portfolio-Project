const body = document.querySelector('body');

/////////////////////////////////////////////////////////////
//////////////////// HEADER COMPONENTS //////////////////////
/////////////////////////////////////////////////////////////

const header = document.createElement('header');
body.appendChild(header);

const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');
headerContainer.append('header');
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

/////////////////////////////////////////////////////////////
//////////////////// MAIN COMPONENTS ////////////////////////
/////////////////////////////////////////////////////////////

const main = document.createElement('main');
body.appendChild(main);

const bioContainer = document.createElement('div');
bioContainer.append('About me.  bio goes here');
main.appendChild(bioContainer);

const bioLinksContainer = document.createElement('div');
bioLinksContainer.append('LINKS ');
main.appendChild(bioLinksContainer);

const projectList = document.createElement('ul');
projectList.classList.add('project-list');
main.appendChild(projectList);

for (let i = 0; i < 1; i++) {
	let div = document.createElement('li');
	div.classList.add('project-container');
	div.append('test');

	projectList.appendChild(div);
}
/////////////////////////////////////////////////////////////
///////////////////// FOOTER COMPONENTS /////////////////////
/////////////////////////////////////////////////////////////

const footer = document.createElement('footer');
footer.append('CONTACT ME');
footer.append('name');
footer.append('address');
footer.append('phone');
footer.append('email');
footer.append('links');
body.appendChild(footer);
