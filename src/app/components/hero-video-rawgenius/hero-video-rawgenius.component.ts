import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';

import { FeatureEnum } from 'src/app/shared/enums/feature.enum';
import { ModeEnum } from 'src/app/shared/enums/mode.enum';
import { IHero } from 'src/app/shared/interfaces/i-root';

@Component({
	selector: 'app-hero-video-rawgenius',
	templateUrl: './hero-video-rawgenius.component.html',
	styleUrls: ['./hero-video-rawgenius.component.scss']
})
export class HeroVideoRawGeniusComponent implements OnInit {

	title = 'hero-video-rawgenius';

	@Input() value: any = 'xxx';

	@Input() mode: ModeEnum = ModeEnum.DARK;
	@Input() feature: FeatureEnum = FeatureEnum.MVP_2023;

	useFeatureEnum = FeatureEnum;

	constructor() { }

	ngOnInit(): void {

	}

}
