let phoneTemplate = '(###) ###-####';
let element = document.querySelector('input');
element.addEventListener('change', () => formatPhoneNumbers(element, phoneTemplate, '#'));

/*
 *  This function should be invoked on an event listener
 *  placed on the element passed as the argument.
 * 
 *	@param DOM element
 */
function formatPhoneNumbers(element, template, digitChar = '#') {
	let phoneNumber = element.value.replace(/[^\d]/g, '');
	let phoneTemplateArray = template.split('');
	let phoneNumberArray = phoneNumber.split('');
	let newArray = [];
	for (let i = 0; i < phoneTemplateArray.length; i++) {
		if (phoneTemplateArray[i] === digitChar && phoneNumberArray[0]) {
			newArray.push(phoneNumberArray[0]);
			phoneNumberArray.shift();
		} else if (phoneTemplateArray[i] !== digitChar && phoneNumberArray[0]) {
			newArray.push(phoneTemplateArray[i]);
		}
	}
	element.value = newArray.join('');
}