import { Component, Input, OnInit } from '@angular/core';

/**
 * https://picsum.photos/images
 */
@Component({
	selector: 'app-hero-visual',
	templateUrl: './hero-visual.component.html',
	styleUrls: ['./hero-visual.component.scss']
})
export class HeroVisualComponent implements OnInit {

	title = 'hero-visual';

	@Input() img: string = 'https://picsum.photos/id/60/1024/400/'; // 'https://picsum.photos/id/11/1024/900';

	constructor() { }

	ngOnInit(): void {

	}

}
