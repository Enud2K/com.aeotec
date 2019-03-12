'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class AeotecTriSensorDevice extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('alarm_motion', 'SENSOR_BINARY');
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');
	}
}

module.exports = AeotecTriSensorDevice;
