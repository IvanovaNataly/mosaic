// (function () {
	const mosaic = document.querySelector('.mosaic-list');
	const cards = [
		{
			id: 0,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field Long Long Long Long Long Service',
			description: 'With the help of Elad’s CRM experts, you can make the most out of your Dynamics CRM Field Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 1,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field',
			description: 'With the help of Elad’s CRM experts',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 2,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field',
			description: 'With Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 3,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field Long Long Long Long Long Service',
			description: 'With the help of Elad’s CRM experts, you can make the most',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 4,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field Long Long Long Long Long Service',
			description: 'With the help of Elad’s CRM experts, you can make the most out of your Dynamics CRM Field Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 5,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field Long Long Long Long Long Service',
			description: 'With the help of Elad’s CRM experts',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 6,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field',
			description: 'With Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 7,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field',
			description: 'With the help of Elad’s CRM experts, you can make the most out of your Dynamics CRM Field Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 8,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field',
			description: 'With Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 9,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field Long Long Long Long Long Service',
			description: 'With Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 10,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field Long Long Long Long Long Service',
			description: 'With the help of Elad’s CRM experts, you can make the most out of your Dynamics CRM Field Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		},
		{
			id: 11,
			author: 'Noa Berckovitz',
			profileImg: 'img/profile.jpeg',
			title: 'Streamline Your Field',
			description: 'With the help of Elad’s CRM experts, you can make the most out of your Dynamics CRM Field Service',
			date: '25 Aug 2020',
			tags: ['Websites', 'Mobile Apps', 'UX / UI', 'Contact Centers', 'Self-Care Portals'],
			background: 'https://www.fillmurray.com/755/625'
		}
	];


function renderList() {
	for (let i = 0; i < cards.length; i++) {
		buildCard(cards[i]);
	}
}

function buildCard(card) {
	const li = `<a href="" class="article-card-link">
                        <div class="article-card-picture" style="background-image: url('${card.background}');">
                            <p class="article-card-abbreviation hidden">NB</p>
                            <img src="${card.profileImg}" alt="Profile image" class="article-card-image">
                        </div>
                        <div class="article-card-text">
                            <p class="article-card-name ellipsis">${card.author}</p>
                            <h3 class="article-card-title clamp2">${card.title}</h3>
                            <p class="article-card-description clamp3">${card.description}</p>
                            <div class="article-card-divider"></div>
                            ${card.id}
                            <p class="article-card-date">${card.date}</p>
                            <ul class="article-card-tags"></ul>
                        </div>
                    </a>`;
	const node = document.createElement('li');
	node.classList.add('article-card');
	node.classList.add('id-' + card.id);
	node.innerHTML = li;
	mosaic.appendChild(node);
	const startTop = node.offsetTop;
	const startBottom = node.offsetTop + node.offsetHeight;
	card.position = {
		top: startTop,
		bottom: startBottom
	};
	console.log('start' + card.id, card.position.top, node.offsetHeight, card.position.bottom);
	if (card.id > 2) {
		const newBottom = calculateY(card);
		node.style.cssText = 'transform:translateY(' + newBottom + 'px);';
		console.log(card.id, newBottom);
		const postRect = node.getBoundingClientRect();
		card.position = {
			top: postRect.top,
			bottom: postRect.bottom
		};
	}
	console.log('end', card.position.top, card.position.bottom);
	const postRect = node.getBoundingClientRect();
	const postNode = document.querySelector('.id-' + card.id);
	console.log('postRect', postRect.top, postRect.bottom);
}

function calculateY(card) {
	const prevCardId = card.id - 3;
	const prevCardBottom = cards[prevCardId].position.bottom + 20;
	const difference = prevCardBottom - card.position.top;
	return difference;
}





renderList();


// }() );