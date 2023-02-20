import { combineRgb } from '@companion-module/base'

export function getPresets() {
	let presets = {}

	const ColorWhite = combineRgb(255, 255, 255)
	const ColorBlack = combineRgb(0, 0, 0)
	const ColorRed = combineRgb(200, 0, 0)
	const ColorGreen = combineRgb(0, 200, 0)

	presets['displayValue'] = {
		type: 'button',
		category: 'Clock Display',
		name: 'Show Display Value',
		style: {
			style: 'text',
			text: '$(tm-clock:display)',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['showTimeOfDay'] = {
		type: 'button',
		category: 'Clock Mode',
		name: 'Show Time of Day',
		style: {
			style: 'text',
			text: 'Show Time of Day',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'showTimeOfDay',
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'displayMode',
				options: {
					mode: 'timeofday',
				},
				style: {
					color: ColorWhite,
					bgcolor: ColorGreen,
				},
			},
		],
	}

	presets['countUpTimerMode'] = {
		type: 'button',
		category: 'Clock Mode',
		name: 'Show Count-Up Timer',
		style: {
			style: 'text',
			text: 'Show Count-Up',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'countUpTimerMode',
						options: {
							mode: 'sec',
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'displayMode',
				options: {
					mode: 'countup',
				},
				style: {
					color: ColorWhite,
					bgcolor: ColorGreen,
				},
			},
		],
	}

	presets['countDownTimerMode'] = {
		type: 'button',
		category: 'Clock Mode',
		name: 'Show Countdown Timer',
		style: {
			style: 'text',
			text: 'Show Count Down',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'countDownTimerMode',
						options: {
							mode: 'sec',
							hours: 0,
							minutes: 30,
							seconds: 0,
							tseconds: 0,
							alarmEnable: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'displayMode',
				options: {
					mode: 'countdown',
				},
				style: {
					color: ColorWhite,
					bgcolor: ColorGreen,
				},
			},
		],
	}

	presets['controlCountUpTimer'] = {
		type: 'button',
		category: 'Count-Up Timer',
		name: 'Control Count-Up Timer',
		style: {
			style: 'text',
			text: '$(tm-clock:display)\\n$(tm-clock:timer_state)',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'startCountUpTimer',
					},
				],
				up: [
					{
						actionId: 'pauseCountUpTimer',
					},
				],
			},
		],
		feedbacks: [
			{
				feedbackId: 'timerState',
				options: {
					mode: 'countup',
					state: 'running',
				},
				style: {
					color: ColorWhite,
					bgcolor: ColorGreen,
				},
			},
			{
				type: 'timerState',
				options: {
					mode: 'countup',
					state: 'stopped',
				},
				style: {
					color: ColorWhite,
					bgcolor: ColorRed,
				},
			},
		],
	}

	presets['startCountUpTimer'] = {
		type: 'button',
		category: 'Count-Up Timer',
		name: 'Start Count-Up Timer',
		style: {
			style: 'text',
			text: 'Start Count-Up Timer',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'startCountUpTimer',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['pauseCountUpTimer'] = {
		type: 'button',
		category: 'Count-Up Timer',
		name: 'Pause Count-Up Timer',
		style: {
			style: 'text',
			text: 'Pause Count-Up Timer',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'pauseCountUpTimer',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['resetCountUpTimer'] = {
		type: 'button',
		category: 'Count-Up Timer',
		name: 'Reset Count-Up Timer',
		style: {
			style: 'text',
			text: 'Reset Count-Up Timer',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'resetCountUpTimer',
						options: {
							mode: 'sec',
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['controlCountDownTimer'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: 'Control Countdown Timer',
		style: {
			style: 'text',
			text: '$(tm-clock:display)\\n$(tm-clock:timer_state)',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'startCountDownTimer',
					},
				],
				up: [
					{
						actionId: 'pauseCountDownTimer',
					},
				],
			},
		],
		feedbacks: [
			{
				feedbackId: 'timerState',
				options: {
					mode: 'countdown',
					state: 'running',
				},
				style: {
					color: ColorWhite,
					bgcolor: ColorGreen,
				},
			},
			{
				type: 'timerState',
				options: {
					mode: 'countdown',
					state: 'stopped',
				},
				style: {
					color: ColorWhite,
					bgcolor: ColorRed,
				},
			},
		],
	}

	presets['startCountDownTimer'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: 'Start Countdown Timer',
		style: {
			style: 'text',
			text: 'Start Count Down',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'startCountDownTimer',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['pauseCountDownTimer'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: 'Pause Countdown Timer',
		style: {
			style: 'text',
			text: 'Pause Count Down',
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'pauseCountDownTimer',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['start1minCountdown'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: `Start 1m Countdown`,
		style: {
			style: 'text',
			text: `Start 1m Count Down`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'countDownTimerMode',
						options: {
							mode: 'sec',
							hours: 0,
							minutes: 1,
							seconds: 0,
							tseconds: 0,
							alarmEnable: false,
						},
					},
					{
						actionId: 'startCountDownTimer',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	for (let i = 5; i <= 30; i = i + 5) {
		presets[`start${[i]}minCountdown`] = {
			type: 'button',
			category: 'Countdown Timer',
			name: `Start ${[i]}m Countdown`,
			style: {
				style: 'text',
				text: `Start ${[i]}m Count Down`,
				size: '14',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'countDownTimerMode',
							options: {
								mode: 'sec',
								hours: 0,
								minutes: i,
								seconds: 0,
								tseconds: 0,
								alarmEnable: false,
							},
						},
						{
							actionId: 'startCountDownTimer',
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	}

	presets['start1hCountdown'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: `Start 1h Countdown`,
		style: {
			style: 'text',
			text: `Start 1h Count Down`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'countDownTimerMode',
						options: {
							mode: 'sec',
							hours: 1,
							minutes: 0,
							seconds: 0,
							tseconds: 0,
							alarmEnable: false,
						},
					},
					{
						actionId: 'startCountDownTimer',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['add30sToTimer'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: `Add 30s to Timer`,
		style: {
			style: 'text',
			text: `Add 30s to Timer`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'increaseTimerWhileRunning',
						options: {
							hours: 0,
							minutes: 0,
							seconds: 30,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['add1mToTimer'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: `Add 1m to Timer`,
		style: {
			style: 'text',
			text: `Add 1m to Timer`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'increaseTimerWhileRunning',
						options: {
							hours: 0,
							minutes: 1,
							seconds: 0,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets['add5mToTimer'] = {
		type: 'button',
		category: 'Countdown Timer',
		name: `Add 5m to Timer`,
		style: {
			style: 'text',
			text: `Add 5m to Timer`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'increaseTimerWhileRunning',
						options: {
							hours: 0,
							minutes: 5,
							seconds: 0,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	for (let i = 0; i <= 9; i++) {
		presets[`executeProgram${[i]}`] = {
			type: 'button',
			category: 'Stored Programs',
			name: `Execute Program ${[i]}`,
			style: {
				style: 'text',
				text: `EXEC PROG\\n${i}`,
				size: '14',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'executeStoredProgram',
							options: {
								program: i,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	}

	presets['relayControl'] = {
		type: 'button',
		category: 'Relay Control',
		name: `Close Relay for 1 second`,
		style: {
			style: 'text',
			text: `Close Relay\\n1 sec`,
			size: '14',
			color: ColorWhite,
			bgcolor: ColorBlack,
		},
		steps: [
			{
				down: [
					{
						actionId: 'relayControl',
						options: {
							seconds: '1',
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	for (let i = 0; i <= 100; i = i + 10) {
		presets[`displayBrightness${i}`] = {
			type: 'button',
			category: 'Display Brightness',
			name: `Set Display Brightness to ${i}%`,
			style: {
				style: 'text',
				text: `${i}%`,
				size: '14',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'displayBrightness',
							options: {
								digit: i,
								dot: i,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	}

	for (let i = 0; i < this.COLORTABLE.length; i++) {
		presets[`displayColors${this.COLORTABLE[i].label}`] = {
			type: 'button',
			category: 'Display Colors',
			name: `Set Display Color to ${this.COLORTABLE[i].label}`,
			style: {
				style: 'text',
				text: `${this.COLORTABLE[i].label}`,
				size: '14',
				color: this.ColorBlack,
				bgcolor: combineRgb(this.COLORTABLE[i].r, this.COLORTABLE[i].g, this.COLORTABLE[i].b),
			},
			steps: [
				{
					down: [
						{
							actionId: 'displayColors',
							options: {
								color_mmss: this.COLORTABLE[i].id,
								color_hh: this.COLORTABLE[i].id,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	}

	return presets
}
