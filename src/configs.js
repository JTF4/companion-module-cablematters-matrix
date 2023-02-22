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
			width: 4,
			regex: Regex.IP,
		},
		{
			type: 'checkbox',
			id: 'polling',
			label: 'Polling (Required for Variables/Feedback)',
			default: true,
		},
	];
}
