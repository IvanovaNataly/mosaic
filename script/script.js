// (function () {
	const selector = '.mosaic-list';
	const mosaic = document.querySelector(selector);
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
	const responsive = [
		{
			screenMoreThan: 1024,
			cardsAmount: 4,
			gridGapX: 22,
			gridGapY: 22
		},
		{
			screenMoreThan: 768,
			cardsAmount: 3,
			gridGapX: 22,
			gridGapY: 22
		},
		{
			screenMoreThan: 540,
			cardsAmount: 2,
			gridGapX: 40,
			gridGapY: 30
		},
		{
			screenMoreThan: 0,
			cardsAmount: 1,
			gridGapX: 0,
			gridGapY: 40
		}];

	let cardsParams = {
		cardsAmount: 1,
		gapX: 0,
		gapY: 0
	};
	const startDirection = 'left';
	const endDirection = 'right';
	const stylesheet = document.styleSheets[0];
	let widthRuleIndex;
	let marginRuleIndex;
	let resizeTimeout;

function calculateCardsAmount() {
	const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	for (let i = 0; i < responsive.length; i++) {
		if (screenWidth > responsive[i].screenMoreThan) {
			cardsParams.cardsAmount = responsive[i].cardsAmount;
			cardsParams.gapX = responsive[i].gridGapX;
			cardsParams.gapY = responsive[i].gridGapY;
			break;
		}
	}
}

function addCssRule() {
	calculateCardsAmount();
	const minusGaps = cardsParams.gapX * (cardsParams.cardsAmount - 1) + 'px';
	const maxWidth = `calc((100% - ${minusGaps}) / ${cardsParams.cardsAmount});`;
	const maxWidthRule = `${selector} > *  { max-width: ${maxWidth} }`;
	widthRuleIndex && stylesheet.cssRules[widthRuleIndex] ?  stylesheet.deleteRule(widthRuleIndex) : widthRuleIndex = stylesheet.cssRules.length;
	widthRuleIndex = stylesheet.insertRule(maxWidthRule, widthRuleIndex);

	const margin = `margin-${endDirection}: ${cardsParams.gapX}px;`;
	const marginRule = `${selector} > li:not(:nth-child(${cardsParams.cardsAmount}n))  { ${margin} }`;
	marginRuleIndex && stylesheet.cssRules[marginRuleIndex] ? stylesheet.deleteRule(marginRuleIndex) : marginRuleIndex = stylesheet.cssRules.length;
	marginRuleIndex = stylesheet.insertRule(marginRule, marginRuleIndex);
}

function renderList() {
	addCssRule();
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
	// console.log('start' + card.id, card.position.top, node.offsetHeight, card.position.bottom);
	if (card.id > cardsParams.cardsAmount - 1) {
		const newBottom = calculateY(card);
		node.style.cssText = 'transform:translateY(' + newBottom + 'px);';
		// console.log(card.id, newBottom);
		const postRect = node.getBoundingClientRect();
		card.position = {
			top: postRect.top,
			bottom: postRect.bottom
		};
	}
	// console.log('end', card.position.top, card.position.bottom);
	// const postRect = node.getBoundingClientRect();
	// const postNode = document.querySelector('.id-' + card.id);
	// console.log('postRect', postRect.top, postRect.bottom);

}

function calculateY(card) {
	const prevCardId = card.id - cardsParams.cardsAmount;
	const prevCardBottom = cards[prevCardId].position.bottom + cardsParams.gapY;
	const difference = prevCardBottom - card.position.top;
	return difference;
}

function resizeThrottler() {
	// ignore resize events as long as an renderList execution is in the queue
	if ( !resizeTimeout ) {
		resizeTimeout = setTimeout(function() {
			resizeTimeout = null;
			renderList();
		}, 66);
	}
}

renderList();

window.addEventListener("resize", resizeThrottler, false);





// }() );