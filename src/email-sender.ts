export class EmailSender {
    body:string
    recipients: string[];
    constructor (){
        this.body = "";
        this.recipients = [];
    }
    setBody(body: string){
        this.body = body
    }

    setRecipients(recipients: string[]){
        this.recipients = recipients;
    }
    async send(){
        return new Promise((resolve, reject) => {
            if(this.recipients.length === 0){
                reject(new Error("Recipients must be greater than zero"))
            }else {
                    this.recipients = [];
                    setTimeout(() => resolve("Sent!"), 200)
            }
        });
    }
}