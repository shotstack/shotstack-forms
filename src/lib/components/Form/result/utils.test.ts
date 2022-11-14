import { copyToClipboardAndAlert } from './utils';

Object.assign(navigator, {
	clipboard: {
		writeText: jest.fn()
	}
});

Object.assign(window, {
	alert: jest.fn()
});

describe('result/utils', () => {
	it('Should copy the results to the clipboard, then call window alert', () => {
		const template = { merge: [] };
		jest.spyOn(navigator.clipboard, 'writeText');
		jest.spyOn(window, 'alert');
		copyToClipboardAndAlert(template);
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith(JSON.stringify(template));
		expect(window.alert).toHaveBeenCalledTimes(1);
	});
});
