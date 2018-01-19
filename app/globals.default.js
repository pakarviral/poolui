'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "semiPOOL.com",
		api_url : 'http://pool.aeon.semipool.com/api',
		api_refresh_interval: 2000,
		app_update_interval: 30*60000
	};
});
