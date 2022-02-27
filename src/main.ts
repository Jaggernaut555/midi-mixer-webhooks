import { ButtonType } from "midi-mixer-plugin";
import axios from "axios";

let settings: Record<string, any>;
let url: string;
let payload: string;

const sendButton = new ButtonType("SendButton", {
  name: "Send Webhook",
  active: true,
});

sendButton.on("pressed", async () => {
  console.log("pressed");
  await axios.post(url, JSON.parse(payload))
  .then((response: any) => {
    console.log(response);
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error");
  })
});

async function init() {
  settings = await $MM.getSettings();

  url = settings["WebhookURL"];
  payload = settings["WebhookPayload"];
}

init();
