import { EmailSender } from "../src/email-sender"

let emailSender: EmailSender;

beforeAll(() => {
    emailSender = new EmailSender();
})

it("Get Email Sender" ,() =>{
    expect(emailSender).toBeDefined();
} )
it("Compose Email", () =>{
    emailSender.setBody("My new Email");
    expect(emailSender.body).not.toEqual("")
    expect(emailSender.body).toEqual("My new Email")
})
it("Send Email", async () =>{
    emailSender.setRecipients(["my@email.com"]);
    const result = await emailSender.send();
    expect(result).toEqual("Sent!")
})
it("Send Email: Fail", async() => {
    await expect(() => emailSender.send()).rejects.toThrow("Recipients must be greater than zero");
})