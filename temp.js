let krustyProject = document.createElement('li');
krustyProject.classList.add('project-container');
projectList.appendChild(krustyProject);

const krustyProjectScreenshot = document.createElement('div');
krustyProjectScreenshot.classList.add('project-screenshot');
krustyProjectScreenshot.classList.add('krusty-screenshot');
krustyProject.appendChild(krustyProjectScreenshot);

const krustyProjectDescContainer = document.createElement('div');
krustyProjectDescContainer.classList.add('project-desc-container');
krustyProject.appendChild(krustyProjectDescContainer);

const krustyProjectHeader = document.createElement('div');
krustyProjectHeader.classList.add('project-header');
krustyProjectDescContainer.appendChild(krustyProjectHeader);

const krustyProjectTitle = document.createElement('h3');
krustyProjectTitle.append(`Krusty the Clown's Semi-Functional Sketch-Etcher`);
krustyProjectHeader.appendChild(krustyProjectTitle);

const krustyProjectLinks = document.createElement('div');
krustyProjectLinks.classList.add('about-me-footer');
krustyProjectHeader.appendChild(krustyProjectLinks);

const krustyProjectGithub = document.createElement('a');
krustyProjectGithub.setAttribute(
	'href',
	'https://github.com/hankfontaine/Krusty-s-Semi-Functional-Sketch-Etcher'
);
krustyProjectGithub.setAttribute('target', '_blank');
krustyProjectGithub.classList.add('project-svg');
krustyProjectGithub.classList.add('about-me-github');
krustyProjectLinks.appendChild(krustyProjectGithub);

const krustyProjectLive = document.createElement('a');
krustyProjectLive.setAttribute(
	'href',
	'https://hankfontaine.github.io/Krusty-s-Semi-Functional-Sketch-Etcher/'
);
krustyProjectLive.setAttribute('target', '_blank');
krustyProjectLive.classList.add('project-svg');
krustyProjectLive.classList.add('open-in-new');
krustyProjectLinks.appendChild(krustyProjectLive);

const krustyProjectDesc = document.createElement('div');
krustyProjectDesc.append(
	`A cheap, imiation knockoff of a popular children's toy, cosigned by Krusty the Clown.`
);
krustyProjectDescContainer.appendChild(krustyProjectDesc);
