import { combineRgb } from '@companion-module/base';

export function getPresets() {
	let presets = {};

	const ColorWhite = combineRgb(255, 255, 255);
	const ColorBlack = combineRgb(0, 0, 0);
	const ColorRed = combineRgb(200, 0, 0);
	const ColorGreen = combineRgb(0, 200, 0);

	for (let i = 1; i <= this.OUTPUTS; i++) {
		for (let x = 1; x <= this.INPUTS; x++) {
			presets[`outpu${i}>input${x}`] = {
				type: 'button',
				category: 'Routing',
				name: 'Set Crosspoint',
				style: {
					style: 'text',
					text: `Output ${i} > Input ${x}`,
					size: '14',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'setCrosspoint',
								options: {
									input: x,
									output: i,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'crosspoint',
						options: {
							input: x,
							output: i,
						},
						style: {
							color: ColorWhite,
							bgcolor: ColorRed,
						},
					},
				],
			};
		}
	}

	presets[`beepOn`] = {
		type: 'button',
		category: 'Settings',
		name: 'Beep On',
		style: {
			style: 'text',
			text: `Beep On`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'enableBeep',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	};

	presets[`beepOf`] = {
		type: 'button',
		category: 'Settings',
		name: 'Beep Off',
		style: {
			style: 'text',
			text: `Beep Off`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'disableBeep',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	};

	return presets;
}
