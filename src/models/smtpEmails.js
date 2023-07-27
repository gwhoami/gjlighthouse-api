const Sib = require('sib-api-v3-sdk');
module.exports = class SendEmails {
    constructor() {}

    async sendAccountEmail(passreq) {
        return new Promise((res, rej)=> {
            const tranEmailApi = new Sib.TransactionalEmailsApi();
            const sender = {
                email: 'info@gwhoami.com',
                name: 'GWhoami Admin',
            };
            const receivers = [{email: passreq.userName}]
            tranEmailApi.sendTransacEmail({
                sender,to: receivers,
                subject: 'Welcome to GWhoami',
                htmlContent:`
                <p>Hello {name},</p>
                <p>Welcome to GWhoami. Your account successfully created.</p>
                <p>Your User Id : <strong>{accountId}</strong></p>
                <p>Your User Name: {email}</p>
                <p>Thanks,<br />
                GWhoami Admin</p>`,
                params: {name: `${passreq.firstName} ${passreq.lastName}`, accountId: passreq.accountId, email: passreq.userName},
            }).then(res('success')).catch(res('error'));
        });
    }

    async sendForgotPassword(URL, name, email) {
        return new Promise((res, rej)=> {
            const tranEmailApi = new Sib.TransactionalEmailsApi();
            const sender = {
                email: 'info@gwhoami.com',
                name: 'GWhoami Admin',
            };
            const receivers = [{email}]
            // tranEmailApi.sendTransacEmail({
            //     sender,to: receivers,
            //     subject: 'GWhoami - Forgot Password',
            //     htmlContent:`<html><body>
            //     <p>Hello {{fullname}},</p>
            //     <p>We have received a request to reset your password. To reset your password please click on the following link in the browser-<br/><br/><a href="{links}">{{links}}</a></p>
            //     <p>Thanks,<br />
            //     GWhoami Admin</p></body></html>`,
            //     params: {fullname: name, links: URL},
            // }).then(res('success')).catch(res('error'));
            tranEmailApi.sendTransacEmail({
                sender,to: receivers,
                subject: 'GWhoami - Forgot Password',
                htmlContent:`<html><body>
                <p>Hello ${name},</p>
                <p>We have received a request to reset your password. To reset your password please click on the following link in the browser-<br/><br/><a href=">${URL}" target="_blank">${URL}</a></p>
                <p>Thanks,<br />
                GWhoami Admin</p></body></html>`,
            }).then(res('success')).catch(res('error'));
            // tranEmailApi.sendTransacEmail({
            //     sender,to: receivers,
            //     subject: 'GWhoami - Forgot Password',
            //     htmlContent:'<html><body><a href="https://www.google.com">Test</a></body></html>',
            // }).then(res('success')).catch(res('error'));
        });
    }
};