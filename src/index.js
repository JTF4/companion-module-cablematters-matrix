import { InstanceBase, runEntrypoint } from '@companion-module/base'

import { actions } from './actions.js'
import { presets } from './presets.js'
import { variables } from './variables.js'
import { feedbacks } from './feedbacks.js'
import { configs } from './configs';

class BoilerPlateInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		Object.assign(this, {
			...configs,
			...actions,
			...presets,
			...variables,
			...feedbacks
		})

		this.updateVariables = updateVariables
	}

	async init(config) {
		this.config = config
		this.updateStatus('connecting')

		this.POLLING_INTERVAL = null //used to poll the device every second
		this.CONNECTED = false //used for friendly notifying of the user that we have not received data yet

		this.initConnection()

		this.initActions()
		this.initFeedbacks()
		this.initVariables()
		this.initPresets()

		this.updateVariables()
		this.checkFeedbacks()
	}

	async destroy() {
		if (this.udp !== undefined) {
			this.udp.destroy()
			delete this.udp
		}

		if (this.POLLING_INTERVAL) {
			clearInterval(this.POLLING_INTERVAL)
			this.POLLING_INTERVAL = null
		}
	}

	async configUpdated(config) {
		this.config = config

		this.updateStatus('connecting')

		if (this.POLLING_INTERVAL) {
			clearInterval(this.POLLING_INTERVAL)
			this.POLLING_INTERVAL = null
		}

		this.initConnection()

		this.initActions()
		this.initFeedbacks()
		this.initVariables()
		this.initPresets()

		this.updateVariables()
		this.checkFeedbacks()
	}

	initVariables() {
		const variables = this.getVariables()
		this.setVariableDefinitions(variables)
	}

	initFeedbacks() {
		const feedbacks = this.getFeedbacks()
		this.setFeedbackDefinitions(feedbacks)
	}

	initPresets() {
		const presets = this.getPresets()
		this.setPresetDefinitions(presets)
	}

	initActions() {
		const actions = this.getActions()
		this.setActionDefinitions(actions)
	}

	initConnection() {
		if (this.config.host !== undefined) {

			setTimeout(this.checkConnection.bind(this), 10000)

			this.socket.on('data', (data) => {
				this.updateStatus('ok')

				this.CONNECTED = true
				this.setVariableValues({ connection: 'Connected' })
				if (!this.POLLING_INTERVAL && this.config.polling) {
					this.setupInterval()
				}
			})
		}
	}

	checkConnection() {
		if (!this.CONNECTED) {
			this.updateStatus('connection_failure')
			this.setVariableValues({ connection: 'Error' })
		}
	}

	setupInterval() {
		this.stopInterval()

		if (this.config.polling) {
			this.POLLING_INTERVAL = setInterval(this.getInformation.bind(this), 1000)
		}
	}

	stopInterval() {
		if (this.POLLING_INTERVAL !== null) {
			clearInterval(this.POLLING_INTERVAL)
			this.POLLING_INTERVAL = null
		}
	}
}
runEntrypoint(BoilerPlateInstance, [])
