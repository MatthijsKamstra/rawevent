
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

/**
 * little icon create, based upon Ficons (https://ficons.fiction.com/reference.html)
 *
 * @example
 * ```ts
		<app-icons icon="fa-magic"></app-icons>
		<app-icons icon="fa-magic" size="3"></app-icons>
		<app-icons icon="edit" size="1"></app-icons>
 * ```
 */
@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: []
})
export class IconsComponent implements OnInit {

	@Input() icon!: string;
	@Input() size!: string; // default size without setting, but can use 1 (fa-lg),2 (fa-2x),3 (fa-3x),4 (fa-4x)
	@Input() displayInline: boolean = false;

	faSize: string = '';

	ngOnInit(): void {
		this.init();
	}

	/**
	 * this is to check if translation values are here when changed
	 * @param changes
	 */
	ngOnChanges(changes: SimpleChanges) {
		this.init();
	}

	/**
	 *
	 */
	init(): void {
		// set size string to ficons class
		this.setSize();
		// set icon
		this.setIcon();
	}

	/**
	 *
	 */
	setIcon(): void {
		// use as default
		if (this.icon == null) this.icon = '?';

		// when using `fa-xxx` we assume you know what you are talking about
		if (this.icon.indexOf('fa-') != -1) return;

		switch (this.icon.toLowerCase()) {
			case 'x': this.icon = 'fa-remove'; break;
			case 'home': this.icon = 'fa-home'; break;
			case 'create': this.icon = 'fa-pencil'; break;

			case '':
			case '?': this.icon = 'fa-question'; break;

			// default buttons names
			case 'download': this.icon = 'fa-download'; break;
			case 'save': this.icon = 'fa-save'; break;
			case 'back': this.icon = 'fa-hand-o-left'; break; // fa-arrow-left
			case 'upload': this.icon = 'fa-upload'; break;
			case 'logs': this.icon = 'fa-archive'; break;
			case 'switch': this.icon = 'fa-toggle-on'; break;
			case 'save': this.icon = 'fa-save'; break;
			case 'cancel': this.icon = 'fa-times'; break;
			case 'info': this.icon = 'fa-info-circle'; break;
			case 'edit': this.icon = 'fa-edit'; break;
			case 'history': this.icon = 'fa-history'; break;
			case 'status': this.icon = 'fa-gears'; break;
			case 'create': this.icon = 'fa-plus'; break;
			case 'filter': this.icon = 'fa-filter'; break;
			case 'trash': this.icon = 'fa-trash-o'; break;
			case 'delete': this.icon = 'fa-trash'; break;
			case 'left': this.icon = 'fa-chevron-left'; break;
			case 'right': this.icon = 'fa-chevron-right'; break;
			case 'copy': this.icon = 'fa-copy'; break;
			case 'list': this.icon = 'fa-list'; break;
			case 'validate': this.icon = 'fa-check-circle-o'; break;
			case 'add': this.icon = 'fa-plus'; break;
			case 'password': this.icon = 'fa-lock'; break;
			case 'debug': this.icon = 'fa-bug'; break;
			case 'search': this.icon = 'fa-search'; break;
			case 'operator': this.icon = 'fa-id-badge'; break;
			case 'ok': this.icon = 'fa-check'; break;

			case "check": this.icon = "fa-check-square-o"; break;
			case "unchecked": this.icon = "fa-square-o"; break;
			// case "check": this.icon = "fa-check-circle-o"; break;
			// case "unchecked": this.icon = "fa-circle-o"; break;


			case 'true': this.icon = 'fa-check'; break;
			case 'false': this.icon = 'fa-remove'; break;

			case 'show': this.icon = 'fa-eye2'; break;
			case 'hide': this.icon = 'fa-eye-slash2'; break;

			case 'enable':
			case 'enabled': this.icon = 'fa-sign-in'; break;
			case 'disable':
			case 'disabled': this.icon = 'fa-sign-out'; break;

			case 'map': this.icon = 'fa-map'; break;
			case 'page map': this.icon = 'fa-map'; break;
			case 'nomap': this.icon = 'fa-map-o'; break;
			case 'bigger': this.icon = 'fa-plus-circle'; break;
			case 'smaller': this.icon = 'fa-minus-circle'; break;

			case 'arrow-left': this.icon = 'fa-arrow-left'; break;
			case 'arrow-right': this.icon = 'fa-arrow-right'; break;


			case 'sun': this.icon = 'fa-sun-o'; break;
			case 'moon': this.icon = 'fa-moon-o'; break;
			case 'arrow': this.icon = 'fa-arrow-right'; break;
			case 'arrow-down': this.icon = 'fa-arrow-down'; break;

			case 'expand':
			case 'full-width':
			case 'fullwidth':
			case 'full':
			case 'full-screen':
			case 'fullscreen': this.icon = 'fa-expand'; break;
			case 'compress': this.icon = 'fa-compress'; break;

			case 'check':
			case 'checked': this.icon = 'fa-check-square-o'; break;
			case 'uncheck':
			case 'un-check':
			case 'un-checked':
			case 'unchecked': this.icon = 'fa-square-o'; break;

			case 'about': this.icon = 'fa-info-circle'; break;
			case 'dashboard': this.icon = 'fa-dashboard'; break;
			case 'logout': this.icon = 'fa-sign-out'; break;

			case 'style':
			case 'styleguide': this.icon = 'fa-bolt'; break;

			case 'users': this.icon = 'fa-users'; break;
			case 'contact': this.icon = 'fa-tablet'; break;

			case 'user':
			case 'profile': this.icon = 'fa-user-circle'; break;

			case 'install': this.icon = 'fa-cube'; break;


			case 'speakers': this.icon = 'fa-star'; break;

			case 'logout': this.icon = 'fa-sign-out'; break;
			case 'login': this.icon = 'fa-sign-in'; break;

			case 'signup': this.icon = 'fa-edit'; break;

			case 'settings': this.icon = 'fa-cog'; break;
			case 'uitleg': this.icon = 'fa-bolt'; break;
			case 'help': this.icon = 'fa-hand-spock-o'; break;
			case 'password recover': this.icon = 'fa-life-saver'; break;


			default:
				console.log(`case '${this.icon.toLowerCase()}': this.icon = '${this.icon.toLowerCase()}'; break;`);
				this.icon = 'fa-remove';
				// https://ficons.fiction.com/reference.html
				break;
		}
	}

	private setSize(): void {
		switch (this.size) {
			case "1": this.faSize = "fa-lg"; break;
			case "2": this.faSize = "fa-2x"; break;
			case "3": this.faSize = "fa-3x"; break;
			case "4": this.faSize = "fa-4x"; break;
			default: this.faSize = ""; break;
		}
	}
}
