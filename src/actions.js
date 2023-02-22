export function getActions() {
	let actions = {
		enableBeep: {
			name: 'Enable Beep',
			options: [],
			callback: (action) => {
				this.setBeep(true);
			},
		},

		disableBeep: {
			name: 'Disable Beep',
			options: [],
			callback: (action) => {
				this.setBeep(false);
			},
		},

		setCrosspoint: {
			name: 'Set Crosspoint',
			options: [
				{
					type: 'dropdown',
					label: 'Output',
					id: 'output',
					default: '1',
					choices: [
						{ id: '1', label: '1' },
						{ id: '2', label: '2' },
						{ id: '3', label: '3' },
						{ id: '4', label: '4' },
					],
				},
				{
					type: 'dropdown',
					label: 'Input',
					id: 'input',
					default: '1',
					choices: [
						{ id: '1', label: '1' },
						{ id: '2', label: '2' },
						{ id: '3', label: '3' },
						{ id: '4', label: '4' },
					],
				},
			],
			callback: (action) => {
				this.setCrosspoint(action.options.output, action.options.input);
			},
		},
	};
	return actions;
}
