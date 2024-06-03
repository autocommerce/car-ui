import * as emailjs from '@emailjs/browser';

const accountId = process.env.EMAILJS_ACCOUNT_ID || 'defaultAccountId';
const serviceId = process.env.EMAILJS_SERVICE_ID || 'defaultServiceId';
const templateId = process.env.EMAILJS_TEMPLATE_ID || 'defaultTemplateId';

/* eslint-disable */
export default function sendEmail(params: any): Promise<any> {
    emailjs.init(accountId);
    return emailjs.send(serviceId, templateId, params);
}
