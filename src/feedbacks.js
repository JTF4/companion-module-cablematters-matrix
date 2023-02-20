import { combineRgb } from '@companion-module/base'

export function getFeedbacks() {
	const feedbacks = {}

	const foregroundColor = combineRgb(255, 255, 255) // White
	const backgroundColorRed = combineRgb(255, 0, 0) // Red

	feedbacks.displayMode = {
		type: 'boolean',
		name: 'Display Mode',
		description: 'Indicate current display mode',
		defaultStyle: {
			color: foregroundColor,
			bgcolor: backgroundColorRed,
		},
		options: [
			{
				type: 'dropdown',
				label: 'Display Mode',
				id: 'mode',
				default: 'countup',
				choices: [
					{ id: 'timeofday', label: 'Time of Day' },
					{ id: 'countup', label: 'Count Up' },
					{ id: 'countdown', label: 'Count Down' },
				],
			},
		],
		callback: (feedback) => {
			let opt = feedback.options

			if (this.thing == opt.mode) {
				return true
			}
		},
	}

	return feedbacks
}
