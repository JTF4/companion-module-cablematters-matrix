import commands from './commands.js';

export function getChecksum(input) {
	console.log(1);

	let inputBuf = input;
	let checkBuf = 0x100;

	let checksum = checkBuf - inputBuf;

	console.log(2);

	let cmd = inputBuf.toString(16) + checksum.toString(16);

	console.log(checksum.toString(16));

	console.log(3);

	let hex = Buffer.from(cmd, 'hex');

	console.log(input, inputBuf, checkBuf, checksum.toString(16), cmd, hex);

	return hex;
}

export function fetchOutputData(output) {
	let outputHex = parseInt(output).toString(16).padStart(2, '0');
	let cmdRaw = `a55b0201${outputHex}00000000000000`;

	let hexAdded = 0xa5 + 0x5b + 0x02 + 0x01 + output + 0x00 + 0x00 + 0x00 + 0x00 + 0x00 + 0x00 + 0x00;

	let checksumByte = 0x100;

	let checksum = (checksumByte - hexAdded) & 0xff;

	let cmd = cmdRaw + checksum.toString(16);

	let buf = Buffer.from(cmd, 'hex');

	this.socket.send(buf);
}

export function processData(data) {
	data = data.toString('hex');

	let dataStripStart = data.substring(4);

	let command = dataStripStart.slice(0, 4);

	switch (command) {
		// Output Information
		case commands.getOutput.string:
			let output = dataStripStart.slice(5, 6);
			let input = dataStripStart.slice(9, 10);
			this.DEVICEINFO.outputs[output] = input;
			break;
	}

	this.updateVariables();
	this.checkFeedbacks();
}
