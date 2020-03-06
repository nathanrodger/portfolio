/* Email builder */

/**
* Used to build out the mailto link, where the href is equal to the word email.
* This is to add a first line of defense against bots.
*/

const user = 'nathanrodger';
const domain = 'hotmail.co.uk';

const element = document.querySelectorAll('a[href="email"]');
element[0].setAttribute('href', `mailto:${ user }@${ domain }`);