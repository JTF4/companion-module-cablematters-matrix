export function setBeep(bool) {
	// 13 Byte Package

	let cmdRaw;

	if (bool == true) {
		cmdRaw = `A55B06010f00000000000000EA`;
	} else if (bool == false) {
		cmdRaw = `A55B0601f00000000000000009`;
	}

	let buf = Buffer.from(cmdRaw, 'hex');

	console.log(buf);

	this.socket.send(buf);

	this.getInformation();
}

export function setCrosspoint(output, input) {
	// 13 Byte Package
	//'a55b0203input port(1~4)00output port(1~4)0000000000'
	let inputHex = parseInt(input).toString(16).padStart(2, '0');
	let outputHex = parseInt(output).toString(16).padStart(2, '0');
	let cmdRaw = `A55B0203${inputHex}00${outputHex}0000000000`;

	let hexAdded =
		0xa5 + 0x5b + 0x02 + 0x03 + parseInt(input) + 0x00 + parseInt(output) + 0x00 + 0x00 + 0x00 + 0x00 + 0x00;

	let checksumByte = 0x100;

	let checksum = (checksumByte - hexAdded) & 0xff;

	let cmd = cmdRaw + checksum.toString(16);

	let buf = Buffer.from(cmd, 'hex');

	this.socket.send(buf);

	this.getInformation();
}
