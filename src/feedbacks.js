import { combineRgb } from '@companion-module/base';

export function getFeedbacks() {
	const feedbacks = {};

	const foregroundColor = combineRgb(255, 255, 255); // White
	const backgroundColorYellow = combineRgb(255, 255, 0); // Yellow

	feedbacks.crosspoint = {
		type: 'boolean',
		name: 'Crosspoint Route',
		description: 'Indicate when desired crosspoint route is set',
		defaultStyle: {
			color: foregroundColor,
			bgcolor: backgroundColorYellow,
		},
		options: [
			{
				type: 'dropdown',
				label: 'Output',
				id: 'output',
				default: '1',
				choices: [
					{ id: '1', label: 'Output 1' },
					{ id: '2', label: 'Output 2' },
					{ id: '3', label: 'Output 3' },
					{ id: '4', label: 'Output 4' },
				],
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'input',
				default: '1',
				choices: [
					{ id: '1', label: 'Input 1' },
					{ id: '2', label: 'Input 2' },
					{ id: '3', label: 'Input 3' },
					{ id: '4', label: 'Input 4' },
				],
			},
		],
		callback: (feedback) => {
			let opt = feedback.options;

			if (this.DEVICEINFO?.outputs[opt.output] == opt.input) {
				return true;
			}
		},
	};

	return feedbacks;
}
