export function getVariables() {
	const variables = []

	variables.push({ variableId: 'connection', name: 'Connection' })

	variables.push({ variableId: 'model', name: 'Model' })
	variables.push({ variableId: 'name', name: 'Unit Name' })
	variables.push({ variableId: 'firmware', name: 'Firmware Version' })

	variables.push({ variableId: 'display', name: 'Current Display on Clock' })
	variables.push({ variableId: 'display_mode', name: 'Display Mode' })
	variables.push({ variableId: 'timer_state', name: 'Timer State' })

	return variables
}

export function updateVariables() {
	try {
		this.setVariableValues({
			connection: this.DEVICEINFO.connection,
			model: this.DEVICEINFO.model,
			name: this.DEVICEINFO.name,
			firmware: this.DEVICEINFO.firmware,
			display: this.DEVICEINFO.display,
			display_mode: this.DEVICEINFO.displayModeFriendly,
			timer_state: this.DEVICEINFO.timerStateFriendly,
		})
	} catch (error) {}
}
