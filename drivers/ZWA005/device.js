'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class AeotecTriSensorDevice extends ZwaveDevice {

	onMeshInit() {
		this._cancellationTimeout = this.getSetting('tamper_cancellation');

		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('alarm_motion', 'SENSOR_BINARY');
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');

		// todo: what is this buffer?
		this.registerSetting('201', (value) => {
			return new Buffer([Math.round(value*10), 1]);
		});
	}
}

module.exports = AeotecTriSensorDevice;
