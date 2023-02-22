import { Regex } from '@companion-module/base';

export function getConfigFields() {
	return [
		{
			type: 'static-text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module controls Cable Matters 4x4 HDMI Matrix',
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'IP Address',
			width: 6,
			required: true,
			regex: Regex.IP,
		},
		{
			type: 'checkbox',
			id: 'polling',
			label: 'Polling (Required for Variables/Feedback)',
			default: true,
		},
		{
			type: 'checkbox',
			id: 'enableCustomPollRate',
			label: 'Enable Custom Polling Rate (May Shorten LCD Backlight Life)',
			default: false,
			isVisible: (config) => {
				if(config.polling == true) {
					return true;
				} else return false;
			}
		},
		{
			type: 'textinput',
			id: 'customPollRate',
			label: 'Poll Rate',
			width: 4,
			regex: Regex.NUMBER,
			default: '10000',
			required: true,
			isVisible: (config) => {
				if(config.enableCustomPollRate == true) {
					return true;
				} else return false;
			}
		},
	];
}
