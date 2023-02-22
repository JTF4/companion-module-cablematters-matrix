import { InstanceBase, runEntrypoint, TCPHelper, Regex } from '@companion-module/base';

import * as actions from './actions.js';
import * as presets from './presets.js';
import * as variables from './variables.js';
import * as feedbacks from './feedbacks.js';
import * as configs from './configs.js';
import * as actionFunctions from './actionsFunctions.js';
import * as utils from './utils.js';

class CableMattersInstance extends InstanceBase {
	constructor(internal) {
		super(internal);

		Object.assign(this, {
			...configs,
			...actions,
			...actionFunctions,
			...presets,
			...variables,
			...feedbacks,
			...utils,
		});

		//this.updateVariables = updateVariables

		this.init(this.getConfigFields());
	}

	async init(config) {
		this.config = config;
		this.updateStatus('connecting');

		this.POLLING_INTERVAL = null; //used to poll the device every second
		this.CONNECTED = false; //used for friendly notifying of the user that we have not received data yet
		this.OUTPUTS = 4;
		this.INPUTS = 4;

		this.DEVICEINFO = {
			outputs: {},
			inputs: {},
			EDID: {},
		};

		this.initConnection();

		this.initActions();
		this.initFeedbacks();
		this.initVariables();
		this.initPresets();

		this.updateVariables();
		this.checkFeedbacks();
	}

	async destroy() {
		if (this.socket !== undefined) {
			this.socket.destroy();
			delete this.socket;
		}

		if (this.POLLING_INTERVAL) {
			clearInterval(this.POLLING_INTERVAL);
			this.POLLING_INTERVAL = null;
		}
	}

	async configUpdated(config) {
		this.config = config;

		this.updateStatus('connecting');

		if (this.POLLING_INTERVAL) {
			clearInterval(this.POLLING_INTERVAL);
			this.POLLING_INTERVAL = null;
		}

		this.initConnection();

		this.initActions();
		this.initFeedbacks();
		this.initVariables();
		this.initPresets();

		this.updateVariables();
		this.checkFeedbacks();
	}

	initVariables() {
		const variables = this.getVariables();
		this.setVariableDefinitions(variables);
	}

	initFeedbacks() {
		const feedbacks = this.getFeedbacks();
		this.setFeedbackDefinitions(feedbacks);
	}

	initPresets() {
		const presets = this.getPresets();
		this.setPresetDefinitions(presets);
	}

	initActions() {
		const actions = this.getActions();
		this.setActionDefinitions(actions);
	}

	initConnection() {
		if (this.config.host !== undefined) {
			this.socket = new TCPHelper(this.config.host, 23);

			setTimeout(this.checkConnection.bind(this), 10000);

			this.socket.on('data', (data) => {
				this.updateStatus('ok');

				this.CONNECTED = true;
				this.setVariableValues({ connection: 'Connected' });
				if (!this.POLLING_INTERVAL && this.config.polling) {
					this.setupInterval();
				}

				this.processData(data);
			});

			this.socket.on('error', (err) => {
				this.CONNECTED = false;
			});
		}
	}

	checkConnection() {
		if (!this.CONNECTED) {
			this.updateStatus('connection_failure');
			this.setVariableValues({ connection: 'Error' });
		}
	}

	setupInterval() {
		this.stopInterval();

		if (this.config.polling) {
			this.getInformation();
			this.POLLING_INTERVAL = setInterval(this.getInformation.bind(this), 300000);
		}
	}

	getInformation() {
		let i = 1;
		let self = this;

		while (i <= self.OUTPUTS) {
			loop(i);
			i++;
		}

		function loop(i) {
			setTimeout(function () {
				self.fetchOutputData(i);
			}, 500 * i);
		}
	}

	stopInterval() {
		if (this.POLLING_INTERVAL !== null) {
			clearInterval(this.POLLING_INTERVAL);
			this.POLLING_INTERVAL = null;
		}
	}
}
runEntrypoint(CableMattersInstance, []);
