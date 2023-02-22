export function getVariables() {
	const variables = [];

	variables.push({ variableId: 'connection', name: 'Connection' });

	for (let i = 1; i <= this.OUTPUTS; i++) {
		variables.push({ variableId: `output` + i, name: `Output ` + i });
	}

	return variables;
}

export function updateVariables() {
	try {
		let variableObj = {
			connection: this.DEVICEINFO.connection,
		};

		for (let i = 1; i <= this.OUTPUTS; i++) {
			variableObj[`output${i}`] = this.DEVICEINFO.outputs[i];
		}

		this.setVariableValues(variableObj);
	} catch (error) {}
}
